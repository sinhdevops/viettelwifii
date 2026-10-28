/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
export function RoamingRegistrationOffer() {
  return (
    <div className="container relative w-full overflow-hidden rounded-[14px] bg-white md:flex">
      <img
        alt="data-roaming"
        loading="lazy"
        width="536"
        height="370"
        decoding="async"
        className="rounded-[14px]"
        style={{ color: "transparent" } as CSSProperties}
        src={sourceAsset("/_next/image?url=%2Fimages%2Froaming-data.webp&w=1080&q=75")}
        srcSet={[
          `${sourceAsset("/_next/image?url=%2Fimages%2Froaming-data.webp&w=640&q=75")} 1x`,
          `${sourceAsset("/_next/image?url=%2Fimages%2Froaming-data.webp&w=1080&q=75")} 2x`,
        ].join(", ")}
      />
      <div className="roaming container px-4 pb-12 pt-8 md:px-8 md:pb-9 md:pt-7">
        <h2 className="font-bold text-black text-center md:text-left text-[26px] md:text-[36px] leading-tight">
          <span className="text-primary">Gói cước Roaming</span>
          {" là gì?"}
        </h2>
        <p className="md:text-16 leading-tight text-14 pb-3 pt-4">
          <i className="font-medium text-primary">Gói cước roaming (chuyển vùng quốc tế)</i>{" "}
          {"là gói dịch vụ giúp bạn truy cập Internet và sử dụng số Viettel khi ở nước ngoài, mà "}
          <i className="text-primary">không cần mua SIM mới.</i>
        </p>
        <p className="mb-4 mt-2 text-16">
          Chỉ cần đăng ký gói roaming phù hợp và bật Data Roaming trên điện thoại, bạn có thể:
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              alt="roaming-data"
              loading="lazy"
              width="30"
              height="30"
              decoding="async"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/images/roaming-data.svg")}
            />
            <p className="text-16 font-medium">
              {"Dùng Internet "}
              <span className="text-primary">ngay khi</span>
              {" sang nước ngoài"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              alt="roaming-call"
              loading="lazy"
              width="30"
              height="30"
              decoding="async"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/images/roaming-call.svg")}
            />
            <p className="text-16 font-medium">
              <span className="text-primary">Nhận cuộc gọi, OTP</span>
              {" ngân hàng từ Việt Nam"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              alt="roaming-phone"
              loading="lazy"
              width="30"
              height="30"
              decoding="async"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/images/roaming-phone.svg")}
            />
            <p className="text-16 font-medium">
              <span className="text-primary">Giữ liên lạc</span>
              {" liên tục trong suốt chuyến đi"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
