import { siteConfig } from "@/lib/site-config";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "@/components/news/article-layout";
import { newsArticles } from "@/constants/news/article-records";
/** Authored sections from archive 0131; keep historical copy and source irregularities. */
export default function GoiMangViettelArticle() {
  return (
    <ArticleLayout article={newsArticles["goi-mang-viettel"]}>
      <GoiMangViettelIntroduction />
      <GoiMangViettelGoi5GTocDoCao />
      <GoiMangViettelGoiMangViettel4GLuaChonThongMinhChoMoiNhuCauSuDung />
      <GoiMangViettelGoiCuocMienPhiMangXaHoi />
      <GoiMangViettelGoiMangViettelTheoNgayLinhHoatChoNhuCauInternetTamThoi />
      <GoiMangViettelGoiCuocTongHopTietKiemVaTienLoiChoMoiDoiTuong />
    </ArticleLayout>
  );
}
function GoiMangViettelIntroduction() {
  return (
    <>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <i>
          Bảng giá gói mạng Viettel 2025 chi tiết nhất. 5G tốc độ cao, miễn phí
          mạng xã hội, gói ngày linh hoạt. Click ngay để tìm gói cước phù hợp
          với nhu cầu của bạn.
        </i>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Muốn tiết kiệm cước phí nhưng vẫn đảm bảo chất lượng mạng? Viettel hiện
        có hàng loạt gói cước ưu đãi &quot;cực hời&quot; - data dồi dào, giá cả
        hợp lý, phù hợp từ sinh viên đến dân văn phòng lẫn các bạn trẻ học sinh
        sinh viên. Cùng tìm hiểu những gói mạng Viettel giá &quot;mềm&quot; nhất
        thị trường sau đây để dễ dàng lựa chọn cho nhu cầu của bạn.
      </p>
    </>
  );
}

function GoiMangViettelGoi5GTocDoCao() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>Gói 5G tốc độ cao</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Kỷ nguyên 5G đã chính thức bùng nổ tại Việt Nam và Viettel tiếp tục
        khẳng định vị thế tiên phong với loạt gói mạng Viettel 5G siêu tốc độ.
        Các gói cước 5G được thiết kế với dung lượng data khủng từ 4GB đến 20GB
        mỗi ngày, đáp ứng hoàn hảo cho nhu cầu streaming, gaming online hay làm
        việc từ xa. Điểm nổi bật của dòng gói mạng Viettel này là khả năng kết
        nối siêu nhanh, độ trễ cực thấp,...
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
                    Mã Gói
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Dung Lượng
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Tính Năng Đặc Biệt
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Giá Cước
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (VNĐ/tháng)
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G135"
                    >
                      <u>5G135</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cơ bản
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    135.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G150"
                    >
                      <u>5G150</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cơ bản
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G160B"
                    >
                      <u>5G160B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    160.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G180B"
                    >
                      <u>5G180B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    180.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G230B"
                    >
                      <u>5G230B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    8GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    230.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G280B"
                    >
                      <u>5G280B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    280.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G330B"
                    >
                      <u>5G330B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    12GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    330.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G380B"
                    >
                      <u>5G380B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    15GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    380.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G480B"
                    >
                      <u>5G480B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    20GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    480.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G135N"
                    >
                      <u>5G135N</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cơ bản
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    135.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G150N"
                    >
                      <u>5G150N</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    8GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cơ bản
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5GLQ190"
                    >
                      <u>5GLQ190</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày Liên Quân
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    190.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5GLQ210"
                    >
                      <u>5GLQ210</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày Liên Quân
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    210.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G200C"
                    >
                      <u>5G200C</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G300C"
                    >
                      <u>5G300C</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    300.000đ
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="Gói mạng Viettel 5G lướt mạng mượt mà, không độ trễ"
          loading="lazy"
          width="1170"
          height="500"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F1MRzhDqElkU70Aeir4se2C%2F857ff989d072c24ec4369b488c6e3728%2Fviettel-5g-x10-toc-do.png&w=3840&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">
          Gói mạng Viettel 5G lướt mạng mượt mà, không độ trễ
        </p>
      </div>
    </>
  );
}

function GoiMangViettelGoiMangViettel4GLuaChonThongMinhChoMoiNhuCauSuDung() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>Gói mạng Viettel 4G- Lựa chọn thông minh cho mọi nhu cầu sử dụng</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bên cạnh công nghệ 5G hiện đại, Viettel vẫn duy trì và phát triển mạnh
        mẽ hệ thống gói mạng 4G với chất lượng vượt trội. Mỗi gói cước đều được
        tối ưu hóa để mang lại trải nghiệm internet mượt mà, ổn định trên toàn
        quốc.
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
                    Mã Gói
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Dung Lượng
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Giá Cước
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (VNĐ/tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Đặc Điểm
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href={siteConfig.url("/goi-cuoc-viettel/SD70")}
                    >
                      <u>SD70</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    70.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cơ bản tiết kiệm
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/SD90"
                    >
                      <u>SD90</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.5GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói phổ thông
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/SD120"
                    >
                      SD120
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cơ bản nâng cao
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/SD135"
                    >
                      SD135
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    5GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    135.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cao cấp
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/SD150"
                    >
                      SD150
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cao cấp
                  </p>
                </td>
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
                    1GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    80.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói đặc biệt
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

function GoiMangViettelGoiCuocMienPhiMangXaHoi() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>Gói cước miễn phí mạng xã hội</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Với các gói mạng Viettel dành riêng cho mạng xã hội, bạn có thể thoải
        mái lướt TikTok, xem YouTube hay nhắn tin qua Messenger mà không lo ngại
        về việc tiêu tốn dung lượng data thông thường - giải pháp hoàn hảo cho
        gen Z.
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
                    Mã Gói
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Data Đi Kèm
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Giá Cước
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (VNĐ/tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Loại Mạng
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/MXH100"
                    >
                      <u>MXH100</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    100.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4G
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/MXH120"
                    >
                      <u>MXH120</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4G
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/MXH150"
                    >
                      <u>MXH150</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.5GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4G
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5GMXH200"
                    >
                      <u>5GMXH200</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    5G
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5GMXH230"
                    >
                      <u>5GMXH230</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    230.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    5G
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="Mạng 4G của Viettel được đông đảo khách lựa chọn hiện nay"
          loading="lazy"
          width="1600"
          height="900"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F6d1RktP17660vxALLW63oQ%2Fdc62e7cfdefa3492ba0fc95e1447b22b%2F4g-khong-gioi-han_2.png&w=3840&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">
          Mạng 4G của Viettel được đông đảo khách lựa chọn hiện nay
        </p>
      </div>
    </>
  );
}

