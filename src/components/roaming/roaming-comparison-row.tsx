/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import type { CSSProperties } from "react";
import type { RoamingComparisonRowData } from "@/constants/roaming/roaming-data";
export function RoamingComparisonRow({
  item,
}: {
  item: RoamingComparisonRowData;
}) {
  return (
    <tr>
      <td className="text-12 md:text-16 border-t border-r border-[#E6ECF2] p-3 font-medium md:p-5">
        {item.criterion}
      </td>
      <td className="text-12 md:text-16 border-t border-r border-[#E6ECF2] bg-[#FEF3F3] p-3 md:p-5">
        <div className="flex gap-2">
          <img
            alt="check"
            loading="lazy"
            width="16"
            height="16"
            decoding="async"
            className="hidden md:block"
            style={{ color: "transparent" } as CSSProperties}
            src={sourceAsset("/images/check-circle.svg")}
          />
          {item.roaming}
        </div>
      </td>
      <td className="text-12 md:text-16 border-t border-[#E6ECF2] p-3 md:p-5">
        <div className="flex gap-2">
          <img
            alt="x"
            loading="lazy"
            width="16"
            height="16"
            decoding="async"
            className="hidden md:block"
            style={{ color: "transparent" } as CSSProperties}
            src={sourceAsset("/images/x-circle.svg")}
          />
          {item.travelSim}
        </div>
      </td>
    </tr>
  );
}
