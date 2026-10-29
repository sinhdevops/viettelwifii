import { siteConfig } from "@/lib/site-config";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { RoamingGuideStep } from "./roaming-cards";
import { roamingGuide } from "@/constants/roaming/roaming-data";
export function RoamingGuide() {
  return (
    <div className="w-full bg-[#ffeae7]">
      <div className="container px-4 py-[40px] md:px-0 md:py-[80px]">
        <h2 className="text-center text-[26px] leading-tight font-bold text-black md:text-center md:text-[36px]">
          {"Hướng dẫn "}
          <span className="text-primary">đăng ký &amp; sử dụng</span> Roaming
          Viettel
        </h2>
        <div className="my-6 flex flex-col gap-4 md:my-[50px] md:flex-row md:gap-[18px]">
          <RoamingGuideStep item={roamingGuide[0]} />
          <div className="flex shrink-0 justify-center">
            <img
              alt="next step"
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              className="rotate-90 md:rotate-0"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/icons/arrow-right.svg")}
            />
          </div>
          <RoamingGuideStep item={roamingGuide[1]} />
          <div className="flex shrink-0 justify-center">
            <img
              alt="next step"
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              className="rotate-90 md:rotate-0"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/icons/arrow-right.svg")}
            />
          </div>
          <RoamingGuideStep item={roamingGuide[2]} />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="rounded-2xl bg-white p-6">
            <div className="flex items-end gap-2.5 border-b-2 border-[#FEAAAE] pb-4">
              <img
                alt="notice"
                loading="lazy"
                width="24"
                height="26"
                decoding="async"
                style={{ color: "transparent" } as CSSProperties}
                src={sourceAsset("/images/roaming-notice.svg")}
              />
              <h3 className="font-magistral text-20 text-primary font-bold">
                Lưu ý nhanh
              </h3>
            </div>
            <div className="pt-4">
              <ul className="marker flex flex-col gap-1 md:gap-0">
                <li>
                  Gần khu vực biên giới, điện thoại có thển{" "}
                  <b className="text-primary">tự bắt sóng</b>
                  {" mạng nước ngoài →"}{" "}
                  <b className="text-primary">
                    hãy tắt Data Roaming nếu chưa cần dùng
                  </b>
                  .
                </li>
                <li>
                  Thoại/SMS (nếu gói không kèm) sẽ tính theo cước roaming thông
                  thường.
                </li>
                <li>
                  Một số quốc gia có hạn chế dịch vụ theo chính sách sở tại (ví
                  dụ: Myanmar chặn Data; Nga chặn Data &amp; SMS).
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6">
            <div className="flex items-center gap-2.5 border-b-2 border-[#FEAAAE] pb-4">
              <img
                alt="support"
                loading="lazy"
                width="24"
                height="32"
                decoding="async"
                style={{ color: "transparent" } as CSSProperties}
                src={sourceAsset("/images/roaming-support.svg")}
              />
              <h3 className="font-magistral text-20 text-primary font-bold">
                Cần hỗ trợ?
              </h3>
            </div>
            <div className="pt-4">
              <div className="flex items-start gap-2">
                <img
                  alt="support phone"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  className="mt-0.5"
                  style={{ color: "transparent" } as CSSProperties}
                  src={sourceAsset("/images/roaming-support-phone.svg")}
                />
                <p className="font-medium">
                  {siteConfig.phoneNumber} (tại Việt Nam)
                </p>
              </div>
              <div className="flex items-start gap-2 pt-4">
                <img
                  alt="support globe"
                  loading="lazy"
                  width="22"
                  height="22"
                  decoding="async"
                  className="mt-0.5"
                  style={{ color: "transparent" } as CSSProperties}
                  src={sourceAsset("/images/roaming-support-globe.svg")}
                />
                <p className="font-medium">
                  +84 982 198 198 (khi ở nước ngoài)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
