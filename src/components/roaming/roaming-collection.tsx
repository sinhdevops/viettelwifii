import { CollectionAccordionGroup } from "@/features/collections/collection-accordion";
import { RoamingComparison } from "./comparison";
import { RoamingContact } from "./contact";
import { RoamingFaq } from "./faq";
import { RoamingGuide } from "./guide";
import { RoamingHero } from "./hero";
import { RoamingIntroduction } from "./introduction";
import { RoamingPopularCountries } from "./popular-countries";
import { RoamingRegistrationOffer } from "./registration-offer";
import { RoamingUseCases } from "./use-cases";
export default function RoamingCollection() {
  return (
    <CollectionAccordionGroup>
      <main className="flex min-h-screen flex-col items-center bg-white">
        <article className="w-full max-w-[1140px] bg-[#ffeae7] md:flex md:max-w-[unset] md:flex-col md:items-center">
          <RoamingHero />
          <RoamingIntroduction />
          <RoamingPopularCountries />
          <RoamingRegistrationOffer />
          <RoamingUseCases />
          <RoamingComparison />
          <RoamingGuide />
          <RoamingFaq />
          <RoamingContact />
        </article>
      </main>
    </CollectionAccordionGroup>
  );
}
