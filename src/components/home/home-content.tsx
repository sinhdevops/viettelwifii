import { Suspense } from "react";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import type { PageContent } from "@/lib/content-schema";
import {
  getApprovedRoutes,
  getIndexablePages,
} from "@/lib/server/page-repository";
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { LeadDialog } from "@/components/leads/lead-dialog";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { PackageSourceDialogTrigger } from "@/components/packages/package-source-dialog-trigger";
import { HomeAccordion } from "./home-accordion";
import { HomeCarousel, type HomeSlide } from "./home-carousel";
import {
  homeGroups,
  homeNews,
  type HomeCard,
} from "@/constants/home/home-source-data";

const slides: HomeSlide[] = [
  // {
  //   id: "youtube-premium",
  //   href: siteConfig.url("/youtube-premium-viettel"),
  //   label: "YouTube Premium",
  //   alt: "Tặng YouTube Premium với gói YT150",
  //   desktop: sourceAsset(
  //     "/_next/image?url=%2Fimages%2Fbanner-youtube-premium-desktop.webp&w=3840&q=75",
  //   ),
  //   mobile: sourceAsset(
  //     "/_next/image?url=%2Fimages%2Fbanner-youtube-premium-mobile.webp&w=1200&q=75",
  //   ),
  // },
  {
    id: "wifi-mesh",
    href: siteConfig.url("/internet"),
    label: "Internet Viettel",
    alt: "WiFi 6 và Mesh WiFi chỉ 195K mỗi tháng",
    desktop: sourceAsset(
      "/_next/image?url=%2Fimages%2Fbanner-wifi-mesh-desktop.webp&w=3840&q=75",
    ),
    mobile: sourceAsset(
      "/_next/image?url=%2Fimages%2Fbanner-wifi-mesh-mobile.webp&w=1200&q=75",
    ),
  },
];

const sourceUrl = (path: string) => siteConfig.url(path);

