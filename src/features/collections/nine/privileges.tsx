/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import { NinePrivilegeCard } from "./nine-cards";
import { ninePrivileges } from "./nine-data";
export function NinePrivileges() {
  return (
    <div className="container flex flex-col gap-4 md:flex-row md:gap-12">
      <div className="">
        <img
          alt="cat"
          loading="lazy"
          width="181"
          height="158"
          decoding="async"
          className="relative -left-4 mb-2 hidden md:block"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset("/_next/image?url=%2Fimages%2Fnine-cat.png&w=384&q=75")}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Fnine-cat.png&w=256&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Fnine-cat.png&w=384&q=75")} 2x`,
          ].join(", ")}
        />
        <h2 className="mb-2 whitespace-pre font-beausans text-22 leading-[28px] md:mb-6 md:text-[55px] md:leading-[70px]">
          {"Đặc quyền "}
          <span className="nine-gradient mx-1 rounded-t-[8px] rounded-br-[8px] px-2.5 pb-0.5 pt-[1px] font-beausans text-12 font-bold leading-[20px] text-white md:rounded-t-[12px] md:rounded-br-[12px] md:px-[15px] md:text-18">
            Nine
          </span>
        </h2>
        <p className="text-12 md:text-20">
          Nine không chỉ là một hệ sinh thái số, mà còn mang đến sự tiện nghi, thoải mái và hàng
          loạt đặc quyền giúp cuộc sống của bạn trở nên dễ dàng hơn.
        </p>
      </div>
      <div className="grid flex-shrink-0 grid-cols-2 grid-rows-2 gap-x-1 gap-y-4 md:gap-8">
        <div className="w-full py-3.5 md:px-0 md:py-0">
          <div className="relative mx-auto w-full max-w-[168px] md:max-w-[341px]">
            <img
              alt="Đặc quyền sân bay"
              loading="lazy"
              width="341"
              height="264"
              decoding="async"
              className="w-full"
              style={{ color: "transparent" } as CSSProperties}
              src={sourceAsset("/_next/image?url=%2Fimages%2Fbg-nine-benefit.png&w=750&q=75")}
              srcSet={[
                `${sourceAsset("/_next/image?url=%2Fimages%2Fbg-nine-benefit.png&w=384&q=75")} 1x`,
                `${sourceAsset("/_next/image?url=%2Fimages%2Fbg-nine-benefit.png&w=750&q=75")} 2x`,
              ].join(", ")}
            />
            <div className="absolute left-[50%] top-[46%] min-w-[130px] -translate-x-1/2 -translate-y-1/2 md:min-w-[260px]">
              <div className="h-[66px] border-b border-[#444444] md:h-[137px]">
                <div className="flex items-center justify-center gap-2 md:gap-4">
                  <img
                    alt="Đặc quyền sân bay"
                    loading="lazy"
                    width="77"
                    height="77"
                    decoding="async"
                    className="w-[37px] md:w-[77px]"
                    style={{ color: "transparent" } as CSSProperties}
                    src={sourceAsset("/images/nine-benefit-1.svg")}
                  />
                  <h3 className="w-full max-w-[76px] font-beausans text-14 font-bold leading-[15px] md:max-w-[160px] md:text-[28px] md:leading-[32px]">
                    Đặc quyền sân bay
                  </h3>
                </div>
                <div className="nine-gradient-dark ml-2 mt-2.5 rounded-t-[5.5px] rounded-br-[5.5px] px-1 py-0.5 font-beausans text-[5px] font-bold leading-tight md:mt-5 md:px-[7px] md:py-1 md:text-[11px]">
                  Trải nghiệm tiên phong cho gói cước di động
                </div>
              </div>
              <ul className="marker pl-1 pt-2.5 md:pl-0 md:pt-5">
                <li className="text-[6px] font-semibold leading-[9px] md:text-14 md:leading-[18px]">
                  Miễn phí phòng chờ hạng thương gia
                </li>
                <li className="text-[6px] font-semibold leading-[9px] md:text-14 md:leading-[18px]">
                  Miễn phí dịch vụ đưa tiễn sân bay
                </li>
              </ul>
            </div>
          </div>
        </div>
        {ninePrivileges.map((item) => (
          <NinePrivilegeCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
