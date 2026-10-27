"use client";

type EventName = "contact_phone_click" | "contact_zalo_click" | "lead_submit_success";

export function trackEvent(event: EventName, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  // Only non-PII. Never send form name, phone, notes, or Telegram payload.
  const safeParams = Object.fromEntries(Object.entries(params).filter(([key]) => ["item_id", "page_path"].includes(key)));
  const dataLayer = (window as Window & { dataLayer?: Record<string, string>[] }).dataLayer;
  dataLayer?.push({ event, ...safeParams });
}
