/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages -- Preserve the archived native-anchor navigation contract. */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { additionalNewsCards } from "@/features/news/load-more-news-data";
import { Fragment } from "react";
import SourceMobileListingCards from "./source-mobile-listing-cards";
import { NewsCard } from "./news-card";
import { NewsLoadMore } from "./news-load-more";
import { newsCards } from "@/constants/news/card-records";
import type { NewsListingRecord } from "@/types/news/news-types";
import styles from "./news-listing-hero.module.css";
export function NewsListing({ record }: { record: NewsListingRecord }) {
  return (
    <article className="w-full max-w-[1140px]">
      <ListingHero record={record} />
      <LatestNews record={record} />
      <FeaturedNews record={record} />
      <ListingDataPlans />
    </article>
  );
}
function ListingHero({ record }: { record: NewsListingRecord }) {
  return (
    <div className="px-4 pt-6 md:px-8 md:pt-0 lg:px-0">
      <div className={styles.panel}>
        <img
          alt={record.bannerAlt}
          loading="lazy"
          width="1774"
          height="887"
          decoding="async"
          className={styles.image}
          style={{ color: "transparent" }}
          src={sourceAsset(record.bannerImage)}
        />
        <div className={`${styles.copy} uppercase`}>
          <h1 className={`${styles.title} text-[28px] leading-[40px]`}>
            {record.title}
            <span className={`${styles.accent} text-primary block`}>
              {record.titleAccent}
            </span>
          </h1>
        </div>
      </div>
      <div className="font-sarabun hidden w-fit gap-[60px] md:flex">
        <img
          alt="tin tức"
          loading="lazy"
          width="522"
          height="306"
          decoding="async"
          className="h-[306px] shrink-0 grow-0 rounded-[20px] object-cover"
          style={{ color: "transparent" }}
          src={sourceAsset(record.featured.image)}
        />
        <div className="flex flex-[1_1_50%] flex-col justify-between">
          <h3 className="py-1 text-[40px] leading-[48px] font-bold">
            {record.featured.title}
          </h3>
          <p className="text-16 leading-[24px] text-[#919397]">
            {record.featured.publishedLabel}
          </p>
          <p className="text-16 leading-[24px] text-[#616161]">
            {record.featured.description}
          </p>
          <a
            className="bg-primary flex h-[46px] w-[158px] items-center justify-center rounded-[10px] rounded-bl-sm font-medium text-white"
            href={record.featured.href}
          >
            ĐỌC THÊM
          </a>
        </div>
      </div>
    </div>
  );
}

function LatestNews({ record }: { record: NewsListingRecord }) {
  return (
    <div className="px-4 pt-6 pb-6 md:px-8 md:pb-9 lg:px-0">
      <h2 className="pb-8 text-[28px] leading-[40px] md:hidden">
        {record.mobileHeading}
      </h2>
      <h2 className="hidden pb-6 text-[48px] leading-[67px] md:block">
        {record.desktopHeading}
      </h2>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6">
        {record.cards.map((entry, index) => (
          <Fragment key={entry.key}>
            <NewsCard
              card={newsCards[entry.key]}
              desktopOnly={entry.desktopOnly}
            />
            {index === 0 ? <SourceMobileListingCards /> : null}
          </Fragment>
        ))}
        <NewsLoadMore
          items={additionalNewsCards.map(({ key, ...card }) => (
            <NewsCard key={key} card={card} />
          ))}
        />
      </div>
    </div>
  );
}

function FeaturedNews({ record }: { record: NewsListingRecord }) {
  return (
    <div className="hidden px-8 md:block lg:px-0">
      <h2 className="hidden pb-6 text-[48px] leading-[67px] md:block">
        {record.featuredHeading}
      </h2>
      <div
        className="font-sarabun h-[500px] w-full overflow-hidden rounded-[20px] bg-cover"
        style={{
          backgroundImage: `url("${sourceAsset(record.featured.backgroundImage)}")`,
        }}
      >
        <a
          className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-[rgba(0,0,0,0.8)] from-0% via-[rgba(255,255,255,0)] via-[46%] to-[rgba(255,255,255,0)] to-100% px-[74px] pb-10 text-white"
          href={record.featured.href}
        >
          <h3 className="py-1 text-[40px] leading-[48px] font-bold">
            {record.featured.title}
          </h3>
          <p className="text-16 leading-[24px]">
            {record.featured.publishedLabel}
          </p>
          <p className="text-16 leading-[24px]">
            {record.featured.description}
          </p>
        </a>
      </div>
    </div>
  );
}

