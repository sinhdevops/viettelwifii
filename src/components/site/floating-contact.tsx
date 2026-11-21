"use client";

import { PhoneCall, ChevronRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import styles from "./floating-contact.module.css";

const phone = siteConfig.phoneNumber;

// The floating Zalo button was removed on purpose: Zalo chats cannot be
// attributed to Google Ads conversions, so leads go to the form or hotline.
export function FloatingContact() {
  if (!phone) return null;
  return (
    <nav aria-label="Liên hệ nhanh" className={styles.floating}>
      <ButtonLink
        variant="unstyled"
        size="unstyled"
        href={siteConfig.phoneHref}
        className={styles.call}
        aria-label={`Gọi ${phone} để lắp đặt mới`}
        title={`Gọi ${phone}`}
        onClick={() =>
          trackEvent("contact_phone_click", {
            page_path: window.location.pathname,
          })
        }
      >
        <PhoneCall
          className={styles.phone}
          size={32}
          strokeWidth={2.5}
          aria-hidden="true"
        />
        <span className={styles.label}>Lắp đặt mới</span>
        <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" />
      </ButtonLink>
    </nav>
  );
}
