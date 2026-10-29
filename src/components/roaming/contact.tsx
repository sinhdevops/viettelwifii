/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
export function RoamingContact() {
  return (
    <div className="w-full bg-[url('/images/bg-roaming-dots-4.webp')] bg-contain bg-top bg-no-repeat px-8 pt-3 pb-8 md:px-0 md:pt-6 md:pb-[60px]">
      <div className="roaming container">
        <div className="mt-5 md:mt-[44px]">
          <img
            alt="roaming-viettel"
            loading="lazy"
            width="953"
            height="294"
            decoding="async"
            className="w-full"
            style={{ color: "transparent" } as CSSProperties}
            src={sourceAsset(
              "/_next/image?url=%2Fimages%2Froaming-viettel.webp&w=1920&q=75",
            )}
            srcSet={[
              `${sourceAsset("/_next/image?url=%2Fimages%2Froaming-viettel.webp&w=1080&q=75")} 1x`,
              `${sourceAsset("/_next/image?url=%2Fimages%2Froaming-viettel.webp&w=1920&q=75")} 2x`,
            ].join(", ")}
          />
        </div>
      </div>
    </div>
  );
}
