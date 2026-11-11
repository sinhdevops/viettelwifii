"use client";
import { siteConfig } from "@/lib/site-config";

import { Button as AppButton } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./site-header.module.css";

type NavigationItem = {
  text: string;
  href: string;
  inScope: boolean;
  supportRoute?: boolean;
};

const items: NavigationItem[] = [
  { text: "Trang chủ", href: "/", inScope: true },
  { text: "Internet", href: "/internet", inScope: true },
  // {
  //   text: "Gói cước",
  //   href: "/goi-cuoc-viettel",
  //   inScope: true,
  //   supportRoute: true,
  // },
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
  item: NavigationItem;
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

export function SiteHeader({
  newsLocal = false,
  availableSiteRoutes = [],
}: {
  newsLocal?: boolean;
  availableSiteRoutes?: readonly string[];
}) {
  const path = usePathname();
  const isNine = path === "/goi-cuoc-nine";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // The captured source uses md at 960px, not Tailwind's default 768px.
    const desktop = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const visibleItems = items.filter(
    (item) => !item.supportRoute || availableSiteRoutes.includes(item.href),
  );
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
            src="/assets/viettelup/99a5712d86ce7a98a3e03885.svg"
            width={96}
            height={18}
            className="hidden md:block"
          />
          <Image
            unoptimized
            alt="Viettel"
            src="/assets/viettelup/99a5712d86ce7a98a3e03885.svg"
            width={96}
            height={18}
            className="md:hidden"
          />
        </Link>
        <div
          className={`!text-18 hidden items-center gap-[53px] font-medium md:flex ${isNine ? "text-white" : ""}`}
        >
          {visibleItems.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              pathname={path}
              newsLocal={newsLocal}
            />
          ))}
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
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
                  src="/assets/viettelup/973d63da6ea2449b738197c4.webp"
                  width={32}
                  height={32}
                />
              </AppButton>
            </SheetTrigger>
            <SheetPortal>
              <SheetOverlay className={styles.mobileOverlay} />
              <SheetContent
                mobileSide="bottom"
                className={`font-sarabun ${styles.mobileSheet}`}
                aria-describedby={undefined}
              >
                <SheetTitle className="sr-only">Menu điều hướng</SheetTitle>
                <SheetClose asChild>
                  <AppButton
                    variant="unstyled"
                    size="unstyled"
                    type="button"
                    className={styles.handle}
                    aria-label="Đóng menu"
                  />
                </SheetClose>
                <div className={styles.mobileLinks}>
                  {visibleItems.map((item) => (
                    <NavItem
                      key={item.href}
                      item={item}
                      pathname={path}
                      newsLocal={newsLocal}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </div>
              </SheetContent>
            </SheetPortal>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
