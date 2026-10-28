import { CollectionAccordionGroup } from "../collection-accordion";
import { NineFaq } from "./faq";
import { NineHero } from "./hero";
import { NineNews } from "./news";
import { NinePlans } from "./plans";
import { NinePrivileges } from "./privileges";
export default function NineCollection() {
  return (
    <CollectionAccordionGroup>
      <main className="flex min-h-screen flex-col items-center bg-background bg-[url('/images/bg-nine.webp')] bg-cover bg-top">
        <article className="w-full container flex flex-col gap-8 md:gap-[80px] md:items-center max-w-[unset] md:my-[96px] text-white px-5 pb-10 md:pb-0 md:px-0">
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
