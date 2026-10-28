import { CollectionMotion } from "../collection-motion";
import type { ComboInternetCardData } from "./internet-data";
import { InternetPlanCard } from "./internet-plan-card";

export function ComboInternetCard({ item }: { item: ComboInternetCardData }) {
  return (
    <InternetPlanCard
      item={item}
      visual={
        <div className="h-[120px] w-[120px] md:h-[220px] md:w-[220px]">
          <CollectionMotion animation="gift" width={220} height={220} />
        </div>
      }
    />
  );
}
