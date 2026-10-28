"use client";
/* eslint-disable @next/next/no-img-element -- original source SVG flags served locally */

import { Button as AppButton } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type KeyboardEvent,
} from "react";
import {
  findRoamingCountries,
  getRoamingCountrySourceUrl,
  type RoamingCountry,
} from "./roaming-country-data";
import countryFlags from "./roaming-country-flags.json";

function CountryFlag({ flag }: { flag: string }) {
  const src = (countryFlags as Record<string, string | null>)[
    flag.toLowerCase()
  ];
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-6 w-6 shrink-0 items-center justify-center"
    >
      {src ? <img src={src} width={18} height={18} alt="" /> : <span>🌐</span>}
    </span>
  );
}

export type CollectionCountryPickerProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    /** Optional notification before source navigation. Receives the captured record. */
    onCountrySelect?: (country: RoamingCountry) => void;
  };

/** Country detail destinations remain on the verified public source origin.
 * Uses captured picker classes and accent-insensitive prefix search. */
export function CollectionCountryPicker({
  children,
  onClick,
  onCountrySelect,
  type = "button",
  ...props
}: CollectionCountryPickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<RoamingCountry | null>(null);
  const [active, setActive] = useState(-1);
  const [position, setPosition] = useState({ left: 8, top: 8 });
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const listId = useId();
  const results = findRoamingCountries(query);

  function placePicker() {
    const rect = trigger.current?.getBoundingClientRect();
    if (!rect) return;
    const width = window.innerWidth >= 768 ? 300 : 260;
    const height = Math.min(410, window.innerHeight - 16);
    const below = rect.bottom + 6;
    setPosition({
      left: Math.max(8, Math.min(rect.left, window.innerWidth - width - 8)),
      top: Math.max(8, Math.min(below, window.innerHeight - height - 8)),
    });
  }

  function changeOpen(value: boolean) {
    if (value) placePicker();
    else {
      setQuery("");
      setActive(-1);
    }
    setOpen(value);
  }

  useEffect(() => {
    if (!open) return;
    window.addEventListener("resize", placePicker);
    return () => window.removeEventListener("resize", placePicker);
  }, [open]);

  useEffect(() => {
    if (active >= 0)
      list.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function select(country: RoamingCountry) {
    setSelected(country);
    changeOpen(false);
    try {
      onCountrySelect?.(country);
    } finally {
      window.location.assign(getRoamingCountrySourceUrl(country));
    }
  }

  function searchKeys(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!results.length) return;
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActive((index) =>
        index < 0
          ? step > 0
            ? 0
            : results.length - 1
          : (index + step + results.length) % results.length,
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (active >= 0 && results[active]) select(results[active]);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={changeOpen}>
      <Dialog.Trigger asChild>
        <AppButton
          variant="unstyled"
          size="unstyled"
          {...props}
          type={type}
          ref={trigger}
          onClick={(event) => {
            onClick?.(event);
            if (!event.defaultPrevented) placePicker();
          }}
        >
          {selected ? (
            <div className="w-full rounded-[20px] border border-white bg-white/60 px-4 py-3.5">
              <div className="flex w-full items-center justify-between rounded-2xl border border-white bg-white px-3 py-2.5">
                <div className="flex items-center gap-1">
                  <CountryFlag flag={selected.flag} />
                  <span className="text-fspd text-primary-text max-w-[140px] truncate text-[14px] leading-[24px] font-semibold">
                    {selected.nameVN}
                  </span>
                </div>
                <svg
                  className="shrink-0"
                  width="11"
                  height="6"
                  viewBox="0 0 11 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="m1 1 4.5 4L10 1" stroke="currentColor" />
                </svg>
              </div>
            </div>
          ) : (
            children
          )}
        </AppButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0" style={{ zIndex: 150 }} />
        <Dialog.Content
          className="fixed flex w-[260px] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 p-0 shadow-md outline-none md:w-[300px]"
          // The captured source CSS does not include the z-[150]/z-[151] utilities.
          style={{
            ...position,
            zIndex: 151,
            maxWidth: "calc(100vw - 16px)",
            maxHeight: "calc(100dvh - 16px)",
          }}
          aria-describedby={undefined}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            input.current?.focus();
          }}
        >
          <Dialog.Title className="sr-only">Chọn quốc gia</Dialog.Title>
          <div className="min-h-0">
            <div className="px-3 pt-1 pb-1">
              <input
                ref={input}
                className="text-16 flex h-[52px] w-full rounded-xl border border-[#E9E9E9] bg-[#F4F4F4] px-3 py-2 placeholder:text-gray-500 focus-visible:ring-[1.5px] focus-visible:ring-gray-600 focus-visible:ring-offset-2 focus-visible:outline-none"
                type="search"
                name="search"
                autoComplete="off"
                placeholder="Nhập tên quốc gia"
                aria-label="Nhập tên quốc gia"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={open}
                aria-controls={listId}
                aria-activedescendant={
                  active >= 0 && results[active]
                    ? listId + "-" + results[active].country_code
                    : undefined
                }
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActive(-1);
                }}
                onKeyDown={searchKeys}
              />
            </div>
            <ul
              ref={list}
              id={listId}
              role="listbox"
              aria-label="Quốc gia"
              className="h-[340px] w-full overflow-y-scroll text-[14px]"
              style={{ maxHeight: "calc(100dvh - 88px)" }}
            >
              {results.length === 0 ? (
                <li
                  role="presentation"
                  className="relative cursor-default pt-4 pl-4 select-none"
                >
                  <span role="status">Không tìm thấy quốc gia</span>
                </li>
              ) : (
                results.map((country, index) => (
                  <li
                    key={country.country_code}
                    id={listId + "-" + country.country_code}
                    role="option"
                    aria-selected={
                      country.country_code === selected?.country_code
                    }
                    className="border-black-200 relative flex w-full cursor-pointer items-center gap-2 truncate border-b px-3 py-3 select-none last:border-0 hover:bg-neutral-200/60 md:py-4"
                    style={
                      index === active
                        ? { backgroundColor: "rgb(229 229 229 / 0.6)" }
                        : undefined
                    }
                    onClick={() => select(country)}
                  >
                    <CountryFlag flag={country.flag} />
                    <span className="truncate font-normal">
                      {country.nameVN}
                    </span>
                    {country.country_code === selected?.country_code && (
                      <span className="text-primary absolute inset-y-0 right-0 flex items-center pr-8">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </li>
                ))
              )}
            </ul>
          </div>
          <Dialog.Close asChild>
            <AppButton
              variant="unstyled"
              size="unstyled"
              className="sr-only focus:not-sr-only focus:px-3 focus:py-2"
            >
              Đóng
            </AppButton>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
