import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  ChevronRight,
  Clock3,
  MapPin,
  Phone,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { PageJsonLd } from "./page-json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { isPublicationEnabled } from "@/features/seo/page-seo";
import { siteConfig } from "@/lib/site-config";
import { isSiteRouteRenderable, siteRouteDefinitions } from "@/lib/site-routes";
import styles from "./site-info-page.module.css";

type SiteInfoSection = {
  heading: string;
  content: ReactNode;
};

/** Anchor ids stay stable and ASCII so TOC links never need encoding. */
function sectionId(heading: string): string {
  return heading
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function SiteInfoPage({
  path,
  title,
  intro,
  sections,
  secondaryHref = "/goi-cuoc-viettel",
  secondaryLabel = "Xem gói cước",
}: {
  path: string;
  title: string;
  intro: string;
  sections: SiteInfoSection[];
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const route = siteRouteDefinitions.find((entry) => entry.path === path);
  if (!route || !isSiteRouteRenderable(path)) notFound();
  const publicationEnabled = isPublicationEnabled();
  const routeReady = route?.status === "ready";
  const noticeVisible = !routeReady || !publicationEnabled;
  const phone = siteConfig.phoneNumber;

  return (
    <>
      {route && (
        <PageJsonLd
          path={path}
          page={{
            title: route.title,
            description: route.description,
            status: route.status,
          }}
        />
      )}
      <main className={styles.page}>
        <div className={styles.shell}>
          <nav aria-label="Breadcrumb" className={styles.crumb}>
            <Link href="/">Trang chủ</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{title}</span>
          </nav>

          <header className={styles.hero}>
            <div className={styles.heroMain}>
              <p className={styles.eyebrow}>
                <ShieldCheck size={15} aria-hidden="true" />
                ViettelWiFii.vn
              </p>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.intro}>{intro}</p>
            </div>
            <div className={styles.heroActions}>
              {phone && (
                <ButtonLink href={siteConfig.phoneHref} variant="primary">
                  <Phone size={18} aria-hidden="true" /> Gọi {phone}
                </ButtonLink>
              )}
              <ButtonLink href={secondaryHref} variant="outline">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </header>

          <div className={styles.layout}>
            <article className={styles.content}>
              {noticeVisible && (
                <aside
                  className={`${styles.notice} ${routeReady ? "" : styles.noticeDraft}`}
                  aria-label="Trạng thái xuất bản"
                >
                  <ShieldAlert size={20} aria-hidden="true" />
                  <div>
                    <p className={styles.noticeTitle}>
                      {routeReady
                        ? "Chưa mở chỉ mục công khai"
                        : "Trang đang ở trạng thái bản nháp"}
                    </p>
                    <p className={styles.noticeBody}>
                      {routeReady
                        ? "Website đang hoàn thiện nội dung và quyền sử dụng tài nguyên. Trang chưa được lập chỉ mục hoặc dùng làm trang đích quảng cáo."
                        : "Thông tin nội dung, pháp lý hoặc quyền sử dụng tài nguyên còn cần xác minh. Trang chưa được lập chỉ mục hoặc dùng làm trang đích quảng cáo."}
                    </p>
                  </div>
                </aside>
              )}

              <div className={styles.sections}>
                {sections.map((section, index) => {
                  const id = sectionId(section.heading) || `muc-${index + 1}`;
                  return (
                    <section
                      key={section.heading}
                      id={id}
                      className={styles.section}
                      aria-labelledby={`${id}-heading`}
                    >
                      <h2
                        id={`${id}-heading`}
                        className={styles.sectionHeading}
                      >
                        <span
                          className={styles.sectionIndex}
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {section.heading}
                      </h2>
                      <div className={styles.sectionBody}>
                        {section.content}
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className={styles.cta}>
                <div>
                  <p className={styles.ctaTitle}>Cần tư vấn gói cước?</p>
                  <p className={styles.ctaText}>
                    Kiểm tra giá và điều kiện hiện hành trước khi đăng ký.
                  </p>
                </div>
                <div className={styles.ctaActions}>
                  {phone && (
                    <ButtonLink href={siteConfig.phoneHref} variant="primary">
                      <Phone size={18} aria-hidden="true" /> {phone}
                    </ButtonLink>
                  )}
                  <ButtonLink href="/lien-he" variant="outline">
                    Liên hệ
                  </ButtonLink>
                </div>
              </div>
            </article>

            <aside className={styles.side} aria-label="Thông tin bổ sung">
              {sections.length > 1 && (
                <nav className={styles.toc} aria-label="Mục lục">
                  <p className={styles.sideTitle}>Nội dung trang</p>
                  <ol className={styles.tocList}>
                    {sections.map((section, index) => (
                      <li key={section.heading}>
                        <a
                          href={`#${sectionId(section.heading) || `muc-${index + 1}`}`}
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div className={styles.contactCard}>
                <p className={styles.sideTitle}>Liên hệ nhanh</p>
                {phone ? (
                  <a className={styles.contactRow} href={siteConfig.phoneHref}>
                    <Phone size={17} aria-hidden="true" />
                    <span>{phone}</span>
                  </a>
                ) : (
                  <p className={styles.contactMuted}>
                    Chưa cấu hình số điện thoại.
                  </p>
                )}
                <p className={styles.contactRow}>
                  <MapPin size={17} aria-hidden="true" />
                  <span>Ông Ích Khiêm, Cẩm Lệ, Đà Nẵng</span>
                </p>
                <p className={styles.contactRow}>
                  <Clock3 size={17} aria-hidden="true" />
                  <span>Hỗ trợ hằng ngày</span>
                </p>
                {path !== "/lien-he" && (
                  <Link className={styles.contactLink} href="/lien-he">
                    Xem trang liên hệ
                    <ChevronRight size={15} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
