"use client";

// shadcn/ui Carousel composition, adapted to the app's common Button and styles.
// Reference: shadcn-ui/ui apps/v4/registry/bases/base/ui/carousel.tsx (MIT).
import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "./button";
import { cn } from "@/lib/utils";
import styles from "./carousel.module.css";

export type CarouselApi = UseEmblaCarouselType[1];
type EmblaParameters = Parameters<typeof useEmblaCarousel>;
type CarouselProps = React.ComponentProps<"div"> & {
  opts?: EmblaParameters[0];
  plugins?: EmblaParameters[1];
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};
type Context = {
  viewportRef: UseEmblaCarouselType[0];
  api: CarouselApi;
  orientation: "horizontal" | "vertical";
  previous: () => void;
  next: () => void;
  canPrevious: boolean;
  canNext: boolean;
};
const CarouselContext = React.createContext<Context | null>(null);
export function useCarousel() {
  const value = React.useContext(CarouselContext);
  if (!value) throw new Error("Carousel parts must be inside Carousel");
  return value;
}

export function Carousel({
  opts,
  plugins,
  orientation = "horizontal",
  setApi,
  children,
  className,
  onKeyDown,
  ...props
}: CarouselProps) {
  const reducedMotion = React.useRef(false);
  const [viewportRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      // Embla's native pointer lifecycle also resets click suppression after a
      // swipe. Excluding buttons here can swallow the next intentional CTA click.
      watchDrag: opts?.watchDrag ?? true,
      breakpoints: {
        ...opts?.breakpoints,
        "(prefers-reduced-motion: reduce)": { duration: 0 },
      },
    },
    plugins,
  );
  const [canPrevious, setPrevious] = React.useState(false);
  const [canNext, setNext] = React.useState(false);
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reducedMotion.current = media.matches;
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  React.useEffect(() => {
    if (!api) return;
    const sync = () => {
      setPrevious(api.canScrollPrev());
      setNext(api.canScrollNext());
    };
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    // Embla's drag release supplies its own duration, overriding option duration.
    const settleReducedMotion = () => {
      if (reducedMotion.current) api.scrollTo(api.selectedScrollSnap(), true);
    };
    api.on("pointerUp", settleReducedMotion);
    setApi?.(api);
    return () => {
      api.off("select", sync);
      api.off("reInit", sync);
      api.off("pointerUp", settleReducedMotion);
    };
  }, [api, setApi]);
  const previous = React.useCallback(
    () => api?.scrollPrev(reducedMotion.current),
    [api],
  );
  const next = React.useCallback(
    () => api?.scrollNext(reducedMotion.current),
    [api],
  );
  return (
    <CarouselContext.Provider
      value={{
        viewportRef,
        api,
        orientation,
        previous,
        next,
        canPrevious,
        canNext,
      }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        data-slot="carousel"
        data-carousel-engine="embla"
        className={cn(styles.root, className)}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (
            event.defaultPrevented ||
            (event.target instanceof Element &&
              event.target !== event.currentTarget &&
              event.target.closest(
                "button,a,input,select,textarea,[role=radio],[role=radiogroup]",
              ))
          )
            return;
          const prevKey =
            orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
          const nextKey =
            orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
          if (event.key === prevKey) {
            event.preventDefault();
            previous();
          }
          if (event.key === nextKey) {
            event.preventDefault();
            next();
          }
        }}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  className,
  viewportClassName,
  ...props
}: React.ComponentProps<"div"> & { viewportClassName?: string }) {
  const { viewportRef, orientation } = useCarousel();
  return (
    <div
      ref={viewportRef}
      data-slot="carousel-content"
      className={cn(
        styles.viewport,
        orientation === "vertical" && styles.vertical,
        viewportClassName,
      )}
    >
      <div
        data-slot="carousel-track"
        className={cn(
          styles.track,
          orientation === "vertical" && styles.verticalTrack,
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function CarouselItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  useCarousel();
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(styles.item, className)}
      {...props}
    />
  );
}

export function CarouselPrevious({
  className,
  onClick,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const { previous, canPrevious } = useCarousel();
  return (
    <Button
      variant="unstyled"
      size="unstyled"
      aria-label="Previous slide"
      data-slot="carousel-previous"
      className={cn(styles.arrow, styles.previous, className)}
      {...props}
      disabled={disabled || !canPrevious}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) previous();
      }}
    >
      {children ?? <ArrowLeft size={24} aria-hidden="true" />}
    </Button>
  );
}

export function CarouselNext({
  className,
  onClick,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const { next, canNext } = useCarousel();
  return (
    <Button
      variant="unstyled"
      size="unstyled"
      aria-label="Next slide"
      data-slot="carousel-next"
      className={cn(styles.arrow, styles.next, className)}
      {...props}
      disabled={disabled || !canNext}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) next();
      }}
    >
      {children ?? <ArrowRight size={24} aria-hidden="true" />}
    </Button>
  );
}
