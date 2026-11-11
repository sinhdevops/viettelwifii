import { CollectionAccordionItem } from "../collection-accordion";
import type { CollectionFaq } from "../parts/collection-faq";
export function InternetFaqItem({ item }: { item: CollectionFaq }) {
  return (
    <CollectionAccordionItem
      className=""
      headingClassName="flex justify-center"
      buttonClassName="flex flex-1 items-center justify-between text-left font-medium transition-all [&amp;[data-state=open]&gt;div&gt;svg]:rotate-180 h-fit border-t border-t-[#D4D4D8] py-2.5 text-14 leading-[24px] md:py-4 md:text-[21px] md:leading-[30px]"
      regionClassName="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      answerClassName="text-12 leading-[18px] opacity-70 md:text-18 md:leading-[32px]"
      trigger={
        <>
          {item.question}
          <div className="[&amp;&gt;svg]:h-5 [&amp;&gt;svg]:w-5 flex !h-fit h-6 !w-fit w-6 shrink-0 items-center justify-center rounded-full pr-4 md:h-16 md:w-16 md:bg-transparent md:pr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down h-6 w-6 shrink-0 transition-transform duration-200 md:text-black"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </>
      }
    >
      {item.answer}
    </CollectionAccordionItem>
  );
}
