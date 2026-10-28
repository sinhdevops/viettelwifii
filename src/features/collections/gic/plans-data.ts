export type GicPlan = {
  code: string;
  monthlyPrice: string;
  dailyData: string;
  benefitHeading: string;
  benefits: readonly string[];
  popular: boolean;
  smsHref: string;
};
export const gicPlans: readonly GicPlan[] = [
  {
    code: "GIC30N",
    monthlyPrice: "30",
    dailyData: "",
    benefitHeading: "Khuyến mãi cuộc gọi",
    benefits: ["200 phút (10 phút/cuộc) nội mạng", "10 phút ngoại mạng"],
    popular: false,
    smsHref: "sms:290?body=GIC30N UP",
  },
  {
    code: "GIC90N",
    monthlyPrice: "90",
    dailyData: "1GB",
    benefitHeading: "Miễn phí",
    benefits: ["Facebook, Threads, Instagram, TikTok", "Sách truyện trên Mydio"],
    popular: false,
    smsHref: "sms:290?body=GIC90N UP",
  },
  {
    code: "GIC125N",
    monthlyPrice: "125",
    dailyData: "7GB",
    benefitHeading: "Miễn phí",
    benefits: ["Sách truyện trên Mydio"],
    popular: true,
    smsHref: "sms:290?body=GIC125N UP",
  },
];
export type GicTopping = {
  code: string;
  title: string;
  description: string;
  imageAlt: string;
  image: string;
  smsHref: string;
  dialogLabel: string;
};
export const gicToppings: readonly GicTopping[] = [
  {
    code: "ST10K",
    title: "1000 SMS (nội mạng)",
    description: "",
    imageAlt: "sms",
    image: "/images/sms.svg",
    smsHref: "sms:290?body=ST10K UP",
    dialogLabel: "ST10K UP gửi 290",
  },
  {
    code: "V10K",
    title: "50 phút thoại (nội mạng)",
    description: "",
    imageAlt: "phone",
    image: "/images/phone.svg",
    smsHref: "sms:290?body=V10K UP",
    dialogLabel: "V10K UP gửi 290",
  },
  {
    code: "MT10T",
    title: "2GB data ",
    description: "",
    imageAlt: "data",
    image: "/images/data.svg",
    smsHref: "sms:290?body=MT10T UP",
    dialogLabel: "MT10T UP gửi 290",
  },
  {
    code: "TIK10",
    title: "Miễn phí TikTok",
    description: "",
    imageAlt: "tiktok",
    image: "/images/tiktok.svg",
    smsHref: "sms:290?body=TIK10 UP",
    dialogLabel: "TIK10 UP gửi 290",
  },
  {
    code: "YT10",
    title: "Miễn phí Youtube",
    description: "",
    imageAlt: "youtube",
    image: "/images/youtube.svg",
    smsHref: "sms:290?body=YT10 UP",
    dialogLabel: "YT10 UP gửi 290",
  },
  {
    code: "FB10",
    title: "Miễn phí Meta",
    description: "Facebook, Threads, Instagram",
    imageAlt: "facebook",
    image: "/images/facebook.svg",
    smsHref: "sms:290?body=FB10 UP",
    dialogLabel: "FB10 UP gửi 290",
  },
];
