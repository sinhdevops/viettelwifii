"use client";

import { PhoneCall, ChevronRight, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import styles from "./floating-contact.module.css";

const phone = siteConfig.phoneNumber;
const zalo = process.env.NEXT_PUBLIC_ZALO_URL;

export function FloatingContact() {
  if (!phone && !zalo) return null;
  return (
    <nav aria-label="Liên hệ nhanh" className={styles.floating}>
      {zalo && (
        <ButtonLink
          variant="unstyled"
          size="unstyled"
          href={zalo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("contact_zalo_click", {
              page_path: window.location.pathname,
            })
          }
          className={styles.zalo}
          aria-label="Mở Zalo"
        >
          <MessageCircle aria-hidden="true" size={24} />
          Zalo
        </ButtonLink>
      )}
      {phone && (
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
      )}
    </nav>
  );
}
