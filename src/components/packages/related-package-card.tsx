/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { PackageSourceDialogTrigger } from "./package-source-dialog-trigger";
import type { RelatedPackage } from "@/types/packages/package-types";
export function RelatedPackageCard({ card }: { card: RelatedPackage }) {
  return (
    <div className="shrink-0 [&_.data-card]:bg-[url('/images/bg-data.png')] [&_.data-card-icons]:border-[#DDD] [&_.data-card-icons]:bg-[#FAFAFA]">
      <div
        className="data-card font-magistral text-text-dark relative flex h-[197px] w-[158px] flex-col justify-between bg-cover md:h-[326px] md:w-[261px]"
        style={{
          backgroundImage: `url(${sourceAsset("/images/bg-data.png")})`,
        }}
      >
        <div className="flex h-[26px] items-center justify-center pb-1 md:h-[42px] md:pb-[6px]">
          <p className="text-14 md:text-22 font-bold md:leading-[22px]">
            <Link href={card.path} className="hover:underline">
              {card.code}
            </Link>
          </p>
        </div>
        <div className="">
          <PackageAllowance allowance={card.allowance} />
          <PackageBenefits benefits={card.benefits} />
        </div>
        <div className="flex flex-col items-center justify-end pb-3 md:h-[96px] md:pb-5">
          <p className="pb-[4px] leading-[20px] font-medium md:pb-5">
            <span className="text-14 md:text-24 font-bold">
              {card.price.amount}
            </span>
            <span className="md:text-14 text-[10px] font-bold uppercase">
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
        <p className="text-20 text-primary leading-[20px] font-bold md:text-[32px] md:leading-[32px]">
          {allowance.value}
        </p>
        <p className="text-14 md:text-22 md:pt-1">{allowance.period}</p>
      </div>
    );
  return (
    <div className="flex items-center justify-center md:pb-2">
      <div>
        <span className="text-primary text-[28px] leading-[39px] font-bold md:mb-1 md:text-[44px] md:leading-[60px]">
          {allowance.value}
        </span>
        <span className="md:text-20 text-[10px] leading-[22px] font-bold uppercase md:leading-[32px]">
          {allowance.period}
        </span>
      </div>
    </div>
  );
}
function PackageBenefits({
  benefits,
}: {
  benefits: RelatedPackage["benefits"];
}) {
  return (
    <div className="flex flex-col items-center pt-2 pb-[8px]">
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
          className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[100px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 uppercase ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden md:h-[34px] md:pb-1 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href={cta.mobileHref}
        >
          {cta.mobileLabel}
        </a>
        <div className="hidden md:block">
          <PackageSourceDialogTrigger
            className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[24px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[34px] md:w-[106px] md:pb-1 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            itemPath={cta.itemPath}
          >
            {cta.desktopLabel}
          </PackageSourceDialogTrigger>
        </div>
      </div>
    );
  if (cta.variant === "postpaid-contact")
    return (
      <div className="flex gap-2">
        <div className="hidden md:block">
          <PackageSourceDialogTrigger
            className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[24px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[34px] md:w-[106px] md:pb-1 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            itemPath={cta.itemPath}
          >
            {cta.desktopLabel}
          </PackageSourceDialogTrigger>
        </div>
        <a
          href={cta.mobileHref}
          className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[24px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden md:h-[34px] md:w-[106px] md:pb-2 md:font-semibold dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          {cta.mobileLabel}
        </a>
      </div>
    );
  return null;
}
