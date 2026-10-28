"use client";

import { Button as AppButton } from "@/components/ui/button";
import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/** Accordion state stays in this narrow client shell; all card markup is server-rendered. */
export function HomeAccordion({
  title,
  className,
  initialOpen,
  children,
}: {
  title: string;
  className: string;
  initialOpen: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(initialOpen);
  const id = useId();
  return (
    <div
      data-state={open ? "open" : "closed"}
      data-orientation="vertical"
      className={className}
    >
      <h3
        data-orientation="vertical"
        data-state={open ? "open" : "closed"}
        className="flex justify-center"
      >
        <AppButton variant="unstyled" size="unstyled"
          type="button"
          aria-controls={`${id}-content`}
          aria-expanded={open}
          data-state={open ? "open" : "closed"}
          data-orientation="vertical"
          id={`${id}-trigger`}
          onClick={() => setOpen((value) => !value)}
          className="flex flex-1 items-center justify-between py-4 text-left font-medium transition-all [&[data-state=open]>div>svg]:rotate-180 md:max-w-[1140px]"
        >
          <h2 className="flex-1 text-left text-18 font-bold uppercase leading-[25px] md:text-[48px] md:leading-[67px]">
            <strong>{title}</strong>
          </h2>
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full pr-4 md:h-16 md:w-16 md:bg-white md:pr-0">
            <ChevronDown
              aria-hidden="true"
              className="lucide lucide-chevron-down h-6 w-6 shrink-0 transition-transform duration-200 md:text-black"
            />
          </div>
        </AppButton>
      </h3>
      <div
        data-state={open ? "open" : "closed"}
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        data-orientation="vertical"
        hidden={!open}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      >
        <div className="pb-4 pt-0 flex justify-center">
          <div className="package-container flex w-full flex-col md:max-w-[1140px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
