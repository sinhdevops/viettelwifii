"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  googleAdsConfig,
  toVietnamE164,
  trackContactClickConversion,
} from "@/lib/gtag";
import { siteConfig } from "@/lib/site-config";

const ZALO_HOSTS = new Set(["zalo.me", "chat.zalo.me", "zalo.vn"]);

/** True when the link dials the configured hotline or opens Zalo chat. */
export function isTrackedContactHref(
  href: string,
  hotline: string,
  zaloUrl?: string,
): boolean {
  if (/^tel:/i.test(href)) {
    // Only digits matter, so %20-style escapes need no decoding.
    const target = toVietnamE164(href.slice(4).replace(/%[0-9a-f]{2}/gi, ""));
    return target !== null && target === toVietnamE164(hotline);
  }
  if (zaloUrl && href === zaloUrl.trim()) return true;
  try {
    const { protocol, hostname } = new URL(href);
    return protocol.startsWith("http") && ZALO_HOSTS.has(hostname);
  } catch {
    return false;
  }
}

/**
 * Loads gtag.js once for the whole site and reports a contact conversion for
 * every hotline/Zalo link click. A single delegated listener covers links in
 * Server Components (header, footer, info pages) as well as client ones, so
 * individual links need no onClick of their own.
 */
export function GoogleAdsTag() {
  const conversionId = googleAdsConfig.conversionId;

  useEffect(() => {
    if (!conversionId) return;
    const hotline = siteConfig.phoneNumber;
    const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL;
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      const href = link?.getAttribute("href");
      if (href && isTrackedContactHref(href, hotline, zaloUrl))
        trackContactClickConversion();
    }
    // Capture phase: still fires when a component stops propagation.
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, [conversionId]);

  if (!conversionId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${conversionId}`}
        strategy="afterInteractive"
      />
      {/* conversionId is validated against /^AW-\d+$/ before interpolation. */}
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${conversionId}', { allow_enhanced_conversions: true });`}
      </Script>
    </>
  );
}
