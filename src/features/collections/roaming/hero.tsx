import { CollectionMotion } from "../collection-motion";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { CollectionDialogButton } from "../collection-controls";
export function RoamingHero() {
  return (
    <div className="relative w-full rounded-b-[40px] bg-[url('/images/banner-roaming.webp')] bg-cover bg-center bg-no-repeat md:rounded-b-none">
      <div className="absolute bottom-0 z-0 h-[350px] w-full rounded-b-[40px] bg-[linear-gradient(0deg,_#FFECE9_0%,_rgba(250,217,210,0)_99.9%)] md:rounded-b-none"></div>
      <div className="roaming container relative z-10 justify-between px-8 pb-[260px] md:flex md:px-0 md:pb-0 md:pt-[60px]">
        <div className="relative z-10 max-w-[468px]">
          <div className="fixed left-0 top-[64px] mb-3 w-full px-8 pt-3 md:hidden">
            <CollectionDialogButton
              type="button"
              className="w-full"
              dialogLabel="Chọn quốc gia..."
              pagePath="/goi-cuoc-roaming"
            >
              <div className="w-full rounded-[20px] border border-white bg-white/60 px-4 py-3.5">
                <div className="flex w-full items-center justify-between rounded-2xl border border-white bg-white px-3 py-2.5">
                  <p className="text-14 font-medium md:text-16">Chọn quốc gia...</p>
                  <img
                    alt="arrow-down"
                    loading="lazy"
                    width="11"
                    height="6"
                    decoding="async"
                    className="shrink-0"
                    style={{ color: "transparent" } as CSSProperties}
                    src={sourceAsset("/icons/arrow-down.svg")}
                  />
                </div>
              </div>
            </CollectionDialogButton>
          </div>
          <h1 className="font-bold text-black text-[26px] md:text-[36px] leading-tight pt-[97px] text-center md:pt-0 md:text-left">
            <span className="font-outline-3 text-primary">Gói cước roaming</span>{" "}
            <span className="hidden md:inline">–</span>
            {" Dùng Internet khi đi nước ngoài"}
          </h1>
          <p className="md:text-16 leading-tight text-14 mb-3 hidden py-2.5 md:block">
            Truy cập Internet ở nước ngoài mà không cần mua SIM mới. Giữ số Viettel, chọn
            quốc gia và đăng ký nhanh qua SMS.
          </p>
          <div className="hidden md:block">
            <CollectionDialogButton
              type="button"
              className="w-full"
              dialogLabel="Chọn quốc gia..."
              pagePath="/goi-cuoc-roaming"
            >
              <div className="w-full rounded-[20px] border border-white bg-white/60 px-4 py-3.5">
                <div className="flex w-full items-center justify-between rounded-2xl border border-white bg-white px-3 py-2.5">
                  <p className="text-14 font-medium md:text-16">Chọn quốc gia...</p>
                  <img
                    alt="arrow-down"
                    loading="lazy"
                    width="11"
                    height="6"
                    decoding="async"
                    className="shrink-0"
                    style={{ color: "transparent" } as CSSProperties}
                    src={sourceAsset("/icons/arrow-down.svg")}
                  />
                </div>
              </div>
            </CollectionDialogButton>
          </div>
          <p className="md:text-16 leading-tight mt-4 hidden text-center text-12 font-medium md:block">
            Nhận OTP từ Việt Nam
            <span className="mx-2">★</span>
            <b className="text-[15px] text-primary">Không cần đổi SIM</b>
            <span className="mx-2">★</span>
            Chủ động chi phí
          </p>
          <p className="md:text-16 leading-tight text-14 hidden pt-4 text-center md:block">
            Áp dụng cho thuê bao Viettel khi chuyển vùng quốc tế tại 150+ quốc gia.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full md:static md:h-[400px] md:w-[466px]">
          <CollectionMotion animation="travel" width={466} height={400} />
        </div>
      </div>
    </div>
  );
}
