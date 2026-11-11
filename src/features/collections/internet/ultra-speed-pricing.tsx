/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
import { UltraSpeedInternetCard } from "./ultra-speed-internet-card";
import { UltraSpeedInternetSlide } from "./ultra-speed-internet-slide";
import { ultraSpeedPlans } from "./internet-data";
import styles from "./ultra-speed-carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export function InternetUltraSpeedPricing() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div
      id="ultra-speed"
      className={`container pt-[40px] md:py-[90px] ${styles.section}`}
    >
      <div>
        <div className="pl-5 text-left md:pl-0 md:text-center">
          <div className="relative">
            <span className="border-primary absolute left-0 mr-3 h-full w-0 rounded-full border-[2px] md:hidden"></span>
            <h2 className="font-beausans text-20 ml-3.5 leading-[28px] text-[#282828] md:ml-0 md:text-[44px] md:leading-[54px]">
              Gói cước Ultra Speed
            </h2>
          </div>
          <p className="text-12 md:text-20 pt-2 pr-5 text-[#444444] md:pt-4 md:pr-0">
            Bứt phá giới hạn tốc độ với đường truyền siêu ổn định, tối ưu cho
            coder, dân văn phòng và streamer chuyên nghiệp
          </p>
        </div>

        {/* Mobile: horizontal swipe carousel */}
        <div className="mt-6 md:hidden">
          <Swiper
            modules={[FreeMode]}
            freeMode
            slidesPerView="auto"
            spaceBetween={12}
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}
          >
            {ultraSpeedPlans.map((item, index) => (
              <SwiperSlide key={index} style={{ width: 196 }}>
                <UltraSpeedInternetCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Swiper with navigation arrows */}
        <div className="relative hidden md:mt-12 md:block">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={24}
            navigation={{
              prevEl: null,
              nextEl: null,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.destroyed || !swiper.navigation) return;
                if (
                  swiper.params?.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
                swiper.navigation?.destroy();
                swiper.navigation?.init();
                swiper.navigation?.update();
              });
            }}
          >
            {ultraSpeedPlans.map((item, index) => (
              <SwiperSlide key={index}>
                <UltraSpeedInternetSlide item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="absolute top-1/2 -left-8 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0px_6px_20px_0px_#970A0A26] hover:bg-gray-100 disabled:cursor-default disabled:opacity-50"
          >
            <img
              alt="previous"
              loading="lazy"
              width="24"
              height="10"
              decoding="async"
              style={{ color: "transparent" }}
              src="/assets/viettelup/a99b912fe8229005fe387173.svg"
            />
            <span className="sr-only">Previous slide</span>
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="absolute top-1/2 -right-8 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0px_6px_20px_0px_#970A0A26] hover:bg-gray-100 disabled:cursor-default disabled:opacity-50"
          >
            <img
              alt="next"
              loading="lazy"
              width="24"
              height="10"
              decoding="async"
              style={{ color: "transparent" }}
              src="/assets/viettelup/d4869de7b0533b6c535bad05.svg"
            />
            <span className="sr-only">Next slide</span>
          </button>
        </div>
      </div>
    </div>
  );
}
