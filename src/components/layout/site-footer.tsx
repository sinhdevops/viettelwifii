"use client";
import { siteConfig } from "@/lib/site-config";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const isNine = usePathname() === "/goi-cuoc-nine";
  return (
    <footer className={isNine ? "bg-[#282828]" : "bg-white"}>
      <div className="container mx-auto">
        <div className="m-auto flex w-full max-w-[1440px] flex-row justify-around gap-8 px-4 py-[30px] sm:gap-0 sm:px-0">
          <div>
            <h5 className="pb-2">
              <strong>
                <span className="text-16 font-bold sm:text-[19px]">
                  Đơn vị cung cấp
                </span>
              </strong>
            </h5>
            <Image
              unoptimized
              alt="Viettel"
              src="/assets/viettelup/20181fad4624cbcaa9913d53.webp"
              width={205}
              height={71}
            />
          </div>
          <div className={isNine ? "text-white" : ""}>
            <div className="flex gap-1 pb-2">
              <h5>
                <strong>
                  <span className="text-16 sm:text-[19px]">Liên hệ</span>
                </strong>
              </h5>
            </div>
            <div className="text-14 sm:text-16">
              <div className="flex items-center gap-1 fill-black">
                <Image
                  unoptimized
                  alt="Viettel"
                  src="/assets/viettelup/b5cc5a0a656647011dce266a.webp"
                  width={18}
                  height={18}
                />
                <p>Tổng đài {siteConfig.phoneNumber}</p>
              </div>
              <div className="flex items-center gap-1 fill-black">
                <Image
                  unoptimized
                  alt="Viettel"
                  src="/assets/viettelup/1be0cff50261445640754eed.webp"
                  width={18}
                  height={18}
                />
                <p>Ông Ích Khiêm, Cẩm Lệ, Đà Nẵng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary flex justify-center pt-[8px] pb-[11px] text-[#ffffffbd]">
        <p>© 2024 {siteConfig.hostname}. All rights reserved</p>
      </div>
    </footer>
  );
}
