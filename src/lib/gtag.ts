/**
 * Google Ads conversion tracking (gtag.js).
 *
 * Every value comes from NEXT_PUBLIC_ env vars, which Next inlines at build
 * time: rebuild after changing them. When the conversion ID is missing or
 * malformed the tag is not rendered and every helper here is a no-op.
 */

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

const CONVERSION_ID_PATTERN = /^AW-\d{6,15}$/;
const LABEL_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

function readId(value: string | undefined): string | null {
  const id = value?.trim();
  return id && CONVERSION_ID_PATTERN.test(id) ? id : null;
}

function readLabel(value: string | undefined): string | null {
  const label = value?.trim();
  return label && LABEL_PATTERN.test(label) ? label : null;
}

// Direct process.env access so Next can inline NEXT_PUBLIC_ values in browser bundles.
export const googleAdsConfig = {
  get conversionId(): string | null {
    return readId(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID);
  },
  get leadFormLabel(): string | null {
    return readLabel(process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL);
  },
  get contactClickLabel(): string | null {
    return readLabel(process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL);
  },
};

/**
 * Normalize a Vietnamese phone number to E.164 (+84…) for Enhanced Conversions.
 * Accepts 0xxxxxxxxx, 84xxxxxxxxx, +84xxxxxxxxx (spaces, dots, dashes and
 * brackets ignored). Returns null for anything that is not a valid VN number.
 */
export function toVietnamE164(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  let national: string;
  if (digits.startsWith("84")) national = digits.slice(2);
  else if (digits.startsWith("0")) national = digits.slice(1);
  else return null;
  if (national.startsWith("0")) national = national.slice(1);
  // VN mobile and landline subscriber numbers are 9 or 10 digits after +84.
  return /^[1-9]\d{8,9}$/.test(national) ? `+84${national}` : null;
}

function getGtag(): GtagFn | null {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return null;
  return window.gtag;
}

function sendConversion(label: string | null) {
  const gtag = getGtag();
  const id = googleAdsConfig.conversionId;
  if (!gtag || !id || !label) return;
  gtag("event", "conversion", { send_to: `${id}/${label}` });
}

/**
 * Call only after the lead API confirmed the submission. The customer's phone
 * is passed as Enhanced Conversions user data right before the conversion;
 * gtag.js normalizes and SHA-256 hashes it in the browser before sending.
 */
export function trackLeadFormConversion({ phone }: { phone?: string } = {}) {
  const gtag = getGtag();
  if (!gtag) return;
  const phoneNumber = phone ? toVietnamE164(phone) : null;
  if (phoneNumber) gtag("set", "user_data", { phone_number: phoneNumber });
  sendConversion(googleAdsConfig.leadFormLabel);
}

/** Call on a click of the hotline (tel:) link or a Zalo chat link. */
export function trackContactClickConversion() {
  sendConversion(googleAdsConfig.contactClickLabel);
}
