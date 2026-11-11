import type { NewsArticleRecord } from "@/types/news/news-types";
/** Historical display dates are preserved verbatim; no inferred ISO/modified dates. */
export const newsArticles = {
  "so-sanh-roaming": {
    route: "/tin-tuc/so-sanh-roaming",
    title:
      "So Sánh Gói Cước Roaming, eSIM Du Lịch Và SIM Vật Lý Nước Ngoài: Lựa Chọn Nào Tốt Nhất Cho Bạn?",
    publishedLabel: "2/7/2026",
    relatedCards: [
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "viettel-roaming-chuyen-vung-quoc-te": {
    route: "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te",
    title:
      "Cẩm Nang Chuyển Vùng Quốc Tế (Roaming) Từ A-Z: Cách Bật, Chi Phí Và Mẹo Tiết Kiệm Data",
    publishedLabel: "27/06/2026",
    relatedCards: ["so-sanh-roaming", "goi-cuoc-data-4g-viettel-2026"],
  },
  "goi-cuoc-data-4g-viettel-2026": {
    route: "/tin-tuc/goi-cuoc-data-4g-viettel-2026",
    title: "Tổng hợp chi tiết gói cước data 4G Viettel 2026 và cách đăng ký",
    publishedLabel: "11/05/2026",
    relatedCards: ["so-sanh-roaming", "viettel-roaming-chuyen-vung-quoc-te"],
  },
  "huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android": {
    route: "/tin-tuc/huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android",
    title: "Hướng dẫn chi tiết cách bật 5G trên iPhone và Andoid mới nhất 2026",
    publishedLabel: "24/4/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-roaming-viettel-la-gi": {
    route: "/tin-tuc/goi-cuoc-roaming-viettel-la-gi",
    title:
      "Gói cước Roaming Viettel là gì? Tổng hợp các gói Roaming phù hợp cho người đi du lịch, công tác nước ngoài",
    publishedLabel: "31/3/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "giai-dap-thac-mac-hssv": {
    route: "/tin-tuc/giai-dap-thac-mac-hssv",
    title: "GIẢI ĐÁP CÁC CÂU HỎI THƯỜNG GẶP CHO HSSV KHI ĐĂNG KÝ DATA VIETTEL",
    publishedLabel: "3/3/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-viettel-thang-3-2026": {
    route: "/tin-tuc/goi-cuoc-viettel-thang-3-2026",
    title: "Gói Cước Viettel Tháng 3/2026 – Đăng Ký 4G 5G Viettel Giá Rẻ Nhất",
    publishedLabel: "3/3/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-viettel-cho-sinh-vien": {
    route: "/tin-tuc/goi-cuoc-viettel-cho-sinh-vien",
    title:
      "Danh sách gói cước Viettel tốt nhất dành cho sinh viên 2026: Data khủng, học tập & giải trí thả ga",
    publishedLabel: "10/2/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-data-4g-viettel-mien-phi-mang-xa-hoi": {
    route: "/tin-tuc/goi-cuoc-data-4g-viettel-mien-phi-mang-xa-hoi",
    title: "Danh Sách Gói Cước 4G Viettel Miễn Phí Mạng Xã Hội 2026 Rẻ Nhất",
    publishedLabel: "1/2/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-camera-ai": {
    route: "/tin-tuc/goi-cuoc-camera-ai",
    title:
      "Tổng hợp gói cước Internet Camera AI dành cho gia đình có trẻ nhỏ tốt nhất 2026",
    publishedLabel: "29/01/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "nine-style": {
    route: "/tin-tuc/nine-style",
    title:
      "TẤT TẦN TẬT VỀ GÓI CƯỚC NINE VIETTEL - DATA THẢ GA, LỐI SỐNG BẬN RỘN",
    publishedLabel: "25/01/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "cap-nhat-goi-cuoc-GIC": {
    route: "/tin-tuc/cap-nhat-goi-cuoc-GIC",
    title:
      "Tại sao GIC Viettel vẫn là gói cước quốc dân dành cho HSSV năm 2026?",
    publishedLabel: "22/01/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-5g-family": {
    route: "/tin-tuc/goi-cuoc-5g-family",
    title:
      "Mẹo giảm đến 20% tiền điện thoại cho cả nhà với tính năng 5G Family trên My Viettel",
    publishedLabel: "17/01/2026",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-mang-viettel": {
    route: "/tin-tuc/goi-mang-viettel",
    title: "Chọn đúng gói mạng Viettel, trải nghiệm internet không giới hạn",
    publishedLabel: "13/12/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "dung-5g-co-hao-pin-va-ton-data": {
    route: "/tin-tuc/dung-5g-co-hao-pin-va-ton-data",
    title:
      "SỰ THẬT: 5G Hao PIN và Tốn DATA Hơn 4G Bao Nhiêu? Chuyên gia VIETTEL Giải Đáp",
    publishedLabel: "8/12/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-ngay-viettel": {
    route: "/tin-tuc/goi-cuoc-ngay-viettel",
    title:
      "Tổng Hợp Gói Cước Data 4G/5G Viettel 1 Ngày SIÊU RẺ MỚI NHẤT 2025 GIÁ CHỈ TỪ 5000Đ",
    publishedLabel: "3/12/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-viettel-thang-06-2025": {
    route: "/tin-tuc/goi-cuoc-viettel-thang-06-2025",
    title: "Đăng ký 4G 5G Viettel data khủng, giá rẻ cập nhật mới nhất",
    publishedLabel: "09/06/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-mydio-viettel": {
    route: "/tin-tuc/goi-cuoc-mydio-viettel",
    title:
      "Giới Thiệu MyDio Viettel - Ứng Dụng Nghe Sách Nói, Truyện Audio Bản Quyền Hấp Dẫn",
    publishedLabel: "09/06/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "dang-ky-internet-viettel-wifi-6-moi-nhat-04-2025": {
    route: "/tin-tuc/dang-ky-internet-viettel-wifi-6-moi-nhat-04-2025",
    title:
      "Viettel cung cấp nhóm gói cước internet từ 300 Mbps, nhanh tương đương top 5 quốc gia có hạ tầng internet tốt nhất thế giới",
    publishedLabel: "04/04/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-viettel-thang-4-2025": {
    route: "/tin-tuc/goi-cuoc-viettel-thang-4-2025",
    title: "Danh sách gói cước 4G, 5G Viettel mới nhất tháng 4/2025",
    publishedLabel: "01/04/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "viettel-ra-mat-goi-cuoc-ngay-moi-st7k-5g10-5g70-5gvs12-5gvs80": {
    route:
      "/tin-tuc/viettel-ra-mat-goi-cuoc-ngay-moi-st7k-5g10-5g70-5gvs12-5gvs80",
    title:
      "Viettel Ra Mắt Gói Cước Ngày Mới: ST7K, 5G10, 5G30, 5G70, 5GVS12, 5GVS80",
    publishedLabel: "17/03/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "viettel-tai-hoi-nghi-di-dong-the-gioi-mwc-barcelona-2025": {
    route: "/tin-tuc/viettel-tai-hoi-nghi-di-dong-the-gioi-mwc-barcelona-2025",
    title: "Viettel Đại Diện Việt Nam Tham Gia MWC Barcelona 2025",
    publishedLabel: "04/03/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-4g-5g-viettel-cap-nhat-thang-3-2025": {
    route: "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-3-2025",
    title: "Gói cước 4G 5G Viettel cập nhật tháng 3/2025",
    publishedLabel: "03/03/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "lo-trinh-trien-khai-5g-viettel": {
    route: "/tin-tuc/lo-trinh-trien-khai-5g-viettel",
    title:
      "Lộ Trình Triển Khai 5G Viettel – Hỗ Trợ Đối Tác Phát Triển Hệ Sinh Thái",
    publishedLabel: "20/02/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-4g-5g-viettel-cap-nhat-thang-2-2025": {
    route: "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-2-2025",
    title: "Gói cước 4G, 5G Viettel cập nhật tháng 2/2025",
    publishedLabel: "14/2/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-5g-viettel-3-thang-6-thang-12-thang": {
    route: "/tin-tuc/goi-5g-viettel-3-thang-6-thang-12-thang",
    title: "Gói Cước 5G Viettel Chu Kỳ Dài – Kết Nối Ổn Định, Tốc Độ Đỉnh Cao",
    publishedLabel: "22/01/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "goi-cuoc-5g-viettel-tet5g": {
    route: "/tin-tuc/goi-cuoc-5g-viettel-tet5g",
    title:
      "Viettel ra mắt gói cước 5G giá rẻ chỉ 50.000đ đáp ứng trọn vẹn nhu cầu Tết ",
    publishedLabel: "17/01/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "tong-dai-viettel": {
    route: "/tin-tuc/tong-dai-viettel",
    title:
      "TỔNG ĐÀI CSKH VIETTEL 24/7 Nhanh Nhất 2025: Hotline Lắp Mạng, Báo Hỏng và CSKH Miễn Phí",
    publishedLabel: "5/1/2025",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "so-sanh-goi-cuoc-4g-va-5g": {
    route: "/tin-tuc/so-sanh-goi-cuoc-4g-va-5g",
    title: "Gói Cước 5G Nổi Bật Gì So Với 4G?",
    publishedLabel: "21/11/2024",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "dang-ky-5g-viettel-2024": {
    route: "/tin-tuc/dang-ky-5g-viettel-2024",
    title:
      "Đăng Ký Gói Cước 5G Viettel Mới Nhất 9/2024: Hướng Dẫn Đầy Đủ Và Chi Tiết",
    publishedLabel: "16/9/2024",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "khuyen-mai-nap-the-viettel-20-7": {
    route: "/tin-tuc/khuyen-mai-nap-the-viettel-20-7",
    title:
      "Tặng 20% giá trị thẻ nạp cho thuê bao Viettel trả trước trong ngày 25/7",
    publishedLabel: "20/07/2024",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "viettel-35-nam-dong-chay-hanh-phuc": {
    route: "/tin-tuc/viettel-35-nam-dong-chay-hanh-phuc",
    title: "Viettel 35 năm - dòng chảy hạnh phúc",
    publishedLabel: "18/06/2024",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "khuyen-mai-nap-the-15-6": {
    route: "/tin-tuc/khuyen-mai-nap-the-15-6",
    title:
      "Khuyến mãi 20% thẻ nạp cho thuê bao trả trước mạng Viettel ngày 15/6",
    publishedLabel: "15/06/2024",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "mo-app-co-qua-viettel-money": {
    route: "/tin-tuc/mo-app-co-qua-viettel-money",
    title: "Cơ hội rinh thưởng triệu đồng từ Viettel Money: Đừng bỏ lỡ!",
    publishedLabel: "13/06/2024",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
  "tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360": {
    route: "/tin-tuc/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360",
    title: "TỔNG HỢP CÁCH ĐĂNG KÝ XEM TRỌN BỘ EURO 2024 TRÊN TV360",
    publishedLabel: "12/06/2024",
    relatedCards: [
      "so-sanh-roaming",
      "viettel-roaming-chuyen-vung-quoc-te",
      "goi-cuoc-data-4g-viettel-2026",
    ],
  },
} satisfies Record<string, NewsArticleRecord>;
export type NewsArticleKey = keyof typeof newsArticles;
