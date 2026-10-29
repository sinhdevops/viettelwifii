/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { CollectionDialogButton } from "@/features/collections/collection-controls";
import type { GicPlan } from "@/constants/gic/plans-data";
export function GicPlanCard({ plan }: { plan: GicPlan }) {
  return (
    <div className="relative h-[231px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[38px] bg-[url('/images/bg-GIC-mobi.png')] bg-cover bg-center bg-no-repeat pr-[24px] pl-[22px] shadow-[0px_5.12px_21.35px_0px_#FF2F2F26] md:h-[343px] md:w-[504px] md:rounded-[67px] md:bg-[url('/images/bg-GIC.png')]">
      {plan.popular ? (
        <span className="font-beausans absolute top-[57px] left-[30px] text-[7px] font-bold text-white md:top-[75px] md:left-[62px] md:text-[11px]">
          Phổ biến
        </span>
      ) : (
        <span className="font-beausans absolute top-[50px] left-[20px] h-[24px] w-[55px] bg-[#fff1ee] text-[7px] font-bold text-white md:top-[68px] md:left-[40px] md:h-[28px] md:w-[100px] md:text-[11px]"></span>
      )}
      <span className="font-beausans absolute bottom-[17px] left-[22px] text-[15px] font-bold text-white md:bottom-[31px] md:left-[44px] md:text-[35px]">
        {plan.code}
      </span>
      <div className="border-b border-[#D0D0D0A8] pt-[66px] pb-2.5 md:px-[22px] md:pt-[104px] md:pb-[13px]">
        <div className="font-beausans flex items-center justify-between">
          <div>
            <p className="text-[12px] leading-[28px] font-bold md:text-[27px]">
              {plan.code}{" "}
              <span className="md:text-18 text-[9px] text-[#767676]">gửi</span>{" "}
              290
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
              <p className="text-10 leading-[17px] font-bold md:text-[21px]">
                {plan.dailyData}
              </p>
              {plan.dailyData && (
                <p className="text-10 md:text-12 font-bold md:font-semibold">
                  /ngày
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50px] pt-2 md:h-[75px] md:px-[22px] md:pt-3">
        <div>
          <p className="text-10 font-medium text-[#767676] md:text-[15px]">
            {plan.benefitHeading}
          </p>
          {plan.benefits.map((benefit) => (
            <p
              key={benefit}
              className="text-[8px] font-semibold md:text-[17px] md:leading-[20px]"
            >
              {benefit}
            </p>
          ))}
        </div>
      </div>
      <div className="ml-auto w-fit pt-2.5 md:px-[22px]">
        <div className="hidden md:block">
          <CollectionDialogButton
            className="bg-primary hover:bg-primary-dark inline-flex h-[26px] items-center justify-center rounded-[10px] px-5 py-2 text-[8px] font-bold whitespace-nowrap text-gray-50 shadow-[0px_3.25px_16.24px_0px_#EE121240] ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[42px] md:rounded-2xl md:px-10 md:text-[14px] dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            type="button"
            dialogLabel="Đăng ký"
            pagePath="/goi-cuoc-gic"
          >
            Đăng ký
          </CollectionDialogButton>
        </div>
        <a
          href={plan.smsHref}
          className="bg-primary hover:bg-primary-dark inline-flex h-[26px] items-center justify-center rounded-[10px] px-5 py-2 text-[8px] font-bold whitespace-nowrap text-gray-50 shadow-[0px_3.25px_16.24px_0px_#EE121240] ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden md:h-[42px] md:rounded-2xl md:px-10 md:text-[14px] dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          Đăng ký
        </a>
      </div>
    </div>
  );
}
