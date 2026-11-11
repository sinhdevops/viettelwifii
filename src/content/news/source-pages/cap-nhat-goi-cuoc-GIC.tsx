import { siteConfig } from "@/lib/site-config";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "@/components/news/article-layout";
import { newsArticles } from "@/constants/news/article-records";
/** Authored sections from archive 0129; keep historical copy and source irregularities. */
export default function CapNhatGoiCuocGICArticle() {
  return (
    <ArticleLayout article={newsArticles["cap-nhat-goi-cuoc-GIC"]}>
      <CapNhatGoiCuocGICIntroduction />
      <CapNhatGoiCuocGICTaiSaoGoiGICViettelLaiGaySot />
      <CapNhatGoiCuocGICGICViettelPhuHopVoiAi />
      <CapNhatGoiCuocGICCapNhatChiTietCacGoiCuocGICViettelMoiNhat2026 />
      <CapNhatGoiCuocGICUuDaiDacBietDanhChoCacGoiCuocGIC />
      <CapNhatGoiCuocGICCachDangKyGoiGICViettelNhanhNhat />
      <CapNhatGoiCuocGICNhungLuuYKhiSuDung />
    </ArticleLayout>
  );
}
function CapNhatGoiCuocGICIntroduction() {
  return (
    <>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bạn là học sinh, sinh viên và đang tìm kiếm một gói cước siêu tiết kiệm,
        phù hợp với nhu cầu sử dụng của mình? Đừng bỏ lỡ GIC Viettel với giá
        cước chỉ từ 30.000đ/tháng.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <i>{"Khám phá thêm thông tin chi tiết về "}</i>
        <i>
          <b>các gói cước, khuyến mại và dịch vụ Viettel</b>
        </i>
        <i>{" trên "}</i>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/"
        >
          <i>{"Viettel "}</i>
        </a>
        <i>
          – website cập nhật chính xác mọi thông tin về các gói data, internet.
        </i>
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="Cập nhật bảng giá chi tiết các gói GIC30N, GIC70N, GIC90N, GIC125N của Viettel, chỉ từ 30.000đ/tháng có ngay các ưu đãi cực lớn: gọi nội mạng, ngoại mạng, data, lướt mạng xã hội Tiktok, Youtube, Facebook, Instagram và Threads."
          loading="lazy"
          width="900"
          height="564"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F4ZzH0Au1neBrBbBRvFGDKF%2Faf35fee15ce5a548c337a6dc755f7b9c%2Fviettelup1.jpeg&w=1920&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">
          Cập nhật bảng giá chi tiết các gói GIC30N, GIC70N, GIC90N, GIC125N của
          Viettel, chỉ từ 30.000đ/tháng có ngay các ưu đãi cực lớn: gọi nội
          mạng, ngoại mạng, data, lướt mạng xã hội Tiktok, Youtube, Facebook,
          Instagram và Threads.
        </p>
      </div>
    </>
  );
}

function CapNhatGoiCuocGICTaiSaoGoiGICViettelLaiGaySot() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Tại sao gói GIC Viettel lại gây sốt?
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Ra mắt từ năm 2023, với thông điệp "}
        <b>“Đẫm data. Đậm cá tính”</b>
        {
          ", hệ gói GIC đánh dấu bước tiến mới của Viettel trong hành trình kiến tạo các sản phẩm viễn thông "
        }
        <b>cá nhân hóa</b>
        {
          " cho thế hệ trẻ Việt Nam. Thay vì các gói cước đại trà, GIC tập trung vào nhu cầu và sở thích riêng biệt của người trẻ, giúp bạn tự do lựa chọn gói cước phù hợp nhất với phong cách sống của mình."
        }
      </p>
    </>
  );
}

