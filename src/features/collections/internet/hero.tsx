/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
export function InternetHero() {
  return (
    <div className="container relative pb-8 pt-12 md:pb-0 md:pt-[50px]">
      <div className="pl-6 md:pl-0">
        <h1 className="font-beausans text-18 leading-[22px] md:text-[49.5px] md:leading-[63px]">
          {"Trải nghiệm Internet "}
          <br />
          không giới hạn
          <br />
          <span className="text-12 text-primary md:text-[30px]">Từ 195.000đ/tháng</span>
        </h1>
        <div className="hidden py-[25px] md:block">
          <div className="flex items-center gap-2">
            <img
              alt="checkmark"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/icons/check.svg")}
            />
            <p className="text-18 font-medium text-[#282828] opacity-60">
              Băng thông lên tới 1Gbps, tối thiểu 300Mbps
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <img
                alt="checkmark"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                style={{ color: "transparent" } as CSSProperties}
                src={sourceAsset("/icons/check.svg")}
              />
              <p className="text-18 font-medium text-[#282828] opacity-60">
                Trang bị bộ kích sóng Mesh Wifi
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                alt="checkmark"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                style={{ color: "transparent" } as CSSProperties}
                src={sourceAsset("/icons/check.svg")}
              />
              <p className="text-18 font-medium text-[#282828] opacity-60">
                Tặng miễn phí Modem Wifi thế hệ thứ 6
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-6 md:top-0">
        <img
          alt="internet-banner"
          loading="lazy"
          width="610"
          height="421"
          decoding="async"
          className="h-[161px] w-[217px] md:h-[421px] md:w-[610px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/_next/image?url=%2Fimages%2Finternet-banner.png&w=1920&q=75")}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-banner.png&w=640&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-banner.png&w=1920&q=75")} 2x`,
          ].join(", ")}
        />
      </div>
    </div>
  );
}
