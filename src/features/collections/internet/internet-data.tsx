import type { CollectionFaq } from "../parts/collection-faq";
export type ComboInternetCardData = {
  code: string;
  bandwidth: string;
  equipment: string;
  capitalRadioId: string;
  regionalRadioId: string;
  monthlyPrice: string;
};
export const comboPlans: readonly ComboInternetCardData[] = [
  {
    code: "NETVT01",
    bandwidth: "300Mbps",
    equipment: "1 Modem Wifi 6 + 1 Camera + Truyền hình TV360",
    capitalRadioId: "NETVT01-HN-HCM",
    regionalRadioId: "NETVT01-Other",
    monthlyPrice: "225.000",
  },
  {
    code: "MESHVT01",
    bandwidth: "300 Mbps",
    equipment: "1 Modem Wifi 6 + 1 Mesh Wifi + 1 Camera + TV360",
    capitalRadioId: "MESHVT01-HN-HCM",
    regionalRadioId: "MESHVT01-Other",
    monthlyPrice: "240.000",
  },
];
export type BroadbandInternetCardData = {
  code: string;
  bandwidth: string;
  equipment: string;
  capitalRadioId: string;
  regionalRadioId: string;
  monthlyPrice: string;
};
export const broadbandPlans: readonly BroadbandInternetCardData[] = [
  {
    code: "NETVT1",
    bandwidth: "300Mbps",
    equipment: "1 Modem Wifi 6",
    capitalRadioId: "NETVT1-HN-HCM",
    regionalRadioId: "NETVT1-Other",
    monthlyPrice: "195.000",
  },
  {
    code: "NETVT2",
    bandwidth: "500Mbps",
    equipment: "1 Modem Wifi 6",
    capitalRadioId: "NETVT2-HN-HCM",
    regionalRadioId: "NETVT2-Other",
    monthlyPrice: "240.000",
  },
  {
    code: "MESHVT1",
    bandwidth: "300Mbps",
    equipment: "1 Modem Wifi 6 + 1 Mesh Wifi",
    capitalRadioId: "MESHVT1-HN-HCM",
    regionalRadioId: "MESHVT1-Other",
    monthlyPrice: "210.000",
  },
];
export type TelevisionInternetCardData = {
  code: string;
  bandwidth: string;
  equipment: string;
  capitalRadioId: string;
  regionalRadioId: string;
  monthlyPrice: string;
};
export const televisionPlans: readonly TelevisionInternetCardData[] = [
  {
    code: "NETVT1_GIAITRI",
    bandwidth: "300Mbps",
    equipment: "1 Modem Wifi 6 + Truyền hình TV360",
    capitalRadioId: "NETVT1_GIAITRI-HN-HCM",
    regionalRadioId: "NETVT1_GIAITRI-Other",
    monthlyPrice: "215.000",
  },
  {
    code: "NETVT2_GIAITRI",
    bandwidth: "500Mbps",
    equipment: "1 Modem Wifi 6 + Truyền hình TV360",
    capitalRadioId: "NETVT2_GIAITRI-HN-HCM",
    regionalRadioId: "NETVT2_GIAITRI-Other",
    monthlyPrice: "260.000",
  },
  {
    code: "MESHVT1_GIAITRI",
    bandwidth: "300Mbps",
    equipment: "1 Modem Wifi 6 + Truyền hình TV360 + 1 Mesh Wifi",
    capitalRadioId: "MESHVT1_GIAITRI-HN-HCM",
    regionalRadioId: "MESHVT1_GIAITRI-Other",
    monthlyPrice: "230.000",
  },
];
export type CameraInternetCardData = {
  code: string;
  bandwidth: string;
  equipment: string;
  capitalRadioId: string;
  regionalRadioId: string;
  monthlyPrice: string;
};
export const cameraPlans: readonly CameraInternetCardData[] = [
  {
    code: "NETVT1_CAM1",
    bandwidth: "350Mbps",
    equipment: "1 Modem Wifi 6 + 1 Camera AI",
    capitalRadioId: "NETVT1_CAM1-HN-HCM",
    regionalRadioId: "NETVT1_CAM1-Other",
    monthlyPrice: "215.000",
  },
  {
    code: "NETVT2_CAM1",
    bandwidth: "500Mbps",
    equipment: "1 Modem Wifi 6 + 1 Camera AI",
    capitalRadioId: "NETVT2_CAM1-HN-HCM",
    regionalRadioId: "NETVT2_CAM1-Other",
    monthlyPrice: "260.000",
  },
  {
    code: "MESHVT1_CAM1",
    bandwidth: "350Mbps",
    equipment: "1 Modem Wifi 6 + 1 Camera AI + 1 Mesh Wifi",
    capitalRadioId: "MESHVT1_CAM1-HN-HCM",
    regionalRadioId: "MESHVT1_CAM1-Other",
    monthlyPrice: "230.000",
  },
  {
    code: "MESHVT2_CAM1",
    bandwidth: "500Mbps",
    equipment: "1 Modem Wifi 6 + 1 Camera AI + 2 Mesh Wifi",
    capitalRadioId: "MESHVT2_CAM1-HN-HCM",
    regionalRadioId: "MESHVT2_CAM1-Other",
    monthlyPrice: "265.000",
  },
];
export type CameraInternetSlideData = {
  code: string;
  bandwidth: string;
  equipment: string;
  capitalRadioId: string;
  regionalRadioId: string;
  monthlyPrice: string;
};
export const cameraSlides: readonly CameraInternetSlideData[] = cameraPlans;
export type MeshInternetCardData = {
  code: string;
  equipment: string;
  capitalRadioId: string;
  regionalRadioId: string;
  monthlyPrice: string;
};
export const meshPlans: readonly MeshInternetCardData[] = [
  {
    code: "MESHVT2",
    equipment: "1 Modem Wifi 6 + 2 Mesh Wifi",
    capitalRadioId: "MESHVT2-HN-HCM",
    regionalRadioId: "MESHVT2-Other",
    monthlyPrice: "245.000",
  },
  {
    code: "MESHVT3",
    equipment: "1 Modem Wifi 6 + 3 Mesh Wifi + Truyền hình TV360",
    capitalRadioId: "MESHVT3-HN-HCM",
    regionalRadioId: "MESHVT3-Other",
    monthlyPrice: "299.000",
  },
];
export type UltraSpeedInternetCardData = {
  code: string;
  equipment: string;
  capitalRadioId: string;
  monthlyPrice: string;
};
export const ultraSpeedPlans: readonly UltraSpeedInternetCardData[] = [
  {
    code: "GIGA1",
    equipment: "1 Modem Wifi 6 XGSPON",
    capitalRadioId: "GIGA1-HN-HCM",
    monthlyPrice: "320.000",
  },
  {
    code: "GIGA2",
    equipment: "1 Modem Wifi 6 XGSPON + 1 Mesh Wifi",
    capitalRadioId: "GIGA2-HN-HCM",
    monthlyPrice: "355.000",
  },
  {
    code: "GIGA3",
    equipment: "1 Modem Wifi 6 XGSPON + 2 Mesh Wifi",
    capitalRadioId: "GIGA3-HN-HCM",
    monthlyPrice: "390.000",
  },
  {
    code: "GIGA4",
    equipment: "1 Modem Wifi 6 XGSPON + 3 Mesh Wifi",
    capitalRadioId: "GIGA4-HN-HCM",
    monthlyPrice: "425.000",
  },
];
export type UltraSpeedInternetSlideData = {
  code: string;
  equipment: string;
  capitalRadioId: string;
  monthlyPrice: string;
};
export const ultraSpeedSlides: readonly UltraSpeedInternetSlideData[] =
  ultraSpeedPlans;
