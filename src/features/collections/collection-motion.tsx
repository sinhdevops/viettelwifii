"use client";

import { useEffect, useRef } from "react";
import type { DotLottie } from "@lottiefiles/dotlottie-web";

const animations = {
  travel: { file: "travel.lottie", speed: 1 },
  ruler: { file: "ruler.lottie", speed: 0.9 },
  plane: { file: "plane.lottie", speed: 0.75 },
  gift: { file: "gift.lottie", speed: 1 },
} as const;

export type CollectionAnimation = keyof typeof animations;

let playerModule:
  Promise<typeof import("@lottiefiles/dotlottie-web")> | undefined;
function loadPlayer() {
  return (playerModule ??= import("@lottiefiles/dotlottie-web").then(
    (module) => {
      // Pin the original runtime and serve its WASM locally, without CDN requests.
      module.DotLottie.setWasmUrl(
        "/assets/viettelup-motion/dotlottie-player.wasm",
      );
      return module;
    },
  ));
}

/** Original source animations; the parent retains its source size/position. */
export function CollectionMotion({
  animation,
  width,
  height,
}: {
  animation: CollectionAnimation;
  width?: number;
  height?: number;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    let cancelled = false;
    let player: DotLottie | undefined;
    element.dataset.motionState = "loading";

    const onError = (event: { error: Error }) => {
      if (cancelled) return;
      element.dataset.motionState = "error";
      console.error(
        `Unable to render original ${animation} animation`,
        event.error,
      );
    };

    void loadPlayer()
      .then(({ DotLottie: Player }) => {
        if (cancelled) return;
        const source = animations[animation];
        player = new Player({
          canvas: element,
          src: `/assets/viettelup-motion/${source.file}`,
          autoplay: true,
          loop: true,
          speed: source.speed,
          renderConfig: { autoResize: true, freezeOnOffscreen: true },
        });
        player.addEventListener("load", () => {
          if (!cancelled) element.dataset.motionState = "ready";
        });
        player.addEventListener("loadError", onError);
        player.addEventListener("renderError", onError);
      })
      .catch((error: Error) => onError({ error }));

    return () => {
      cancelled = true;
      player?.destroy();
    };
  }, [animation]);

  return (
    <canvas
      ref={canvas}
      width={width}
      height={height}
      style={{ width: "100%", height: "100%" }}
      data-motion={animation}
      data-motion-state="loading"
      aria-hidden="true"
    />
  );
}
