/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
export function GicBanner() {
  return (
    <div
      id="banner-gic"
      className="relative z-10 w-full max-w-[1440px] pt-4 md:pt-[110px]"
    >
      <img
        alt="gic-banner"
        loading="lazy"
        width="1440"
        height="571"
        decoding="async"
        className="w-full"
        style={{ color: "transparent" } as CSSProperties}
        src={sourceAsset(
          "/_next/image?url=%2Fimages%2Fbanner-gic-2.png&w=3840&q=75",
        )}
        srcSet={[
          `${sourceAsset("/_next/image?url=%2Fimages%2Fbanner-gic-2.png&w=1920&q=75")} 1x`,
          `${sourceAsset("/_next/image?url=%2Fimages%2Fbanner-gic-2.png&w=3840&q=75")} 2x`,
        ].join(", ")}
      />
    </div>
  );
}
