/* eslint-disable @next/next/no-html-link-for-pages -- Preserve the archived native-anchor navigation contract. */
import { NewsCard } from "./news-card";
import { newsCards } from "@/constants/news/card-records";
import type { NewsCardKey } from "@/constants/news/card-records";
export function RelatedNews({ cards }: { cards: readonly NewsCardKey[] }) {
  return (
    <aside className="flex flex-col items-center gap-6 px-4 pb-9 md:items-start md:gap-[60px] md:px-0 md:pb-12">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-[28px] leading-[60px] md:text-[40px] md:leading-[60px] md:font-semibold">
          TIN TỨC KHÁC
        </h2>
        <a
          className="border-primary text-primary hidden h-[40px] w-[148px] items-center justify-center rounded-[10px] rounded-bl-sm border font-medium md:flex"
          href="/tin-tuc"
        >
          Xem thêm
        </a>
      </div>
      <ul className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
        {cards.map((key) => (
          <li className="flex" key={key}>
            <NewsCard card={newsCards[key]} />
          </li>
        ))}
      </ul>
      <a
        className="border-primary text-primary flex h-[40px] w-[148px] items-center justify-center rounded-[10px] rounded-bl-sm border font-medium md:hidden"
        href="/tin-tuc"
      >
        Xem thêm
      </a>
    </aside>
  );
}