function HomePackageCard({
  card,
  path,
  allowlist,
  localPaths,
  readyProducts,
}: {
  card: HomeCard;
  path: string;
  allowlist: ReadonlySet<string>;
  localPaths: ReadonlySet<string>;
  readyProducts: ReadonlySet<string>;
}) {
  const targetPath = `/goi-cuoc-viettel/${card.code}`;
  const canRegister = readyProducts.has(targetPath);
  const canSeeDetails = allowlist.has(targetPath);
  const detailHref = canSeeDetails
    ? localPaths.has(targetPath)
      ? targetPath
      : sourceUrl(targetPath)
    : undefined;
  return (
    <div>
      <div className="data-card font-magistral text-text-dark relative flex h-[197px] w-[158px] flex-col justify-between bg-cover md:h-[326px] md:w-[261px]">
        {card.discount && (
          <Image
            unoptimized
            alt="discount-icon"
            src={card.discount}
            width={71}
            height={74}
            className="absolute -top-[6px] -right-[6px] h-[64px] w-[61px] md:-right-1 md:h-[74px] md:w-[71px]"
          />
        )}
        <div className="flex h-[26px] items-center justify-center pb-1 md:h-[42px] md:pb-[6px]">
          <p className="text-14 md:text-22 font-bold md:leading-[22px]">
            {detailHref ? (
              <Link
                href={detailHref}
                prefetch={false}
                aria-label={`Chi tiết gói ${card.code}`}
                className="text-inherit underline underline-offset-4 focus-visible:underline md:no-underline md:hover:underline"
              >
                {card.code}
              </Link>
            ) : (
              card.code
            )}
          </p>
        </div>
        <div className="">
          {card.metricType === "quota" ? (
            <div className="flex items-center justify-center md:pb-2">
              <div>
                <span className="text-primary text-[28px] leading-[39px] font-bold md:mb-1 md:text-[44px] md:leading-[60px]">
                  {card.metricText}
                </span>
                <span className="md:text-20 text-[10px] leading-[22px] font-bold uppercase md:leading-[32px]">
                  {card.metricUnit}
                </span>
              </div>
              <p className="hidden">{card.metricDescription}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-20 text-primary leading-[20px] font-bold md:text-[32px] md:leading-[32px]">
                {card.metricText}
              </p>
              <p className="text-14 md:text-22 md:pt-1">{card.secondMetric}</p>
              <p className="hidden">{card.metricDescription}</p>
            </div>
          )}
          <div className="flex flex-col items-center pt-2 pb-[8px]">
            {card.perkText && (
              <p className="text-center text-[12px] leading-[14px] md:text-[18px] md:leading-[24px]">
                {card.perkText}
              </p>
            )}
            {card.icons.length > 0 && (
              <div className="data-card-icons mt-[6px] flex h-[32px] w-fit items-center justify-center gap-[1px] rounded-full border border-white bg-[#fbf1ea] px-[3px] md:h-[54px] md:px-[6px]">
                {card.icons.map((icon, index) =>
                  icon.kind === "img" ? (
                    <Image
                      unoptimized
                      key={`${icon.src}-${index}`}
                      alt={icon.alt}
                      src={icon.src}
                      width={18}
                      height={18}
                      className={icon.className}
                    />
                  ) : (
                    <span
                      key={`${icon.text}-${index}`}
                      className={icon.className}
                    >
                      {icon.text}
                    </span>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-end pb-3 md:h-[96px] md:pb-5">
          <p className="pb-[4px] leading-[20px] font-medium md:pb-5">
            <span className="text-14 md:text-24 font-bold">{card.price}</span>
            <span className="md:text-14 text-[10px] font-bold uppercase">
              {card.priceUnit}
            </span>
          </p>
          <div className="flex gap-2">
            {card.sms && (
              <div className="md:hidden">
                <ButtonLink href={card.sms} variant="package" size="card">
                  Đăng Ký
                </ButtonLink>
              </div>
            )}
            <div className={card.sms ? "hidden md:block" : ""}>
              {canRegister ? (
                <LeadDialog
                  itemId={targetPath}
                  itemTitle={card.code}
                  pagePath={path}
                  trigger={
                    <Button variant="package" size="card">
                      Đăng ký
                    </Button>
                  }
                />
              ) : canSeeDetails && localPaths.has(targetPath) ? (
                <PackageSourceDialogTrigger
                  itemPath={targetPath}
                  buttonVariant="package"
                  buttonSize="card"
                >
                  Đăng ký
                </PackageSourceDialogTrigger>
              ) : (
                <Button
                  type="button"
                  disabled
                  title="Gói cước chưa được duyệt để nhận đăng ký"
                  variant="package"
                  size="card"
                >
                  Đăng ký
                </Button>
              )}
            </div>
            <div className="hidden md:block">
              {canSeeDetails ? (
                <ButtonLink
                  variant="packageOutline"
                  size="card"
                  href={
                    localPaths.has(targetPath)
                      ? targetPath
                      : sourceUrl(targetPath)
                  }
                >
                  CHI TIẾT
                </ButtonLink>
              ) : (
                <Button
                  type="button"
                  variant="packageOutline"
                  size="card"
                  disabled
                  title="Đường dẫn chi tiết chưa được phê duyệt"
                >
                  CHI TIẾT
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Original homepage body. Root layout owns the source nav and footer. */
export function HomeContent({ path }: { page: PageContent; path: string }) {
  const allowlist = new Set(getApprovedRoutes());
  const readyPages = getIndexablePages();
  // All approved pages are live in production.
  const localPaths = allowlist;
  const readyProducts = new Set(
    readyPages.flatMap(({ page }) =>
      page.product?.id ? [page.product.id] : [],
    ),
  );
  return (
    <main className="bg-background flex min-h-screen flex-col items-center">
      <article className="w-full max-w-[1140px] md:flex md:max-w-[unset] md:flex-col md:items-center">
        <Suspense
          fallback={
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white md:aspect-[1920/792]" />
          }
        >
          <HomeCarousel slides={slides} />
        </Suspense>
        <div className="flex w-full flex-col items-center px-4 pt-2 text-center md:pt-6">
          <h1 className="md:text-22">GÓI CƯỚC DATA 4G 5G VIETTEL</h1>
          <div className="pt-2">
            <p className="text-14 md:text-16 md:w-full">
              Danh sách các gói cước 4G 5G Viettel tốc độ cao, phủ sóng mạnh mẽ,
              giúp bạn truy cập internet mọi nơi!
            </p>
          </div>
        </div>
        <section className="font-magistral pb-9 pl-4 md:w-full md:pt-0 md:pl-0">
          <div data-orientation="vertical">
            {homeGroups.map((group) => (
              <HomeAccordion
                key={group.title}
                title={group.title}
                className={group.className}
                initialOpen={group.expanded}
              >
                {group.categories.map((category) => (
                  <div key={category.title} className={category.className}>
                    <h3 className="text-14 font-medium text-neutral-500 md:text-[32px]">
                      {category.title}
                    </h3>
                    <div className="no-scrollbar flex gap-4 overflow-x-auto pt-2 pr-4 md:flex-wrap md:gap-x-8 md:gap-y-6 md:overflow-visible md:pr-0 [&>div]:shrink-0">
                      {category.cards.map((card) => (
                        <HomePackageCard
                          key={card.code}
                          card={card}
                          path={path}
                          allowlist={allowlist}
                          localPaths={localPaths}
                          readyProducts={readyProducts}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </HomeAccordion>
            ))}
          </div>
        </section>
        <div className="w-full">
          <div className="container pb-8 pl-4 md:pt-3 md:pb-12 md:pl-0">
            <div className="flex items-center justify-between pr-4 pb-8 md:pr-0 md:pb-6">
              <h2 className="text-18 leading-[25px] md:text-[48px] md:leading-[67px]">
                Tin tức
              </h2>
              <Link
                className="text-primary md:border-primary flex items-center justify-center font-medium md:h-[40px] md:w-[148px] md:rounded-[10px] md:rounded-bl-sm md:border"
                href={
                  localPaths.has("/tin-tuc")
                    ? "/tin-tuc"
                    : sourceUrl("/tin-tuc")
                }
              >
                Xem tất cả
              </Link>
            </div>
            <div className="no-scrollbar flex gap-4 overflow-auto pr-4 md:grid md:grid-cols-3 md:grid-rows-2 md:flex-wrap md:gap-6 md:pr-0 [&>div]:shrink-0">
              {homeNews.map((item) => (
                <div
                  key={item.href}
                  className="w-fit max-w-[364px] overflow-hidden rounded-[24px] border border-[#0000000A] bg-white md:rounded-[20px]"
                >
                  <Link
                    className=""
                    href={
                      localPaths.has(item.href)
                        ? item.href
                        : sourceUrl(item.href)
                    }
                  >
                    <Image
                      unoptimized
                      src={item.image}
                      alt={item.imageAlt}
                      width={252}
                      height={148}
                      sizes="(max-width: 767px) 252px, 364px"
                      className="h-[148px] w-[252px] object-cover md:h-[252px] md:w-[364px]"
                    />
                    <div className="p-4 md:p-5">
                      <p className="md:text-16 font-medium text-[#616161]">
                        {item.date}
                      </p>
                      <h3 className="md:text-22 max-w-[220px] py-2 leading-[28px] font-semibold text-black md:max-w-[324px] md:pb-3">
                        {item.title}
                      </h3>
                      <p className="hidden">{item.date}</p>
                      <p className="text-primary flex items-center gap-[6px] font-medium">
                        <span>Xem thêm</span>
                        <Image
                          unoptimized
                          src={sourceAsset("/icons/arrow-right.svg")}
                          alt="Read more"
                          width={20}
                          height={20}
                        />
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
