/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
export function InternetInstallationOffer() {
  return (
    <div className="container px-5 py-8 md:flex md:items-center md:justify-between md:px-0 md:py-[110px]">
      <div className="md:w-[557px]">
        <h2 className="font-beausans text-22 leading-[28px] text-[#2C2F31] md:text-[44px] md:leading-[54px]">
          {"Ưu đãi lắp đặt "}
          <br className="hidden md:block" />
          <span className="hidden text-primary md:inline">dành riêng cho bạn</span>
          <span className="md:hidden">dành cho bạn</span>
        </h2>
        <p className="hidden pb-4 pt-4 text-20 text-[#2C2F31] md:block">
          Khách hàng hòa mạng gói 12 tháng được gia hạn thêm 01 tháng sử dụng, tối ưu chi phí – nâng
          trọn trải nghiệm.
        </p>
        <p className="pt-2 text-14 text-[#2C2F31] md:hidden">Lắp 12 tháng tặng 1 tháng</p>
      </div>
      <div className="pt-6 md:py-0">
        <img
          alt="internet-request"
          loading="lazy"
          width="459"
          height="459"
          decoding="async"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/_next/image?url=%2Fimages%2Finternet-request.webp&w=1080&q=75")}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-request.webp&w=640&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-request.webp&w=1080&q=75")} 2x`,
          ].join(", ")}
        />
      </div>
    </div>
  );
}
