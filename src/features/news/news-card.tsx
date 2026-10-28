/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { NewsCardRecord } from "./news-types";
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
          ? "hidden md:block max-w-[364px] overflow-hidden border border-[#0000000A] bg-white md:rounded-[20px] w-full rounded-[16px] md:w-fit"
          : "max-w-[364px] overflow-hidden border border-[#0000000A] bg-white md:rounded-[20px] w-full rounded-[16px] md:w-fit"
      }
    >
      <a className="flex md:block" href={card.href}>
        <img
          alt={card.imageAlt}
          loading="lazy"
          width="252"
          height="148"
          decoding="async"
          className="object-cover md:h-[252px] md:w-[364px] h-[auto] w-[128px]"
          style={{ color: "transparent" }}
          src={sourceAsset(card.image)}
        />
        <div className="p-4 md:p-5">
          <p className="font-medium text-[#616161] md:text-16 hidden pb-1 md:block md:font-normal">
            {card.publishedLabel}
          </p>
          <h3 className="font-semibold md:max-w-[324px] md:pb-3 max-w-[unset] py-0 text-16 leading-[20px] md:text-24 md:leading-[28px]">
            {card.title}
          </h3>
          <p className="block pb-2 pt-1 leading-[20px] text-[#616161] md:hidden">
            {card.publishedLabel}
          </p>
          <p className="flex items-center gap-[6px] font-medium text-primary">
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
