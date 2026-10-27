"use client";

import { createContext, useContext, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const AccordionContext = createContext<{
  active: string | null;
  toggle: (id: string) => void;
} | null>(null);

/** State boundary only; the captured source supplies every visible DOM class. */
export function CollectionAccordionGroup({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  return <AccordionContext.Provider value={{ active, toggle: id => setActive(current => current === id ? null : id) }}>
    {children}
  </AccordionContext.Provider>;
}

export function CollectionAccordionItem({
  className, headingClassName, buttonClassName, regionClassName, answerClassName,
  trigger, children,
}: {
  className: string;
  headingClassName: string;
  buttonClassName: string;
  regionClassName: string;
  answerClassName: string;
  trigger: ReactNode;
  children: ReactNode;
}) {
  const group = useContext(AccordionContext);
  const id = useId();
  const open = group?.active === id;
  const region = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (open && region.current) {
      region.current.style.setProperty("--radix-accordion-content-height", `${region.current.scrollHeight}px`);
      region.current.style.setProperty("--radix-accordion-content-width", `${region.current.scrollWidth}px`);
    }
  }, [open]);
  const state = open ? "open" : "closed";
  return <div className={className} data-state={state} data-orientation="vertical">
    <h3 className={headingClassName} data-state={state} data-orientation="vertical">
      <button type="button" id={`${id}-trigger`} className={buttonClassName}
        aria-controls={`${id}-content`} aria-expanded={open} data-state={state}
        data-orientation="vertical" onClick={() => group?.toggle(id)}>
        {trigger}
      </button>
    </h3>
    <div ref={region} id={`${id}-content`} role="region" aria-labelledby={`${id}-trigger`}
      hidden={!open} data-state={state} data-orientation="vertical" className={regionClassName}>
      <div className={answerClassName}>{children}</div>
    </div>
  </div>;
}
