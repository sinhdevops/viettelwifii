import { InternetRegionalPricing } from "./regional-pricing";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { MeshInternetCardData } from "./internet-data";
export function MeshInternetCard({ item }: { item: MeshInternetCardData }) {
  return (
    <div className="internet-card flex h-[258px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[32px] bg-[url('/images/internet-card-bg-mobi.png')] bg-cover bg-center bg-no-repeat text-text-dark md:h-[412px] md:w-[359px] md:rounded-[74px] md:bg-[url('/images/internet-card-bg.png')]">
      <div className="flex h-[74px] items-center justify-center md:h-[140px]">
        <img
          alt="package icon"
          loading="lazy"
          width="97"
          height="102"
          decoding="async"
          className="h-[56px] w-[53px] md:h-[102px] md:w-[97px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/_next/image?url=%2Fimages%2Finternet-cao-t%E1%BA%A7ng.png&w=256&q=75")}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-cao-t%E1%BA%A7ng.png&w=128&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-cao-t%E1%BA%A7ng.png&w=256&q=75")} 2x`,
          ].join(", ")}
        />
      </div>
      <div className="flex grow flex-col justify-between px-4 pb-4 pt-3 md:px-8 md:pb-8 md:pt-4">
        <div>
          <div className="flex h-[26px] items-center justify-between border-b border-[#d0d0d0a6] pb-2 font-beausans md:h-[42px] md:pb-4">
            <span className="border-l-2 border-primary pl-1 text-14 font-bold leading-[14px] text-[#282828] md:border-l-[3px] md:pl-2 md:text-22 md:leading-[22px]">
              {item.code}
            </span>
            <span className="text-10 font-semibold text-[#444444] md:text-[15px]">500Mbps</span>
          </div>
          <div className="pt-2 md:pb-1.5">
            <p className="text-10 font-medium text-[#767676] md:text-12 md:leading-[22px]">
              Tiện ích
            </p>
            <p className="text-10 font-semibold md:text-14 md:leading-[18px]">{item.equipment}</p>
          </div>
        </div>
        <InternetRegionalPricing item={item} />
      </div>
    </div>
  );
}
