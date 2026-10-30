"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

export type CollectionSelectOption = { value: string; label: string };

export function CollectionSelect({
  label,
  placeholder,
  value,
  options,
  disabled = false,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  options: readonly CollectionSelectOption[];
  disabled?: boolean;
  onChange: (value: string) => void;
}) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const popup = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [placement, setPlacement] = useState({
    left: 0,
    top: 0,
    width: 0,
    maxHeight: 240,
  });
  const selected = options.find((option) => option.value === value);

  function close() {
    if (popup.current?.matches(":popover-open")) popup.current.hidePopover();
    setOpen(false);
  }

  function show() {
    if (disabled || !trigger.current || !popup.current) return;
    const rect = trigger.current.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom - 12;
    const above = rect.top - 12;
    const upward = below < 180 && above > below;
    const maxHeight = Math.max(72, Math.min(240, upward ? above : below));
    setPlacement({
      left: rect.left,
      top: upward ? Math.max(8, rect.top - maxHeight - 4) : rect.bottom + 4,
      width: rect.width,
      maxHeight,
    });
    setActive(
      Math.max(
        0,
        options.findIndex((option) => option.value === value),
      ),
    );
    popup.current.showPopover();
    setOpen(true);
  }

  function choose(option: CollectionSelectOption) {
    onChange(option.value);
    close();
    trigger.current?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (disabled || !options.length) return;
    if (event.key === "Escape" && open) {
      event.preventDefault();
      event.stopPropagation();
      close();
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (open) choose(options[active]);
      else show();
      return;
    }
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      if (!open) {
        show();
        return;
      }
      setActive((current) => {
        if (event.key === "Home") return 0;
        if (event.key === "End") return options.length - 1;
        return Math.max(
          0,
          Math.min(
            options.length - 1,
            current + (event.key === "ArrowDown" ? 1 : -1),
          ),
        );
      });
    }
  }

  useEffect(() => {
    if (!open) return;
    popup.current
      ?.querySelectorAll("[role='option']")
      [active]?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        role="combobox"
        aria-label={label}
        aria-required="true"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={`${id}-options`}
        aria-activedescendant={open ? `${id}-option-${active}` : undefined}
        disabled={disabled}
        onClick={() => (open ? close() : show())}
        onKeyDown={onKeyDown}
        className={`text-16 flex h-[42px] w-full items-center justify-between rounded-xl border border-[#E9E9E9] bg-[#F4F4F4] px-3 py-2 text-left focus-visible:ring-[1.5px] focus-visible:ring-gray-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 md:h-[52px] ${selected ? "text-black" : "text-[#737373]"}`}
      >
        <span className="truncate">{selected?.label ?? placeholder}</span>
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`ml-2 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        ref={popup}
        id={`${id}-options`}
        role="listbox"
        aria-label={label}
        popover="auto"
        data-collection-select-popover=""
        onKeyDown={onKeyDown}
        onToggle={(event) =>
          setOpen(event.currentTarget.matches(":popover-open"))
        }
        style={{
          position: "fixed",
          inset: "auto",
          left: placement.left,
          top: placement.top,
          width: placement.width,
          maxHeight: placement.maxHeight,
          margin: 0,
          zIndex: 200,
        }}
        className="overflow-y-auto rounded-xl border border-[#E9E9E9] bg-white p-1 shadow-xl"
      >
        {options.map((option, index) => (
          <button
            key={option.value}
            type="button"
            role="option"
            id={`${id}-option-${index}`}
            aria-selected={value === option.value}
            onMouseDown={(event) => event.preventDefault()}
            onMouseEnter={() => setActive(index)}
            onClick={() => choose(option)}
            className={`block w-full rounded-lg px-3 py-2 text-left text-sm focus-visible:outline-none ${index === active ? "bg-[#FFF0F3] text-[#D0002F]" : "text-[#282828] hover:bg-[#F4F4F4]"}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </>
  );
}
