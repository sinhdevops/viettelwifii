"use client";

import { Phone, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;
const zalo = process.env.NEXT_PUBLIC_ZALO_URL;

export function FloatingContact() {
  if (!phone && !zalo) return null;
  return <>
    {/* Reserve scroll space so the final content is reachable above the fixed buttons. */}
    <div aria-hidden="true" className="h-36" />
    <nav aria-label="Liên hệ nhanh" className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex flex-col gap-3">
    {phone && <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} onClick={() => trackEvent("contact_phone_click", { page_path: window.location.pathname })} className="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-emerald-600 p-3 text-white shadow-lg" aria-label="Gọi điện"><Phone /></a>}
    {zalo && <a href={zalo} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("contact_zalo_click", { page_path: window.location.pathname })} className="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-blue-600 p-3 text-white shadow-lg" aria-label="Mở Zalo"><MessageCircle /></a>}
    </nav>
  </>;
}
