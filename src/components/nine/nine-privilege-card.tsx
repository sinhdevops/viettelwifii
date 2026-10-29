/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { NinePrivilegeCardData } from "@/constants/nine/nine-data";
export function NinePrivilegeCard({ item }: { item: NinePrivilegeCardData }) {
  return (
    <div className="w-full py-3.5 md:px-0 md:py-0">
      <div className="relative mx-auto w-full max-w-[168px] md:max-w-[341px]">
        <img
          alt={item.title}
          loading="lazy"
          width="341"
          height="264"
          decoding="async"
          className="w-full"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset(
            "/_next/image?url=%2Fimages%2Fbg-nine-benefit.png&w=750&q=75",
          )}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Fbg-nine-benefit.png&w=384&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Fbg-nine-benefit.png&w=750&q=75")} 2x`,
          ].join(", ")}
        />
        <div className="absolute top-[46%] left-[50%] min-w-[130px] -translate-x-1/2 -translate-y-1/2 md:min-w-[260px]">
          <div className="h-[66px] border-b border-[#444444] md:h-[137px]">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <img
                alt={item.title}
                loading="lazy"
                width="77"
                height="77"
                decoding="async"
                className="w-[37px] md:w-[77px]"
                style={{ color: "transparent" } as CSSProperties}
                src={sourceAsset(item.image)}
              />
              <h3 className="font-beausans text-14 w-full max-w-[76px] leading-[15px] font-bold md:max-w-[160px] md:text-[28px] md:leading-[32px]">
                {item.title}
              </h3>
            </div>
          </div>
          <ul className="marker pt-2.5 pl-1 md:pt-5 md:pl-0">
            <li className="md:text-14 text-[6px] leading-[9px] font-semibold md:leading-[18px]">
              {item.primaryBenefit}
            </li>
            <li className="md:text-14 text-[6px] leading-[9px] font-semibold md:leading-[18px]">
              {item.secondaryBenefit}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
