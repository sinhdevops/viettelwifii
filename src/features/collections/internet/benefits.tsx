/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { InternetBenefitCard } from "./internet-cards";
import { internetBenefits } from "./internet-data";
export function InternetBenefits() {
  return (
    <div className="relative w-full bg-[#fff1f1] md:bg-transparent">
      <img
        alt="background-dots"
        loading="lazy"
        width="680"
        height="860"
        decoding="async"
        className="absolute bottom-0 left-0 hidden md:block"
        style={{ color: "transparent" } as CSSProperties}
        src={sourceAsset("/_next/image?url=%2Fimages%2Fbg-internet-statements.png&w=1920&q=75")}
        srcSet={[
          `${sourceAsset("/_next/image?url=%2Fimages%2Fbg-internet-statements.png&w=750&q=75")} 1x`,
          `${sourceAsset("/_next/image?url=%2Fimages%2Fbg-internet-statements.png&w=1920&q=75")} 2x`,
        ].join(", ")}
      />
      <div className="container px-5 md:px-0">
        <h2 className="hidden text-center font-beausans text-[44px] leading-[54px] text-[#2C2F31] md:block">
          {"Internet Viettel phục vụ trọn vẹn "}
          <br />
          <span className="text-primary">nhu cầu cá nhân, gia đình, game thủ</span>
        </h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-3.5 gap-y-4 py-8 md:flex md:gap-8 md:pb-[90px] md:pt-[60px]">
          <h2 className="text-left font-beausans text-22 leading-[28px] text-[#2C2F31] md:hidden">
            {"Phục vụ trọn vẹn nhu cầu "}
            <br />
            <span className="text-primary">cá nhân, gia đình, game thủ</span>
          </h2>
          {internetBenefits.map((item) => (
            <InternetBenefitCard key={item.imageAlt} item={item} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-between pb-8 md:flex-row md:pb-0">
          <div className="z-10 order-2 rounded-[20px] bg-[#fcfbfc] md:order-first md:bg-transparent">
            <img
              alt="internet-statements"
              loading="lazy"
              width="698"
              height="402"
              decoding="async"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/_next/image?url=%2Fimages%2Finternet-statements.png&w=1920&q=75")}
              srcSet={[
                `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-statements.png&w=750&q=75")} 1x`,
                `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-statements.png&w=1920&q=75")} 2x`,
              ].join(", ")}
            />
          </div>
          <div className="max-w-[484px] pb-6 md:pb-0">
            <h3 className="hidden font-beausans text-[44px] font-bold leading-[52px] md:block">
              {"HomeWifi - Router "}
              <br />
              phủ sóng cả nhà
            </h3>
            <h3 className="font-beausans text-22 font-bold leading-[28px] md:hidden">
              HomeWifi - <span className="text-primary">Router phủ sóng cả nhà</span>
            </h3>
            <p className="pt-2 text-12 leading-[18px] md:pt-6 md:text-20 md:leading-[28px]">
              Thiết bị kích sóng wifi và mở rộng vùng phủ khắc phục mọi vấn đề của wifi truyền thống
              (không phủ sóng nhà nhiều tầng, nhiễu sóng do vật cản, chịu tải không lớn, mạng giật
              lag,...).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
