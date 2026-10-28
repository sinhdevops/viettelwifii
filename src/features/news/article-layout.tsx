/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { ReactNode } from "react";
import type { NewsArticleRecord } from "./news-types";
import { RelatedNews } from "./related-news";
import { RelatedDataPlans } from "./related-data-plans";
export function ArticleHeading({ title }: { title: string }) {
  return (
    <h1
      itemProp="headline"
      className="pb-3 text-[28px] leading-[36px] md:text-[40px] md:font-medium md:leading-[60px]"
    >
      {title}
    </h1>
  );
}
export function PublishedMetadata({ label }: { label: string }) {
  return (
    <p className="mb-6 flex items-center text-14 font-medium leading-[20px] text-[#919397]">
      <img
        alt="Ngày"
        loading="lazy"
        width="16"
        height="16"
        decoding="async"
        className="mr-[6px]"
        style={{ color: "transparent" }}
        src={sourceAsset("/icons/date.svg")}
      />
      {label}
    </p>
  );
}
export function ArticleLayout({
  article,
  children,
}: {
  article: NewsArticleRecord;
  children: ReactNode;
}) {
  return (
    <article className="w-full max-w-[1140px]">
      <div
        itemScope
        itemType="https://schema.org/NewsArticle"
        className="bg-background px-4 py-9 font-sarabun md:px-0"
      >
        <ArticleHeading title={article.title} />
        <PublishedMetadata label={article.publishedLabel} />
        <div itemProp="articleBody">{children}</div>
      </div>
      <RelatedNews cards={article.relatedCards} />
      <RelatedDataPlans />
    </article>
  );
}