function ListingDataPlans() {
  return (
    <div className="pb-8 pl-4 md:px-8 md:py-12 lg:px-0">
      <div className="flex items-center justify-between pb-8 md:pb-10">
        <h2 className="text-[28px] leading-[40px] md:text-[48px] md:leading-[67px] md:uppercase">
          Gói Cước Hot
        </h2>
        <a
          className="text-primary md:border-primary flex items-center justify-center pr-4 font-medium md:h-[40px] md:w-[148px] md:rounded-[10px] md:rounded-bl-sm md:border md:pr-0"
          href="/"
        >
          Xem thêm
        </a>
      </div>
      <div className="no-scrollbar [&amp;&gt;div]:shrink-0 [&amp;_.data-card-icons]:border-[#DDD] [&amp;_.data-card-icons]:bg-[#FAFAFA] [&amp;_.data-card]:bg-[url('/images/bg-data.png')] flex gap-4 overflow-auto pr-4 md:gap-8 md:pr-0">
        <div className="data-card font-magistral text-text-dark relative flex h-[197px] w-[158px] flex-col justify-between bg-cover md:h-[326px] md:w-[261px]">
          <div className="flex h-[26px] items-center justify-center pb-1 md:h-[42px] md:pb-[6px]">
            <p className="text-14 md:text-22 font-bold md:leading-[22px]">
              SD90
            </p>
          </div>
          <div className="">
            <div className="flex items-center justify-center md:pb-2">
              <div>
                <span className="text-primary text-[28px] leading-[39px] font-bold md:mb-1 md:text-[44px] md:leading-[60px]">
                  1.5GB
                </span>
                <span className="md:text-20 text-[10px] leading-[22px] font-bold uppercase md:leading-[32px]">
                  /ngày
                </span>
              </div>
              <p className="hidden">1.5 GB/ngày</p>
            </div>
            <div className="flex flex-col items-center pt-2 pb-[8px]"></div>
          </div>
          <div className="flex flex-col items-center justify-end pb-3 md:h-[96px] md:pb-5">
            <p className="pb-[4px] leading-[20px] font-medium md:pb-5">
              <span className="text-14 md:text-24 font-bold">90.000đ</span>
              <span className="md:text-14 text-[10px] font-bold uppercase">
                {" / tháng"}
              </span>
            </p>
            <div className="flex gap-2">
              <a
                className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[100px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 uppercase ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden md:h-[34px] md:pb-1 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="sms:290?body=SD90 UP"
              >
                Đăng Ký
              </a>
              <div className="hidden md:block">
                <a
                  className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[24px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[34px] md:w-[106px] md:pb-1 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="sms:290?body=SD90 UP"
                >
                  Đăng ký
                </a>
              </div>
              <a
                className="border-primary hover:text-primary-dark text-16 hidden h-[34px] w-[106px] items-center justify-center rounded-full border bg-white px-4 py-0 text-sm font-semibold whitespace-nowrap ring-offset-white transition-colors hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:flex dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/goi-cuoc-viettel/SD90"
              >
                CHI TIẾT
              </a>
            </div>
          </div>
        </div>
        <div className="data-card font-magistral text-text-dark relative flex h-[197px] w-[158px] flex-col justify-between bg-cover md:h-[326px] md:w-[261px]">
          <div className="flex h-[26px] items-center justify-center pb-1 md:h-[42px] md:pb-[6px]">
            <p className="text-14 md:text-22 font-bold md:leading-[22px]">
              SD120
            </p>
          </div>
          <div className="">
            <div className="flex items-center justify-center md:pb-2">
              <div>
                <span className="text-primary text-[28px] leading-[39px] font-bold md:mb-1 md:text-[44px] md:leading-[60px]">
                  2GB
                </span>
                <span className="md:text-20 text-[10px] leading-[22px] font-bold uppercase md:leading-[32px]">
                  /ngày
                </span>
              </div>
              <p className="hidden">2 GB/ngày</p>
            </div>
            <div className="flex flex-col items-center pt-2 pb-[8px]">
              <div className="data-card-icons mt-[6px] flex h-[32px] w-fit items-center justify-center gap-[1px] rounded-full border border-white bg-[#fbf1ea] px-[3px] md:h-[54px] md:px-[6px]">
                <img
                  alt="tv360"
                  loading="lazy"
                  width="18"
                  height="18"
                  decoding="async"
                  className="md:h-[30px] md:w-[30px]"
                  style={{ color: "transparent" }}
                  src={sourceAsset("/images/tv360.svg")}
                />
                <span className="px-[3px] text-[11px]">Basic</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end pb-3 md:h-[96px] md:pb-5">
            <p className="pb-[4px] leading-[20px] font-medium md:pb-5">
              <span className="text-14 md:text-24 font-bold">120.000đ</span>
              <span className="md:text-14 text-[10px] font-bold uppercase">
                {" / tháng"}
              </span>
            </p>
            <div className="flex gap-2">
              <a
                className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[100px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 uppercase ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden md:h-[34px] md:pb-1 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="sms:290?body=SD120 UP"
              >
                Đăng Ký
              </a>
              <div className="hidden md:block">
                <a
                  className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[24px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[34px] md:w-[106px] md:pb-1 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="sms:290?body=SD120 UP"
                >
                  Đăng ký
                </a>
              </div>
              <a
                className="border-primary hover:text-primary-dark text-16 hidden h-[34px] w-[106px] items-center justify-center rounded-full border bg-white px-4 py-0 text-sm font-semibold whitespace-nowrap ring-offset-white transition-colors hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:flex dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/goi-cuoc-viettel/SD120"
              >
                CHI TIẾT
              </a>
            </div>
          </div>
        </div>
        <div className="data-card font-magistral text-text-dark relative flex h-[197px] w-[158px] flex-col justify-between bg-cover md:h-[326px] md:w-[261px]">
          <div className="flex h-[26px] items-center justify-center pb-1 md:h-[42px] md:pb-[6px]">
            <p className="text-14 md:text-22 font-bold md:leading-[22px]">
              SD135
            </p>
          </div>
          <div className="">
            <div className="flex items-center justify-center md:pb-2">
              <div>
                <span className="text-primary text-[28px] leading-[39px] font-bold md:mb-1 md:text-[44px] md:leading-[60px]">
                  5GB
                </span>
                <span className="md:text-20 text-[10px] leading-[22px] font-bold uppercase md:leading-[32px]">
                  /ngày
                </span>
              </div>
              <p className="hidden">5 GB/ngày</p>
            </div>
            <div className="flex flex-col items-center pt-2 pb-[8px]">
              <div className="data-card-icons mt-[6px] flex h-[32px] w-fit items-center justify-center gap-[1px] rounded-full border border-white bg-[#fbf1ea] px-[3px] md:h-[54px] md:px-[6px]">
                <img
                  alt="tv360"
                  loading="lazy"
                  width="18"
                  height="18"
                  decoding="async"
                  className="md:h-[30px] md:w-[30px]"
                  style={{ color: "transparent" }}
                  src={sourceAsset("/images/tv360.svg")}
                />
                <span className="px-[3px] text-[11px]">Basic</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end pb-3 md:h-[96px] md:pb-5">
            <p className="pb-[4px] leading-[20px] font-medium md:pb-5">
              <span className="text-14 md:text-24 font-bold">135.000đ</span>
              <span className="md:text-14 text-[10px] font-bold uppercase">
                {" / tháng"}
              </span>
            </p>
            <div className="flex gap-2">
              <a
                className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[100px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 uppercase ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden md:h-[34px] md:pb-1 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="sms:290?body=SD135 UP"
              >
                Đăng Ký
              </a>
              <div className="hidden md:block">
                <a
                  className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[24px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[34px] md:w-[106px] md:pb-1 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="sms:290?body=SD135 UP"
                >
                  Đăng ký
                </a>
              </div>
              <a
                className="border-primary hover:text-primary-dark text-16 hidden h-[34px] w-[106px] items-center justify-center rounded-full border bg-white px-4 py-0 text-sm font-semibold whitespace-nowrap ring-offset-white transition-colors hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:flex dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/goi-cuoc-viettel/SD135"
              >
                CHI TIẾT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
