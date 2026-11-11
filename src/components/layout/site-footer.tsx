"use client";
import { siteConfig } from "@/lib/site-config";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
const getCurrentYear = () => new Date().getFullYear();
const getServerYear = () => null;

const footerLinks = [
  { label: "Gói cước", href: "/goi-cuoc-viettel" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
  { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
  { label: "Điều khoản", href: "/dieu-khoan" },
] as const;

export function SiteFooter({
  availableSiteRoutes = [],
}: {
  availableSiteRoutes?: readonly string[];
}) {
  const isNine = usePathname() === "/goi-cuoc-nine";
  // Current time is an unstable value: reading it while rendering would tie the
  // prerendered HTML to build time. Resolve it after hydration instead so every
  // route can stay fully static.
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    getCurrentYear,
    getServerYear,
  );
  const sectionTextClass = isNine ? "text-white" : "";
  const visibleFooterLinks = footerLinks.filter((item) =>
    availableSiteRoutes.includes(item.href),
  );

  return (
    <footer className={isNine ? "bg-[#282828]" : "bg-white"}>
      <div className="container mx-auto">
        <div
          className={`m-auto flex w-full max-w-[1440px] flex-col justify-around gap-8 px-4 py-[30px] sm:flex-row sm:gap-0 sm:px-0 ${sectionTextClass}`}
        >
          <div>
            <h5 className="pb-2">
              <strong>
                <span className="text-16 font-bold sm:text-[19px]">
                  Website quản lý bởi Lê Văn Sinh
                </span>
              </strong>
            </h5>
            <Image
              unoptimized
              alt="Viettel"
              src="/assets/viettelup/20181fad4624cbcaa9913d53.webp"
              width={205}
              height={71}
            />
          </div>
          <div>
            <div className="flex gap-1 pb-2">
              <h5>
                <strong>
                  <span className="text-16 sm:text-[19px]">Liên hệ</span>
                </strong>
              </h5>
            </div>
            <div className="text-14 sm:text-16">
              <div className="flex items-center gap-1 fill-black">
                <Image
                  unoptimized
                  alt=""
                  aria-hidden="true"
                  src="/assets/viettelup/b5cc5a0a656647011dce266a.webp"
                  width={18}
                  height={18}
                />
                <p>
                  Điện thoại: <a href="tel:0325610016">0325610016</a>
                </p>
              </div>
              <div className="flex items-center gap-1 fill-black">
                <Image
                  unoptimized
                  alt=""
                  aria-hidden="true"
                  src="/assets/viettelup/1be0cff50261445640754eed.webp"
                  width={18}
                  height={18}
                />
                <p>Khu vực: Ông Ích Khiêm, Cẩm Lệ, Đà Nẵng</p>
              </div>
            </div>
          </div>
          {visibleFooterLinks.length > 0 && (
            <nav aria-label="Liên kết chân trang">
              <h5 className="pb-2">
                <strong>
                  <span className="text-16 sm:text-[19px]">
                    Thông tin website
                  </span>
                </strong>
              </h5>
              <ul className="text-14 sm:text-16 flex flex-col gap-1">
                {visibleFooterLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="underline-offset-4 hover:underline focus-visible:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
      <div className="bg-primary flex justify-center pt-[8px] pb-[11px] text-[#ffffffbd]">
        <p>
          © {currentYear !== null ? `${currentYear} ` : ""}
          {siteConfig.hostname}
        </p>
      </div>
    </footer>
  );
}
