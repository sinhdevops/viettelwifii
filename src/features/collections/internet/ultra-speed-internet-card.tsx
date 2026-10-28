/* eslint-disable @next/next/no-img-element */
import { Button as AppButton } from "@/components/ui/button";
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { CollectionDialogButton } from "../collection-controls";
import type { UltraSpeedInternetCardData } from "./internet-data";
export function UltraSpeedInternetCard({ item }: { item: UltraSpeedInternetCardData }) {
  return (
    <div className="internet-card flex h-[258px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[32px] bg-[url('/images/internet-card-bg-mobi.png')] bg-cover bg-center bg-no-repeat text-text-dark md:h-[412px] md:w-[359px] md:rounded-[74px] md:bg-[url('/images/internet-card-bg.png')]">
      <div className="flex h-[74px] items-center justify-center md:h-[140px]">
        <img
          alt="package icon"
          loading="lazy"
          width="97"
          height="102"
          decoding="async"
          className="h-[56px] w-[53px] md:h-[102px] md:w-[97px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/_next/image?url=%2Fimages%2Finternet-ultra-speed.png&w=256&q=75")}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-ultra-speed.png&w=128&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-ultra-speed.png&w=256&q=75")} 2x`,
          ].join(", ")}
        />
      </div>
      <div className="flex grow flex-col justify-between px-4 pb-4 pt-3 md:px-8 md:pb-8 md:pt-4">
        <div>
          <div className="flex h-[26px] items-center justify-between border-b border-[#d0d0d0a6] pb-2 font-beausans md:h-[42px] md:pb-4">
            <span className="border-l-2 border-primary pl-1 text-14 font-bold leading-[14px] text-[#282828] md:border-l-[3px] md:pl-2 md:text-22 md:leading-[22px]">
              {item.code}
            </span>
            <span className="text-10 font-semibold text-[#444444] md:text-[15px]">1Gbps</span>
          </div>
          <div className="pt-2 md:pb-1.5">
            <p className="text-10 font-medium text-[#767676] md:text-12 md:leading-[22px]">
              Tiện ích
            </p>
            <p className="text-10 font-semibold md:text-14 md:leading-[18px]">{item.equipment}</p>
          </div>
        </div>
        <div className="cursor-default">
          <div className="border-b border-[#d0d0d0a6] pb-2 md:pb-3">
            <p className="text-10 font-medium text-[#767676] md:text-12 md:leading-[22px]">
              Khu vực lắp đặt
            </p>
            <div
              role="radiogroup"
              aria-required="false"
              aria-orientation="horizontal"
              dir="ltr"
              className="grid gap-1.5 grid-flow-col md:pt-1"
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
                <AppButton variant="unstyled" size="unstyled"
                  type="button"
                  role="radio"
                  aria-checked="true"
                  value="HN-HCM"
                  className="flex aspect-square h-3 w-3 items-center justify-center rounded-full border border-primary text-primary ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-50 dark:text-gray-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 md:h-4 md:w-4"
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
                      className="lucide lucide-circle h-2 w-2 fill-primary text-current md:h-2.5 md:w-2.5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </span>
                </AppButton>
                <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer !text-[9px] font-semibold md:!text-14">
                  HN &amp; TP.HCM
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 md:pt-3">
            <div>
              <p className="text-[9px] font-medium text-[#767676] md:text-12 md:leading-[22px]">
                Đơn giá
              </p>
              <p className="whitespace-nowrap text-10 font-semibold md:text-[15px] md:font-bold">
                {item.monthlyPrice}
                đ/tháng
              </p>
            </div>
            <div className="flex gap-2">
              <CollectionDialogButton
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 h-[26px] rounded-[10px] px-3.5 py-2 !text-10 leading-[20px] text-white md:h-[42px] md:rounded-2xl md:px-6 md:!text-[15px] md:font-bold"
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
