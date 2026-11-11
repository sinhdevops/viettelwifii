/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { InternetBenefitCardData } from "./internet-data";
export function InternetBenefitCard({
  item,
}: {
  item: InternetBenefitCardData;
}) {
  return (
    <div>
      <img
        alt={item.imageAlt}
        loading="lazy"
        width="90"
        height="90"
        decoding="async"
        className="h-[24px] w-[24px] md:h-[90px] md:w-[90px]"
        style={{ color: "transparent" } as CSSProperties}
        src={sourceAsset(item.image)}
      />
      <h5 className="font-beausans text-12 md:text-22 pt-[7px] pb-1 leading-[16px] font-bold text-[#2C2F31] md:pt-6 md:pb-3 md:leading-[30px]">
        {item.title}
      </h5>
      <p className="text-10 md:text-18 text-[#444444] opacity-70">
        {item.description}
      </p>
    </div>
  );
}
