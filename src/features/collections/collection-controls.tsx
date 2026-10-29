"use client";

import { Button as AppButton } from "@/components/ui/button";
import dynamic from "next/dynamic";
import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from "react";
import { collectionSlider } from "./collection-runtime";

const CollectionCountryPicker = dynamic(() =>
  import("./collection-country-picker").then(
    (module) => module.CollectionCountryPicker,
  ),
);
const CollectionSignupDialog = dynamic(() =>
  import("./collection-signup-dialog").then(
    (module) => module.CollectionSignupDialog,
  ),
);

type SourceButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/** Source buttons remain in their captured DOM positions. Production lead
 * submission is intentionally unavailable until source product IDs are verified. */
export function CollectionDialogButton({
  dialogLabel,
  pagePath,
  children,
  ...props
}: SourceButtonProps & { dialogLabel: string; pagePath: string }) {
  if (dialogLabel.toLocaleLowerCase("vi").includes("quốc gia")) {
    return (
      <CollectionCountryPicker {...props}>{children}</CollectionCountryPicker>
    );
  }
  return (
    <CollectionSignupDialog
      {...props}
      dialogLabel={dialogLabel}
      pagePath={pagePath}
    >
      {children}
    </CollectionSignupDialog>
  );
}

export function CollectionSliderButton({
  direction,
  onClick,
  children,
  ...props
}: SourceButtonProps & { direction: "previous" | "next" }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [disabled, setDisabled] = useState(Boolean(props.disabled));
  useEffect(() => {
    const root = ref.current?.closest<HTMLElement>(
      '[aria-roledescription="carousel"]',
    );
    if (!root) return;
    const sync = () =>
      setDisabled(
        root.dataset[
          direction === "previous"
            ? "collectionCanPrevious"
            : "collectionCanNext"
        ] !== "true",
      );
    root.addEventListener("collection:slider-state", sync);
    collectionSlider(root);
    sync();
    return () => root.removeEventListener("collection:slider-state", sync);
  }, [direction]);
  function slide(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    const root = event.currentTarget.closest<HTMLElement>(
      '[aria-roledescription="carousel"]',
    );
    if (root) {
      const slider = collectionSlider(root);
      if (slider) {
        slider.move(direction === "next" ? 1 : -1);
        return;
      }
    }
    let ancestor: HTMLElement | null = event.currentTarget.parentElement;
    while (ancestor) {
      const candidate = ancestor.querySelector<HTMLElement>(
        "[data-collection-slide-track], .swiper-wrapper, .overflow-x-auto, .overflow-auto, .overflow-x-scroll",
      );
      if (
        candidate?.scrollWidth &&
        candidate.scrollWidth > candidate.clientWidth
      ) {
        candidate.scrollBy({
          left:
            (direction === "next" ? 1 : -1) *
            Math.max(candidate.clientWidth * 0.75, 220),
          behavior: "smooth",
        });
        return;
      }
      ancestor = ancestor.parentElement;
    }
  }
  return (
    <AppButton
      variant="unstyled"
      size="unstyled"
      {...props}
      ref={ref}
      disabled={disabled}
      data-collection-direction={direction}
      onClick={slide}
    >
      {children}
    </AppButton>
  );
}
