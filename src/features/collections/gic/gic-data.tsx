import type { CollectionFaq } from "../parts/collection-faq";
export type GicMonthlyBenefitCardData = {
  imageAlt: string;
  image: string;
  title: string;
  note: string;
  description: string;
};
export const monthlyBenefits: readonly GicMonthlyBenefitCardData[] = [
  {
    imageAlt: "call",
    image: "/images/call.svg",
    title: "10.000đ ",
    note: "(**)",
    description: "Nạp tài khoản gốc thuê bao",
  },
  {
    imageAlt: "facebook",
    image: "/images/facebook.svg",
    title: "Free Facebook ",
    note: "(*)",
    description: "Miễn phí tối đa 50GB/30ngày",
  },
  {
    imageAlt: "tiktok",
    image: "/images/tiktok.svg",
    title: "Free Tiktok ",
    note: "(*)",
    description: "Miễn phí tối đa 50GB/ngày",
  },
  {
    imageAlt: "youtube",
    image: "/images/youtube.svg",
    title: "Free Youtube ",
    note: "(*)",
    description: "Miễn phí tối đa 50GB/ngày",
  },
];
export const gicFaqs: readonly CollectionFaq[] = [
  {
    id: "gic-faq-1",
    question: "Gói GIC dành cho ai?",
    answer: (
      <>
        SIM GIC (Viettel) dành riêng cho giới trẻ Việt Nam, cụ thể là độ tuổi từ 6 đến 22 tuổi, bao
        gồm học sinh, sinh viên và những bạn trẻ có nhu cầu cao về data để học tập, giải trí (xem
        phim, nghe nhạc, mạng xã hội) mà vẫn tiết kiệm chi phí.
      </>
    ),
  },
  {
    id: "gic-faq-2",
    question: "Điều kiện để đăng ký gói cước GIC là gì?",
    answer: (
      <>
        Để đăng ký SIM GIC Viettel, bạn cần là công dân từ 6 đến 22 tuổi, có giấy tờ tùy thân hợp lệ
        (CMND/CCCD/Hộ chiếu) và tài khoản chính đủ tiền cho gói cước. Thủ tục có thể thực hiện tại
        cửa hàng Viettel hoặc đăng ký online, yêu cầu người đăng ký phải là chính chủ và thuộc độ
        tuổi quy định.
      </>
    ),
  },
  {
    id: "gic-faq-3",
    question: "Tôi có thể thay đổi hoặc thêm topping sau khi đăng ký gói GIC không?",
    answer: (
      <>
        Có, bạn hoàn toàn có thể thêm hoặc thay đổi các gói Topping (như data TikTok, Facebook,
        YouTube, phút gọi, SMS, data) sau khi đã đăng ký gói SIM GIC Viettel.
      </>
    ),
  },
  {
    id: "gic-faq-4",
    question: "Làm thể nào để mua được sim GIC Viettel?",
    answer: (
      <>
        Để mua sim GIC Viettel (dành cho lứa tuổi 6-22), bạn có thể đăng ký trực tuyến tại website{" "}
        <a
          className="text-primary underline"
          href="https://gic.viettel.vn"
          target="_blank"
          rel="noopener noreferrer"
        >
          gic.viettel.vn
        </a>
        , ra trực tiếp các cửa hàng Viettel để được hỗ trợ hoàn thiện, hoặc gọi tổng đài 18008198 để
        được tư vấn &amp; giao sim tận nhà. Quá trình đăng ký cần CMND/CCCD và có thể chọn sim vật
        lý hoặc eSIM.
      </>
    ),
  },
];
