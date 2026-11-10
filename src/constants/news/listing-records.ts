import type { NewsListingRecord } from "@/types/news/news-types";
import { newsCards } from "./card-records";
export const newsListing = {
  title: "Dùng mạng mỗi ngày",
  titleAccent: "không cần wifi",
  bannerAlt: "Dùng mạng mỗi ngày không cần wifi",
  bannerImage: "/assets/viettelup/images/news-banner-viettelwifii.jpg",
  mobileHeading: "Tin tức",
  desktopHeading: "TIN MỚI NHẤT",
  featuredHeading: "TIN NỔI BẬT",
  featured: {
    title:
      "Cẩm Nang Chuyển Vùng Quốc Tế (Roaming) Từ A-Z: Cách Bật, Chi Phí Và Mẹo Tiết Kiệm Data",
    publishedLabel: "27/06/2026",
    description: "",
    href: "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te",
    image: "/assets/viettelup/images/news-roaming-featured-viettelwifii.jpg",
    backgroundImage:
      "/assets/viettelup/images/news-roaming-featured-viettelwifii.jpg",
  },
  cards: [
    {
      key: "so-sanh-roaming",
      desktopOnly: false,
    },
    {
      key: "huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android",
      desktopOnly: false,
    },
    {
      key: "goi-cuoc-roaming-viettel-la-gi",
      desktopOnly: false,
    },
    {
      key: "giai-dap-thac-mac-hssv",
      desktopOnly: false,
    },
    {
      key: "goi-cuoc-viettel-thang-3-2026",
      desktopOnly: true,
    },
    {
      key: "goi-cuoc-viettel-cho-sinh-vien",
      desktopOnly: true,
    },
  ],
} satisfies NewsListingRecord;

/** Hydrated mobile source inserts these between the first and fourth cards. */
export const mobileNewsCards = [
  newsCards["viettel-roaming-chuyen-vung-quoc-te"],
  newsCards["goi-cuoc-data-4g-viettel-2026"],
] as const;
