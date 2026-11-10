import type { CollectionFaq } from "@/features/collections/parts/collection-faq";
export type PopularCountryCardData = {
  href?: string;
  name: string;
  image: string;
  smallImage: string;
};
export const popularCountries: readonly PopularCountryCardData[] = [
  {
    name: "Hàn Quốc",
    image: "/_next/image?url=%2Fimages%2FKR.png&w=640&q=75",
    smallImage: "/_next/image?url=%2Fimages%2FKR.png&w=256&q=75",
  },
  {
    name: "Nhật Bản",
    image: "/_next/image?url=%2Fimages%2FJP.png&w=640&q=75",
    smallImage: "/_next/image?url=%2Fimages%2FJP.png&w=256&q=75",
  },
  {
    name: "Thái Lan",
    image: "/_next/image?url=%2Fimages%2FTH.png&w=640&q=75",
    smallImage: "/_next/image?url=%2Fimages%2FTH.png&w=256&q=75",
  },
  {
    name: "Singapore",
    image: "/_next/image?url=%2Fimages%2FSG.png&w=640&q=75",
    smallImage: "/_next/image?url=%2Fimages%2FSG.png&w=256&q=75",
  },
  {
    name: "Trung Quốc",
    image: "/_next/image?url=%2Fimages%2FCN.png&w=640&q=75",
    smallImage: "/_next/image?url=%2Fimages%2FCN.png&w=256&q=75",
  },
  {
    name: "Hoa Kỳ",
    image: "/_next/image?url=%2Fimages%2FUS.png&w=640&q=75",
    smallImage: "/_next/image?url=%2Fimages%2FUS.png&w=256&q=75",
  },
  {
    name: "Úc",
    image: "/_next/image?url=%2Fimages%2FAU.png&w=640&q=75",
    smallImage: "/_next/image?url=%2Fimages%2FAU.png&w=256&q=75",
  },
  {
    name: "Đài Loan",
    image: "/_next/image?url=%2Fimages%2FTW.png&w=640&q=75",
    smallImage: "/_next/image?url=%2Fimages%2FTW.png&w=256&q=75",
  },
];
export type RoamingComparisonRowData = {
  criterion: string;
  roaming: string;
  travelSim: string;
};
export const roamingComparison: readonly RoamingComparisonRowData[] = [
  {
    criterion: "SIM sử dụng",
    roaming: "Dùng SIM Viettel hiện tại",
    travelSim: "Dùng SIM/eSIM riêng",
  },
  {
    criterion: "Giữ số Việt Nam",
    roaming: "Giữ số, nhận OTP/cuộc gọi",
    travelSim: "Thường không dùng số Viettel",
  },
  {
    criterion: "Bắt đầu dùng",
    roaming: "Dùng ngay khi đến nơi (chỉ bật Data Roaming)",
    travelSim: "Cần lắp SIM / cài eSIM trước",
  },
  {
    criterion: "Cài đặt",
    roaming: "Rất đơn giản (bật Data Roaming)",
    travelSim: "Cần cài đặt",
  },
  {
    criterion: "Phù hợp khi",
    roaming: "Đi ngắn ngày, cần giữ số & tiện lợi",
    travelSim: "Ở dài ngày, cần gói data riêng",
  },
];
export type RoamingGuideStepData = {
  imageAlt: string;
  image: string;
  smallImage: string;
  title: string;
  description: string;
};
export const roamingGuide: readonly RoamingGuideStepData[] = [
  {
    imageAlt: "roaming-guide-2",
    image: "/_next/image?url=%2Fimages%2Froaming-guide-2.png&w=96&q=75",
    smallImage: "/_next/image?url=%2Fimages%2Froaming-guide-2.png&w=48&q=75",
    title: "1. Đăng ký gói",
    description: "Chọn gói phù hợp quốc gia → Nhấn Đăng ký → Xác nhận SMS",
  },
  {
    imageAlt: "roaming-guide-3",
    image: "/_next/image?url=%2Fimages%2Froaming-guide-3.png&w=96&q=75",
    smallImage: "/_next/image?url=%2Fimages%2Froaming-guide-3.png&w=48&q=75",
    title: "2. Bật Data Roaming",
    description: "Vào Cài đặt → Di động/Mobile → Bật Chuyển vùng dữ liệu",
  },
  {
    imageAlt: "roaming-guide-4",
    image: "/_next/image?url=%2Fimages%2Froaming-guide-4.png&w=96&q=75",
    smallImage: "/_next/image?url=%2Fimages%2Froaming-guide-4.png&w=48&q=75",
    title: "3. Dùng internet ở nước ngoài",
    description: "Sử dụng trong thời hạn & dung lượng gói đã đăng ký",
  },
];
export const roamingFaqs: readonly CollectionFaq[] = [
  {
    id: "roaming-faq-1",
    question: "Dùng gói roaming thì có cần tháo SIM Viettel ra không?",
    answer: (
      <>
        Không. Bạn vẫn dùng SIM Viettel như bình thường, chỉ cần đăng ký gói
        roaming và bật Data Roaming là dùng được.
      </>
    ),
  },
  {
    id: "roaming-faq-2",
    question: "Có nên đăng ký gói roaming trước chuyến bay không?",
    answer: (
      <>
        Nên. Bạn có thể đăng ký trước để yên tâm, sang nước ngoài bật Data
        Roaming là dùng ngay. Data chỉ bị trừ khi bạn bắt đầu sử dụng ở nước
        ngoài.
      </>
    ),
  },
  {
    id: "roaming-faq-3",
    question: "Hết dung lượng hoặc hết thời gian gói thì sao?",
    answer: (
      <>
        Tuỳ gói: có gói sẽ ngừng Data, có gói về tốc độ thường. Hết thời hạn gói
        thì Data roaming sẽ dừng, muốn dùng tiếp phải đăng ký lại.
      </>
    ),
  },
  {
    id: "roaming-faq-4",
    question: "Gói có tự động gia hạn không? Có huỷ được không?",
    answer: (
      <>
        Phần lớn gói không tự động gia hạn. Bạn có thể huỷ bất cứ lúc nào bằng
        cú pháp huỷ của từng gói.
      </>
    ),
  },
  {
    id: "roaming-faq-5",
    question:
      "Nếu mình ở quốc gia không nằm trong phạm vi gói thì có dùng được không?",
    answer: (
      <>
        Vẫn dùng được SIM Viettel, nhưng sẽ bị tính cước roaming theo giá thông
        thường, không còn ưu đãi của gói.
      </>
    ),
  },
];
