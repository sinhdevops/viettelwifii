/* The archived mobile source hydrates these two cards between the first and
   fourth listing items. Its desktop listing does not contain these cards.
   Text, dates, destinations and classes were checked against the live source DOM. */
import { sourceAsset } from "@/lib/viettelup-source-assets";

import { mobileNewsCards } from "./listing-records";

export default function SourceMobileListingCards() {
  return mobileNewsCards.map((card) => (
    <div
      key={card.href}
      className="w-full max-w-[364px] overflow-hidden rounded-[16px] border border-[#0000000A] bg-white md:hidden"
    >
      <a className="flex md:block" href={card.href}>
        {/* Both original CDN URLs are blocked by the archived source's CSP.
            Resolve their captured local copies instead, consistently in SSR
            and hydration, so the final page does not ship broken images. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={card.title}
          loading="lazy"
          width={252}
          height={148}
          decoding="async"
          className="h-[auto] w-[128px] object-cover md:h-[252px] md:w-[364px]"
          data-source-image={card.image}
          src={sourceAsset(card.image)}
        />
        <div className="p-4 md:p-5">
          <p className="hidden pb-1 font-medium text-[#616161] md:block md:text-16 md:font-normal">
            {card.publishedLabel}
          </p>
          <h3 className="max-w-[unset] py-0 text-16 leading-[20px] font-semibold md:max-w-[324px] md:pb-3 md:text-24 md:leading-[28px]">
            {card.title}
          </h3>
          <p className="block pb-2 pt-1 leading-[20px] text-[#616161] md:hidden">
            {card.publishedLabel}
          </p>
          <p className="flex items-center gap-[6px] font-medium text-primary">
            <span>Xem thêm</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Read more"
              loading="lazy"
              width={20}
              height={20}
              decoding="async"
              src={sourceAsset("/icons/arrow-right.svg")}
            />
          </p>
        </div>
      </a>
    </div>
  ));
}
