/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { RoamingGuideStepData } from "@/constants/roaming/roaming-data";
export function RoamingGuideStep({ item }: { item: RoamingGuideStepData }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(90deg,#E20017_0%,#FF526F_100%)]">
        <img
          alt={item.imageAlt}
          loading="lazy"
          width="40"
          height="40"
          decoding="async"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset(item.image)}
          srcSet={[
            `${sourceAsset(item.smallImage)} 1x`,
            `${sourceAsset(item.image)} 2x`,
          ].join(", ")}
        />
      </div>
      <h4 className="text-16 text-center font-semibold">{item.title}</h4>
      <div className="text-14 text-center leading-relaxed">
        <p>{item.description}</p>
      </div>
    </div>
  );
}
