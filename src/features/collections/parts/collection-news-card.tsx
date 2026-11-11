/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { CollectionNewsCardData } from "./collection-news-data";
export function CollectionNewsCard({ item }: { item: CollectionNewsCardData }) {
  return (
    <div className="w-fit max-w-[364px] overflow-hidden rounded-[24px] border border-[#0000000A] bg-white md:rounded-[20px]">
      <a className="" href={item.href}>
        <img
          alt={item.title}
          loading="lazy"
          width="252"
          height="148"
          decoding="async"
          className="h-[148px] w-[252px] object-cover md:h-[252px] md:w-[364px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset(item.image)}
        />
        <div className="p-4 md:p-5">
          <p className="md:text-16 font-medium text-[#616161]">{item.date}</p>
          <h3 className="md:text-22 max-w-[220px] py-2 leading-[28px] font-semibold text-black md:max-w-[324px] md:pb-3">
            {item.title}
          </h3>
          <p className="hidden">{item.date}</p>
          <p className="text-primary flex items-center gap-[6px] font-medium">
            <span>Xem thêm</span>
            <img
              alt="Read more"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/icons/arrow-right.svg")}
            />
          </p>
        </div>
      </a>
    </div>
  );
}