function CapNhatGoiCuocGICGICViettelPhuHopVoiAi() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        GIC Viettel phù hợp với ai?
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Dòng gói cước này được thiết kế dành riêng cho khách hàng trẻ trong độ tuổi "
        }
        <b>từ 6 đến 22 tuổi</b>
        {
          " (HSSV) có cường độ sử dụng smartphone cao, online liên tục và muốn một gói cước được thiết kế theo sở thích cá nhân: học tập, giải trí, mạng xã hội hay chơi game. "
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Với mức giá linh hoạt từ 30.000đ – 125.000đ, GIC giúp các bạn dễ dàng
        chọn gói vừa túi tiền nhưng vẫn hưởng đặc quyền data, gọi và ưu đãi hấp
        dẫn.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Đặc biệt, người dùng có thể tự do thiết kế lại gói cước mỗi tháng theo
        nhu cầu thực tế bằng các ưu đãi topping siêu lạ, không bị gò bó, không
        lãng phí, luôn phù hợp với nhịp sống năng động của giới trẻ.
      </p>
      <hr />
    </>
  );
}

function CapNhatGoiCuocGICCapNhatChiTietCacGoiCuocGICViettelMoiNhat2026() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        {"Cập nhật chi tiết các "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/goi-cuoc-gic")}
        >
          gói cước GIC
        </a>
        {" Viettel mới nhất 2026"}
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Để giúp bạn dễ dàng lựa chọn gói cước phù hợp với túi tiền và nhu cầu, dưới đây là bảng tổng hợp chi tiết các phiên bản của dòng "
        }
        <b>{"GIC Viettel "}</b>
        {"bao gồm "}
        <b>GIC30N</b>
        {", "}
        <b>GIC70N</b>
        {", "}
        <b>GIC90N</b>
        {", "}
        <b>GIC125N</b>. Mỗi gói đều cung cấp tối đa tiện ích của 1 loại nhu cầu
        đặc thù: gọi nội mạng, ngoại mạng, data, lướt mạng xã hội Tiktok,
        Youtube, Facebook, Instagram và Threads. Hãy cùng xem gói cước nào phù
        hợp nhất cho điện thoại của bạn nhé!
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <i>{"Đọc thêm: "}</i>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/tin-tuc/goi-cuoc-viettel-cho-sinh-vien"
        >
          <i>Gói cước Viettel tốt nhất dành cho sinh viên</i>
        </a>
      </p>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-news-table-scroll"
          role="region"
          aria-label="Bảng nội dung bài viết"
          tabIndex={0}
        >
          <table className="border-separate border-spacing-0 rounded-md border border-t border-r border-b border-l border-black">
            <tbody>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Tên gói cước</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Giá cước</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Ưu đãi</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Thời hạn</b>
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>GIC30N</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 200 phút gọi nội mạng Viettel (tối đa 10 phút cho mỗi cuộc
                    gọi)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 10 phút gọi ngoại mạng
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b></b>
                    <b>GIC70N</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    70.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 1GB data mỗi ngày truy cập internet
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí sách, truyện trên Mydio
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>GIC90N</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 1GB data mỗi ngày truy cập internet
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí Facebook, Threads, Instagram &amp; TikTok
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí sách, truyện trên Mydio
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>GIC125N</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    125.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 7GB data mỗi ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí sách, truyện trên Mydio
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function CapNhatGoiCuocGICUuDaiDacBietDanhChoCacGoiCuocGIC() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Ưu đãi đặc biệt dành cho các gói cước GIC
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Nếu như bạn thường xuyên nhắn tin và gọi thoại nội mạng Viettel, cần bổ sung SMS, data hoặc gọi thoại ngoài gói chính. Vậy thì đi kèm với các "
        }
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/goi-cuoc-gic")}
        >
          gói cước GIC
        </a>
        , Viettel tặng các ưu đãi topping đơn giản với chi phí thấp. Phù hợp cho
        liên lạc cá nhân, công việc hoặc khi cần nhiều data hơn một chút nhưng
        không muốn phải trả phí quá cao.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <i>
          <b>Ưu đãi tặng kèm đồng giá 10.000 đồng</b>
        </i>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Khách hàng GIC sẽ được đăng ký thêm loạt gói topping đồng giá 10.000
        đồng sử dụng trong 30 ngày: 2GB data, 50 phút thoại, miễn phí
        Facebook/Threads/Instagram, miễn phí TikTok và miễn phí YouTube.
      </p>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-news-table-scroll"
          role="region"
          aria-label="Bảng nội dung bài viết"
          tabIndex={0}
        >
          <table className="border-separate border-spacing-0 rounded-md border border-t border-r border-b border-l border-black">
            <tbody>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Tên gói ưu đãi tặng kèm</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Giá cước</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Ưu đãi</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Thời hạn</b>
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>ST10K</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 1.000 SMS nội mạng Viettel
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>V10K</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 50 phút thoại nội mạng
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>MT10T</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 2GB data sử dụng trong 30 ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>TIK10</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí data truy cập TikTok (Dung lượng tối đa 50GB
                    trong 30 ngày)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>YT10</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí data truy cập YouTube (Dung lượng tối đa 50GB
                    trong 30 ngày)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>FB10</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí data truy cập Facebook
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí Threads
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí Instagram
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (Dung lượng tối đa 50GB trong 30 ngày)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30 ngày
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <i>
          <b>Quà tặng hàng tháng</b>
        </i>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Khách hàng sẽ được gửi tặng quà mỗi tháng (*), gồm một trong năm ưu đãi:
        10.000 đồng tài khoản khuyến mại, 2GB Data, miễn phí
        Facebook/Threads/Instagram, miễn phí TikTok, miễn phí YouTube
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <i>
          <b>Nhiều ưu đãi khác biệt</b>
        </i>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Kho số riêng: Khách hàng mua SIM GIC trên website "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://gic.viettel.vn/"
        >
          <b>gic.viettel.vn</b>
        </a>
        {
          " được lựa chọn số từ kho số riêng đầu 09xx, 08xx với quy mô 100.000 số."
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Chính sách chăm sóc khách hàng linh hoạt theo chu kỳ: Khi đăng ký/gia
        hạn các gói GIC chu kỳ 3/6/12 tháng, khách hàng được nhận voucher viễn
        thông và voucher đối tác (20.000đ hoặc 30.000đ).
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        (*): Áp dụng cho khách hàng có mức tiêu dùng từ 70.000 đồng/tháng
      </p>
      <hr />
    </>
  );
}

