import "server-only";
import type { NextRequest } from "next/server";
import type { PageContent } from "@/lib/content-schema";
import { formatInstallation, type ValidatedLead } from "@/lib/lead-schema";
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

export const allowedAttribution = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
]);

/** Same-site browser submissions only: the configured origin, the matching
 * Vercel deployment URL, or a local dev server talking to itself. */
export function isAllowedOrigin(req: NextRequest): boolean {
  if (req.headers.get("sec-fetch-site") === "cross-site") return false;
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    const requestOrigin = new URL(origin).origin;
    const selfOrigin = new URL(req.url).origin;
    const deploymentOrigin = process.env.VERCEL_URL
      ? new URL(
          process.env.VERCEL_URL.startsWith("https://")
            ? process.env.VERCEL_URL
            : `https://${process.env.VERCEL_URL}`,
        ).origin
      : null;
    const localPreview =
      process.env.NODE_ENV !== "production" &&
      ["localhost", "127.0.0.1", "[::1]"].includes(new URL(req.url).hostname) &&
      requestOrigin === selfOrigin;
    return (
      requestOrigin === siteConfig.origin ||
      (requestOrigin === deploymentOrigin && requestOrigin === selfOrigin) ||
      localPreview
    );
  } catch {
    return false;
  }
}

/** Resolve the product from server content; never trust the client title. */
export function resolveLeadProduct(lead: ValidatedLead): PageContent | null {
  const sourcePage = getPage(lead.pagePath);
  const productPage = getPage(lead.itemId);
  if (
    !productPage ||
    productPage.status !== "ready" ||
    (productPage.kind !== "package" && productPage.kind !== "internet") ||
    productPage.product?.id !== lead.itemId
  )
    return null;
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
    productPage.kind === "internet" &&
    lead.itemId.startsWith("/internet/") &&
    internetCollectionCodes.has(lead.itemId.slice("/internet/".length));
  return isOwnDetail || isReferencedCard || isInternetCollectionCard
    ? productPage
    : null;
}

export function buildLeadMessage(
  lead: ValidatedLead,
  productHeading: string,
): string {
  const attribution = Object.entries(lead.attribution)
    .filter(([key]) => allowedAttribution.has(key))
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  return [
    "📥 ĐĂNG KÝ MỚI",
    `Khách: ${lead.name}`,
    `Điện thoại: ${lead.phone}`,
    `Quan tâm: ${productHeading} (${lead.itemId})`,
    lead.installation && formatInstallation(lead.installation),
    `Ghi chú: ${lead.note || "—"}`,
    attribution && `Nguồn:\n${attribution}`,
  ]
    .filter(Boolean)
    .join("\n");
}

/** HMAC of the client IP so the database never stores raw addresses. */
export async function clientIpBucket(req: NextRequest): Promise<string> {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    "unknown";
  const secret =
    process.env.LEAD_RATE_LIMIT_SALT ||
    process.env.SUPABASE_SECRET_KEY ||
    "lead-rate-limit"; // HMAC rejects empty keys; storage is unconfigured anyway
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(ip),
  );
  return [...new Uint8Array(signature).slice(0, 16)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

/** "next" (default): the API sends Telegram after responding.
 * "supabase": the lead-telegram Edge Function (DB webhook) sends it. */
export function leadNotifyMode(): "next" | "supabase" {
  return process.env.LEAD_NOTIFY_MODE?.trim().toLowerCase() === "supabase"
    ? "supabase"
    : "next";
}
