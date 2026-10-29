"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NineEssentialPlanSlide } from "./nine-essential-plan-slide";
import { NinePremiumPlanCard } from "./nine-premium-plan-card";
import { NinePremiumPlanSlide } from "./nine-premium-plan-slide";
import { NinePriorityPlanCard } from "./nine-priority-plan-card";
import { NinePriorityPlanSlide } from "./nine-priority-plan-slide";
import {
  essentialSlides,
  premiumPlans,
  premiumSlides,
  priorityPlans,
  prioritySlides,
} from "@/constants/nine/nine-data";

export function NinePlans() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="container">
      <div className="text-white md:mb-12 md:text-center">
        <h2 className="font-beausans text-22 mb-3 leading-[28px] md:mb-6 md:text-[55px] md:leading-[70px]">
          Danh sách gói
        </h2>
        <p className="text-12 md:text-20">
          {"Chọn gói "}
          <span className="nine-gradient font-beausans text-12 md:text-18 mx-1 rounded-t-[8px] rounded-br-[8px] px-2.5 pt-[1px] pb-0.5 leading-[20px] font-bold text-white md:rounded-t-[12px] md:rounded-br-[12px] md:px-[15px]">
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
              prevEl: null,
              nextEl: null,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.destroyed || !swiper.navigation) return;
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
            className="absolute top-[54%] -left-8 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0px_6px_20px_0px_#970A0A26] hover:bg-gray-100 hover:text-gray-900 disabled:cursor-default disabled:opacity-50"
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
            className="absolute top-[54%] -right-8 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0px_6px_20px_0px_#970A0A26] hover:bg-gray-100 hover:text-gray-900 disabled:cursor-default disabled:opacity-50"
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
