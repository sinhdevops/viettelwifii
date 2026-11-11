/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { BroadbandInternetCardData } from "./internet-data";
import { InternetPlanCard } from "./internet-plan-card";

export function BroadbandInternetCard({
  item,
}: {
  item: BroadbandInternetCardData;
}) {
  return (
    <InternetPlanCard
      item={item}
      visual={
        <img
          alt="package icon"
          loading="lazy"
          width="97"
          height="102"
          decoding="async"
          className="h-[56px] w-[53px] md:h-[102px] md:w-[97px]"
          style={{ color: "transparent" } as CSSProperties}
          src={sourceAsset(
            "/_next/image?url=%2Fimages%2Finternet-c%C3%A1-nh%C3%A2n.png&w=256&q=75",
          )}
          srcSet={[
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-c%C3%A1-nh%C3%A2n.png&w=128&q=75")} 1x`,
            `${sourceAsset("/_next/image?url=%2Fimages%2Finternet-c%C3%A1-nh%C3%A2n.png&w=256&q=75")} 2x`,
          ].join(", ")}
        />
      }
    />
  );
}
