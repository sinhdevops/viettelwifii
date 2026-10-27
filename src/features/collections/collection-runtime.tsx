"use client";

import { useEffect } from "react";

// Public RSC captured in raw/html/0171.html. Units and region order are
// confirmed by raw/assets/fdf3e1515e8e93f85a80d984.js (source chunk 9020).
const sourcePrices: Record<string, string> = {
  NETVT01: "265-225", MESHVT01: "285-240", NETVT1: "235-195",
  NETVT2: "265-240", MESHVT1: "255-210", NETVT1_CAM1: "255-215",
  NETVT2_CAM1: "285-260", MESHVT1_CAM1: "275-230", MESHVT2_CAM1: "309-265",
  NETVT1_GIAITRI: "255-215", NETVT2_GIAITRI: "285-260",
  MESHVT1_GIAITRI: "275-230", MESHVT2: "289-245", MESHVT3: "359-299",
  GIGA1: "320", GIGA2: "355", GIGA3: "390", GIGA4: "425",
};

type Slider = { move: (direction: number) => void; destroy: () => void };
const sliders = new WeakMap<HTMLElement, Slider>();

/** Preserve the captured Embla viewport/track/slide DOM; restore its finite
 * transform and snap behavior without loading the source webpack/React runtime. */
export function collectionSlider(root: HTMLElement): Slider | undefined {
  const existing = sliders.get(root);
  if (existing) return existing;
  const viewport = root.firstElementChild as HTMLElement | null;
  const candidateTrack = viewport?.firstElementChild as HTMLElement | null;
  if (!viewport || !candidateTrack || !candidateTrack.querySelector('[aria-roledescription="slide"]')) return;
  const track: HTMLElement = candidateTrack;
  const slides = Array.from(track.children) as HTMLElement[];
  // Source nine page chunk 85f09c6d4630d7bfe5ed7213.js: align:start, startIndex:4.
  const nine = window.location.pathname === "/goi-cuoc-nine";
  let index = Number(root.dataset.collectionStartIndex ?? (nine ? 4 : 0));
  let snaps: number[] = [];
  let position = 0;
  const original = { transform: track.style.transform, transition: track.style.transition, touchAction: viewport.style.touchAction };
  const cleanups: (() => void)[] = [];
  function listen(target: EventTarget, name: string, handler: EventListener, options?: AddEventListenerOptions) {
    target.addEventListener(name, handler, options);
    cleanups.push(() => target.removeEventListener(name, handler, options));
  }
  const buttons = () => Array.from(root.querySelectorAll<HTMLButtonElement>("[data-collection-direction]"));
  function render(animate = true) {
    index = Math.max(0, Math.min(index, snaps.length - 1));
    position = snaps[index] ?? 0;
    track.style.transition = animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "transform 300ms ease" : "none";
    track.style.transform = `translate3d(${-position}px, 0px, 0px)`;
    root.dataset.collectionCanPrevious = String(index > 0);
    root.dataset.collectionCanNext = String(index < snaps.length - 1);
    buttons().forEach(button => { button.disabled = button.dataset.collectionDirection === "previous" ? index === 0 : index >= snaps.length - 1; });
    root.dispatchEvent(new Event("collection:slider-state"));
  }
  function measure() {
    if (!viewport || !track || !viewport.clientWidth) return;
    const first = slides[0].getBoundingClientRect();
    const last = slides[slides.length - 1].getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    const width = track.clientWidth;
    const max = Math.max(0, last.right - trackRect.left - width);
    const edgeThreshold = first.width / 2;
    snaps = [...new Set(slides.map(slide => {
      const rect = slide.getBoundingClientRect();
      const snap = Math.max(0, Math.min(max, rect.left - first.left - (nine ? 0 : (width - rect.width) / 2)));
      // Embla trimSnaps coalesces contained edge positions. Source padding must
      // not introduce a nearly identical extra snap before the first full card.
      return snap < edgeThreshold ? 0 : max - snap < edgeThreshold ? max : snap;
    }))];
    render(false);
  }
  const move = (direction: number) => { index += direction; render(); };
  listen(root, "keydown", ((event: KeyboardEvent) => {
    if (event.target instanceof Element && event.target.closest('[role="radiogroup"], input, textarea, select')) return;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
  }) as EventListener);
  let drag: { id: number; x: number; y: number; position: number; active: boolean } | undefined;
  let suppressClick = false;
  viewport.style.touchAction = "pan-y pinch-zoom";
  listen(viewport, "pointerdown", ((event: PointerEvent) => {
    if (!event.isPrimary || event.button !== 0 || (event.target as Element).closest('button, input, select, [role="radio"]')) return;
    suppressClick = false;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, position, active: false };
  }) as EventListener);
  listen(viewport, "pointermove", ((event: PointerEvent) => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x;
    if (!drag.active && Math.abs(event.clientY - drag.y) > Math.abs(dx)) { drag = undefined; return; }
    if (!drag.active && Math.abs(dx) > 8) { drag.active = true; viewport.setPointerCapture(event.pointerId); }
    if (!drag.active) return;
    event.preventDefault();
    track.style.transition = "none";
    track.style.transform = `translate3d(${-Math.max(0, Math.min(snaps.at(-1) ?? 0, drag.position - dx))}px, 0px, 0px)`;
  }) as EventListener);
  const finish = ((event: PointerEvent) => {
    if (!drag || event.pointerId !== drag.id) return;
    if (drag.active) {
      suppressClick = true;
      const target = drag.position - (event.clientX - drag.x);
      index = snaps.reduce((best, snap, i) => Math.abs(snap - target) < Math.abs(snaps[best] - target) ? i : best, index);
      render();
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    }
    drag = undefined;
  }) as EventListener;
  listen(viewport, "pointerup", finish);
  listen(viewport, "pointercancel", (() => { drag = undefined; render(); }) as EventListener);
  listen(viewport, "click", ((event: MouseEvent) => {
    if (suppressClick) { event.preventDefault(); event.stopPropagation(); suppressClick = false; }
  }) as EventListener, { capture: true });
  const observer = new ResizeObserver(measure);
  observer.observe(viewport);
  slides.forEach(slide => observer.observe(slide));
  measure();
  const slider = { move, destroy: () => {
    observer.disconnect(); cleanups.forEach(cleanup => cleanup());
    track.style.transform = original.transform; track.style.transition = original.transition;
    viewport.style.touchAction = original.touchAction; sliders.delete(root);
  } };
  sliders.set(root, slider);
  return slider;
}

