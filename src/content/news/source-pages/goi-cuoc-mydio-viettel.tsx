/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "@/components/news/article-layout";
import { newsArticles } from "@/constants/news/article-records";
/** Authored sections from archive 0135; keep historical copy and source irregularities. */
export default function GoiCuocMydioViettelArticle() {
  return (
    <ArticleLayout article={newsArticles["goi-cuoc-mydio-viettel"]}>
      <GoiCuocMydioViettelIntroduction />
      <GoiCuocMydioViettelKhoNoiDungDaDangTrenMyDioViettel />
      <GoiCuocMydioViettelUuDiemNoiBatCuaUngDungMyDioViettel />
      <GoiCuocMydioViettelCacGoiCuocMyDioMuaTrucTiepTrenWebUngDung />
      <GoiCuocMydioViettelCacGoiCuocViettelBundleMyDioMienPhiMyDioKhiDangKyGoiData />
      <GoiCuocMydioViettelSoSanhMuaGoiLeMyDioVsDungGoiBundleViettelMyDio />
      <GoiCuocMydioViettelCauHoiThuongGapVeMyDioViettel />
    </ArticleLayout>
  );
}
function GoiCuocMydioViettelIntroduction() {
  return (
    <>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>
          Bạn yêu thích sách nhưng không có thời gian đọc? Bạn muốn vừa học tập
          vừa giải trí khi lái xe, tập gym, làm việc nhà?
        </b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>MyDio Viettel</b>
        {" chính là lựa chọn tuyệt vời dành cho bạn — nền tảng "}
        <b>nghe sách nói &amp; truyện audio bản quyền hàng đầu</b>
        {" do "}
        <b>Viettel Telecom phát triển</b>, phục vụ nhu cầu học tập &amp; giải
        trí của người Việt.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Truy cập đa nền tảng:
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Web</b>
            {": "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              href="https://mydio.vn"
            >
              https://mydio.vn
            </a>
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Ứng dụng MyDio</b>
            {" trên "}
            <b>App Store</b>
            {" (iOS) và "}
            <b>Google Play</b>
            {" (Android)"}
          </p>
        </li>
      </ul>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="Mydio"
          loading="lazy"
          width="1200"
          height="630"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F6wIArbRIx41smv6WFLb3Si%2Fe68013eadfbafcf54624045150f32a5b%2FMydio.jpg&w=3840&q=75",
          )}
        />
      </div>
    </>
  );
}

function GoiCuocMydioViettelKhoNoiDungDaDangTrenMyDioViettel() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Kho Nội Dung Đa Dạng Trên MyDio Viettel
      </h2>
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
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Nội dung
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Chi tiết
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Sách nói</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Kinh doanh, kỹ năng sống, kinh tế, tôn giáo – tâm linh, sức
                    khỏe, văn hóa…
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Truyện audio</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Ngôn tình, trinh thám, kinh dị, cổ tích…
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Sách tóm tắt / review</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Nắm bắt tinh hoa sách bestseller chỉ trong 30 phút
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Nội dung miễn phí</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Hàng trăm đầu sách &amp; truyện miễn phí để trải nghiệm
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>100% nội dung bản quyền</b>
        {" — chất lượng âm thanh cao, giọng đọc chuyên nghiệp."}
      </p>
    </>
  );
}

function GoiCuocMydioViettelUuDiemNoiBatCuaUngDungMyDioViettel() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Ưu Điểm Nổi Bật Của Ứng Dụng MyDio Viettel
      </h2>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Kho nội dung phong phú</b>, liên tục cập nhật
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>AI gợi ý nội dung</b>
            {" cá nhân hóa theo sở thích"}
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Tạo thư viện cá nhân</b>
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Điều chỉnh tốc độ đọc</b>
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Hẹn giờ tắt</b>
            {" — tiện nghe sách trước khi ngủ"}
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Trải nghiệm mượt mà trên đa nền tảng</b>
            {" (Web, App)"}
          </p>
        </li>
      </ul>
    </>
  );
}

function GoiCuocMydioViettelCacGoiCuocMyDioMuaTrucTiepTrenWebUngDung() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Các Gói Cước MyDio Mua Trực Tiếp Trên Web &amp; Ứng Dụng
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Bạn có thể "}
        <b>mua trực tiếp các gói MyDio</b>
        {" trên:"}
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              href="https://mydio.vn"
            >
              https://mydio.vn
            </a>
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"App MyDio trên "}
            <b>iOS</b>
            {" hoặc "}
            <b>Android</b>
          </p>
        </li>
      </ul>
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
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Loại gói
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Giá cước
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Dung lượng
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"Gói "}
                    <b>2.000đ/ngày</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2.000đ/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    250MB sử dụng Mydio
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"Gói "}
                    <b>10.000đ/7 ngày</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10.000đ/7 ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.250MB sử dụng Mydio
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"Gói "}
                    <b>30.000đ/30 ngày</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30.000đ/30 ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2.500MB sử dụng Mydio
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"Gói "}
                    <b>5.000đ/ngày (combo)</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    5.000đ/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    250MB sử dụng Mydio
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    300MB truy cập Internet
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Cách mua gói</b>
        {": Đăng nhập "}
        <b>MyDio.vn</b>
        {" hoặc mở "}
        <b>App MyDio</b>
        {" → chọn “Mua gói” → thanh toán qua "}
        <b>Viettel Money, tài khoản Viettel, thẻ ngân hàng, ví điện tử</b>.
      </p>
    </>
  );
}

