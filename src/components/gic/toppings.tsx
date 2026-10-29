/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { gicToppings } from "@/constants/gic/plans-data";
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
        className="pointer-events-none absolute top-[100px] left-1/2 w-full -translate-x-1/2 md:-top-20 md:block md:scale-100"
        style={{ color: "transparent" } as CSSProperties}
        src={pinkCloud.src}
      />
      <div className="mx-auto pt-6 pb-5 md:w-[1040px] md:pt-[100px] md:pb-[75px]">
        <div className="flex items-center justify-center md:justify-between">
          <div>
            <h2 className="font-beausans text-22 text-center md:text-[80px]">
              Gói topping
            </h2>
            <div className="relative mx-auto w-fit">
              <img
                alt="tag"
                loading="lazy"
                width="490"
                height="180"
                decoding="async"
                className="w-[151px] md:w-[490px]"
                style={{ color: "transparent" } as CSSProperties}
                src={sourceAsset(
                  "/_next/image?url=%2Fimages%2Ffire-tag.png&w=1080&q=75",
                )}
                srcSet={[
                  `${sourceAsset("/_next/image?url=%2Fimages%2Ffire-tag.png&w=640&q=75")} 1x`,
                  `${sourceAsset("/_next/image?url=%2Fimages%2Ffire-tag.png&w=1080&q=75")} 2x`,
                ].join(", ")}
              />
              <span className="font-beausans text-14 absolute top-1/2 left-3 -translate-y-1/2 font-semibold text-white md:left-[40px] md:text-[46px]">
                Thêm vị mặn mà
              </span>
            </div>
          </div>
          <p className="text-24 hidden max-w-[483px] leading-[32px] md:block">
            Tùy biến linh hoạt, chọn topping nào hợp gu bạn nhất. Thêm dung
            lượng data lướt Facebook, TikTok, YouTube thả ga. Tặng phút gọi/nhắn
            tin để trò chuyện với hội bạn thân không lo gián đoạn.
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
