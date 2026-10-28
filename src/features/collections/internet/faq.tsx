/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { InternetFaqItem } from "./internet-cards";
import { internetFaqs } from "./internet-data";
export function InternetFaq() {
  return (
    <div className="w-full bg-white md:bg-[#F4F4F4]">
      <div className="container px-5 py-6 md:px-0 md:py-[60px]">
        <h2 className="mb-[30px] font-beausans text-22 leading-[28px] text-[#2C2F31] md:text-[44px] md:leading-[54px]">
          Câu hỏi thường gặp
        </h2>
        <div className="relative flex">
          <div className="max-w-[685px]" data-orientation="vertical">
            {internetFaqs.map((item) => (
              <InternetFaqItem key={item.id} item={item} />
            ))}
          </div>
          <img
            alt="FAQ"
            loading="lazy"
            width="544"
            height="402"
            decoding="async"
            className="absolute -right-10 -top-16 hidden w-[544px] md:block"
            style={{ color: "transparent" } as CSSProperties}
            src={sourceAsset("/_next/image?url=%2Fimages%2Finternet-faq.png&w=1200&q=75")}
            srcSet={[
              `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-faq.png&w=640&q=75")} 1x`,
              `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-faq.png&w=1200&q=75")} 2x`,
            ].join(", ")}
          />
        </div>
      </div>
    </div>
  );
}
