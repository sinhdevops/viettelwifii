"use client";

import Image from "next/image";
import { useRef, useState, type TouchEvent } from "react";

export type HomeSlide = {
  id: string;
  href: string;
  label: string;
  alt: string;
  desktop: string;
  mobile: string;
};

/** Source structure: section > stage > two positioned articles > controls > dots. */
export function HomeCarousel({ slides }: { slides: HomeSlide[] }) {
  const [active, setActive] = useState(Math.min(1, slides.length - 1));
  const touchStart = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const move = (direction: number) => setActive((index) => (index + direction + slides.length) % slides.length);
  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStart.current = event.touches[0]?.clientX ?? null;
    suppressClick.current = false;
  };
  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0]?.clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) > 45) {
      suppressClick.current = true;
      move(distance > 0 ? -1 : 1);
    }
  };
  if (!slides.length) return null;

  return (
    <section aria-label="Banner ưu đãi Viettel" className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white md:aspect-[1920/792]" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onClickCapture={(event) => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; } }}>
        {slides.map((slide, index) => (
          <article key={slide.id} aria-hidden={index !== active} className={`absolute inset-0 transition-opacity duration-[600ms] ease-[ease] motion-reduce:transition-none ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}>
            <a href={slide.href} tabIndex={index === active ? 0 : -1} className="block h-full w-full cursor-pointer">
              <picture>
                <source media="(max-width:767px)" srcSet={slide.mobile} />
                <Image unoptimized src={slide.desktop} width={1920} height={792} sizes="100vw" alt={slide.alt} priority={index === 1} className="block h-full w-full object-contain" />
              </picture>
            </a>
          </article>
        ))}
        <button type="button" aria-label="Banner trước" onClick={() => move(-1)} className="absolute left-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-0 bg-white/60 text-[26px] leading-none text-[#222] max-md:h-[30px] max-md:w-[30px] max-md:bg-white/50 max-md:text-[20px]">‹</button>
        <button type="button" aria-label="Banner tiếp theo" onClick={() => move(1)} className="absolute right-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-0 bg-white/60 text-[26px] leading-none text-[#222] max-md:h-[30px] max-md:w-[30px] max-md:bg-white/50 max-md:text-[20px]">›</button>
      </div>
      <div className="flex items-center justify-center gap-2.5 py-4" role="group" aria-label="Chọn banner">
        {slides.map((slide, index) => <button key={slide.id} type="button" aria-label={slide.label} aria-current={active === index} onClick={() => setActive(index)} className={`h-[5px] w-7 cursor-pointer rounded-lg border-0 p-0 ${active === index ? "bg-[#ee0033]" : "bg-[#ccc]"}`} />)}
      </div>
    </section>
  );
}
