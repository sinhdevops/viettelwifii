import type { NewsListingRecord } from "@/types/news/news-types";
import { newsCards } from "./card-records";
export const newsListing = {
  title: "Dùng mạng mỗi ngày",
  titleAccent: "không cần wifi",
  bannerAlt: "Dùng mạng mỗi ngày không cần wifi",
  bannerImage: "/_next/image?url=%2Fimages%2Fbanner-news.webp&w=1080&q=75",
  mobileHeading: "Tin tức",
  desktopHeading: "TIN MỚI NHẤT",
  featuredHeading: "TIN NỔI BẬT",
  featured: {
    title:
      "Cẩm Nang Chuyển Vùng Quốc Tế (Roaming) Từ A-Z: Cách Bật, Chi Phí Và Mẹo Tiết Kiệm Data",
    publishedLabel: "27/06/2026",
    description: "",
    href: "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te",
    image:
      "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F1vLaqVRd9vs5WonZE1kiaN%2Fab0417c8ad4486931ada6380636bad07%2Fviettel21.jpeg&w=1080&q=75",
    backgroundImage:
      "https://images.ctfassets.net/dbp77tujye9f/1vLaqVRd9vs5WonZE1kiaN/ab0417c8ad4486931ada6380636bad07/viettel21.jpeg",
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
