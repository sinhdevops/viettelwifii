/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { RoamingComparisonRow } from "./roaming-cards";
import { roamingComparison } from "./roaming-data";
export function RoamingComparison() {
  return (
    <div className="w-full bg-white">
      <div className="container px-4 py-[50px] md:px-0 md:py-[80px]">
        <h2 className="font-bold text-black text-center text-[26px] md:text-[36px] leading-tight md:text-center">
          {"Gói roaming "}
          <span className="text-primary">khác gì</span>
          {" SIM du lịch / eSIM?"}
        </h2>
        <p className="mx-auto mt-6 max-w-[460px] text-center text-16 leading-normal md:mt-4">
          Lựa chọn giải pháp kết nối tối ưu nhất cho chuyến đi của bạn dựa trên các tiêu chí về tiện
          lợi, chi phí và nhu cầu sử dụng
        </p>
        <table className="my-6 w-full border-separate border-spacing-0 rounded-2xl border border-[#E6ECF2] shadow-[0px_6px_16px_0px_#00000014] md:my-[50px]">
          <thead>
            <tr className="bg-[#F8FAFC] text-left text-14">
              <th className="rounded-tl-2xl border-r border-[#E6ECF2]"></th>
              <th className="w-[36%] border-r border-t-2 border-r-[#E6ECF2] border-t-primary bg-[#FEF3F3] p-3 text-primary md:w-[38%] md:p-5">
                Gói Roaming Viettel
              </th>
              <th className="w-[36%] rounded-tr-2xl p-3 md:w-[38%] md:p-5">SIM/eSIM</th>
            </tr>
          </thead>
          <tbody>
            {roamingComparison.map((item) => (
              <RoamingComparisonRow key={item.criterion} item={item} />
            ))}
          </tbody>
        </table>
        <div className="rounded-[24px] border border-[rgba(243,27,34,0.2)] bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_0%,#fcc3c5_50%,rgba(255,255,255,0.8)_100%)] p-4 shadow-[0px_5px_30px_0px_#19213D0F] md:px-10 md:py-6">
          <div className="grid grid-cols-1 grid-rows-2 justify-between gap-4 md:grid-cols-2 md:grid-rows-1 md:gap-6">
            <div className="rounded-2xl bg-[#FFFEFE] px-9 py-4 text-center md:bg-none md:px-10 md:py-5">
              <img
                alt="roaming-vs-esim-1"
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                className="mx-auto"
                style={{ color: "transparent" } as CSSProperties}
                src={sourceAsset("/images/roaming-vs-esim-1.svg")}
              />
              <p className="mt-3 text-14">Muốn giữ số Viettel và dùng ngay khi đến nơi</p>
              <p className="text-16 font-bold text-primary">→ chọn Gói Roaming</p>
            </div>
            <div className="rounded-2xl bg-[#FFFEFE] px-9 py-4 text-center md:bg-none md:px-10 md:py-5">
              <img
                alt="roaming-vs-esim-2"
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                className="mx-auto"
                style={{ color: "transparent" } as CSSProperties}
                src={sourceAsset("/images/roaming-vs-esim-2.svg")}
              />
              <p className="mt-3 text-14">{"Ở nước ngoài lâu hoặc cần data riêng "}</p>
              <p className="text-16 font-bold text-primary">→ chọn SIM/eSIM du lịch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