function CapNhatGoiCuocGICCachDangKyGoiGICViettelNhanhNhat() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Cách đăng ký gói GIC Viettel nhanh nhất
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Dưới đây là các cách thức đăng ký gói cước GIC tiện lợi, ai cũng có thể
        thực hiện:
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Cách 1:</b>
        {" Đăng ký qua tin nhắn SMS tới đầu số 290 "}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Cú pháp: "}
        <b>[Gói cước] UP</b>
        {" gửi "}
        <b>290</b> <b>hoặc [Gói cước] gửi 191</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Ví dụ: "}
        <b>GIC125N UP</b>
        {" gửi "}
        <b>290</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Cách 2:</b>
        {" Đăng ký qua app "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://viettel.vn/app"
        >
          My Viettel
        </a>
      </p>
      <hr />
    </>
  );
}

function CapNhatGoiCuocGICNhungLuuYKhiSuDung() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Những lưu ý khi sử dụng
      </h2>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Gói cước có tính năng "}
            <b>tự động gia hạn</b>
            {" sau mỗi chu kỳ (30 ngày)."}
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Để kiểm tra dung lượng còn lại: Soạn "}
            <b>
              <code>KTTK</code>
            </b>
            {" gửi "}
            <b>
              <code>191</code>
            </b>
            .
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Để hủy gói khi không còn nhu cầu: Soạn "}
            <b>
              <code>HUY</code>
            </b>
            {" gửi "}
            <b>
              <code>191</code>
            </b>
            .
          </p>
        </li>
      </ul>
      <br />
    </>
  );
}
