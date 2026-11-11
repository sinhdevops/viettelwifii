import Link from "next/link";
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
    <div className="internet-card text-text-dark flex h-[258px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[32px] bg-[url('/images/internet-card-bg-mobi.png')] bg-cover bg-center bg-no-repeat md:h-[412px] md:w-[359px] md:rounded-[74px] md:bg-[url('/images/internet-card-bg.png')]">
      <div className="flex h-[74px] items-center justify-center md:h-[140px]">
        {visual}
      </div>
      <div className="flex grow flex-col justify-between px-4 pt-3 pb-4 md:px-8 md:pt-4 md:pb-8">
        <div>
          <div className="font-beausans flex h-[26px] items-center justify-between border-b border-[#d0d0d0a6] pb-2 md:h-[42px] md:pb-4">
            <Link
              href={`/internet/${item.code}`}
              className="border-primary text-14 md:text-22 border-l-2 pl-1 leading-[14px] font-bold text-[#282828] md:border-l-[3px] md:pl-2 md:leading-[22px]"
            >
              {item.code}
            </Link>
            <span className="text-10 font-semibold text-[#444444] md:text-[15px]">
              {item.bandwidth}
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
        <InternetRegionalPricing item={item} />
      </div>
    </div>
  );
}
