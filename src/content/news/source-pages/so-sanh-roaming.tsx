import { siteConfig } from "@/lib/site-config";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "@/components/news/article-layout";
import { newsArticles } from "@/constants/news/article-records";
/** Authored sections from archive 0118; keep historical copy and source irregularities. */
export default function SoSanhRoamingArticle() {
  return (
    <ArticleLayout article={newsArticles["so-sanh-roaming"]}>
      <SoSanhRoamingIntroduction />
      <SoSanhRoamingTongQuanVeGoiCuocRoamingESIMDuLichVaSIMVatLyNuocNgoai />
      <SoSanhRoamingRoamingLaGiHieuDungBanChatSanPham />
      <SoSanhRoamingDanhGiaChiTietNenChonGiaiPhapNaoKhiDiNuocNgoai />
      <SoSanhRoamingTongKet />
    </ArticleLayout>
  );
}
function SoSanhRoamingIntroduction() {
  return (
    <>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Mỗi lần chuẩn bị hành lý cho chuyến đi nước ngoài, câu hỏi &quot;nên mua
        SIM nước ngoài hay roaming, hay thử eSIM?&quot; lại xuất hiện và gây
        không ít phân vân. Bài viết này sẽ phân tích thẳng thắn từng sản phẩm,
        so sánh trực quan theo các tiêu chí quan trọng nhất, và giúp bạn xác
        định đâu là lựa chọn phù hợp với chuyến đi cụ thể của mình.
      </p>
      <hr />
    </>
  );
}

function SoSanhRoamingTongQuanVeGoiCuocRoamingESIMDuLichVaSIMVatLyNuocNgoai() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Tổng quan về Gói cước Roaming, eSIM du lịch và SIM vật lý nước ngoài
      </h2>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="so-sanh-roaming"
          loading="lazy"
          width="1044"
          height="612"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F2ityVh2bIO2h28MbpcRmQY%2Fe74c183506454c1ffcf7d25933da6272%2Fviettel2_7.jpeg&w=3840&q=75",
          )}
        />
      </div>
    </>
  );
}

function SoSanhRoamingRoamingLaGiHieuDungBanChatSanPham() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Roaming là gì? Hiểu đúng bản chất sản phẩm
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Trước khi cân nhắc có nên mua hay không, cần hiểu rõ một điều: "}
        <b>gói cước roaming không phải là một chiếc SIM</b>. Đây là một dịch vụ
        mở rộng mà nhà mạng Việt Nam như Viettel, VinaPhone, MobiFone,... bán
        thêm cho khách hàng đang dùng SIM của họ. Bạn không cần mua thêm gì,
        không cần cài đặt gì phức tạp. Chỉ cần đăng ký gói, bật chuyển vùng trên
        điện thoại là có thể bắt đầu sử dụng.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Chính vì bản chất này, roaming giúp bạn vẫn số cũ, vẫn danh bạ cũ, vẫn
        ứng dụng hoạt động bình thường ngay cả khi bạn đang ở một quốc gia khác.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Đọc thêm: "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/goi-cuoc-roaming")}
        >
          Tổng hợp các gói cước Roaming Viettel
        </a>
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        eSIM du lịch là gì?
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"eSIM du lịch là sản phẩm công nghệ thế hệ mới, hoạt động như một "}
        <b>gói dữ liệu kỹ thuật số</b>
        {
          " được cài thẳng vào chip eSIM có sẵn trên điện thoại — không cần thẻ nhựa, không cần ra cửa hàng, không cần tháo SIM cũ ra. Bạn mua online, nhận mã QR qua email, quét mã là xong. Toàn bộ quá trình có thể hoàn thành trong vòng 5 phút, kể cả khi bạn đang ngồi trên máy bay hoặc vừa hạ cánh xuống sân bay nước ngoài."
        }
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        SIM vật lý nước ngoài là gì?
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        SIM vật lý nước ngoài (hay còn gọi là SIM du lịch nhựa) là chiếc SIM
        truyền thống đã được nạp sẵn gói cước của một nhà mạng nội địa tại quốc
        gia điểm đến. Khi lắp vào điện thoại, thiết bị sẽ hoạt động như một
        người dùng địa phương: có số điện thoại nước sở tại, dùng mạng nội địa
        trực tiếp, hưởng giá cước và tốc độ như người dân bản địa.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Điểm quan trọng cần hiểu: "}
        <b>bạn phải tháo SIM Việt Nam ra</b>
        {
          " để lắp SIM này vào (trừ khi điện thoại có hai khe SIM). Điều đó đồng nghĩa với việc số điện thoại Việt Nam tạm thời ngừng hoạt động trong suốt chuyến đi."
        }
      </p>
      <hr />
    </>
  );
}

