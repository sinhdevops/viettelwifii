"use client";

import { useEffect } from "react";
import EmblaCarousel from "embla-carousel";
import { sourcePrices } from "./internet/regional-prices";

// Public RSC captured in raw/html/0171.html. Units and region order are
// confirmed by raw/assets/fdf3e1515e8e93f85a80d984.js (source chunk 9020).

type Slider = { move: (direction: number) => void; destroy: () => void };
const sliders = new WeakMap<HTMLElement, Slider>();

/** Keep the existing source DOM/buttons, but let real Embla own all motion. */
export function collectionSlider(root: HTMLElement): Slider | undefined {
  // React Carousel already has its own Embla instance and lifecycle.
  if (root.dataset.carouselEngine === "embla") return;
  const existing = sliders.get(root);
  if (existing) return existing;
  const viewport = root.firstElementChild as HTMLElement | null;
  const track = viewport?.firstElementChild as HTMLElement | null;
  if (
    !viewport ||
    !track ||
    !track.querySelector('[aria-roledescription="slide"]')
  )
    return;

  const original = {
    transform: track.style.transform,
    transition: track.style.transition,
    touchAction: viewport.style.touchAction,
    engine: root.dataset.carouselEngine,
  };
  viewport.style.touchAction = "pan-y pinch-zoom";
  // CSS transitions must not fight Embla's frame-by-frame physics transforms.
  track.style.transition = "none";
  const nine = window.location.pathname === "/goi-cuoc-nine";
  let retainedIndex = Number(root.dataset.collectionStartIndex ?? (nine ? 4 : 0));
  let measuredWidth = viewport.clientWidth;
  const api = EmblaCarousel(viewport, {
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
    duration: 25,
    startIndex: retainedIndex,
    watchResize: (instance) => {
      const width = viewport.clientWidth;
      if (!width) {
        measuredWidth = 0;
        return false;
      }
      if (width !== measuredWidth) {
        measuredWidth = width;
        instance.reInit({ startIndex: retainedIndex });
        return false;
      }
      return true;
    },
  });
  root.dataset.carouselEngine = "embla-dom";
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const sync = () => {
    // Hidden desktop lists have only one measurable snap; retain the real index.
    if (viewport.clientWidth) retainedIndex = api.selectedScrollSnap();
    root.dataset.collectionCanPrevious = String(api.canScrollPrev());
    root.dataset.collectionCanNext = String(api.canScrollNext());
    root
      .querySelectorAll<HTMLButtonElement>("[data-collection-direction]")
      .forEach((button) => {
        button.disabled =
          button.dataset.collectionDirection === "previous"
            ? !api.canScrollPrev()
            : !api.canScrollNext();
      });
    root.dispatchEvent(new Event("collection:slider-state"));
  };
  const settleReducedMotion = () => {
    if (motion.matches) api.scrollTo(api.selectedScrollSnap(), true);
  };
  const move = (direction: number) => {
    if (direction < 0) api.scrollPrev(motion.matches);
    else api.scrollNext(motion.matches);
  };
  const keydown = (event: KeyboardEvent) => {
    if (
      event.target instanceof Element &&
      event.target.closest(
        '[role="radiogroup"], input, textarea, select, a, button:not([data-collection-direction])',
      )
    )
      return;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      move(event.key === "ArrowRight" ? 1 : -1);
    }
  };
  root.addEventListener("keydown", keydown);
  motion.addEventListener("change", settleReducedMotion);
  api
    .on("select", sync)
    .on("reInit", sync)
    .on("pointerUp", settleReducedMotion);
  const slider: Slider = {
    move,
    destroy: () => {
      root.removeEventListener("keydown", keydown);
      motion.removeEventListener("change", settleReducedMotion);
      api
        .off("select", sync)
        .off("reInit", sync)
        .off("pointerUp", settleReducedMotion);
      api.destroy();
      track.style.transform = original.transform;
      track.style.transition = original.transition;
      viewport.style.touchAction = original.touchAction;
      if (original.engine === undefined) delete root.dataset.carouselEngine;
      else root.dataset.carouselEngine = original.engine;
      delete root.dataset.collectionCanPrevious;
      delete root.dataset.collectionCanNext;
      sliders.delete(root);
    },
  };
  sliders.set(root, slider);
  sync();
  return slider;
}

