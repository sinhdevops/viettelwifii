/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { PackageSourceDialogTrigger } from "./package-source-dialog-trigger";
import type { RelatedPackage } from "../_data/package-types";
export function RelatedPackageCard({ card }: { card: RelatedPackage }) {
  return (
    <div className="shrink-0 [&_.data-card-icons]:border-[#DDD] [&_.data-card-icons]:bg-[#FAFAFA]  [&_.data-card]:bg-[url('/images/bg-data.png')]">
      <div
        className="data-card relative flex h-[197px] w-[158px] flex-col justify-between bg-cover font-magistral text-text-dark md:h-[326px] md:w-[261px]"
        style={{
          backgroundImage: `url(${sourceAsset("/images/bg-data.png")})`,
        }}
      >
        <div className="flex h-[26px] items-center justify-center pb-1 md:h-[42px] md:pb-[6px]">
          <p className="text-14 font-bold md:text-22 md:leading-[22px]">
            {card.code}
          </p>
        </div>
        <div className="">
          <PackageAllowance allowance={card.allowance} />
          <PackageBenefits benefits={card.benefits} />
        </div>
        <div className="flex flex-col items-center justify-end pb-3 md:h-[96px] md:pb-5">
          <p className="pb-[4px] font-medium leading-[20px] md:pb-5">
            <span className="text-14 font-bold md:text-24">
              {card.price.amount}
            </span>
            <span className="text-[10px] font-bold uppercase md:text-14">
              {card.price.period}
            </span>
          </p>
          <PackageCardActions card={card} />
        </div>
      </div>
    </div>
  );
}
function PackageAllowance({
  allowance,
}: {
  allowance: RelatedPackage["allowance"];
}) {
  if (allowance.kind === "social")
    return (
      <div className="flex flex-col items-center">
        <p className="text-20 font-bold leading-[20px] text-primary md:text-[32px] md:leading-[32px]">
          {allowance.value}
        </p>
        <p className="text-14 md:pt-1 md:text-22">{allowance.period}</p>
        <p className="hidden">{allowance.description}</p>
      </div>
    );
  return (
    <div className="flex items-center justify-center md:pb-2">
      <div>
        <span className="text-[28px] font-bold leading-[39px] text-primary md:mb-1 md:text-[44px] md:leading-[60px]">
          {allowance.value}
        </span>
        <span className="text-[10px] font-bold uppercase leading-[22px] md:text-20 md:leading-[32px]">
          {allowance.period}
        </span>
      </div>
      <p className="hidden">{allowance.description}</p>
    </div>
  );
}
function PackageBenefits({
  benefits,
}: {
  benefits: RelatedPackage["benefits"];
}) {
  return (
    <div className="flex flex-col items-center pb-[8px] pt-2">
      {benefits.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={
            benefits.largeText
              ? "text-center text-[14px] leading-[14px] md:text-[20px] md:leading-[24px]"
              : "text-center text-[12px] leading-[14px] md:text-[18px] md:leading-[24px]"
          }
        >
          {paragraph}
        </p>
      ))}
      {benefits.icons.length > 0 && (
        <div className="data-card-icons mt-[6px] flex h-[32px] w-fit items-center justify-center gap-[1px] rounded-full border border-white bg-[#fbf1ea] px-[3px] md:h-[54px] md:px-[6px]">
          {benefits.icons.map((icon) => (
            <img
              key={icon.name}
              alt={icon.name}
              loading="lazy"
              width="18"
              height="18"
              decoding="async"
              className="md:h-[30px] md:w-[30px]"
              src={sourceAsset(icon.src)}
            />
          ))}
          {benefits.note !== undefined && (
            <span className="px-[3px] text-[11px]">{benefits.note}</span>
          )}
        </div>
      )}
    </div>
  );
}
function PackageCardActions({ card }: { card: RelatedPackage }) {
  const cta = card.cta;
  if (cta.variant === "registration")
    return (
      <div className="flex gap-2">
        <a
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 h-[28px] w-[100px] rounded-full py-0 uppercase md:hidden md:h-[34px] md:text-16 md:font-semibold md:pb-1"
          href={cta.mobileHref}
        >
          {cta.mobileLabel}
        </a>
        <div className="hidden md:block">
          <PackageSourceDialogTrigger
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 h-[24px] rounded-full py-0 md:h-[34px] md:w-[106px] md:font-semibold text-gray-50 md:pb-1 md:text-16"
            itemPath={cta.itemPath}
          >
            {cta.desktopLabel}
          </PackageSourceDialogTrigger>
        </div>
        <a
          className="items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-primary bg-white hover:bg-red-50 hover:text-primary-dark dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 px-4 hidden h-[34px] w-[106px] rounded-full py-0 text-16 font-semibold md:block md:pb-[2px]"
          href={card.path}
        >
          CHI TIẾT
        </a>
      </div>
    );
  if (cta.variant === "postpaid-contact")
    return (
      <div className="flex gap-2">
        <div className="hidden md:block">
          <PackageSourceDialogTrigger
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 h-[24px] rounded-full py-0 md:h-[34px] md:w-[106px] md:font-semibold text-gray-50 md:pb-1 md:text-16"
            itemPath={cta.itemPath}
          >
            {cta.desktopLabel}
          </PackageSourceDialogTrigger>
        </div>
        <a
          href={cta.mobileHref}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 h-[24px] rounded-full py-0 md:hidden md:h-[34px] md:w-[106px] md:pb-2 md:text-16 md:font-semibold"
        >
          {cta.mobileLabel}
        </a>
        <a
          className="items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-primary bg-white hover:bg-red-50 hover:text-primary-dark dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 px-4 hidden h-[34px] w-[106px] rounded-full py-0 text-16 font-semibold md:block md:pb-[2px]"
          href={card.path}
        >
          CHI TIẾT
        </a>
      </div>
    );
  return null;
}
