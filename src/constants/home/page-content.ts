import { siteConfig } from "@/lib/site-config";
import type { PageContent } from "@/lib/content-schema";

/** Route metadata; visible sections remain authored in home-content.tsx. */
export const homePageContent: Record<string, PageContent> = {
  "/": {
    status: "ready",
    kind: "home",
    title: "Gói cước Viettel 2026 | Đăng ký 4G 5G nhanh nhất",
    description: "Gói cước Viettel 2026 | Đăng ký 4G 5G nhanh nhất",
    heading: "GÓI CƯỚC DATA 4G 5G VIETTEL",
    sections: [
      {
        type: "list",
        heading: "Gói cước tháng",
        ordered: false,
        items: [
          "GÓI CƯỚC DATA 5G",
          "GÓI CƯỚC DATA 4G",
          "GÓI CƯỚC MIỄN PHÍ MẠNG XÃ HỘI",
        ],
      },
      {
        type: "list",
        heading: "Gói cước ngày",
        ordered: false,
        items: [
          "GÓI CƯỚC MẠNG XÃ HỘI - ADD ON",
          "GÓI CƯỚC DATA COMBO",
          "GÓI CƯỚC 1-7 NGÀY",
          "GÓI CƯỚC 30 NGÀY",
        ],
      },
      {
        type: "cards",
        heading: "GÓI CƯỚC DATA 4G 5G VIETTEL",
        cards: [
          {
            id: "/goi-cuoc-viettel/5G20",
            productId: "/goi-cuoc-viettel/5G20",
            title: "5G20",
            subtitle: "6GB/3 ngày",
            price: "20.000đ / 3 ngày",
            href: "/goi-cuoc-viettel/5G20",
          },
          {
            id: "/goi-cuoc-viettel/5G135",
            productId: "/goi-cuoc-viettel/5G135",
            title: "5G135",
            subtitle: "4GB/ngày",
            price: "135.000đ / tháng",
            href: "/goi-cuoc-viettel/5G135",
          },
          {
            id: "/goi-cuoc-viettel/KS2H",
            productId: "/goi-cuoc-viettel/KS2H",
            title: "KS2H",
            subtitle: "1.2GB/2 giờ",
            price: "5.700đ / 2 giờ",
            href: "/goi-cuoc-viettel/KS2H",
          },
        ],
      },
      {
        type: "text",
        heading: "Tin tức",
        paragraphs: [],
      },
    ],
    source: {
      url: siteConfig.url("/"),
      capturedAt: "2026-10-27T13:13:06+07:00",
      evidencePaths: [
        "data/sources/ref-01/archetypes.json",
        "reference-clone/raw/ref-01/home.txt",
      ],
      verifiedFields: [
        "H1",
        "page title",
        "section headings",
        "sample product card labels",
      ],
      unverifiedFields: [
        "HTTP status / redirect chain",
        "final rendered DOM / live CTA handling",
        "meta description",
        "full grouping/order of 171 cards",
        "card click and signup CTA behavior",
        "slider behavior",
        "direct status/redirect",
        "full card listing and ordering",
        "source image URLs",
      ],
      notes: [
        "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
      ],
    },
  },
};
