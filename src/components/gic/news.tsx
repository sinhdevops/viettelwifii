/* eslint-disable @next/next/no-html-link-for-pages -- Preserve captured anchor navigation during this DOM-only refactor. */
import { CollectionNewsCard } from "@/features/collections/parts/collection-news-card";
import { collectionNews } from "@/features/collections/parts/collection-news-data";
export function GicNews() {
  return (
    <div className="w-full pt-5 md:pt-10">
      <div className="container !max-w-[1040px] pb-8 pl-4 md:pt-3 md:pb-12 md:pl-0">
        <div className="flex items-center justify-between pr-4 pb-8 md:pr-0 md:pb-[36px]">
          <h2 className="font-beausans text-22 leading-[25px] md:text-[80px] md:leading-[80px]">
            Tin tức
          </h2>
          <a
            className="text-primary md:border-primary flex items-center justify-center font-medium md:h-[40px] md:w-[148px] md:rounded-[10px] md:rounded-bl-sm md:border"
            href="/tin-tuc"
          >
            Xem tất cả
          </a>
        </div>
        <div className="no-scrollbar [&amp;&gt;div]:shrink-0 flex gap-4 overflow-auto pr-4 md:grid md:grid-cols-3 md:grid-rows-2 md:flex-wrap md:gap-6 md:pr-0">
          {collectionNews.map((item) => (
            <CollectionNewsCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
