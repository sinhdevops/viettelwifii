/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { InternetBenefitCardData } from "./internet-data";
export function InternetBenefitCard({ item }: { item: InternetBenefitCardData }) {
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
      <h5 className="pb-1 pt-[7px] font-beausans text-12 font-bold leading-[16px] text-[#2C2F31] md:pb-3 md:pt-6 md:text-22 md:leading-[30px]">
        {item.title}
      </h5>
      <p className="text-10 text-[#444444] opacity-70 md:text-18">{item.description}</p>
    </div>
  );
}
