import { CollectionAccordionGroup } from "@/features/collections/collection-accordion";
import { NineFaq } from "./faq";
import { NineHero } from "./hero";
import { NineNews } from "./news";
import { NinePlans } from "./plans";
import { NinePrivileges } from "./privileges";
export default function NineCollection() {
  return (
    <CollectionAccordionGroup>
      <main className="bg-background flex min-h-screen flex-col items-center bg-[url('/images/bg-nine.webp')] bg-cover bg-top">
        <article className="container flex w-full max-w-[unset] flex-col gap-8 px-5 pb-10 text-white md:my-[96px] md:items-center md:gap-[80px] md:px-0 md:pb-0">
          <NineHero />
          <NinePlans />
          <NinePrivileges />
          <NineFaq />
          <NineNews />
        </article>
      </main>
    </CollectionAccordionGroup>
  );
}
