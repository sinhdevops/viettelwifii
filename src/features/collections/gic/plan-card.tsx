/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { CollectionDialogButton } from "../collection-controls";
import type { GicPlan } from "./plans-data";
export function GicPlanCard({ plan }: { plan: GicPlan }) {
  return (
    <div className="relative h-[231px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[38px] bg-[url('/images/bg-GIC-mobi.png')] bg-cover bg-center bg-no-repeat pl-[22px] pr-[24px] shadow-[0px_5.12px_21.35px_0px_#FF2F2F26] md:h-[343px] md:w-[504px] md:rounded-[67px] md:bg-[url('/images/bg-GIC.png')]">
      {plan.popular ? (
        <span className="absolute left-[30px] top-[57px] font-beausans text-[7px] font-bold text-white md:left-[62px] md:top-[75px] md:text-[11px]">
          Phổ biến
        </span>
      ) : (
        <span className="absolute font-beausans text-[7px] font-bold text-white md:text-[11px] left-[20px] top-[50px] h-[24px] w-[55px] bg-[#fff1ee] md:left-[40px] md:top-[68px] md:h-[28px] md:w-[100px]"></span>
      )}
      <span className="absolute bottom-[17px] left-[22px] font-beausans text-[15px] font-bold text-white md:bottom-[31px] md:left-[44px] md:text-[35px]">
        {plan.code}
      </span>
      <div className="border-b border-[#D0D0D0A8] pb-2.5 pt-[66px] md:px-[22px] md:pb-[13px] md:pt-[104px]">
        <div className="flex items-center justify-between font-beausans">
          <div>
            <p className="text-[12px] font-bold leading-[28px] md:text-[27px]">
              {plan.code} <span className="text-[9px] text-[#767676] md:text-18">gửi</span> 290
            </p>
            <p className="text-10 font-bold text-[#767676] md:text-[17px]">
              {plan.monthlyPrice}
              .000đ/30 ngày
            </p>
          </div>
          <div>
            <img
              alt="next"
              loading="lazy"
              width="24"
              height="10"
              decoding="async"
              className="my-[12px] ml-auto w-3 md:hidden"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/icons/arrow-black-right.svg")}
            />
            <div className="flex text-right text-[#444444] md:block">
              <p className="text-10 font-bold leading-[17px] md:text-[21px]">{plan.dailyData}</p>
              {plan.dailyData && (
                <p className="text-10 font-bold md:text-12 md:font-semibold">/ngày</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50px] pt-2 md:h-[75px] md:px-[22px] md:pt-3">
        <div>
          <p className="text-10 font-medium text-[#767676] md:text-[15px]">{plan.benefitHeading}</p>
          {plan.benefits.map((benefit) => (
            <p key={benefit} className="text-[8px] font-semibold md:text-[17px] md:leading-[20px]">
              {benefit}
            </p>
          ))}
        </div>
      </div>
      <div className="ml-auto w-fit pt-2.5 md:px-[22px]">
        <div className="hidden md:block">
          <CollectionDialogButton
            className="inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 py-2 h-[26px] rounded-[10px] px-5 text-[8px] font-bold shadow-[0px_3.25px_16.24px_0px_#EE121240] md:h-[42px] md:rounded-2xl md:px-10 md:text-[14px]"
            type="button"
            dialogLabel="Đăng ký"
            pagePath="/goi-cuoc-gic"
          >
            Đăng ký
          </CollectionDialogButton>
        </div>
        <a
          href={plan.smsHref}
          className="inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 py-2 h-[26px] rounded-[10px] px-5 text-[8px] font-bold shadow-[0px_3.25px_16.24px_0px_#EE121240] md:hidden md:h-[42px] md:rounded-2xl md:px-10 md:text-[14px]"
        >
          Đăng ký
        </a>
      </div>
    </div>
  );
}
