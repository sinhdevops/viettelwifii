import Image from "next/image";
import Link from "next/link";
import type { PageContent } from "@/lib/content-schema";
import { getApprovedRoutes, getIndexablePages } from "@/lib/site-data";
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { LeadDialog } from "@/components/leads/lead-dialog";
import { HomeAccordion } from "./home-accordion";
import { HomeCarousel, type HomeSlide } from "./home-carousel";
import { homeGroups, homeNews, type HomeCard } from "./home-source-data";

const slides: HomeSlide[] = [
  {
    id: "youtube-premium",
    href: "https://www.viettelup.vn/youtube-premium-viettel",
    label: "YouTube Premium",
    alt: "Tặng YouTube Premium với gói YT150",
    desktop: sourceAsset("/_next/image?url=%2Fimages%2Fbanner-youtube-premium-desktop.webp&w=3840&q=75"),
    mobile: sourceAsset("/_next/image?url=%2Fimages%2Fbanner-youtube-premium-mobile.webp&w=1200&q=75"),
  },
  {
    id: "wifi-mesh",
    href: "https://www.viettelup.vn/internet",
    label: "Internet Viettel",
    alt: "WiFi 6 và Mesh WiFi chỉ 195K mỗi tháng",
    desktop: sourceAsset("/_next/image?url=%2Fimages%2Fbanner-wifi-mesh-desktop.webp&w=3840&q=75"),
    mobile: sourceAsset("/_next/image?url=%2Fimages%2Fbanner-wifi-mesh-mobile.webp&w=1200&q=75"),
  },
];

const registrationClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 h-[28px] w-[100px] rounded-full py-0 uppercase md:hidden md:h-[34px] md:text-16 md:font-semibold md:pb-1";
const desktopRegistrationClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 h-[24px] rounded-full py-0 md:h-[34px] md:w-[106px] md:font-semibold text-gray-50 md:pb-1 md:text-16";
const detailsClass = "items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-primary bg-white hover:bg-red-50 hover:text-primary-dark dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 px-4 hidden h-[34px] w-[106px] rounded-full py-0 text-16 font-semibold md:block md:pb-[2px]";

const sourceUrl = (path: string) => `https://www.viettelup.vn${path}`;