function GoiCuocMydioViettelCacGoiCuocViettelBundleMyDioMienPhiMyDioKhiDangKyGoiData() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>
          Các Gói Cước Viettel Bundle MyDio - Miễn Phí MyDio Khi Đăng Ký Gói
          Data
        </b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Ngoài việc mua lẻ gói MyDio, khách hàng "}
        <b>thuê bao Viettel</b>
        {" có thể đăng ký các "}
        <b>gói cước Viettel tích hợp MyDio (bundle)</b>
        {" để "}
        <b>nghe sách nói MyDio miễn phí không giới hạn</b>
        {", đồng thời có "}
        <b>data tốc độ cao</b>
        {" để sử dụng Internet."}
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
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cước
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Ưu đãi
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Đơn giá
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Đăng ký
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/VM80"
                    >
                      VM80
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí nghe toàn bộ MyDio
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    80.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (1 tháng)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=VM80 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=VM80 UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/VM100"
                    >
                      VM100
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí nghe toàn bộ MyDio
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    100.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (1 tháng)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=VM100 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=VM100 UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/VM130"
                    >
                      VM130
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    60GB (2GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí nghe toàn bộ MyDio
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    130.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (1 tháng)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=VM130 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=VM130 UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Ưu điểm khi dùng "}
        <b>gói bundle MyDio</b>:
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            Không cần mua thêm gói MyDio riêng
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Miễn phí toàn bộ dung lượng nghe MyDio</b>
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            Có data sử dụng Internet hàng ngày
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Giá rất tiết kiệm</b>, lợi hơn mua lẻ
          </p>
        </li>
      </ul>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="VM80 viettel"
          loading="lazy"
          width="800"
          height="469"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2Foc4O2KjB4i2pj3J88piQh%2F921a9c8af7d56c41696be8315dbfdd21%2FVM80_viettel.jpg&w=1920&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">VM80 viettel</p>
      </div>
    </>
  );
}

function GoiCuocMydioViettelSoSanhMuaGoiLeMyDioVsDungGoiBundleViettelMyDio() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        So Sánh: Mua Gói Lẻ MyDio vs Dùng Gói Bundle Viettel MyDio
      </h2>
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
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Tiêu chí
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Mua gói lẻ trên MyDio</b>
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>Dùng gói bundle Viettel MyDio</b>
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Nghe MyDio không giới hạn
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Có
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Có
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Data Internet kèm theo
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói 5.000đ/ngày có 300MB
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Data tốc độ cao mỗi ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Giá cước
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Từ 2.000đ/ngày đến 30.000đ/tháng
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Chỉ từ 80.000đ/tháng có data + MyDio
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Thanh toán
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Trên MyDio.vn, App MyDio
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Đăng ký qua SMS (Viettel)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Nếu bạn "}
        <b>là thuê bao Viettel</b>
        {", đăng ký "}
        <b>gói bundle (VM80, VM100, VM130)</b>
        {" sẽ "}
        <b>tiết kiệm và tiện dụng hơn nhiều</b>.
      </p>
    </>
  );
}

function GoiCuocMydioViettelCauHoiThuongGapVeMyDioViettel() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Câu Hỏi Thường Gặp về MyDio Viettel
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>MyDio Viettel là gì?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"→ Là nền tảng "}
        <b>nghe sách nói &amp; truyện audio bản quyền</b>
        {" do Viettel Media phát triển."}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Tôi có thể nghe MyDio trên thiết bị nào?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"→ MyDio hỗ trợ "}
        <b>Web, App trên iOS &amp; Android</b>.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Có thể mua gói MyDio không cần gói cước Viettel không?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"→ Có. Bạn có thể mua trực tiếp các gói MyDio trên "}
        <b>MyDio.vn</b>
        {" hoặc app MyDio."}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Gói cước Viettel nào miễn phí MyDio?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"→ Gói "}
        <b>VM80</b>
        {", "}
        <b>VM100</b>
        {", "}
        <b>VM130</b>
        {" sẽ "}
        <b>miễn phí nghe toàn bộ nội dung MyDio</b>
        {" khi đăng ký."}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Nên chọn mua gói lẻ MyDio hay đăng ký gói bundle Viettel?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"→ Nếu bạn là thuê bao Viettel, nên chọn "}
        <b>gói bundle</b>
        {" để có "}
        <b>data + MyDio miễn phí</b>, tiết kiệm hơn nhiều.
      </p>
      <br />
    </>
  );
}