function GoiMangViettelGoiMangViettelTheoNgayLinhHoatChoNhuCauInternetTamThoi() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>
          Gói mạng Viettel theo ngày linh hoạt cho nhu cầu internet tạm thời
        </b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Các gói mạng Viettel theo ngày cung cấp dung lượng data lớn trong thời
        gian ngắn, phục vụ tốt nhu cầu internet cho khách hàng cần sử dụng trong
        khoảng thời gian cụ thể như du lịch, công tác hoặc các sự kiện đặc biệt.
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
                    Mã Gói
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Dung lượng
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Giá Cước
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Thời gian sử dụng
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/ST15K"
                    >
                      <u>ST15K</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3GB
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    15.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/MI20K"
                    >
                      <u>MI20K</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    20.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    5 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/ST30K"
                    >
                      <u>ST30K</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    7GB
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    7 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/EST30"
                    >
                      <u>EST30</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    7GB
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    7 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/V30X"
                    >
                      <u>V30X</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3.5GB
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    7 ngày
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/MI50K"
                    >
                      <u>MI50K</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    5GB
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    7 ngày
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="Các gói mạng hằng ngày linh hoạt theo nhu cầu siêu tiết kiệm"
          loading="lazy"
          width="800"
          height="400"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F11XEsb9y6FhXFRkOqdPuwj%2Fef829c02a9d886568dfe3a568e4f09af%2Fgoi-cuoc-viettel-money.png&w=1920&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">
          Các gói mạng hằng ngày linh hoạt theo nhu cầu siêu tiết kiệm
        </p>
      </div>
    </>
  );
}

function GoiMangViettelGoiCuocTongHopTietKiemVaTienLoiChoMoiDoiTuong() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>Gói cước tổng hợp tiết kiệm và tiện lợi cho mọi đối tượng</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Tối ưu hóa chi phí viễn thông đã trở thành mối quan tâm hàng đầu của
        người tiêu dùng. Do đó, Viettel đã phát triển dòng sản phẩm gói cước
        tổng hợp nhằm đáp ứng nhu cầu đa dạng của khách hàng với tiêu chí siêu
        tiết kiệm và tiện lợi tối đa.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Các gói cược cung cấp dung lượng data phù hợp với mức giá cạnh tranh,
        đồng thời tích hợp các tính năng bổ sung như miễn phí cuộc gọi nội mạng
        và ứng dụng đặc biệt. Ví dụ gói TRE60 và TRE90 dành riêng cho trẻ em,
        phụ huynh có thể yên tâm quản lý việc sử dụng internet của con em mình
        với chi phí hợp lý nhất.
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
                    Mã Gói
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Dung lượng
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Giá Cước
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (VNĐ/tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Tính Năng Đặc Biệt
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
                      href="/goi-cuoc-viettel/ST60N"
                    >
                      <u>ST60N</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    60.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Dành cho sinh viên
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/ST70K"
                    >
                      <u>ST70K</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    500MB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    70.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói tiết kiệm
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/ST90N"
                    >
                      <u>ST90N</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Dung lượng cao
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/TRE90"
                    >
                      <u>TRE90</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Dành cho sinh viên
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/V120N"
                    >
                      <u>V120N</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí nội mạng
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/V120C"
                    >
                      <u>V120C</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí nội mạng
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/ST120K"
                    >
                      <u>ST120K</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cơ bản
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/V150N"
                    >
                      <u>V150N</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí nội mạng
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/V150C"
                    >
                      <u>V150C</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí nội mạng
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/ST150K"
                    >
                      <u>ST150K</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Gói cơ bản
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/V200C"
                    >
                      <u>V200C</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí nội mạng
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Với bảng giá gói mạng Viettel mới nhất, khách hàng có thể dễ dàng lựa
        chọn được gói cước phù hợp nhất với nhu cầu và ngân sách của mình. Với
        cam kết chất lượng dịch vụ hàng đầu và mạng lưới phủ sóng rộng khắp, sử
        dụng mạng Viettel chắc chắn sẽ mang đến trải nghiệm kết nối tuyệt vời
        cho mọi nhu cầu.
      </p>
      <br />
    </>
  );
}
