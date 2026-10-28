/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
export function NineHero() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="max-w-[272px] pt-6 font-beausans md:pt-[55px]">
        <div className="nine-gradient w-fit rounded-t-[7px] rounded-br-[7px] px-2 py-[7px] md:rounded-t-[12px] md:rounded-br-[12px] md:px-[15px] md:py-3">
          <p className="text-10 font-bold leading-tight text-white md:text-18">
            Trải nghiệm di động
          </p>
        </div>
        <h2 className="mt-2 w-[150px] font-beausans text-[23px] font-bold text-white md:mt-0 md:w-[unset] md:text-[49px]">
          Đẳng cấp khách hàng
        </h2>
        <img
          alt="Khách hàng ưu tiên"
          loading="lazy"
          width="269"
          height="146"
          decoding="async"
          className="w-[126px] md:w-[269px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/_next/image?url=%2Fimages%2Fbanner-nine-uu-tien.png&w=640&q=75")}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Fbanner-nine-uu-tien.png&w=384&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Fbanner-nine-uu-tien.png&w=640&q=75")} 2x`,
          ].join(", ")}
        />
      </div>
      <div>
        <img
          alt="banner-nine"
          loading="lazy"
          width="438"
          height="169"
          decoding="async"
          className="hidden md:block"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/_next/image?url=%2Fimages%2Fbanner-nine.png&w=1080&q=75")}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Fbanner-nine.png&w=640&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Fbanner-nine.png&w=1080&q=75")} 2x`,
          ].join(", ")}
        />
      </div>
      <div className="max-w-[325px]">
        <p className="md:font-20 hidden text-white md:mb-8 md:block md:leading-[28px]">
          Thỏa sức gọi, lướt 5G cực nhanh mọi lúc mọi nơi. Data roaming miễn phí tại hơn 150 quốc
          gia. Hỗ trợ VIP 24/7. Phòng chờ hạng sang, đưa đón tận sân bay
        </p>
        <img
          alt="banner-nine"
          loading="lazy"
          width="124"
          height="46"
          decoding="async"
          className="mb-3.5 md:hidden"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/_next/image?url=%2Fimages%2Fbanner-nine.png&w=256&q=75")}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Fbanner-nine.png&w=128&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Fbanner-nine.png&w=256&q=75")} 2x`,
          ].join(", ")}
        />
      </div>
    </div>
  );
}
