import type { CollectionFaq } from "@/features/collections/parts/collection-faq";
export type NinePriorityPlanCardData = {
  code: string;
  monthlyPrice: string;
  dailyDataGb: string;
  externalCalls: string;
};
export const priorityPlans: readonly NinePriorityPlanCardData[] = [
  {
    code: "N300",
    monthlyPrice: "300",
    dailyDataGb: "12",
    externalCalls: "Ngoại mạng 200 phút",
  },
  {
    code: "N350",
    monthlyPrice: "350",
    dailyDataGb: "15",
    externalCalls: "Ngoại mạng 300 phút",
  },
  {
    code: "N400",
    monthlyPrice: "400",
    dailyDataGb: "17",
    externalCalls: "Ngoại mạng 300 phút",
  },
];
export type NinePremiumPlanCardData = {
  code: string;
  monthlyPrice: string;
  dailyDataGb: string;
  externalCalls: string;
};
export const premiumPlans: readonly NinePremiumPlanCardData[] = [
  {
    code: "N1000",
    monthlyPrice: "1.000",
    dailyDataGb: "30",
    externalCalls: "Ngoại mạng 300 phút",
  },
  {
    code: "N2000",
    monthlyPrice: "2.000",
    dailyDataGb: "50",
    externalCalls: "Ngoại mạng 400 phút",
  },
];
export type NineEssentialPlanSlideData = {
  code: string;
  monthlyPrice: string;
  dailyDataGb: string;
  internalCalls: string;
  sms: string;
};
export const essentialSlides: readonly NineEssentialPlanSlideData[] = [
  {
    code: "N200",
    monthlyPrice: "200",
    dailyDataGb: "8",
    internalCalls: "Nội mạng 20 phút/cuộc",
    sms: "100 SMS trong nước",
  },
  {
    code: "N250",
    monthlyPrice: "250",
    dailyDataGb: "10",
    internalCalls: "Nội mạng 30 phút/cuộc",
    sms: "150 SMS trong nước",
  },
];
export type NinePriorityPlanSlideData = {
  code: string;
  monthlyPrice: string;
  dailyDataGb: string;
  externalCalls: string;
  sms: string;
};
export const prioritySlides: readonly NinePriorityPlanSlideData[] = [
  {
    code: "N300",
    monthlyPrice: "300",
    dailyDataGb: "12",
    externalCalls: "Ngoại mạng 200 phút",
    sms: "200 SMS trong nước",
  },
  {
    code: "N350",
    monthlyPrice: "350",
    dailyDataGb: "15",
    externalCalls: "Ngoại mạng 300 phút",
    sms: "200 SMS trong nước",
  },
  {
    code: "N400",
    monthlyPrice: "400",
    dailyDataGb: "17",
    externalCalls: "Ngoại mạng 300 phút",
    sms: "200 SMS trong nước",
  },
  {
    code: "N500",
    monthlyPrice: "500",
    dailyDataGb: "20",
    externalCalls: "Ngoại mạng 300 phút",
    sms: "250 SMS trong nước",
  },
];
export type NinePremiumPlanSlideData = {
  code: string;
  monthlyPrice: string;
  dailyDataGb: string;
  externalCalls: string;
};
export const premiumSlides: readonly NinePremiumPlanSlideData[] = [
  {
    code: "N1000",
    monthlyPrice: "1.000",
    dailyDataGb: "30",
    externalCalls: "Ngoại mạng 300 phút",
  },
  {
    code: "N2000",
    monthlyPrice: "2.000",
    dailyDataGb: "50",
    externalCalls: "Ngoại mạng 400 phút",
  },
];
export type NinePrivilegeCardData = {
  title: string;
  image: string;
  primaryBenefit: string;
  secondaryBenefit: string;
};
export const ninePrivileges: readonly NinePrivilegeCardData[] = [
  {
    title: "Đặc quyền viễn thông",
    image: "/images/nine-benefit-2.svg",
    primaryBenefit: "Miễn phí gọi, SMS, truy cập MXH",
    secondaryBenefit: "Tổng đài CSKH riêng 24/7",
  },
  {
    title: "Đặc quyền công nghệ",
    image: "/images/nine-benefit-3.svg",
    primaryBenefit: "Ưu đãi sử dụng data 5G tốc độ cao",
    secondaryBenefit: "Voucher mua sắm thiết bị công nghệ",
  },
  {
    title: "Đặc quyền ưu đãi",
    image: "/images/nine-benefit-4.svg",
    primaryBenefit: "Ưu đãi nâng hạng thành viên",
    secondaryBenefit: "Voucher độc quyền Viettel & đối tác",
  },
];
export const nineFaqs: readonly CollectionFaq[] = [
  {
    id: "nine-faq-1",
    question: "Gói cước NINE Viettel là gì?",
    answer: (
      <>
        NINE là hệ gói cước trả sau cao cấp của Viettel, kết hợp thoại, SMS và
        data dung lượng lớn cùng nhiều đặc quyền tiện ích như chăm sóc khách
        hàng ưu tiên, ưu đãi roaming và dịch vụ số.
      </>
    ),
  },
  {
    id: "nine-faq-2",
    question: "Gói NINE dành cho ai?",
    answer: (
      <>
        Gói NINE phù hợp với người dùng có nhu cầu data lớn, sử dụng thường
        xuyên, muốn trải nghiệm dịch vụ viễn thông cao cấp và được chăm sóc ưu
        tiên, đặc biệt là doanh nhân, người đi công tác nhiều hoặc hay di
        chuyển.
      </>
    ),
  },
  {
    id: "nine-faq-3",
    question: "Vì sao nên chọn NINE?",
    answer: (
      <>
        Vì NINE mang đến trải nghiệm cao cấp hơn với data lớn, dịch vụ chăm sóc
        khách hàng ưu tiên và nhiều đặc quyền tiện ích, phù hợp cho người dùng
        cần kết nối mạnh và ổn định mỗi ngày.
      </>
    ),
  },
  {
    id: "nine-faq-4",
    question: "Làm sao để đăng ký gói NINE Viettel?",
    answer: (
      <>
        Bạn có thể đăng ký gói NINE trên app My Viettel, tại cửa hàng Viettel
        hoặc gọi 1800 8098 để được hỗ trợ. Lưu ý: NINE là gói trả sau, cần dùng
        hoặc chuyển sang thuê bao trả sau để đăng ký.
      </>
    ),
  },
  {
    id: "nine-faq-5",
    question: "Gói NINE có xuất hoá đơn VAT không?",
    answer: (
      <>
        Có. Vì NINE là gói trả sau, Viettel có thể xuất hoá đơn VAT cho khách
        hàng khi có nhu cầu. Bạn chỉ cần đăng ký thông tin xuất hoá đơn tại cửa
        hàng Viettel hoặc trên app My Viettel.
      </>
    ),
  },
];
