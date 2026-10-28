/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { GicMonthlyBenefitCardData } from "./gic-data";
export function GicMonthlyBenefitCard({ item }: { item: GicMonthlyBenefitCardData }) {
  return (
    <div className="">
      <img
        alt={item.imageAlt}
        loading="lazy"
        width="42"
        height="42"
        decoding="async"
        className="w-[21px] md:w-[42px]"
        style={{ color: "transparent" } as CSSProperties}
        src={sourceAsset(item.image)}
      />
      <p className="pt-2 text-12 font-bold md:pt-4 md:text-[23px] [&amp;&gt;span]:text-[12px] [&amp;&gt;span]:font-semibold [&amp;&gt;span]:text-primary [&amp;&gt;span]:md:text-[16px]">
        {item.title}
        <span>{item.note}</span>
      </p>
      <p className="max-w-[95px] pt-1 text-10 text-[#909090] md:max-w-[185px] md:pt-2 md:text-18">
        {item.description}
      </p>
    </div>
  );
}
