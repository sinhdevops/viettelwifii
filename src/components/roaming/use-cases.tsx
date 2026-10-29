/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
export function RoamingUseCases() {
  return (
    <div className="w-full bg-[#ffeae7]">
      <div className="container mt-4 mb-[40px] px-4 md:my-[80px] md:px-0">
        <h2 className="text-center text-[26px] leading-tight font-bold text-black md:text-center md:text-[36px]">
          {"Khi nào bạn "}
          <span className="text-primary">nên dùng</span>
          {" gói roaming?"}
        </h2>
        <p className="text-20 mt-6 mb-5 text-center leading-tight font-medium md:mt-4">
          Gói roaming phù hợp nếu bạn:
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1 md:gap-6">
          <div className="rounded-2xl bg-white px-5 py-4 shadow-[0px_2px_4px_0px_#00000005] md:py-6">
            <img
              alt="Đi du lịch hoặc công tác nước ngoài"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              className="mx-auto"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/images/roaming-when-1.svg")}
            />
            <p className="text-14 md:text-16 pt-3 text-center leading-tight">
              Đi du lịch hoặc công tác nước ngoài
            </p>
          </div>
          <div className="rounded-2xl bg-white px-5 py-4 shadow-[0px_2px_4px_0px_#00000005] md:py-6">
            <img
              alt="Cần Internet ổn định ngay khi hạ cánh"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              className="mx-auto"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/images/roaming-when-2.svg")}
            />
            <p className="text-14 md:text-16 pt-3 text-center leading-tight">
              Cần Internet ổn định ngay khi hạ cánh
            </p>
          </div>
          <div className="rounded-2xl bg-white px-5 py-4 shadow-[0px_2px_4px_0px_#00000005] md:py-6">
            <img
              alt="Muốn giữ số Viettel để nhận OTP, cuộc gọi"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              className="mx-auto"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/images/roaming-when-3.svg")}
            />
            <p className="text-14 md:text-16 pt-3 text-center leading-tight">
              Muốn giữ số Viettel để nhận OTP, cuộc gọi
            </p>
          </div>
          <div className="rounded-2xl bg-white px-5 py-4 shadow-[0px_2px_4px_0px_#00000005] md:py-6">
            <img
              alt="Không muốn mất thời gian mua SIM tại sân bay"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              className="mx-auto"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/images/roaming-when-4.svg")}
            />
            <p className="text-14 md:text-16 pt-3 text-center leading-tight">
              Không muốn mất thời gian mua SIM tại sân bay
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(90deg,#E20017_0%,#FF526F_100%)] px-6 py-4 shadow-[0px_2px_6.4px_0px_#FD3E2B2E_inset] md:px-[18px]">
          <img
            alt="star"
            loading="lazy"
            width="21"
            height="21"
            decoding="async"
            className="hidden md:block"
            style={{ color: "transparent" } as CSSProperties}
            src={sourceAsset("/images/star.svg")}
          />
          <p className="text-16 md:text-18 text-center leading-tight font-medium text-white">
            Với các chuyến đi 1–7 ngày, roaming thường là lựa chọn nhanh và tiện
            nhất.
          </p>
          <img
            alt="star"
            loading="lazy"
            width="21"
            height="21"
            decoding="async"
            className="hidden md:block"
            style={{ color: "transparent" } as CSSProperties}
            src={sourceAsset("/images/star.svg")}
          />
        </div>
      </div>
    </div>
  );
}