function SoSanhRoamingDanhGiaChiTietNenChonGiaiPhapNaoKhiDiNuocNgoai() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Đánh giá chi tiết: Nên chọn giải pháp nào khi đi nước ngoài?
      </h2>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        {"✔ "}
        <b>Nên chọn Gói cước Roaming nếu:</b>{" "}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Bạn là "}
        <b>
          doanh nhân, người đi công tác ngắn ngày, cần liên lạc nội địa liên tục
        </b>
        , giữ kết nối thông suốt với đối tác qua số điện thoại Việt Nam và không
        quá áp lực về tài chính.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bạn không cần mua thêm bất kỳ thứ gì, chỉ cần đăng ký với nhà mạng hiện
        tại (Viettel, VinaPhone, MobiFone) và bật chuyển vùng dữ liệu khi sang
        nước ngoài. Hoàn toàn bảo mật và không sợ mất liên lạc với đối tác, gia
        đình tại Việt Nam qua số điện thoại quen thuộc.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        {"✔ "}
        <b>Nên chọn eSIM Du lịch nếu:</b>{" "}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Bạn là "}
        <b>
          người trẻ đam mê công nghệ, thích sự nhanh chóng, đi du lịch tự túc
        </b>
        , sở hữu điện thoại đời mới và muốn tối ưu chi phí data rẻ nhất.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Tuy nhiên chỉ những dòng máy đời mới và phiên bản quốc tế (như iPhone 11
        trở lên, Samsung S20 trở lên...) mới tích hợp công nghệ này. Ngoài ra,
        đa phần eSIM du lịch chỉ cung cấp Data, không hỗ trợ nghe gọi qua sóng
        điện thoại thông thường mà phải dùng các ứng dụng OTT (Zalo, Viber,
        WhatsApp).
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        {"✔ "}
        <b>Nên chọn SIM vật lý nếu:</b>{" "}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Bạn mua hộ "}
        <b>
          người lớn tuổi không rành cài đặt công nghệ, đang dùng điện thoại đời
          cũ
        </b>
        {
          "/máy lock, hoặc đi các nước bắt buộc phải có số điện thoại nội địa để di chuyển và quét mã (như Trung Quốc, Hàn Quốc...). "
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        SIM vật lý rất tiện để bạn đăng ký các ứng dụng đặt xe (Grab, Uber,
        Bolt) hoặc gọi điện đặt bàn nhà hàng, liên hệ khách sạn tại nước đó.
      </p>
      <hr />
    </>
  );
}

function SoSanhRoamingTongKet() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Tổng kết
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Thực tế, không có giải pháp mạng nào là thắng tuyệt đối, cả ba sản phẩm
        trên đều có lý do tồn tại và nhóm khách hàng riêng của mình.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Lời khuyên quan trọng từ chuyên gia:</b>
        {" Dù lựa chọn phương án nào, hãy "}
        <b>chuẩn bị và kích hoạt từ trước khi rời Việt Nam</b>. Việc để đến lúc
        xuống sân bay nước ngoài mới loay hoay tìm giải pháp internet vừa khiến
        bạn mất thời gian, vừa dễ rơi vào bẫy giá cao hoặc mua phải các gói cước
        không phù hợp với nhu cầu thực tế.
      </p>
      <br />
    </>
  );
}
