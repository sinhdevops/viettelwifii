/* eslint-disable @next/next/no-img-element */
import { Button as AppButton } from "@/components/ui/button";
import type { CSSProperties } from "react";
import { CollectionDialogButton } from "../collection-controls";
import type { UltraSpeedInternetSlideData } from "./internet-data";
export function UltraSpeedInternetSlide({
  item,
}: {
  item: UltraSpeedInternetSlideData;
}) {
  return (
    <div className="internet-card text-text-dark flex h-[258px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[32px] bg-[url('/images/internet-card-bg-mobi.png')] bg-cover bg-center bg-no-repeat md:h-[412px] md:w-full md:rounded-[74px] md:bg-[url('/images/internet-card-bg.png')]">
      <div className="flex h-[74px] items-center justify-center md:h-[140px]">
        <img
          alt="package icon"
          loading="lazy"
          width="97"
          height="102"
          decoding="async"
          className="h-[56px] w-[53px] md:h-[102px] md:w-[97px]"
          style={{ color: "transparent" } as CSSProperties}
          src="/assets/viettelup/d5ea8658814ef5bafd7bfb5a.webp"
          srcSet={[
            `/assets/viettelup/2b12a213ee534550be1ca196.webp 1x`,
            `/assets/viettelup/d5ea8658814ef5bafd7bfb5a.webp 2x`,
          ].join(", ")}
        />
      </div>
      <div className="flex grow flex-col justify-between px-4 pt-3 pb-4 md:px-8 md:pt-4 md:pb-8">
        <div>
          <div className="font-beausans flex h-[26px] items-center justify-between border-b border-[#d0d0d0a6] pb-2 md:h-[42px] md:pb-4">
            <span className="border-primary text-14 md:text-22 border-l-2 pl-1 leading-[14px] font-bold text-[#282828] md:border-l-[3px] md:pl-2 md:leading-[22px]">
              {item.code}
            </span>
            <span className="text-10 font-semibold text-[#444444] md:text-[15px]">
              1Gbps
            </span>
          </div>
          <div className="pt-2 md:pb-1.5">
            <p className="text-10 md:text-12 font-medium text-[#767676] md:leading-[22px]">
              Tiện ích
            </p>
            <p className="text-10 md:text-14 font-semibold md:leading-[18px]">
              {item.equipment}
            </p>
          </div>
        </div>
        <div className="cursor-default">
          <div className="border-b border-[#d0d0d0a6] pb-2 md:pb-3">
            <p className="text-10 md:text-12 font-medium text-[#767676] md:leading-[22px]">
              Khu vực lắp đặt
            </p>
            <div
              role="radiogroup"
              aria-required="false"
              aria-orientation="horizontal"
              dir="ltr"
              className="grid grid-flow-col gap-1.5 md:pt-1"
              tabIndex={0}
              data-orientation="horizontal"
              style={
                {
                  outlineColor: "initial",
                  outlineStyle: "none",
                  outlineWidth: "initial",
                } as CSSProperties
              }
            >
              <div className="flex items-center space-x-1">
                <AppButton
                  variant="unstyled"
                  size="unstyled"
                  type="button"
                  role="radio"
                  aria-checked="true"
                  value="HN-HCM"
                  className="border-primary text-primary flex aspect-square h-3 w-3 items-center justify-center rounded-full border ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:h-4 md:w-4 dark:border-gray-50 dark:text-gray-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
                  id={item.capitalRadioId}
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle fill-primary h-2 w-2 text-current md:h-2.5 md:w-2.5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </span>
                </AppButton>
                <label className="md:!text-14 cursor-pointer text-sm !text-[9px] leading-none font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  HN &amp; TP.HCM
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 md:pt-3">
            <div>
              <p className="md:text-12 text-[9px] font-medium text-[#767676] md:leading-[22px]">
                Đơn giá
              </p>
              <p className="text-10 font-semibold whitespace-nowrap md:text-[15px] md:font-bold">
                {item.monthlyPrice}
                đ/tháng
              </p>
            </div>
            <div className="flex gap-2">
              <CollectionDialogButton
                className="bg-primary hover:bg-primary-dark !text-10 inline-flex h-[26px] items-center justify-center rounded-[10px] px-3.5 py-2 text-sm leading-[20px] font-medium whitespace-nowrap text-white ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[42px] md:rounded-2xl md:px-6 md:!text-[15px] md:font-bold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                type="button"
                dialogLabel="Đăng ký"
                pagePath="/internet"
              >
                Đăng ký
              </CollectionDialogButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
