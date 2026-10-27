import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { LeadDialog } from "@/components/leads/lead-dialog";
import type { PageContent } from "@/lib/content-schema";
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { INTERNET_COPY } from "./source-copy";
import {
  INTERNET_SOURCE_PAGES,
  INTERNET_RELATED_PRODUCTS,
  type InternetRoute,
} from "./source-pages";
import { RelatedInternetCard } from "./related-internet-card";
import styles from "./internet.module.css";

/** Contract for Lead's existing route dispatcher. `path` is the full approved URL; `page` supplies SEO/status context. */
export type InternetContentProps = { page: PageContent; path: string };

/** Explicitly sourced from approved-routes.json indices 153–170. */
export const INTERNET_ROUTES = Object.keys(
  INTERNET_SOURCE_PAGES,
) as InternetRoute[];

/** Server Component: source HTML description sections stay as authored TSX, with only the regional cards on the client. */
export function InternetContent({ page, path }: InternetContentProps) {
  if (
    page.kind !== "internet" ||
    !Object.prototype.hasOwnProperty.call(INTERNET_SOURCE_PAGES, path)
  )
    return null;
  if (page.product && page.product.id !== path) return null;

  const route = path as InternetRoute;
  const record = INTERNET_SOURCE_PAGES[route];
  const ArticleCopy = INTERNET_COPY[route];
  const image = sourceAsset(
    "/_next/image?url=%2Fimages%2Finternet-ultra-speed.png&w=256&q=75",
  );
  const mobileBackground = sourceAsset("/images/internet-card-bg-mobi.png");
  const desktopBackground = sourceAsset("/images/internet-card-bg.png");
  const contactPhone = sourceAsset(
    "/_next/image?url=%2Fimages%2Fcontact-phone.png&w=128&q=75",
  );

  return (
    <main
      className={`bg-background flex min-h-screen flex-col items-center ${styles.page}`}
    >
      <article
        className="w-full max-w-[1140px] px-4 pt-2 md:px-0"
        itemScope
        itemType="https://schema.org/Product"
      >
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm break-words text-gray-500 sm:gap-2.5 dark:text-gray-400">
            <li className="inline-flex items-center gap-1.5">
              <Link
                href="/"
                className="transition-colors hover:text-gray-950 dark:hover:text-gray-50"
              >
                Trang chủ
              </Link>
            </li>
            <li
              role="presentation"
              aria-hidden="true"
              className="[&>svg]:h-3.5 [&>svg]:w-3.5"
            >
              <ChevronRight />
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Link
                href="/internet"
                className="transition-colors hover:text-gray-950 dark:hover:text-gray-50"
              >
                Internet
              </Link>
            </li>
            <li
              role="presentation"
              aria-hidden="true"
              className="[&>svg]:h-3.5 [&>svg]:w-3.5"
            >
              <ChevronRight />
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span
                role="link"
                aria-disabled="true"
                aria-current="page"
                className="text-primary font-normal dark:text-gray-50"
              >
                {record.breadcrumb}
              </span>
            </li>
          </ol>
        </nav>
        <div>
          <div className="pt-4 pb-6 sm:pt-9 sm:pb-8 md:pt-12 md:pb-10">
            <h1
              itemProp="name"
              className="text-[28px] leading-[40px] sm:text-[32px] sm:leading-[32px] md:text-[48px] md:leading-[48px]"
            >
              Gói Internet <span className="text-primary">{record.code}</span>
            </h1>
          </div>
          <div className="flex flex-col gap-9 pb-9 md:pb-10">
            <div>
              <div className="flex flex-col gap-3 rounded-[16px] bg-white px-3 py-4 sm:px-4 sm:py-5 md:gap-6 md:px-8 md:py-8">
                <ArticleCopy />
              </div>
              <div className={`hidden md:block md:pt-6 ${styles.desktopCta}`}>
                <LeadDialog
                  itemId={route}
                  itemTitle={record.title}
                  pagePath={route}
                />
              </div>
            </div>
            <section aria-label="Gói cước tương tự">
              <h2 className="text-[28px] leading-[40px] uppercase">
                Gói cước tương tự
              </h2>
              <div className="no-scrollbar-mobile flex gap-4 overflow-auto pt-6 pr-4 pb-4 md:gap-6 md:pr-0">
                {record.related.map((code) => {
                  const detail = INTERNET_RELATED_PRODUCTS[code];
                  return (
                    <RelatedInternetCard
                      key={code}
                      code={code}
                      speed={detail.speed}
                      benefit={detail.benefit}
                      prices={detail.prices}
                      regionLabels={detail.regionLabels}
                      currentPath={route}
                      iconSrc={image}
                      mobileBackground={mobileBackground}
                      desktopBackground={desktopBackground}
                    />
                  );
                })}
              </div>
            </section>
          </div>
          <div className="fixed bottom-0 left-0 z-40 flex w-full items-center">
            <div className="flex h-[68px] w-full items-center justify-center bg-white px-4 pb-1 shadow-[1px_-3px_12px_2px_rgba(0,0,0,0.1)] md:hidden">
              <div />
              <div className={styles.mobileCta}>
                <LeadDialog
                  itemId={route}
                  itemTitle={record.title}
                  pagePath={route}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-3 sm:bottom-14 sm:right-[25px]">
        <div className="relative flex flex-col gap-3">
          <div className="relative rounded-full hover:shadow-[0_8px_32px_rgba(0,0,0,.35)]">
            <a
              href="tel:18008132"
              className="flex items-center rounded-full bg-[#ea1f19] pr-2 text-white"
            >
              <Image
                src={contactPhone}
                alt="phone"
                width={54.4}
                height={54.4}
                unoptimized
              />
              <span className="border-l border-white pl-2.5 leading-none">
                Lắp đặt mới
              </span>
              <ChevronRight width={22} height={22} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
