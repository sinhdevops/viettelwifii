"use client";

import { useSyncExternalStore } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type HomeSlide = {
  id: string;
  href: string;
  label: string;
  alt: string;
  desktop: string;
  mobile: string;
};

const emptySubscribe = () => () => {};

export function HomeCarousel({ slides }: { slides: HomeSlide[] }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!slides.length) return null;

  const initialSlideIndex = Math.min(1, slides.length - 1);
  const initialSlide = slides[initialSlideIndex] || slides[0];

  return (
    <section aria-label="Banner ưu đãi Viettel" className="w-full">
      {mounted ? (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          initialSlide={initialSlideIndex}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          navigation={{
            nextEl: ".home-banner-next",
            prevEl: ".home-banner-prev",
          }}
          pagination={{
            clickable: true,
            el: ".home-banner-dots",
            bulletClass: "home-banner-dot",
            bulletActiveClass: "home-banner-dot-active",
            renderBullet: (index, className) =>
              `<button class="${className}" aria-label="${slides[index]?.label ?? `Banner ${index + 1}`}"></button>`,
          }}
          className="relative aspect-[4/3] w-full overflow-hidden bg-white md:aspect-[1920/792]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <a
                href={slide.href}
                className="block h-full w-full cursor-pointer"
              >
                <picture>
                  <source media="(max-width:767px)" srcSet={slide.mobile} />
                  <Image
                    unoptimized
                    src={slide.desktop}
                    width={1920}
                    height={792}
                    sizes="100vw"
                    alt={slide.alt}
                    priority={index === initialSlideIndex}
                    className="block h-full w-full object-contain"
                  />
                </picture>
              </a>
            </SwiperSlide>
          ))}
          <button
            aria-label="Banner trước"
            className="home-banner-prev absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white/60 text-[26px] leading-none text-[#222] max-md:h-[30px] max-md:w-[30px] max-md:bg-white/50 max-md:text-[20px]"
          >
            ‹
          </button>
          <button
            aria-label="Banner tiếp theo"
            className="home-banner-next absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white/60 text-[26px] leading-none text-[#222] max-md:h-[30px] max-md:w-[30px] max-md:bg-white/50 max-md:text-[20px]"
          >
            ›
          </button>
        </Swiper>
      ) : (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-white md:aspect-[1920/792]">
          <a
            href={initialSlide.href}
            className="block h-full w-full cursor-pointer"
          >
            <picture>
              <source media="(max-width:767px)" srcSet={initialSlide.mobile} />
              <Image
                unoptimized
                src={initialSlide.desktop}
                width={1920}
                height={792}
                sizes="100vw"
                alt={initialSlide.alt}
                priority
                className="block h-full w-full object-contain"
              />
            </picture>
          </a>
        </div>
      )}
      <div
        className="home-banner-dots flex items-center justify-center gap-2.5 py-4"
        role="group"
        aria-label="Chọn banner"
      />
      <style>{`
        .home-banner-dot {
          display: inline-block;
          height: 5px;
          width: 28px;
          border-radius: 8px;
          border: 0;
          padding: 0;
          cursor: pointer;
          background: #ccc;
        }
        .home-banner-dot-active {
          background: #ee0033;
        }
      `}</style>
    </section>
  );
}
