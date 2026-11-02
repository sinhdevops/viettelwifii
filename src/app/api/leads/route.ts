import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { getPage } from "@/lib/server/page-repository";
import { siteConfig } from "@/lib/site-config";
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
      const localPreview =
        process.env.NODE_ENV !== "production" &&
        ["localhost", "127.0.0.1", "[::1]"].includes(
          new URL(req.url).hostname,
        ) &&
        requestOrigin === new URL(req.url).origin;
      originAllowed = requestOrigin === siteConfig.origin || localPreview;
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
  const sourcePage = getPage(lead.pagePath);
  const productPage = getPage(lead.itemId);
  const isReadyProduct =
    productPage &&
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

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const captchaSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!token || !chatId)
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  if (
    (process.env.NODE_ENV === "production" &&
      (!captchaSecret || !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)) ||
    Boolean(captchaSecret) !==
    Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)
  ) {
    return NextResponse.json(
      { error: "spam_protection_not_configured" },
      { status: 503 },
    );
  }
  if (captchaSecret) {
    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: captchaSecret,
          response: lead.turnstileToken,
        }),
        signal: AbortSignal.timeout(6000),
        cache: "no-store",
      },
    )
      .then((res) => res.json() as Promise<{ success: boolean }>)
      .catch(() => ({ success: false }));
    if (!result.success)
      return NextResponse.json({ error: "captcha_failed" }, { status: 400 });
  }

  const attribution = Object.entries(lead.attribution)
    .filter(([key]) => allowedAttribution.has(key))
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  const message = [
    "📥 ĐĂNG KÝ MỚI",
    `Khách: ${lead.name}`,
    `Điện thoại: ${lead.phone}`,
    `Quan tâm: ${productPage.title} (${lead.itemId})`,
    `Ghi chú: ${lead.note || "—"}`,
    attribution && `Nguồn:\n${attribution}`,
  ]
    .filter(Boolean)
    .join("\n");
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
    if (!response.ok)
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    const delivered = (await response.json()) as { ok?: boolean };
    if (delivered.ok !== true)
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
