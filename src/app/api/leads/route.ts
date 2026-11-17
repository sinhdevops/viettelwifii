import { after, NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { getLeadPrivacyConfig } from "./_lib/privacy-config";
import {
  guardLeadIntake,
  leadStoreConfigured,
  saveLead,
  setLeadNotificationStatus,
} from "@/lib/server/lead-store";
import {
  buildLeadMessage,
  clientIpBucket,
  isAllowedOrigin,
  leadNotifyMode,
  resolveLeadProduct,
} from "@/lib/server/lead-intake";

const maxBodyBytes = 12000;
const noStore = { "Cache-Control": "no-store, max-age=0" };

async function readBody(
  req: NextRequest,
): Promise<{ raw?: unknown; error?: "bad_json" | "payload_too_large" }> {
  const reader = req.body?.getReader();
  if (!reader) return { error: "bad_json" };
  const decoder = new TextDecoder();
  let size = 0;
  let text = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return { error: "payload_too_large" };
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
    return { raw: JSON.parse(text) as unknown };
  } catch {
    return { error: "bad_json" };
  } finally {
    reader.releaseLock();
  }
}

async function sendTelegram(message: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
        signal: AbortSignal.timeout(8000),
        cache: "no-store",
      },
    );
    if (!response.ok) return false;
    const delivered = (await response.json()) as { ok?: boolean };
    return delivered.ok === true;
  } catch {
    return false; // The lead is durable even if Telegram is unavailable.
  }
}

export async function POST(req: NextRequest) {
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ error: "invalid_origin" }, { status: 403 });
  }
  if (
    !req.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  ) {
    return NextResponse.json(
      { error: "unsupported_media_type" },
      { status: 415 },
    );
  }
  const length = Number(req.headers.get("content-length") || "0");
  if (length > maxBodyBytes)
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });

  const intakeConfig = getLeadPrivacyConfig();
  // Missing infrastructure is not a form-visibility flag. Never accept a lead
  // unless there is a durable destination, and reject before reading its body.
  if (!leadStoreConfigured()) {
    return NextResponse.json(
      { error: "lead_storage_unconfigured" },
      { status: 503, headers: noStore },
    );
  }

  const body = await readBody(req);
  if (body.error)
    return NextResponse.json(
      { error: body.error },
      { status: body.error === "payload_too_large" ? 413 : 400 },
    );
  const parsed = leadSchema.safeParse(body.raw);
  if (!parsed.success)
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  const lead = parsed.data;
  if (lead.company)
    return NextResponse.json({ error: "invalid_input" }, { status: 400 }); // honeypot, never claim delivery
  if (lead.privacyPolicyVersion !== intakeConfig.policyVersion) {
    return NextResponse.json(
      { error: "privacy_policy_version_mismatch" },
      { status: 409, headers: noStore },
    );
  }
  const productPage = resolveLeadProduct(lead);
  if (!productPage) {
    return NextResponse.json({ error: "invalid_item" }, { status: 400 });
  }

  const guard = await guardLeadIntake({
    ipBucket: await clientIpBucket(req),
    phone: lead.phone,
    itemId: lead.itemId,
  });
  if (!guard.allowed) {
    return NextResponse.json(
      { error: "rate_limited" },
      { status: 429, headers: { ...noStore, "Retry-After": "600" } },
    );
  }
  // The same phone already registered this product minutes ago: it is stored
  // and notified, so confirm without creating a duplicate row or message.
  if (guard.duplicateId) return NextResponse.json({ ok: true });

  let leadId: string;
  try {
    leadId = await saveLead(lead, productPage.heading, {
      // Do not record acceptance of a policy the Internet modal no longer shows.
      consentAt: lead.privacyConsent ? new Date().toISOString() : null,
      privacyPolicyVersion: lead.privacyConsent
        ? intakeConfig.policyVersion
        : null,
    });
  } catch {
    return NextResponse.json(
      { error: "lead_intake_unavailable" },
      { status: 503, headers: noStore },
    );
  }

  if (leadNotifyMode() === "next") {
    const message = buildLeadMessage(lead, productPage.heading);
    after(async () => {
      const notificationSent = await sendTelegram(message);
      try {
        await setLeadNotificationStatus(
          leadId,
          notificationSent ? "sent" : "failed",
        );
      } catch {
        // The saved lead remains pending if the status update fails.
      }
    });
  }
  return NextResponse.json({ ok: true });
}
