/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { GicMonthlyBenefitCard } from "./gic-cards";
import { monthlyBenefits } from "./gic-data";
export function GicMonthlyBenefits() {
  return (
    <div className="relative py-6 font-beausans md:bg-transparent md:py-[100px]">
      <div>
        <h2 className="text-center font-beausans text-22 md:text-[75px]">
          Nhận ưu đãi hàng tháng <span className="text-16 text-primary md:text-[40px]">(***)</span>
        </h2>
      </div>
      <div className="mx-4 mt-6 rounded-xl bg-white p-4 shadow-[0px_5px_10px_0px_#0000000D] md:mx-0 md:mt-8 md:max-w-[1040px] md:rounded-3xl md:p-6">
        <div className="flex flex-wrap justify-start gap-2 rounded-3xl md:justify-between md:gap-4">
          <GicMonthlyBenefitCard item={monthlyBenefits[0]} />
          <div className="">
            <img
              alt="data"
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              className="w-[21px] md:w-[42px]"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/images/wifi.svg")}
            />
            <p className="pt-2 text-12 font-bold md:pt-4 md:text-[23px] [&amp;&gt;span]:text-[12px] [&amp;&gt;span]:font-semibold [&amp;&gt;span]:text-primary [&amp;&gt;span]:md:text-[16px]">
              2GB data
            </p>
            <p className="max-w-[95px] pt-1 text-10 text-[#909090] md:max-w-[185px] md:pt-2 md:text-18">
              Nhận 2GB data /30 ngày
            </p>
          </div>
          <GicMonthlyBenefitCard item={monthlyBenefits[1]} />
          <GicMonthlyBenefitCard item={monthlyBenefits[2]} />
          <GicMonthlyBenefitCard item={monthlyBenefits[3]} />
        </div>
        <div className="mt-2 flex gap-3 border-t border-[#D9D9D9A7] pt-2 text-[8px] text-[#8C8C8C] md:mt-4 md:gap-6 md:pt-4 md:text-14">
          <div className="flex flex-1 flex-col gap-2">
            <p className="bullet-list">
              Miễn phí Facebook không bao gồm Thoại+Video call của Messenger
            </p>
            <p className="bullet-list primary">
              <span className="text-primary">(*)</span>
              {" Miễn phí Facebook/Tiktok/Youtube tối đa 50GB/30 ngày"}
            </p>
            <p className="bullet-list primary">
              <span className="text-primary">(**)</span>
              {" Topping 10.000đ áp dụng với khách hàng sử dụng gói GIC30N/GIC70N/GIC90N/GIC125N"}
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <p className="bullet-list primary">
              <span className="text-primary">(***)</span>
              {" Quy định đổi ưu đãi:"}
            </p>
            <p>
              Truy cập GIC tại tab Viettel+++ trên App MyViettel để đổi ưu đãi Áp dụng với khách
              hàng sử dụng gói GIC70N/GIC90N/GIC125N được đổi 1 trong 5 ưu đãi (1 lần/1 tháng)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