export type InternetBenefitCardData = {
  imageAlt: string;
  image: string;
  title: string;
  description: string;
};
export const internetBenefits: readonly InternetBenefitCardData[] = [
  {
    imageAlt: "internet-top",
    image: "/icons/internet-top.svg",
    title: "Kết nối ổn định, tốc độ cao cho các nhu cầu cá nhân",
    description:
      "Dành cho các hoạt động cá nhân như xem phim, lướt web và làm việc từ xa",
  },
  {
    imageAlt: "internet-connect",
    image: "/icons/internet-connect.svg",
    title: "Mạng siêu khoẻ cho tất cả thành viên trong gia đình",
    description: "Dễ dàng chia sẻ kết nối cho nhiều thiết bị cùng lúc",
  },
  {
    imageAlt: "internet-speed",
    image: "/icons/internet-speed.svg",
    title: "Tốc độ cao, độ trễ thấp cho trải nghiệm game đỉnh cao",
    description:
      "Dành cho các hoạt động cá nhân như xem phim, lướt web và làm việc từ xa.",
  },
];
export type InternetNewsCardData = {
  href: string;
  title: string;
  image: string;
  date: string;
};
export const internetNews: readonly InternetNewsCardData[] = [
  {
    href: "/tin-tuc/so-sanh-roaming",
    title:
      "So Sánh Gói Cước Roaming, eSIM Du Lịch Và SIM Vật Lý Nước Ngoài: Lựa Chọn Nào Tốt Nhất Cho Bạn?",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/2ityVh2bIO2h28MbpcRmQY/e74c183506454c1ffcf7d25933da6272/viettel2_7.jpeg",
    date: "2/7/2026",
  },
  {
    href: "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te",
    title:
      "Cẩm Nang Chuyển Vùng Quốc Tế (Roaming) Từ A-Z: Cách Bật, Chi Phí Và Mẹo Tiết Kiệm Data",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/1vLaqVRd9vs5WonZE1kiaN/ab0417c8ad4486931ada6380636bad07/viettel21.jpeg",
    date: "27/06/2026",
  },
  {
    href: "/tin-tuc/goi-cuoc-data-4g-viettel-2026",
    title: "Tổng hợp chi tiết gói cước data 4G Viettel 2026 và cách đăng ký",
    image:
      "https://images.ctfassets.net/dbp77tujye9f/1u3BHeC7tdjlpn6fm9mR1F/bb0bc6a32e7e91713fe484f51291c403/viettel_10.jpeg",
    date: "11/05/2026",
  },
];
export const internetFaqs: readonly CollectionFaq[] = [
  {
    id: "internet-faq-1",
    question: "Làm thế nào để chọn gói Internet Viettel phù hợp?",
    answer: (
      <>
        Hãy dựa vào số người dùng, số thiết bị và diện tích nhà. Nhà ít người
        chọn 300Mbps; gia đình đông người nên dùng từ 500Mbps; nhà nhiều tầng
        nên ưu tiên gói có Mesh Wifi để phủ sóng đều.
      </>
    ),
  },
  {
    id: "internet-faq-2",
    question: "Gia đình nên dùng băng thông bao nhiêu Mbps là đủ?",
    answer: (
      <>
        1–2 người: ~300Mbps; 3–5 người: 300–500Mbps; trên 5 người hoặc nhiều
        thiết bị: từ 500Mbps–1Gbps để đảm bảo mượt khi dùng đồng thời.
      </>
    ),
  },
  {
    id: "internet-faq-3",
    question: "Wifi 6 của Viettel có khác Wifi thường không?",
    answer: (
      <>
        Wifi 6 chịu tải nhiều thiết bị tốt hơn, giảm độ trễ và ổn định hơn khi
        xem 4K, chơi game và họp online so với Wifi đời cũ.
      </>
    ),
  },
  {
    id: "internet-faq-4",
    question: "Nhà nhiều tầng có cần Mesh Wifi không?",
    answer: (
      <>
        Nên có. Mesh Wifi giúp mở rộng vùng phủ, loại bỏ điểm chết và giữ tốc độ
        ổn định ở mọi phòng, mọi tầng.
      </>
    ),
  },
  {
    id: "internet-faq-5",
    question:
      "Có thể nâng cấp hoặc hạ cấp gói Internet trong quá trình sử dụng không?",
    answer: (
      <>
        Có. Bạn chỉ cần liên hệ tổng đài Viettel để được hỗ trợ đổi gói theo nhu
        cầu mới.
      </>
    ),
  },
  {
    id: "internet-faq-6",
    question: "Đổi gói Internet có bị gián đoạn mạng không?",
    answer: (
      <>
        Thông thường không. Việc đổi gói được xử lý nhanh và hầu như không ảnh
        hưởng đến kết nối.
      </>
    ),
  },
  {
    id: "internet-faq-7",
    question: "Thời gian lắp mạng Internet Viettel mất bao lâu?",
    answer: (
      <>
        Khoảng 12–24 giờ sau khi đăng ký; khu vực có sẵn hạ tầng có thể lắp
        trong ngày.
      </>
    ),
  },
  {
    id: "internet-faq-8",
    question:
      "Internet Viettel có phù hợp cho chơi game và làm việc online không?",
    answer: (
      <>
        Có. Các gói từ 500Mbps–1Gbps, độ trễ thấp, kết hợp Wifi 6/Mesh giúp chơi
        game, họp online và stream mượt hơn.
      </>
    ),
  },
];