function HomePackageCard({ card, path, allowlist, localPaths, readyProducts }: { card: HomeCard; path: string; allowlist: ReadonlySet<string>; localPaths: ReadonlySet<string>; readyProducts: ReadonlySet<string> }) {
  const targetPath = `/goi-cuoc-viettel/${card.code}`;
  const canRegister = readyProducts.has(targetPath);
  const canSeeDetails = allowlist.has(targetPath);
  return (
    <div>
      <div className="data-card relative flex h-[197px] w-[158px] flex-col justify-between bg-cover font-magistral text-text-dark md:h-[326px] md:w-[261px]">
        {card.discount && <Image unoptimized alt="discount-icon" src={card.discount} width={71} height={74} className="absolute -right-[6px] -top-[6px] h-[64px] w-[61px] md:-right-1 md:h-[74px] md:w-[71px]" />}
        <div className="flex h-[26px] items-center justify-center pb-1 md:h-[42px] md:pb-[6px]"><p className="text-14 font-bold md:text-22 md:leading-[22px]">{card.code}</p></div>
        <div className="">
          {card.metricType === "quota" ? (
            <div className="flex items-center justify-center md:pb-2">
              <div><span className="text-[28px] font-bold leading-[39px] text-primary md:mb-1 md:text-[44px] md:leading-[60px]">{card.metricText}</span><span className="text-[10px] font-bold uppercase leading-[22px] md:text-20 md:leading-[32px]">{card.metricUnit}</span></div>
              <p className="hidden">{card.metricDescription}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-20 font-bold leading-[20px] text-primary md:text-[32px] md:leading-[32px]">{card.metricText}</p>
              <p className="text-14 md:pt-1 md:text-22">{card.secondMetric}</p>
              <p className="hidden">{card.metricDescription}</p>
            </div>
          )}
          <div className="flex flex-col items-center pb-[8px] pt-2">
            {card.perkText && <p className="text-center text-[12px] leading-[14px] md:text-[18px] md:leading-[24px]">{card.perkText}</p>}
            {card.icons.length > 0 && (
              <div className="data-card-icons mt-[6px] flex h-[32px] w-fit items-center justify-center gap-[1px] rounded-full border border-white bg-[#fbf1ea] px-[3px] md:h-[54px] md:px-[6px]">
                {card.icons.map((icon, index) => icon.kind === "img" ? <Image unoptimized key={`${icon.src}-${index}`} alt={icon.alt} src={icon.src} width={18} height={18} className={icon.className} /> : <span key={`${icon.text}-${index}`} className={icon.className}>{icon.text}</span>)}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-end pb-3 md:h-[96px] md:pb-5">
          <p className="pb-[4px] font-medium leading-[20px] md:pb-5"><span className="text-14 font-bold md:text-24">{card.price}</span><span className="text-[10px] font-bold uppercase md:text-14">{card.priceUnit}</span></p>
          <div className="flex gap-2">
            {card.sms && <a href={card.sms} className={registrationClass}>Đăng Ký</a>}
            <div className={card.sms ? "hidden md:block" : ""}>
              {canRegister ? <LeadDialog itemId={targetPath} itemTitle={card.code} pagePath={path} /> : <button type="button" disabled title="Gói cước chưa được duyệt để nhận đăng ký" className={desktopRegistrationClass}>Đăng ký</button>}
            </div>
            {canSeeDetails ? <a href={localPaths.has(targetPath) ? targetPath : sourceUrl(targetPath)} className={detailsClass}>CHI TIẾT</a> : <button type="button" className={detailsClass} disabled title="Đường dẫn chi tiết chưa được phê duyệt">CHI TIẾT</button>}
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
  const readyPaths = new Set(readyPages.map(({ path: readyPath }) => readyPath));
  // Approved drafts are navigable only in an explicitly enabled local preview.
  // Production still links unapproved pages to the verified public source.
  const localDraftPreview = process.env.NODE_ENV !== "production" && process.env.SITE_PREVIEW_DRAFTS === "1";
  const localPaths = localDraftPreview ? allowlist : readyPaths;
  const readyProducts = new Set(readyPages.flatMap(({ page }) => page.product?.id ? [page.product.id] : []));
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <article className="w-full max-w-[1140px] md:max-w-[unset] md:flex md:flex-col md:items-center">
        <HomeCarousel slides={slides} />
        <div className="flex w-full flex-col items-center px-4 pt-2 text-center md:pt-6">
          <h1 className="md:text-22">GÓI CƯỚC DATA 4G 5G VIETTEL</h1>
          <div className="pt-2"><p className="text-14 md:w-full md:text-16">Danh sách các gói cước 4G 5G Viettel tốc độ cao, phủ sóng mạnh mẽ, giúp bạn truy cập internet mọi nơi!</p></div>
        </div>
        <section className="pb-9 pl-4 font-magistral md:w-full md:pl-0 md:pt-0">
          <div data-orientation="vertical">
            {homeGroups.map((group) => (
              <HomeAccordion key={group.title} title={group.title} className={group.className} initialOpen={group.expanded}>
                {group.categories.map((category) => (
                  <div key={category.title} className={category.className}>
                    <h3 className="text-14 font-medium text-neutral-500 md:text-[32px]">{category.title}</h3>
                    <div className="no-scrollbar flex gap-4 overflow-x-auto pr-4 pt-2 md:flex-wrap md:gap-x-8 md:gap-y-6 md:overflow-visible md:pr-0 [&>div]:shrink-0">
                      {category.cards.map((card) => <HomePackageCard key={card.code} card={card} path={path} allowlist={allowlist} localPaths={localPaths} readyProducts={readyProducts} />)}
                    </div>
                  </div>
                ))}
              </HomeAccordion>
            ))}
          </div>
        </section>
        <div className="w-full">
          <div className="container pb-8 pl-4 md:pb-12 md:pl-0 md:pt-3">
            <div className="flex items-center justify-between pb-8 pr-4 md:pb-6 md:pr-0">
              <h2 className="text-18 leading-[25px] md:text-[48px] md:leading-[67px]">Tin tức</h2>
              <Link className="flex items-center justify-center font-medium text-primary md:h-[40px] md:w-[148px] md:rounded-[10px] md:rounded-bl-sm md:border md:border-primary" href={localPaths.has("/tin-tuc") ? "/tin-tuc" : sourceUrl("/tin-tuc")}>Xem tất cả</Link>
            </div>
            <div className="no-scrollbar flex gap-4 overflow-auto pr-4 md:grid md:grid-cols-3 md:grid-rows-2 md:flex-wrap md:gap-6 md:pr-0 [&>div]:shrink-0">
              {homeNews.map((item) => (
                <div key={item.href} className="w-fit max-w-[364px] overflow-hidden rounded-[24px] border border-[#0000000A] bg-white md:rounded-[20px]">
                  <Link className="" href={localPaths.has(item.href) ? item.href : sourceUrl(item.href)}>
                    <Image unoptimized src={item.image} alt={item.imageAlt} width={252} height={148} sizes="(max-width: 767px) 252px, 364px" className="h-[148px] w-[252px] object-cover md:h-[252px] md:w-[364px]" />
                    <div className="p-4 md:p-5">
                      <p className="font-medium text-[#616161] md:text-16">{item.date}</p>
                      <h3 className="max-w-[220px] py-2 font-semibold leading-[28px] text-black md:max-w-[324px] md:pb-3 md:text-22">{item.title}</h3>
                      <p className="hidden">{item.date}</p>
                      <p className="flex items-center gap-[6px] font-medium text-primary"><span>Xem thêm</span><Image unoptimized src={sourceAsset("/icons/arrow-right.svg")} alt="Read more" width={20} height={20} /></p>
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
