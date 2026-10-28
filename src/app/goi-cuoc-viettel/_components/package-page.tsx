/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { PackageSourceDialogTrigger } from "./package-source-dialog-trigger";
import { RelatedPackageCard } from "./related-package-card";
import { RELATED_PACKAGES } from "../_data/related-package-data";
import type {
  PackagePageRecord,
  PackageStat,
  PackageCta,
} from "../_data/package-types";
/** Server template. Only the existing dialog trigger is a client boundary. */
export function PackagePage({
  record,
  children,
}: {
  record: PackagePageRecord;
  children: ReactNode;
}) {
  return (
    <div
      itemScope={record.postpaid ? true : undefined}
      itemType={record.postpaid ? "https://schema.org/Thing" : undefined}
    >
      <div className="px-4 pb-6 sm:pb-8 sm:pt-9 md:pb-10 md:pt-12">
        <h1
          itemProp={record.postpaid ? "name" : undefined}
          className="md:pd-0 pt-6 text-[28px] leading-[40px] sm:text-[32px] sm:leading-[32px] md:text-[48px] md:leading-[48px]"
        >
          {record.titlePrefix}
          <span className="text-primary">{record.code}</span>
        </h1>
        {record.description !== undefined && (
          <p className="hidden">{record.description}</p>
        )}
      </div>
      <div className="flex flex-col gap-9 pb-9 md:pb-12">
        <div className="mx-4 flex flex-col gap-8 rounded-[16px] bg-white px-3 py-4 sm:px-4 sm:py-5 md:flex-row md:bg-transparent md:px-0">
          {record.stats.map((stat) => (
            <PackageStatistic key={stat.kind} stat={stat} />
          ))}
        </div>
        <div>
          <div className="mx-4 flex flex-col gap-3 rounded-[16px] bg-white px-3 py-4 sm:px-4 sm:py-5 md:gap-6 md:px-8 md:py-8">
            {children}
          </div>
          {record.cta.channel === "money" ? (
            <div className="hidden md:block md:px-4 md:pt-6">
              <PackageSourceDialogTrigger
                className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 py-2 h-[50px] w-[214px] text-18 leading-[26px] md:pb-1"
                itemPath={record.cta.itemPath}
              >
                {record.cta.desktopLabel}
              </PackageSourceDialogTrigger>
            </div>
          ) : (
            <div className="hidden md:block md:px-4 md:pt-6">
              <PackageSourceDialogTrigger
                className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 py-2 h-[50px] w-[214px] leading-[26px] text-gray-50 md:pb-1 md:text-16"
                itemPath={record.cta.itemPath}
              >
                {record.cta.desktopLabel}
              </PackageSourceDialogTrigger>
            </div>
          )}
        </div>
        <div className="pl-4">
          <h2 className="text-[28px] uppercase leading-[40px]">
            Gói cước tương tự
          </h2>
          <div className="no-scrollbar flex gap-4 overflow-auto pr-4 pt-6 md:gap-6 md:pr-0">
            {record.related.map((id) => (
              <RelatedPackageCard key={id} card={RELATED_PACKAGES[id]} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="fixed bottom-0 flex h-[82px] w-full items-center justify-between bg-white px-4 pb-3 shadow-[1px_-3px_12px_2px_rgba(0,0,0,0.1)]">
          <div>
            <p className="">
              <strong className="text-24 font-bold">
                {record.mobilePrice.amount}
              </strong>
              {record.mobilePrice.period}
            </p>
          </div>
          <div>
            <PackageMobileAction cta={record.cta} />
          </div>
        </div>
      </div>
    </div>
  );
}
function PackageStatistic({ stat }: { stat: PackageStat }) {
  if (stat.kind === "sms")
    return (
      <div className="md:hidden">
        <div className="flex items-center gap-4 md:h-[97px] md:shrink md:grow md:basis-1/3 md:rounded-[12px] md:bg-white md:pl-4">
          <div>
            <img
              alt={stat.iconAlt}
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              className="sm:h-[40px] sm:w-[40px]"
              src={sourceAsset(stat.icon)}
            />
          </div>
          <div>
            <p className="md:text-16 sm:text-14 text-12 pb-1 leading-[14px] sm:leading-[18px] md:font-medium md:leading-[24px]">
              {stat.label}
            </p>
            <p className="sm:text-24 font-bold leading-[20px] sm:font-magistral sm:leading-[24px] md:text-[28px] md:leading-[28px]">
              <span className="text-primary">{stat.command}</span>
              {stat.connector}
              <span className="text-primary">{stat.recipient}</span>
            </p>
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex items-center gap-4 md:h-[97px] md:shrink md:grow md:basis-1/3 md:rounded-[12px] md:bg-white md:pl-4">
      <div>
        <img
          alt={stat.iconAlt}
          loading="lazy"
          width="32"
          height="32"
          decoding="async"
          className="sm:h-[40px] sm:w-[40px] md:h-[48px] md:w-[48px]"
          src={sourceAsset(stat.icon)}
        />
      </div>
      <div>
        <p className="md:text-16 sm:text-14 text-12 pb-1 leading-[14px] sm:leading-[18px] md:font-medium md:leading-[24px]">
          {stat.label}
        </p>
        <p className="sm:text-24 font-bold leading-[20px] sm:font-magistral sm:leading-[24px] md:text-[28px] md:leading-[28px]">
          {stat.value}
        </p>
      </div>
    </div>
  );
}
function PackageMobileAction({ cta }: { cta: PackageCta }) {
  if (cta.channel === "money")
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 py-2 h-[34px] w-[100px] rounded-full sm:!ml-0 md:w-[130px] md:text-16"
        href={cta.mobileHref}
      >
        {cta.mobileLabel}
      </a>
    );
  return (
    <a
      href={cta.mobileHref}
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 py-2 h-[32px] w-[100px] rounded-full"
    >
      {cta.mobileLabel}
    </a>
  );
}
