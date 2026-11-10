import Link from "next/link";
import { INTERNET_SOURCE_PAGES } from "@/constants/internet/source-pages";
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
          <nav
            aria-labelledby="internet-details-heading"
            className="container w-full px-5 py-10 md:px-0 md:py-16"
          >
            <h2
              id="internet-details-heading"
              className="font-beausans text-20 leading-[28px] text-[#282828] md:text-[32px] md:leading-[40px]"
            >
              Chi tiết các gói Internet
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 pt-5 sm:grid-cols-3 md:grid-cols-4">
              {Object.entries(INTERNET_SOURCE_PAGES).map(([path, page]) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="inline-flex min-h-11 items-center text-14 font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 md:text-16"
                  >
                    {page.code}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
    </CollectionAccordionGroup>
  );
}
