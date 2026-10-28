import { CollectionAccordionGroup } from "../collection-accordion";
import { InternetBenefits } from "./benefits";
import { InternetEntertainmentAndCamera } from "./entertainment-and-camera";
import { InternetFaq } from "./faq";
import { InternetHero } from "./hero";
import { InternetInstallationOffer } from "./installation-offer";
import { InternetMeshPricing } from "./mesh-pricing";
import { InternetNews } from "./news";
import { InternetPricing } from "./pricing";
import { InternetSpeedPromise } from "./speed-promise";
import { InternetUltraSpeedPricing } from "./ultra-speed-pricing";
export default function InternetCollection() {
  return (
    <CollectionAccordionGroup>
      <main className="flex min-h-screen flex-col items-center bg-white">
        <article className="w-full max-w-[1140px] md:max-w-[unset] md:flex md:flex-col md:items-center">
          <InternetHero />
          <InternetPricing />
          <InternetEntertainmentAndCamera />
          <InternetMeshPricing />
          <InternetUltraSpeedPricing />
          <InternetSpeedPromise />
          <InternetInstallationOffer />
          <InternetBenefits />
          <InternetFaq />
          <InternetNews />
        </article>
      </main>
    </CollectionAccordionGroup>
  );
}
