/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { NewsCardRecord } from "@/types/news/news-types";
export function NewsCard({
  card,
  desktopOnly = false,
}: {
  card: NewsCardRecord;
  desktopOnly?: boolean;
}) {
  return (
    <div
      className={
        desktopOnly
          ? "hidden w-full max-w-[364px] overflow-hidden rounded-[16px] border border-[#0000000A] bg-white md:block md:w-fit md:rounded-[20px]"
          : "w-full max-w-[364px] overflow-hidden rounded-[16px] border border-[#0000000A] bg-white md:w-fit md:rounded-[20px]"
      }
    >
      <a className="flex md:block" href={card.href}>
        <img
          alt={card.imageAlt}
          loading="lazy"
          width="252"
          height="148"
          decoding="async"
          className="h-[auto] w-[128px] object-cover md:h-[252px] md:w-[364px]"
          style={{ color: "transparent" }}
          src={sourceAsset(card.image)}
        />
        <div className="p-4 md:p-5">
          <p className="md:text-16 hidden pb-1 font-medium text-[#616161] md:block md:font-normal">
            {card.publishedLabel}
          </p>
          <h3 className="text-16 md:text-24 max-w-[unset] py-0 leading-[20px] font-semibold md:max-w-[324px] md:pb-3 md:leading-[28px]">
            {card.title}
          </h3>
          <p className="block pt-1 pb-2 leading-[20px] text-[#616161] md:hidden">
            {card.publishedLabel}
          </p>
          <p className="text-primary flex items-center gap-[6px] font-medium">
            <span>Xem thêm</span>
            <img
              alt="Read more"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              style={{ color: "transparent" }}
              src={sourceAsset("/icons/arrow-right.svg")}
            />
          </p>
        </div>
      </a>
    </div>
  );
}
