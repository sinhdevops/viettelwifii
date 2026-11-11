import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";
import styles from "./status-screen.module.css";

const quickLinks = [
  { href: "/internet", label: "Internet" },
  { href: "/goi-cuoc-viettel", label: "Gói cước" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;

/**
 * Shared fallback shell for runtime errors and the 404 page. Server-safe: no
 * hooks, so it can be rendered from a client error boundary as well.
 */
export function StatusScreen({
  code,
  title,
  description,
  icon,
  digest,
  primary,
  secondary,
}: {
  code?: string;
  title: string;
  description: ReactNode;
  icon: ReactNode;
  digest?: string;
  primary: ReactNode;
  secondary?: ReactNode;
}) {
  const phone = siteConfig.phoneNumber;
  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="status-title">
        {code && (
          <p className={styles.code}>
            <span aria-hidden="true">{code}</span>
          </p>
        )}
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
        <h1 id="status-title" className={styles.title}>
          {title}
        </h1>
        <div className={styles.description}>{description}</div>
        {digest && (
          <p className={styles.digest}>
            Mã lỗi: <span>{digest}</span>
          </p>
        )}
        <div className={styles.actions}>
          {primary}
          {secondary}
        </div>
        <div className={styles.help}>
          <p className={styles.helpLabel}>Cần hỗ trợ ngay?</p>
          <p className={styles.hotline}>
            {phone ? (
              <>
                Gọi tư vấn lắp đặt{" "}
                <Link href={siteConfig.phoneHref}>{phone}</Link> — hỗ trợ mọi
                ngày.
              </>
            ) : (
              <>Liên hệ để được tư vấn gói cước và lắp đặt.</>
            )}
          </p>
          <ul className={styles.links} aria-label="Trang liên quan">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
