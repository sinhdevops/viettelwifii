import type { ReactNode } from "react";
import type {
  BroadbandInternetCardData,
  ComboInternetCardData,
} from "./internet-data";
import { InternetRegionalPricing } from "./regional-pricing";

type InternetPlanCardProps = {
  item: ComboInternetCardData | BroadbandInternetCardData;
  visual: ReactNode;
};

export function InternetPlanCard({ item, visual }: InternetPlanCardProps) {
  return (
    <div className="internet-card flex h-[258px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[32px] bg-[url('/images/internet-card-bg-mobi.png')] bg-cover bg-center bg-no-repeat text-text-dark md:h-[412px] md:w-[359px] md:rounded-[74px] md:bg-[url('/images/internet-card-bg.png')]">
      <div className="flex h-[74px] items-center justify-center md:h-[140px]">
        {visual}
      </div>
      <div className="flex grow flex-col justify-between px-4 pb-4 pt-3 md:px-8 md:pb-8 md:pt-4">
        <div>
          <div className="flex h-[26px] items-center justify-between border-b border-[#d0d0d0a6] pb-2 font-beausans md:h-[42px] md:pb-4">
            <span className="border-l-2 border-primary pl-1 text-14 font-bold leading-[14px] text-[#282828] md:border-l-[3px] md:pl-2 md:text-22 md:leading-[22px]">
              {item.code}
            </span>
            <span className="text-10 font-semibold text-[#444444] md:text-[15px]">
              {item.bandwidth}
            </span>
          </div>
          <div className="pt-2 md:pb-1.5">
            <p className="text-10 font-medium text-[#767676] md:text-12 md:leading-[22px]">
              Tiện ích
            </p>
            <p className="text-10 font-semibold md:text-14 md:leading-[18px]">
              {item.equipment}
            </p>
          </div>
        </div>
        <InternetRegionalPricing item={item} />
      </div>
    </div>
  );
}
