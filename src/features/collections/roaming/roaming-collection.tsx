import { CollectionAccordionGroup } from "../collection-accordion";
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
        <article className="w-full max-w-[1140px] md:max-w-[unset] md:flex md:flex-col md:items-center bg-[#ffeae7]">
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
