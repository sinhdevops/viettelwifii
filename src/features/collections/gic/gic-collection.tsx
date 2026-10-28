import { CollectionAccordionGroup } from "../collection-accordion";
import { GicFaq } from "./faq";
import { GicIntroductionAndPlans } from "./introduction-and-plans";
import { GicMonthlyBenefits } from "./monthly-benefits";
import { GicNews } from "./news";
export default function GicCollection() {
  return (
    <CollectionAccordionGroup>
      <main className="flex min-h-screen flex-col items-center md:-mt-[96px] bg-[url('/images/bg-gic-paper.png')] bg-top-left bg-repeat-y bg-contain">
        <article className="w-full md:flex md:flex-col md:items-center max-w-[unset]">
          <GicIntroductionAndPlans />
          <GicMonthlyBenefits />
          <GicFaq />
          <GicNews />
        </article>
      </main>
    </CollectionAccordionGroup>
  );
}
