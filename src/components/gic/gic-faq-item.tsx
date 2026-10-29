import { CollectionAccordionItem } from "@/features/collections/collection-accordion";
import type { CollectionFaq } from "@/features/collections/parts/collection-faq";
export function GicFaqItem({ item }: { item: CollectionFaq }) {
  return (
    <CollectionAccordionItem
      className="gic-accordion-item"
      headingClassName="flex justify-center"
      buttonClassName="flex flex-1 items-center justify-between text-left font-medium transition-all [&amp;[data-state=open]&gt;div&gt;svg]:rotate-180 rounded-xl border border-[#f3f3f7] bg-white px-5 py-3 font-magistral !text-12 text-[#170F49] shadow-[0px_0.57px_2.28px_0px_#19213D0F] data-[state=open]:border-transparent data-[state=open]:bg-transparent data-[state=open]:shadow-none md:rounded-2xl md:px-8 md:py-6 md:!text-20 md:shadow-[0px_1px_4px_0px_#19213D0F]"
      regionClassName="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      answerClassName="px-5 text-10 leading-[18px] md:px-8 md:text-16 md:leading-[1.66]"
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