/** Mount once alongside server-rendered collection content. No extra wrapper DOM. */
export function CollectionRuntime({
  rootSelector = "main",
}: {
  rootSelector?: string;
}) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(rootSelector);
    if (!root) return;
    const initialized = Array.from(
      root.querySelectorAll<HTMLElement>('[aria-roledescription="carousel"]'),
    ).map(collectionSlider);
    const groups = Array.from(
      root.querySelectorAll<HTMLElement>('.internet-card [role="radiogroup"]'),
    );
    const cleanups: (() => void)[] = [];
    groups.forEach((group) => {
      if (group.hasAttribute("data-shadcn-region")) return;
      const card = group.closest<HTMLElement>(".internet-card");
      const radios = Array.from(
        group.querySelectorAll<HTMLButtonElement>('[role="radio"]'),
      );
      const code = radios[0]?.id.replace(/-(?:HN-HCM|Other)$/, "");
      const prices = sourcePrices[code]?.split("-");
      // A generator may supply explicit hooks; the fallback matches the inspected source DOM.
      const price =
        card?.querySelector<HTMLElement>("[data-collection-price]") ??
        group.parentElement?.nextElementSibling?.querySelector<HTMLElement>(
          "p.whitespace-nowrap",
        );
      if (!price || !prices?.length) return;
      const indicator = group
        .querySelector("[aria-checked=true] > span")
        ?.cloneNode(true);
      const oldTabIndex = group.getAttribute("tabindex");
      group.tabIndex = -1;
      const select = (radio: HTMLButtonElement) => {
        const value = radio.value === "HN-HCM" ? prices[0] : prices[1];
        if (!value) return;
        radios.forEach((item) => {
          const checked = item === radio;
          item.setAttribute("aria-checked", String(checked));
          item.dataset.state = checked ? "checked" : "unchecked";
          item.tabIndex = checked ? 0 : -1;
          item.querySelector(":scope > span")?.remove();
          if (checked && indicator) item.appendChild(indicator.cloneNode(true));
        });
        price.textContent = `${value}.000đ/tháng`;
      };
      radios.forEach((radio) => {
        radio.tabIndex = radio.getAttribute("aria-checked") === "true" ? 0 : -1;
      });
      const click = (event: MouseEvent) => {
        const target = event.target as Element;
        const radio =
          target.closest<HTMLButtonElement>('[role="radio"]') ??
          target
            .closest("label")
            ?.parentElement?.querySelector<HTMLButtonElement>('[role="radio"]');
        if (radio && group.contains(radio)) {
          event.preventDefault();
          event.stopPropagation();
          select(radio);
          radio.focus();
        }
      };
      const keydown = (event: KeyboardEvent) => {
        if (
          ![
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
          ].includes(event.key)
        )
          return;
        event.preventDefault();
        event.stopPropagation();
        const current = radios.findIndex(
          (radio) => radio.getAttribute("aria-checked") === "true",
        );
        const next =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? radios.length - 1
              : (current +
                  (event.key === "ArrowLeft" || event.key === "ArrowUp"
                    ? -1
                    : 1) +
                  radios.length) %
                radios.length;
        select(radios[next]);
        radios[next].focus();
      };
      group.addEventListener("click", click);
      group.addEventListener("keydown", keydown);
      cleanups.push(() => {
        group.removeEventListener("click", click);
        group.removeEventListener("keydown", keydown);
        if (oldTabIndex === null) group.removeAttribute("tabindex");
        else group.setAttribute("tabindex", oldTabIndex);
      });
    });
    // Source mobile lists already use native overflow-auto; preserve native touch
    // scrolling rather than attaching a competing touch/pointer implementation.
    return () => {
      cleanups.forEach((cleanup) => cleanup());
      initialized.forEach((slider) => slider?.destroy());
    };
  }, [rootSelector]);
  return null;
}
