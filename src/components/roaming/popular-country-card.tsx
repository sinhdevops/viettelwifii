/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { PopularCountryCardData } from "@/constants/roaming/roaming-data";
export function PopularCountryCard({ item }: { item: PopularCountryCardData }) {
  return (
    <a href={item.href}>
      <div className="flex cursor-pointer items-center justify-start gap-6 rounded-[20px] bg-white px-6 py-0.5 shadow-[0px_3px_8.4px_0px_#00000026] hover:bg-[#fff9fa]">
        <img
          alt={item.name}
          loading="lazy"
          width="250"
          height="167"
          decoding="async"
          className="my-2.5 w-[60px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset(item.image)}
          srcSet={[
            `${sourceAsset(item.smallImage)} 1x`,
            `${sourceAsset(item.image)} 2x`,
          ].join(", ")}
        />
        <span className="font-magistral text-20 font-bold">{item.name}</span>
      </div>
    </a>
  );
}
