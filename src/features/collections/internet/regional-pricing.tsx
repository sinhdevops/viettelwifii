"use client";

import { CollectionDialogButton } from "../collection-controls";
import { useState } from "react";
import {
  InternetRegionPicker,
  type InternetRegion,
} from "./internet-region-picker";
import { sourcePrices } from "./regional-prices";
export type InternetRegionalPrice = {
  capitalRadioId: string;
  regionalRadioId: string;
  monthlyPrice: string;
};
/** Region selection and pricing share React state; legacy DOM handlers skip this group. */
export function InternetRegionalPricing({
  item,
}: {
  item: InternetRegionalPrice;
}) {
  const [region, setRegion] = useState<InternetRegion>("Other");
  const code = item.capitalRadioId.replace(/-(?:HN-HCM|Other)$/, "");
  const prices = sourcePrices[code]?.split("-");
  const selectedPrice = prices?.[region === "HN-HCM" ? 0 : 1];
  const monthlyPrice =
    region === "Other"
      ? item.monthlyPrice
      : selectedPrice
        ? `${selectedPrice}.000`
        : item.monthlyPrice;

  return (
    <div className="cursor-default">
      <div className="border-b border-[#d0d0d0a6] pb-2 md:pb-3">
        <p className="text-10 md:text-12 font-medium text-[#767676] md:leading-[22px]">
          Khu vực lắp đặt
        </p>
        <InternetRegionPicker
          capitalRadioId={item.capitalRadioId}
          regionalRadioId={item.regionalRadioId}
          value={region}
          onValueChange={setRegion}
        />
      </div>
      <div className="flex items-center justify-between pt-2 md:pt-3">
        <div>
          <p className="md:text-12 text-[9px] font-medium text-[#767676] md:leading-[22px]">
            Đơn giá
          </p>
          <p className="text-10 font-semibold whitespace-nowrap md:text-[15px] md:font-bold">
            {monthlyPrice}
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
  );
}
