import { CollectionAccordionGroup } from "@/features/collections/collection-accordion";
import { GicFaq } from "./faq";
import { GicIntroductionAndPlans } from "./introduction-and-plans";
import { GicMonthlyBenefits } from "./monthly-benefits";
import { GicNews } from "./news";
export default function GicCollection() {
  return (
    <CollectionAccordionGroup>
      <main className="flex min-h-screen flex-col items-center bg-[url('/images/bg-gic-paper.png')] bg-contain bg-top-left bg-repeat-y md:-mt-[96px]">
        <article className="w-full max-w-[unset] md:flex md:flex-col md:items-center">
          <GicIntroductionAndPlans />
          <GicMonthlyBenefits />
          <GicFaq />
          <GicNews />
        </article>
      </main>
    </CollectionAccordionGroup>
  );
}
