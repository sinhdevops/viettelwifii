/* eslint-disable @next/next/no-html-link-for-pages -- Preserve captured anchor navigation during this DOM-only refactor. */
import { CollectionNewsCard } from "../parts/collection-news-card";
import { collectionNews } from "../parts/collection-news-data";
export function NineNews() {
  return (
    <div className="w-full">
      <div className="container pb-8 md:pb-12 md:pl-0 md:pt-3 pl-0">
        <div className="flex items-center justify-between pb-8 pr-4 md:pr-0 md:pb-[48px]">
          <h2 className="font-beausans text-22 leading-[28px] md:text-[55px] md:leading-[70px]">
            Tin tức
          </h2>
          <a
            className="flex items-center justify-center font-medium text-primary md:h-[40px] md:w-[148px] md:rounded-[10px] md:rounded-bl-sm md:border md:border-primary"
            href="/tin-tuc"
          >
            Xem tất cả
          </a>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-auto pr-4 md:grid md:grid-cols-3 md:grid-rows-2 md:flex-wrap md:gap-6 md:pr-0 [&amp;&gt;div]:shrink-0 -mr-4 md:-mr-0">
          {collectionNews.map((item) => (
            <CollectionNewsCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
