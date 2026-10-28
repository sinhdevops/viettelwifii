/* eslint-disable @next/next/no-img-element */
"use client";
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CameraInternetCard, CameraInternetSlide, TelevisionInternetCard } from "./internet-cards";
import { cameraPlans, cameraSlides, televisionPlans } from "./internet-data";
export function InternetEntertainmentAndCamera() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="container flex flex-col gap-4 pb-4 pl-5 pt-10 md:gap-[90px] md:py-[90px] md:pl-0">
      <div>
        <div className="text-left md:text-center">
          <div className="relative">
            <span className="absolute left-0 mr-3 h-full w-0 rounded-full border-[2px] border-primary md:hidden"></span>
            <h2 className="ml-3.5 font-beausans text-20 leading-[28px] text-[#282828] md:ml-0 md:text-[44px] md:leading-[54px]">
              Gói cước truyền hình giải trí đa nền tảng
            </h2>
          </div>
          <p className="pr-5 pt-2 text-12 text-[#444444] md:pr-0 md:pt-4 md:text-20">
            Mang cả thế giới giải trí đến phòng khách với hàng trăm kênh truyền hình chất lượng cao
          </p>
        </div>
        <div className="no-scrollbar -ml-5 flex gap-4 overflow-auto px-5 py-6 md:ml-0 md:gap-8 md:px-0 md:pt-12">
          {televisionPlans.map((item) => (
            <TelevisionInternetCard key={item.code} item={item} />
          ))}
        </div>
      </div>
      <div>
        <div className="text-left md:text-center">
          <div className="relative">
            <span className="absolute left-0 mr-3 h-full w-0 rounded-full border-[2px] border-primary md:hidden"></span>
            <h2 className="ml-3.5 font-beausans text-20 leading-[28px] text-[#282828] md:ml-0 md:text-[44px] md:leading-[54px]">
              Gói cước Camera gia đình an tâm
            </h2>
          </div>
          <p className="pr-5 pt-2 text-12 text-[#444444] md:pr-0 md:pt-4 md:text-20">
            Gắn kết cả gia đình bằng sự chăm sóc và giám sát dịu dàng
          </p>
        </div>
        <div className="no-scrollbar -ml-5 flex gap-4 overflow-auto px-5 py-6 md:ml-0 md:hidden md:gap-8 md:px-0 md:pt-12">
          {cameraPlans.map((item) => (
            <CameraInternetCard key={item.code} item={item} />
          ))}
        </div>
        <div className="relative hidden md:mt-12 md:block">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={24}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params?.navigation && typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
                swiper.navigation?.destroy();
                swiper.navigation?.init();
                swiper.navigation?.update();
              });
            }}
          >
            {cameraSlides.map((item) => (
              <SwiperSlide key={item.code}>
                <CameraInternetSlide item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="absolute h-[60px] w-[60px] rounded-full bg-white shadow-[0px_6px_20px_0px_#970A0A26] -left-8 top-1/2 -translate-y-1/2 flex items-center justify-center disabled:opacity-50 disabled:cursor-default hover:bg-gray-100"
          >
            <img alt="previous" loading="lazy" width="24" height="10" decoding="async" style={{ color: "transparent" }} src={sourceAsset("/icons/arrow-black-left.svg")} />
            <span className="sr-only">Previous slide</span>
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="absolute h-[60px] w-[60px] rounded-full bg-white shadow-[0px_6px_20px_0px_#970A0A26] -right-8 top-1/2 -translate-y-1/2 flex items-center justify-center disabled:opacity-50 disabled:cursor-default hover:bg-gray-100"
          >
            <img alt="next" loading="lazy" width="24" height="10" decoding="async" style={{ color: "transparent" }} src={sourceAsset("/icons/arrow-black-right.svg")} />
            <span className="sr-only">Next slide</span>
          </button>
        </div>
      </div>
    </div>
  );
}
