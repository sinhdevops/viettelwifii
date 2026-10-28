import { CollectionMotion } from "../collection-motion";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { CollectionDialogButton } from "../collection-controls";
import type { NinePremiumPlanSlideData } from "./nine-data";
export function NinePremiumPlanSlide({ item }: { item: NinePremiumPlanSlideData }) {
  return (
    <div className="relative h-[321px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[38px] bg-[url('/images/bg-nine-mobi.png')] bg-cover bg-center bg-no-repeat px-6 pt-7 md:h-[493px] md:w-[334px] md:bg-[url('/images/bg-nine.png')] md:px-10 md:pt-20">
      <div className="font-beausans font-bold pt-[3px] text-18 md:pt-1.5 md:text-[30px]">
        {item.code}
      </div>
      <div className="flex items-center gap-1.5 pt-3 md:pt-5">
        <div className="h-[18px] w-0 rounded-full border-[1.8px] border-primary"></div>
        <p className="text-12 font-bold leading-[1.1] md:text-20">
          {item.monthlyPrice}
          {".000"} <span className="text-[9px] font-semibold md:text-14">VND/THÁNG</span>
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-[#444444] pb-2.5 pt-0.5 md:pb-[17px] md:pt-1.5">
        <p className="text-10 font-bold text-[#B3B3B3] md:text-14 md:text-white">
          {item.dailyDataGb}
          {"GB/ngày"}
        </p>
        <img
          alt="arrow-white-right"
          loading="lazy"
          width="17"
          height="7"
          decoding="async"
          className="w-2 md:w-[17px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/icons/arrow-white-right.svg")}
        />
      </div>
      <div className="flex flex-col gap-1.5 pt-1.5 md:flex-row md:gap-3 md:pt-3">
        <div>
          <p className="text-[8px] font-medium text-[#B3B3B3] md:pb-2 md:text-10">
            Thoại
          </p>
          <p className="text-10 font-semibold leading-tight md:text-12">
            <span className="block">Nội mạng 60 phút/cuộc</span>
            <span className="block">{item.externalCalls}</span>
          </p>
        </div>
        <div>
          <p className="text-[8px] font-medium text-[#B3B3B3] md:pb-2 md:text-10">SMS</p>
          <p className="text-10 font-semibold leading-tight md:text-12">
            250 SMS trong nước
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 pt-3 md:gap-3.5 md:pt-5">
        <div className="h-[1px] w-[27px] bg-[#444444] md:w-[54px]"></div>
        <p className="text-[8px] text-[#B3B3B3] md:text-10">Miễn phí</p>
        <div className="h-[1px] w-[27px] bg-[#444444] md:w-[54px]"></div>
      </div>
      <div className="relative flex select-none justify-center gap-1.5 pt-[18px] md:gap-3 md:pt-7">
        <div className="pointer-events-none absolute -top-[52px] md:-top-[94px]">
          <div className="h-[160px] w-[160px] md:h-[280px] md:w-[280px]">
            <CollectionMotion animation="plane" />
          </div>
        </div>
        <img
          alt="youtube"
          loading="lazy"
          width="33"
          height="33"
          decoding="async"
          className="w-5 md:w-[33px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/images/youtube.svg")}
        />
        <img
          alt="spotify"
          loading="lazy"
          width="33"
          height="33"
          decoding="async"
          className="w-5 md:w-[33px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/images/spotify.svg")}
        />
        <img
          alt="facebook"
          loading="lazy"
          width="33"
          height="33"
          decoding="async"
          className="w-5 md:w-[33px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/images/facebook.svg")}
        />
        <img
          alt="tiktok"
          loading="lazy"
          width="33"
          height="33"
          decoding="async"
          className="w-5 md:w-[33px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/images/tiktok.svg")}
        />
      </div>
      <div className="mx-auto mt-4 w-fit text-center md:mt-[31px]">
        <CollectionDialogButton
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 py-2 h-[22px] rounded-[8px] px-2.5 !text-[8px] md:h-[38px] md:rounded-[15px] md:px-[17px] md:!text-14"
          type="button"
          dialogLabel="Đăng ký ngay"
          pagePath="/goi-cuoc-nine"
        >
          Đăng ký ngay
        </CollectionDialogButton>
      </div>
    </div>
  );
}
