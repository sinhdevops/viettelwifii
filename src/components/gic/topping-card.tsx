/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { CollectionDialogButton } from "@/features/collections/collection-controls";
import type { GicTopping } from "@/constants/gic/plans-data";
export function GicToppingCard({ topping }: { topping: GicTopping }) {
  return (
    <div className="font-beausans relative flex h-[131px] w-[159px] shrink-0 cursor-pointer flex-col justify-between gap-2 bg-[url('/images/bg-topping.svg')] bg-cover bg-center bg-no-repeat px-3 pt-3 pb-4 md:h-[268px] md:w-[327px] md:gap-4 md:px-6 md:pt-6 md:pb-8">
      <div className="flex flex-col gap-2 md:gap-4">
        <img
          alt={topping.imageAlt}
          loading="lazy"
          width="42"
          height="42"
          decoding="async"
          className="w-[21px] md:w-[42px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset(topping.image)}
        />
        <div>
          <p className="text-[11px] leading-4 md:text-[23px] md:leading-[32px]">
            <b>{topping.title}</b>
          </p>
          <p className="md:text-18 mt-1 text-[9px] leading-[11px] text-[#909090] md:mt-2 md:leading-[23px]">
            {topping.description}
          </p>
        </div>
      </div>
      <div className="w-fit">
        <div className="hidden md:block">
          <CollectionDialogButton
            className="bg-primary hover:bg-primary-dark !text-10 md:!text-16 inline-flex h-[26px] w-fit items-center justify-center rounded-[7px] px-2.5 py-[7px] text-sm font-bold whitespace-nowrap text-white shadow-[0px_4px_20px_0px_#EE121240] ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[52px] md:rounded-[14px] md:px-5 md:py-[14.5px] dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            type="button"
            dialogLabel={topping.dialogLabel}
            pagePath="/goi-cuoc-gic"
          >
            {topping.code}
            {" UP gửi 290"}
          </CollectionDialogButton>
        </div>
        <a
          href={topping.smsHref}
          className="bg-primary hover:bg-primary-dark !text-10 md:!text-16 inline-flex h-[26px] w-fit items-center justify-center rounded-[7px] px-2.5 py-[7px] text-sm font-bold whitespace-nowrap text-white shadow-[0px_4px_20px_0px_#EE121240] ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden md:h-[52px] md:rounded-[14px] md:px-5 md:py-[14.5px] dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          {topping.code}
          {" UP gửi 290"}
        </a>
      </div>
    </div>
  );
}
