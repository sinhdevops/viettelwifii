import type { NewsCardRecord } from "./news-types";
/** Exact labels from cards; intentionally independent of article headings. */
export const newsCards = {
  "so-sanh-roaming": {
    href: "/tin-tuc/so-sanh-roaming",
    title:
      "So Sánh Gói Cước Roaming, eSIM Du Lịch Và SIM Vật Lý Nước Ngoài: Lựa Chọn Nào Tốt Nhất Cho Bạn?",
    publishedLabel: "2/7/2026",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/2ityVh2bIO2h28MbpcRmQY/e74c183506454c1ffcf7d25933da6272/viettel2_7.jpeg",
    imageAlt:
      "So Sánh Gói Cước Roaming, eSIM Du Lịch Và SIM Vật Lý Nước Ngoài: Lựa Chọn Nào Tốt Nhất Cho Bạn?",
  },
  "viettel-roaming-chuyen-vung-quoc-te": {
    href: "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te",
    title:
      "Cẩm Nang Chuyển Vùng Quốc Tế (Roaming) Từ A-Z: Cách Bật, Chi Phí Và Mẹo Tiết Kiệm Data",
    publishedLabel: "27/06/2026",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/1vLaqVRd9vs5WonZE1kiaN/ab0417c8ad4486931ada6380636bad07/viettel21.jpeg",
    imageAlt:
      "Cẩm Nang Chuyển Vùng Quốc Tế (Roaming) Từ A-Z: Cách Bật, Chi Phí Và Mẹo Tiết Kiệm Data",
  },
  "goi-cuoc-data-4g-viettel-2026": {
    href: "/tin-tuc/goi-cuoc-data-4g-viettel-2026",
    title: "Tổng hợp chi tiết gói cước data 4G Viettel 2026 và cách đăng ký",
    publishedLabel: "11/05/2026",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/1u3BHeC7tdjlpn6fm9mR1F/bb0bc6a32e7e91713fe484f51291c403/viettel_10.jpeg",
    imageAlt: "Tổng hợp chi tiết gói cước data 4G Viettel 2026 và cách đăng ký",
  },
  "huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android": {
    href: "/tin-tuc/huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android",
    title: "Hướng dẫn chi tiết cách bật 5G trên iPhone và Andoid mới nhất 2026",
    publishedLabel: "24/4/2026",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/69vhu7erKiLUvGCa6PkDRc/484730b99e51d506f99eb28f89546ce1/2-Banner-web2.jpg",
    imageAlt: "Hướng dẫn chi tiết cách bật 5G trên iPhone và Andoid mới nhất 2026",
  },
  "goi-cuoc-roaming-viettel-la-gi": {
    href: "/tin-tuc/goi-cuoc-roaming-viettel-la-gi",
    title:
      "Gói cước Roaming Viettel là gì? Tổng hợp các gói Roaming phù hợp cho người đi du lịch, công tác nước ngoài",
    publishedLabel: "31/3/2026",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/1KRArNaoC7v6uku5ujG9D8/7ff6e1b074795063fd5a88a7c97887b2/viettel15.jpeg",
    imageAlt:
      "Gói cước Roaming Viettel là gì? Tổng hợp các gói Roaming phù hợp cho người đi du lịch, công tác nước ngoài",
  },
  "giai-dap-thac-mac-hssv": {
    href: "/tin-tuc/giai-dap-thac-mac-hssv",
    title: "GIẢI ĐÁP CÁC CÂU HỎI THƯỜNG GẶP CHO HSSV KHI ĐĂNG KÝ DATA VIETTEL",
    publishedLabel: "3/3/2026",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/2kSZIv8CFvtYxZ4v4ycsnY/22542e1a2b478d3cacd36944179bb83c/Goi-cuoc-sinh-vien-viettel.jpg",
    imageAlt: "GIẢI ĐÁP CÁC CÂU HỎI THƯỜNG GẶP CHO HSSV KHI ĐĂNG KÝ DATA VIETTEL",
  },
  "goi-cuoc-viettel-thang-3-2026": {
    href: "/tin-tuc/goi-cuoc-viettel-thang-3-2026",
    title: "Gói Cước Viettel Tháng 3/2026 – Đăng Ký 4G 5G Viettel Giá Rẻ Nhất",
    publishedLabel: "3/3/2026",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/5k7CxcNVFRN1RV5SnhqgNf/ebff85572328370facb93d62a04d5b5d/3.jpg",
    imageAlt: "Gói Cước Viettel Tháng 3/2026 – Đăng Ký 4G 5G Viettel Giá Rẻ Nhất",
  },
  "goi-cuoc-viettel-cho-sinh-vien": {
    href: "/tin-tuc/goi-cuoc-viettel-cho-sinh-vien",
    title:
      "Danh sách gói cước Viettel tốt nhất dành cho sinh viên 2026: Data khủng, học tập & giải trí thả ga",
    publishedLabel: "10/2/2026",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/2kSZIv8CFvtYxZ4v4ycsnY/22542e1a2b478d3cacd36944179bb83c/Goi-cuoc-sinh-vien-viettel.jpg",
    imageAlt:
      "Danh sách gói cước Viettel tốt nhất dành cho sinh viên 2026: Data khủng, học tập & giải trí thả ga",
  },
} satisfies Record<string, NewsCardRecord>;
export type NewsCardKey = keyof typeof newsCards;
