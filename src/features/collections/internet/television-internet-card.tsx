import { InternetRegionalPricing } from "./regional-pricing";
/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import type { TelevisionInternetCardData } from "./internet-data";
export function TelevisionInternetCard({
  item,
}: {
  item: TelevisionInternetCardData;
}) {
  return (
    <div className="internet-card text-text-dark flex h-[258px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[32px] bg-[url('/images/internet-card-bg-mobi.png')] bg-cover bg-center bg-no-repeat md:h-[412px] md:w-[359px] md:rounded-[74px] md:bg-[url('/images/internet-card-bg.png')]">
      <div className="flex h-[74px] items-center justify-center md:h-[140px]">
        <img
          alt="package icon"
          loading="lazy"
          width="97"
          height="102"
          decoding="async"
          className="h-[56px] w-[53px] md:h-[102px] md:w-[97px]"
          style={{ color: "transparent" } as CSSProperties}
          src="/assets/viettelup/a224eb19921fbdd6a529ed13.webp"
          srcSet={[
            `/assets/viettelup/a8b39eefb202efdccc2f14df.webp 1x`,
            `/assets/viettelup/a224eb19921fbdd6a529ed13.webp 2x`,
          ].join(", ")}
        />
      </div>
      <div className="flex grow flex-col justify-between px-4 pt-3 pb-4 md:px-8 md:pt-4 md:pb-8">
        <div>
          <div className="font-beausans flex h-[26px] items-center justify-between border-b border-[#d0d0d0a6] pb-2 md:h-[42px] md:pb-4">
            <span className="border-primary text-14 md:text-22 border-l-2 pl-1 leading-[14px] font-bold text-[#282828] md:border-l-[3px] md:pl-2 md:leading-[22px]">
              {item.code}
            </span>
            <span className="text-10 font-semibold text-[#444444] md:text-[15px]">
              {item.bandwidth}
            </span>
          </div>
          <div className="pt-2 md:pb-1.5">
            <p className="text-10 md:text-12 font-medium text-[#767676] md:leading-[22px]">
              Tiện ích
            </p>
            <p className="text-10 md:text-14 font-semibold md:leading-[18px]">
              {item.equipment}
            </p>
          </div>
        </div>
        <InternetRegionalPricing item={item} />
      </div>
    </div>
  );
}
