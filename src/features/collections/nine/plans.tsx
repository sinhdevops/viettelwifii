"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { sourceAsset } from "@/lib/viettelup-source-assets";
import {
  NineEssentialPlanSlide,
  NinePremiumPlanCard,
  NinePremiumPlanSlide,
  NinePriorityPlanCard,
  NinePriorityPlanSlide,
} from "./nine-cards";
import {
  essentialSlides,
  premiumPlans,
  premiumSlides,
  priorityPlans,
  prioritySlides,
} from "./nine-data";

export function NinePlans() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="container">
      <div className="text-white md:mb-12 md:text-center">
        <h2 className="mb-3 font-beausans text-22 leading-[28px] md:mb-6 md:text-[55px] md:leading-[70px]">
          Danh sách gói
        </h2>
        <p className="text-12 md:text-20">
          {"Chọn gói "}
          <span className="nine-gradient mx-1 rounded-t-[8px] rounded-br-[8px] px-2.5 pb-0.5 pt-[1px] font-beausans text-12 font-bold leading-[20px] text-white md:rounded-t-[12px] md:rounded-br-[12px] md:px-[15px] md:text-18">
            Nine
          </span>
          {" và bắt đầu hành trình ưu tiên của bạn"}
        </p>
      </div>
      <div>
        <div className="relative hidden md:mt-12 md:block">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={32}
            centeredSlides={false}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="py-10"
          >
            {essentialSlides.map((item) => (
              <SwiperSlide key={item.code}>
                <NineEssentialPlanSlide item={item} />
              </SwiperSlide>
            ))}
            {priorityPlans.map((item) => (
              <SwiperSlide key={item.code}>
                <NinePriorityPlanCard item={item} />
              </SwiperSlide>
            ))}
            {premiumPlans.map((item) => (
              <SwiperSlide key={item.code}>
                <NinePremiumPlanCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="absolute h-[60px] w-[60px] rounded-full bg-white shadow-[0px_6px_20px_0px_#970A0A26] -left-8 -translate-y-1/2 top-[54%] flex items-center justify-center disabled:opacity-50 disabled:cursor-default hover:bg-gray-100 hover:text-gray-900"
          >
            <img
              alt="previous"
              loading="lazy"
              width="24"
              height="10"
              decoding="async"
              style={{ color: "transparent" }}
              src={sourceAsset("/icons/arrow-black-left.svg")}
            />
            <span className="sr-only">Previous slide</span>
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="absolute h-[60px] w-[60px] rounded-full bg-white shadow-[0px_6px_20px_0px_#970A0A26] -right-8 -translate-y-1/2 top-[54%] flex items-center justify-center disabled:opacity-50 disabled:cursor-default hover:bg-gray-100 hover:text-gray-900"
          >
            <img
              alt="next"
              loading="lazy"
              width="24"
              height="10"
              decoding="async"
              style={{ color: "transparent" }}
              src={sourceAsset("/icons/arrow-black-right.svg")}
            />
            <span className="sr-only">Next slide</span>
          </button>
        </div>
        <div className="no-scrollbar -mx-5 flex gap-4 overflow-auto px-5 py-6 md:ml-0 md:hidden md:gap-8 md:px-0 md:pt-12">
          {essentialSlides.map((item) => (
            <NineEssentialPlanSlide key={item.code} item={item} />
          ))}
          {prioritySlides.map((item) => (
            <NinePriorityPlanSlide key={item.code} item={item} />
          ))}
          {premiumSlides.map((item) => (
            <NinePremiumPlanSlide key={item.code} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
