"use client";
import { siteConfig } from "@/lib/site-config";

import { Button as AppButton } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { sourceAsset } from "@/lib/viettelup-source-assets";

const items = [
  { text: "Trang chủ", href: "/", inScope: true },
  { text: "Internet", href: "/internet", inScope: true },
  { text: "Gói cước GIC", href: "/goi-cuoc-gic", inScope: true },
  { text: "Gói cước Nine", href: "/goi-cuoc-nine", inScope: true },
  { text: "Gói cước Roaming", href: "/goi-cuoc-roaming", inScope: true },
  // This path is approved. The server opts into its local URL once it is
  // renderable (ready or explicitly enabled as a local development draft).
  { text: "Tin tức", href: "/tin-tuc", inScope: false },
];

/** Out-of-scope routes retain their verified source destination. */
function NavItem({
  item,
  pathname,
  newsLocal,
  onNavigate,
}: {
  item: (typeof items)[number];
  pathname: string;
  newsLocal: boolean;
  onNavigate?: () => void;
}) {
  const className = item.href === pathname ? "text-primary" : "";
  if (!item.inScope && !(newsLocal && item.href === "/tin-tuc")) {
    return (
      <a
        href={siteConfig.url(item.href)}
        className={className}
        onClick={onNavigate}
      >
        {item.text}
      </a>
    );
  }
  return (
    <Link
      href={item.href}
      aria-current={item.href === pathname ? "page" : undefined}
      className={className}
      onClick={onNavigate}
    >
      {item.text}
    </Link>
  );
}

export function SiteHeader({ newsLocal = false }: { newsLocal?: boolean }) {
  const path = usePathname();
  const isNine = path === "/goi-cuoc-nine";
  const [open, setOpen] = useState(false);
  return (
    <nav
      aria-label="Điều hướng chính"
      className={`font-sarabun sticky top-0 z-[100] flex h-16 justify-center px-4 py-6 shadow-[1px_-3px_12px_2px_rgba(0,0,0,0.1)] transition-all duration-300 md:h-20 md:px-8 lg:h-24 ${isNine ? "bg-[#282828]" : "bg-white"}`}
    >
      <div className="flex w-full max-w-[1140px] items-center justify-between md:px-0">
        <Link href="/" aria-label="Trang chủ">
          <Image
            unoptimized
            alt="Viettel"
            src={sourceAsset("/icons/viettel.svg")}
            width={96}
            height={18}
            className="hidden md:block"
          />
          <Image
            unoptimized
            alt="Viettel"
            src={sourceAsset("/icons/viettel.svg")}
            width={96}
            height={18}
            className="md:hidden"
          />
        </Link>
        <div
          className={`!text-18 hidden items-center gap-[53px] font-medium md:flex ${isNine ? "text-white" : ""}`}
        >
          {items.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              pathname={path}
              newsLocal={newsLocal}
            />
          ))}
        </div>
        <div className="md:hidden">
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <AppButton
                variant="unstyled"
                size="unstyled"
                type="button"
                aria-label="Mở menu"
                aria-expanded={open}
              >
                <Image
                  unoptimized
                  alt="Navigation menu"
                  src={sourceAsset(
                    "/_next/image?url=%2Ficons%2Fhamburger.png&w=64&q=75",
                  )}
                  width={32}
                  height={32}
                />
              </AppButton>
            </Dialog.Trigger>
            <Dialog.Portal>
              {/* These overlay utilities are absent from the captured source CSS. */}
              <Dialog.Overlay
                className="fixed inset-0"
                style={{ zIndex: 110, backgroundColor: "rgb(0 0 0 / 0.4)" }}
              />
              <Dialog.Content
                className="font-sarabun fixed inset-x-0 top-0 bg-white px-4 pt-6 pb-8 shadow-lg"
                style={{ zIndex: 111, maxHeight: "100dvh", overflowY: "auto" }}
                aria-describedby={undefined}
              >
                <Dialog.Title className="sr-only">Menu điều hướng</Dialog.Title>
                <div className="flex items-center justify-between pb-6">
                  <Image
                    unoptimized
                    alt="Viettel"
                    src={sourceAsset("/icons/viettel.svg")}
                    width={96}
                    height={18}
                  />
                  <Dialog.Close asChild>
                    <AppButton
                      variant="unstyled"
                      size="unstyled"
                      className="text-22 rounded-md border border-[#ddd] px-3 py-1"
                      aria-label="Đóng menu"
                    >
                      ×
                    </AppButton>
                  </Dialog.Close>
                </div>
                <div className="flex flex-col gap-4 font-medium">
                  {items.map((item) => (
                    <NavItem
                      key={item.href}
                      item={item}
                      pathname={path}
                      newsLocal={newsLocal}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </nav>
  );
}
