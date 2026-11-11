/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { ReactNode } from "react";
import type { NewsArticleRecord } from "@/types/news/news-types";
import { RelatedNews } from "./related-news";
import { RelatedDataPlans } from "./related-data-plans";
import { PublishedDate } from "./published-date";
export function ArticleHeading({ title }: { title: string }) {
  return (
    <h1 className="pb-3 text-[28px] leading-[36px] md:text-[40px] md:leading-[60px] md:font-medium">
      {title}
    </h1>
  );
}
export function PublishedMetadata({ label }: { label: string }) {
  return (
    <p className="text-14 mb-6 flex items-center leading-[20px] font-medium text-[#919397]">
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
      <PublishedDate label={label} />
    </p>
  );
}
function ArticleNotice({ article }: { article: NewsArticleRecord }) {
  const historical = /\b202[45]\b/.test(
    `${article.publishedLabel} ${article.title} ${article.route}`,
  );
  const datedPromotion = /khuyen-mai|mo-app-co-qua|tet5g|thang-\d/i.test(
    article.route,
  );

  return (
    <aside
      aria-label="Lưu ý về nội dung bài viết"
      className="mb-6"
      style={{ background: "#f5f5f5", padding: "16px", lineHeight: 1.6 }}
    >
      {historical || datedPromotion ? (
        <p>
          <strong>
            Bài viết lưu trữ — ngày xuất bản: {article.publishedLabel}.
          </strong>{" "}
          Nội dung phản ánh thông tin tại thời điểm xuất bản, không phải thông
          báo ưu đãi hiện hành. Giá, gói cước và khuyến mãi có thể đã thay đổi
          hoặc hết hiệu lực; vui lòng kiểm tra điều kiện hiện hành trước khi
          đăng ký.
        </p>
      ) : null}
      <p>
        Nguồn nội dung/tác giả chưa xác minh.{" "}
        <a href="/gioi-thieu" className="underline">
          Giới thiệu website
        </a>
        .
      </p>
    </aside>
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
      <div className="bg-background font-sarabun px-4 py-9 md:px-0">
        <ArticleHeading title={article.title} />
        <PublishedMetadata label={article.publishedLabel} />
        <ArticleNotice article={article} />
        <div>{children}</div>
      </div>
      <RelatedNews cards={article.relatedCards} />
      <RelatedDataPlans />
    </article>
  );
}
