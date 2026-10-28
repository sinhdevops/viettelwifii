/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { RoamingFaqItem } from "./roaming-cards";
import { roamingFaqs } from "./roaming-data";
export function RoamingFaq() {
  return (
    <div className="w-full bg-white">
      <div className="container justify-between gap-20 px-4 py-[50px] md:flex md:px-0 md:py-[80px]">
        <div className="pt-0 md:pt-8">
          <img
            alt="faq"
            loading="lazy"
            width="350"
            height="344"
            decoding="async"
            className="mx-auto w-[184px] md:mx-0 md:w-[350px]"
            style={{ color: "transparent" } as CSSProperties}
            src={sourceAsset("/_next/image?url=%2Fimages%2Froaming-faq.webp&w=750&q=75")}
            srcSet={[
              `${sourceAsset("/_next/image?url=%2Fimages%2Froaming-faq.webp&w=384&q=75")} 1x`,
              `${sourceAsset("/_next/image?url=%2Fimages%2Froaming-faq.webp&w=750&q=75")} 2x`,
            ].join(", ")}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-black text-center md:text-left text-[26px] md:text-[36px] leading-tight mb-6 mt-8 md:mt-0">
            {"Câu hỏi "}
            <span className="text-primary">thường gặp</span>
          </h2>
          <div>
            <div
              id="gic-accordion"
              className="flex max-w-[685px] flex-col gap-4"
              data-orientation="vertical"
            >
              {roamingFaqs.map((item) => (
                <RoamingFaqItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