/** Mount once alongside server-rendered collection content. No extra wrapper DOM. */
export function CollectionRuntime({ rootSelector = "main" }: { rootSelector?: string }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(rootSelector);
    if (!root) return;
    const initialized = Array.from(root.querySelectorAll<HTMLElement>('[aria-roledescription="carousel"]')).map(collectionSlider);
    const groups = Array.from(root.querySelectorAll<HTMLElement>('.internet-card [role="radiogroup"]'));
    const cleanups: (() => void)[] = [];
    groups.forEach(group => {
      const card = group.closest<HTMLElement>(".internet-card");
      const radios = Array.from(group.querySelectorAll<HTMLButtonElement>('[role="radio"]'));
      const code = radios[0]?.id.replace(/-(?:HN-HCM|Other)$/, "");
      const prices = sourcePrices[code]?.split("-");
      // A generator may supply explicit hooks; the fallback matches the inspected source DOM.
      const price = card?.querySelector<HTMLElement>("[data-collection-price]") ?? group.parentElement?.nextElementSibling?.querySelector<HTMLElement>("p.whitespace-nowrap");
      if (!price || !prices?.length) return;
      const indicator = group.querySelector("[aria-checked=true] > span")?.cloneNode(true);
      const oldTabIndex = group.getAttribute("tabindex");
      group.tabIndex = -1;
      const select = (radio: HTMLButtonElement) => {
        const value = radio.value === "HN-HCM" ? prices[0] : prices[1];
        if (!value) return;
        radios.forEach(item => {
          const checked = item === radio;
          item.setAttribute("aria-checked", String(checked));
          item.dataset.state = checked ? "checked" : "unchecked";
          item.tabIndex = checked ? 0 : -1;
          item.querySelector(":scope > span")?.remove();
          if (checked && indicator) item.appendChild(indicator.cloneNode(true));
        });
        price.textContent = `${value}.000đ/tháng`;
      };
      radios.forEach(radio => { radio.tabIndex = radio.getAttribute("aria-checked") === "true" ? 0 : -1; });
      const click = (event: MouseEvent) => {
        const target = event.target as Element;
        const radio = target.closest<HTMLButtonElement>('[role="radio"]') ?? (target.closest("label")?.parentElement?.querySelector<HTMLButtonElement>('[role="radio"]'));
        if (radio && group.contains(radio)) { event.preventDefault(); event.stopPropagation(); select(radio); radio.focus(); }
      };
      const keydown = (event: KeyboardEvent) => {
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
        event.preventDefault(); event.stopPropagation();
        const current = radios.findIndex(radio => radio.getAttribute("aria-checked") === "true");
        const next = event.key === "Home" ? 0 : event.key === "End" ? radios.length - 1 : (current + (event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 1) + radios.length) % radios.length;
        select(radios[next]); radios[next].focus();
      };
      group.addEventListener("click", click);
      group.addEventListener("keydown", keydown);
      cleanups.push(() => { group.removeEventListener("click", click); group.removeEventListener("keydown", keydown); if (oldTabIndex === null) group.removeAttribute("tabindex"); else group.setAttribute("tabindex", oldTabIndex); });
    });
    // Source mobile lists already use native overflow-auto; preserve native touch
    // scrolling rather than attaching a competing touch/pointer implementation.
    return () => { cleanups.forEach(cleanup => cleanup()); initialized.forEach(slider => slider?.destroy()); };
  }, [rootSelector]);
  return null;
}
