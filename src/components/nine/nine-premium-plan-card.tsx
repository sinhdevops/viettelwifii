import { CollectionMotion } from "@/features/collections/collection-motion";
/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import { CollectionDialogButton } from "@/features/collections/collection-controls";
import type { NinePremiumPlanCardData } from "@/constants/nine/nine-data";
export function NinePremiumPlanCard({
  item,
}: {
  item: NinePremiumPlanCardData;
}) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className="min-w-0 shrink-0 grow-0 basis-1/3 pr-8 pl-8 transition-all duration-300"
    >
      <div className="relative h-[321px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[38px] bg-[url('/images/bg-nine-mobi.png')] bg-cover bg-center bg-no-repeat px-6 pt-7 md:h-[493px] md:w-[334px] md:bg-[url('/images/bg-nine.png')] md:px-10 md:pt-20">
        <div className="font-beausans text-18 pt-[3px] font-bold md:pt-1.5 md:text-[30px]">
          {item.code}
        </div>
        <div className="flex items-center gap-1.5 pt-3 md:pt-5">
          <div className="border-primary h-[18px] w-0 rounded-full border-[1.8px]"></div>
          <p className="text-12 md:text-20 leading-[1.1] font-bold">
            {item.monthlyPrice}
            {".000"}{" "}
            <span className="md:text-14 text-[9px] font-semibold">
              VND/THÁNG
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between border-b border-[#444444] pt-0.5 pb-2.5 md:pt-1.5 md:pb-[17px]">
          <p className="text-10 md:text-14 font-bold text-[#B3B3B3] md:text-white">
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
            src="/assets/viettelup/875ba3137a94cafd322f2484.svg"
          />
        </div>
        <div className="flex flex-col gap-1.5 pt-1.5 md:flex-row md:gap-3 md:pt-3">
          <div>
            <p className="md:text-10 text-[8px] font-medium text-[#B3B3B3] md:pb-2">
              Thoại
            </p>
            <p className="text-10 md:text-12 leading-tight font-semibold">
              <span className="block">Nội mạng 60 phút/cuộc</span>
              <span className="block">{item.externalCalls}</span>
            </p>
          </div>
          <div>
            <p className="md:text-10 text-[8px] font-medium text-[#B3B3B3] md:pb-2">
              SMS
            </p>
            <p className="text-10 md:text-12 leading-tight font-semibold">
              250 SMS trong nước
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 pt-3 md:gap-3.5 md:pt-5">
          <div className="h-[1px] w-[27px] bg-[#444444] md:w-[54px]"></div>
          <p className="md:text-10 text-[8px] text-[#B3B3B3]">Miễn phí</p>
          <div className="h-[1px] w-[27px] bg-[#444444] md:w-[54px]"></div>
        </div>
        <div className="relative flex justify-center gap-1.5 pt-[18px] select-none md:gap-3 md:pt-7">
          <div className="pointer-events-none absolute -top-[52px] md:-top-[94px]">
            <div className="h-[160px] w-[160px] md:h-[280px] md:w-[280px]">
              <CollectionMotion animation="plane" width={280} height={280} />
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
            src="/assets/viettelup/7e5b5e57e94a0a4fed8dfede.svg"
          />
          <img
            alt="spotify"
            loading="lazy"
            width="33"
            height="33"
            decoding="async"
            className="w-5 md:w-[33px]"
            style={{ color: "transparent" } as CSSProperties}
            src="/assets/viettelup/72b798357be30ba548f62d91.svg"
          />
          <img
            alt="facebook"
            loading="lazy"
            width="33"
            height="33"
            decoding="async"
            className="w-5 md:w-[33px]"
            style={{ color: "transparent" } as CSSProperties}
            src="/assets/viettelup/84b4d07b454ce55bea7aca8a.svg"
          />
          <img
            alt="tiktok"
            loading="lazy"
            width="33"
            height="33"
            decoding="async"
            className="w-5 md:w-[33px]"
            style={{ color: "transparent" } as CSSProperties}
            src="/assets/viettelup/f70b923544e36b46b35f4f1e.svg"
          />
        </div>
        <div className="mx-auto mt-4 w-fit text-center md:mt-[31px]">
          <CollectionDialogButton
            className="bg-primary hover:bg-primary-dark md:!text-14 inline-flex h-[22px] items-center justify-center rounded-[8px] px-2.5 py-2 text-sm !text-[8px] font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[38px] md:rounded-[15px] md:px-[17px] dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            type="button"
            dialogLabel="Đăng ký ngay"
            pagePath="/goi-cuoc-nine"
          >
            Đăng ký ngay
          </CollectionDialogButton>
        </div>
      </div>
    </div>
  );
}
