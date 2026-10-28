/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { gicToppings } from "./plans-data";
import { GicToppingCard } from "./topping-card";
import pinkCloud from "./bg-gic-pink-cloud.webp";
export function GicToppings() {
  return (
    <div className="relative w-full">
      <img
        alt="bg-goi-topping"
        loading="lazy"
        width="1440"
        height="1802"
        decoding="async"
        className="pointer-events-none absolute left-1/2 top-[100px] w-full -translate-x-1/2 md:-top-20 md:block md:scale-100"
        style={{ color: "transparent" } as CSSProperties}
        src={pinkCloud.src}
      />
      <div className="mx-auto pb-5 pt-6 md:w-[1040px] md:pb-[75px] md:pt-[100px]">
        <div className="flex items-center justify-center md:justify-between">
          <div>
            <h2 className="text-center font-beausans text-22 md:text-[80px]">Gói topping</h2>
            <div className="relative mx-auto w-fit">
              <img
                alt="tag"
                loading="lazy"
                width="490"
                height="180"
                decoding="async"
                className="w-[151px] md:w-[490px]"
                style={{ color: "transparent" } as CSSProperties}
                src={sourceAsset("/_next/image?url=%2Fimages%2Ffire-tag.png&w=1080&q=75")}
                srcSet={[
                  `${sourceAsset("/_next/image?url=%2Fimages%2Ffire-tag.png&w=640&q=75")} 1x`,
                  `${sourceAsset("/_next/image?url=%2Fimages%2Ffire-tag.png&w=1080&q=75")} 2x`,
                ].join(", ")}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-beausans text-14 font-semibold text-white md:left-[40px] md:text-[46px]">
                Thêm vị mặn mà
              </span>
            </div>
          </div>
          <p className="hidden max-w-[483px] text-24 leading-[32px] md:block">
            Tùy biến linh hoạt, chọn topping nào hợp gu bạn nhất. Thêm dung lượng data lướt
            Facebook, TikTok, YouTube thả ga. Tặng phút gọi/nhắn tin để trò chuyện với hội bạn thân
            không lo gián đoạn.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 grid-rows-3 gap-4 px-4 md:mt-8 md:grid-cols-3 md:grid-rows-2 md:gap-8 md:px-0">
          {gicToppings.map((topping) => (
            <GicToppingCard key={topping.code} topping={topping} />
          ))}
        </div>
      </div>
    </div>
  );
}
