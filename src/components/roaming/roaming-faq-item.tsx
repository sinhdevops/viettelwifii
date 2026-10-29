import { CollectionAccordionItem } from "@/features/collections/collection-accordion";
import type { CollectionFaq } from "@/features/collections/parts/collection-faq";
export function RoamingFaqItem({ item }: { item: CollectionFaq }) {
  return (
    <CollectionAccordionItem
      className="gic-accordion-item"
      headingClassName="flex justify-center"
      buttonClassName="flex flex-1 items-center justify-between text-left transition-all [&amp;[data-state=open]&gt;div&gt;svg]:rotate-180 gap-2 rounded-xl border border-[#E6ECF233] px-5 py-3 !text-14 font-semibold shadow-sm data-[state=open]:border-transparent data-[state=open]:shadow-none md:px-4 md:py-3 md:!text-16"
      regionClassName="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      answerClassName="px-5 text-14 leading-[18px] md:px-6 md:text-16 md:leading-[1.66]"
      trigger={
        <>
          {item.question}
          <div className="[&amp;&gt;svg]:h-5 [&amp;&gt;svg]:w-5 flex !h-fit h-6 !w-fit w-6 shrink-0 items-center justify-center rounded-full pr-0 md:h-16 md:w-16 md:bg-transparent md:pr-0">
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
