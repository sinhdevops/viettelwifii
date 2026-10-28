"use client";

import { Button as AppButton } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { LeadDialog } from "@/components/leads/lead-dialog";
import styles from "./internet.module.css";

type Region = "HN-HCM" | "Other";
type RegionalPrice = Partial<Record<Region, number>>;

export type RelatedInternetCardProps = {
  code: string;
  speed: string;
  benefit: string;
  prices: RegionalPrice;
  regionLabels: Partial<Record<Region, string>>;
  currentPath: string;
  iconSrc: string;
  mobileBackground: string;
  desktopBackground: string;
};

const radioClass =
  "flex aspect-square h-3 w-3 items-center justify-center rounded-full border border-primary text-primary ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-50 dark:text-gray-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 md:h-4 md:w-4";
const priceLabel = new Intl.NumberFormat("vi-VN");

/** Source radio group: single-region GIGA cards omit the unsupported regional option. */
export function RelatedInternetCard({
  code,
  speed,
  benefit,
  prices,
  regionLabels,
  currentPath,
  iconSrc,
  mobileBackground,
  desktopBackground,
}: RelatedInternetCardProps) {
  const router = useRouter();
  const radioNodes = useRef<Partial<Record<Region, HTMLButtonElement>>>({});
  const regions = (["HN-HCM", "Other"] as const).filter(
    (region) => prices[region] !== undefined,
  );
  const [selected, setSelected] = useState<Region>(
    regions.includes("Other") ? "Other" : "HN-HCM",
  );
  const chosenPrice = prices[selected];
  const href = `/internet/${code}`;
  const backgroundStyle = {
    "--internet-bg-mobile": `url("${mobileBackground}")`,
    "--internet-bg-desktop": `url("${desktopBackground}")`,
  } as CSSProperties;

  const onRadioKey = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
    )
      return;
    event.preventDefault();
    const delta = event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 1;
    const nextRegion =
      regions[(index + regions.length + delta) % regions.length];
    setSelected(nextRegion);
    radioNodes.current[nextRegion]?.focus();
  };

  const onCardClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a, button, [role='radiogroup']"))
      return;
    router.push(href);
  };

  return (
    <div
      className={`internet-card text-text-dark flex h-[258px] w-[196px] shrink-0 cursor-pointer flex-col rounded-[32px] bg-cover bg-center bg-no-repeat md:h-[412px] md:w-[359px] md:rounded-[74px] ${styles.relatedCard}`}
      style={backgroundStyle}
      onClick={onCardClick}
    >
      <Link
        href={href}
        className="flex h-[74px] items-center justify-center md:h-[140px]"
        aria-label={`Xem gói ${code}`}
      >
        <Image
          src={iconSrc}
          alt="package icon"
          width={97}
          height={102}
          sizes="(max-width: 959px) 53px, 97px"
          className="h-[56px] w-[53px] md:h-[102px] md:w-[97px]"
        />
      </Link>
      <div className="flex grow flex-col justify-between px-4 pt-3 pb-4 md:px-8 md:pt-4 md:pb-8">
        <div>
          <Link
            href={href}
            className="font-beausans flex h-[26px] items-center justify-between border-b border-[#d0d0d0a6] pb-2 md:h-[42px] md:pb-4"
          >
            <span className="border-primary text-14 md:text-22 border-l-2 pl-1 leading-[14px] font-bold text-[#282828] md:border-l-[3px] md:pl-2 md:leading-[22px]">
              {code}
            </span>
            <span className="text-10 font-semibold text-[#444444] md:text-[15px]">
              {speed}
            </span>
          </Link>
          <div className="pt-2 md:pb-1.5">
            <p className="text-10 md:text-12 font-medium text-[#767676] md:leading-[22px]">
              Tiện ích
            </p>
            <p className="text-10 md:text-14 font-semibold md:leading-[18px]">
              {benefit}
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
              aria-label={`Khu vực lắp đặt gói ${code}`}
              aria-orientation="horizontal"
              className="grid grid-flow-col gap-1.5 md:pt-1"
            >
              {regions.map((region, index) => (
                <div className="flex items-center space-x-1" key={region}>
                  <AppButton variant="unstyled" size="unstyled"
                    ref={(node) => {
                      radioNodes.current[region] = node ?? undefined;
                    }}
                    type="button"
                    role="radio"
                    aria-checked={selected === region}
                    data-state={selected === region ? "checked" : "unchecked"}
                    value={region}
                    onClick={() => setSelected(region)}
                    onKeyDown={(e) => onRadioKey(e, index)}
                    tabIndex={selected === region ? 0 : -1}
                    className={radioClass}
                    aria-label={regionLabels[region] || region}
                  >
                    {selected === region && (
                      <svg
                        aria-hidden="true"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="fill-primary h-2 w-2 text-current md:h-2.5 md:w-2.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    )}
                  </AppButton>
                  <AppButton variant="unstyled" size="unstyled"
                    type="button"
                    onClick={() => setSelected(region)}
                    className="md:!text-14 cursor-pointer !text-[9px] font-semibold"
                  >
                    {regionLabels[region]}
                  </AppButton>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 md:pt-3">
            <div>
              <p className="md:text-12 text-[9px] font-medium text-[#767676] md:leading-[22px]">
                Đơn giá
              </p>
              <p className="text-10 font-semibold whitespace-nowrap md:text-[15px] md:font-bold">
                {chosenPrice === undefined
                  ? "Liên hệ tư vấn"
                  : `${priceLabel.format(chosenPrice)}đ/tháng`}
              </p>
            </div>
            <div className={`flex gap-2 ${styles.cardCta}`}>
              <LeadDialog
                itemId={href}
                itemTitle={`Gói Internet ${code}`}
                pagePath={currentPath}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
