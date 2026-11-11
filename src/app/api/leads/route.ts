import { after, NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { getPage } from "@/lib/server/page-repository";
import { siteConfig } from "@/lib/site-config";
import { getLeadPrivacyConfig } from "./_lib/privacy-config";
import {
  leadStoreConfigured,
  saveLead,
  setLeadNotificationStatus,
} from "@/lib/server/lead-store";
import {
  broadbandPlans,
  cameraPlans,
  comboPlans,
  meshPlans,
  televisionPlans,
  ultraSpeedPlans,
} from "@/features/collections/internet/internet-data";

const internetCollectionCodes = new Set(
  [
    ...broadbandPlans,
    ...cameraPlans,
    ...comboPlans,
    ...meshPlans,
    ...televisionPlans,
    ...ultraSpeedPlans,
  ].map((plan) => plan.code),
);

const allowedAttribution = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
]);
const maxBodyBytes = 12000;

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

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  let originAllowed = true;
  try {
    if (origin) {
      const requestOrigin = new URL(origin).origin;
      const deploymentOrigin = process.env.VERCEL_URL
        ? new URL(`https://${process.env.VERCEL_URL}`).origin
        : null;
      const localPreview =
        process.env.NODE_ENV !== "production" &&
        ["localhost", "127.0.0.1", "[::1]"].includes(
          new URL(req.url).hostname,
        ) &&
        requestOrigin === new URL(req.url).origin;
      originAllowed =
        requestOrigin === siteConfig.origin ||
        (requestOrigin === deploymentOrigin &&
          requestOrigin === new URL(req.url).origin) ||
        localPreview;
    }
  } catch {
    originAllowed = false;
  }
  if (!originAllowed || req.headers.get("sec-fetch-site") === "cross-site") {
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
      { status: 503, headers: { "Cache-Control": "no-store, max-age=0" } },
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
      { status: 409, headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  }
  const sourcePage = getPage(lead.pagePath);
  const productPage = getPage(lead.itemId);
  const isReadyProduct =
    productPage &&
    productPage.status === "ready" &&
    (productPage.kind === "package" || productPage.kind === "internet") &&
    productPage.product?.id === lead.itemId;
  const isOwnDetail =
    lead.pagePath === lead.itemId && sourcePage?.product?.id === lead.itemId;
  const isReferencedCard = sourcePage?.sections.some(
    (section) =>
      section.type === "cards" &&
      section.cards.some((card) => card.productId === lead.itemId),
  );
  const isInternetCollectionCard =
    lead.pagePath === "/internet" &&
    sourcePage?.kind === "collection" &&
    productPage?.kind === "internet" &&
    lead.itemId.startsWith("/internet/") &&
    internetCollectionCodes.has(lead.itemId.slice("/internet/".length));
  if (
    !isReadyProduct ||
    (!isOwnDetail && !isReferencedCard && !isInternetCollectionCard)
  ) {
    return NextResponse.json({ error: "invalid_item" }, { status: 400 });
  }

  const attribution = Object.entries(lead.attribution)
    .filter(([key]) => allowedAttribution.has(key))
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  const message = [
    "📥 ĐĂNG KÝ MỚI",
    `Khách: ${lead.name}`,
    `Điện thoại: ${lead.phone}`,
    `Quan tâm: ${productPage.heading} (${lead.itemId})`,
    `Ghi chú: ${lead.note || "—"}`,
    attribution && `Nguồn:\n${attribution}`,
  ]
    .filter(Boolean)
    .join("\n");
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
      { status: 503, headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  }

  after(async () => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    let notificationSent = false;
    if (token && chatId) {
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
        if (response.ok) {
          const delivered = (await response.json()) as { ok?: boolean };
          notificationSent = delivered.ok === true;
        }
      } catch {
        // The lead is durable even if Telegram is unavailable.
      }
    }
    try {
      await setLeadNotificationStatus(
        leadId,
        notificationSent ? "sent" : "failed",
      );
    } catch {
      // The saved lead remains pending if the status update fails.
    }
  });
  return NextResponse.json({ ok: true });
}
