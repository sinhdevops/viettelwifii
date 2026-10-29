import { siteConfig } from "@/lib/site-config";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "@/components/news/article-layout";
import { newsArticles } from "@/constants/news/article-records";
/** Authored sections from archive 0124; keep historical copy and source irregularities. */
export default function GoiCuocViettelThang32026Article() {
  return (
    <ArticleLayout article={newsArticles["goi-cuoc-viettel-thang-3-2026"]}>
      <GoiCuocViettelThang32026Introduction />
      <GoiCuocViettelThang32026CapNhatGoiCuocViettelKSDocQuyenChiTietGoiKS110KS145KS20VaUuDaiTrenViettelMoney />
      <GoiCuocViettelThang32026GoiCuocDataViettelReNhat2026 />
      <GoiCuocViettelThang32026GoiCuoc5GViettelSieuTocDoPhuKhap63Tinh />
      <GoiCuocViettelThang32026Goi4GViettelPhoBienGiaTotNhieuData />
      <GoiCuocViettelThang32026GoiMangXaHoiMienPhiYouTubeTikTokFacebook />
      <GoiCuocViettelThang32026GoiCuocComboDataThoaiGoiMienPhi />
      <GoiCuocViettelThang32026GoiCuocNgayViettel />
      <GoiCuocViettelThang32026GoiCuocThangDanhChoThueBaoTraSauDangKyLienHe18008098MienPhi />
      <GoiCuocViettelThang32026HuongDanDangKyGoiCuoc4G5GViettel />
    </ArticleLayout>
  );
}
function GoiCuocViettelThang32026Introduction() {
  return (
    <>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Viettel đã chính thức cập nhật một số gói cước nổi bật trong tháng 3/2026 nhằm đáp ứng tối đa nhu cầu truy cập Internet tốc độ cao của người dùng. "
        }
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="cap-nhat-goi-cuoc-4g-5g-thang-3-2026"
          loading="lazy"
          width="800"
          height="469"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F5k7CxcNVFRN1RV5SnhqgNf%2Febff85572328370facb93d62a04d5b5d%2F3.jpg&w=1920&q=75",
          )}
        />
      </div>
    </>
  );
}

function GoiCuocViettelThang32026CapNhatGoiCuocViettelKSDocQuyenChiTietGoiKS110KS145KS20VaUuDaiTrenViettelMoney() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Cập Nhật Gói Cước Viettel KS Độc Quyền: Chi Tiết Gói KS110, KS145, KS20
        và Ưu Đãi Trên Viettel Money
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Đây là tổng hợp toàn bộ các gói cước Viettel KS độc quyền, áp dụng cho thuê bao Viettel đăng ký thông qua ứng dụng "
        }
        <b>Viettel Money</b>.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Đặc biệt, khi đăng ký các gói cước KS (như "}
        <b>KS110, KS145, KS20</b>
        {"), bạn sẽ nhận được "}
        <b>ƯU ĐÃI GIẢM GIÁ 5%</b>
        {
          " trực tiếp vào đơn giá. Đây là lựa chọn tiết kiệm và tiện lợi cho người dùng data Viettel đang tìm kiếm gói cước "
        }
        <b>KS110</b>
        {" hay "}
        <b>KS145</b>
        {" với data khủng."}
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
                      href="/goi-cuoc-viettel/KS6H"
                    >
                      KS6H
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3GB sử dụng trong 6 giờ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://km.vtmoney.vn/314y/homeapp"
                    >
                      Viettel Money
                    </a>
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
                      href="/goi-cuoc-viettel/KS8"
                    >
                      KS8
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.2GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    8.000đ
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://km.vtmoney.vn/314y/homeapp"
                    >
                      Viettel Money
                    </a>
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
                      href="/goi-cuoc-viettel/KS12"
                    >
                      KS12
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2.5GB/ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    11.400đ (giá gốc 12.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://km.vtmoney.vn/314y/homeapp"
                    >
                      Viettel Money
                    </a>
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
                      href="/goi-cuoc-viettel/KS12"
                    >
                      KS20
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4GB/3 ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    19.000đ (giá gốc 20.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://km.vtmoney.vn/314y/homeapp"
                    >
                      Viettel Money
                    </a>
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
                      href="/goi-cuoc-viettel/KS36"
                    >
                      KS36
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    8GB/7 ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    34.200đ (giá gốc 36.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://km.vtmoney.vn/314y/homeapp"
                    >
                      Viettel Money
                    </a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
                      href="/goi-cuoc-viettel/KS110"
                    >
                      KS110
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    36GB/30 ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    104.500đ (giá gốc 110.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://km.vtmoney.vn/314y/homeapp"
                    >
                      Viettel Money
                    </a>
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
                      href="/goi-cuoc-viettel/KS145"
                    >
                      KS145
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    66GB/30 ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    137.800đ (giá gốc 140.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://km.vtmoney.vn/314y/homeapp"
                    >
                      Viettel Money
                    </a>
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
                      href="/goi-cuoc-viettel/KS165"
                    >
                      KS165
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90GB/30 ngày
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    156.800đ (giá gốc 165.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://km.vtmoney.vn/314y/homeapp"
                    >
                      Viettel Money
                    </a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        Cập nhật chính sách mới của gói cước MXH120 và MXH150: FREE DATA Truy
        Cập TikTok, Facebook, Youtube (2026)
      </h3>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Viettel vừa cập nhật chính sách "}
        <b>Gói cước MXH120 và MXH150</b>
        {" với ưu đãi cực kỳ hấp dẫn: "}
        <b>Miễn phí data truy cập không giới hạn</b>
        {
          " các ứng dụng phổ biến nhất hiện nay như TikTok, YouTube, Facebook và nhắn tin Messenger. Đây là giải pháp data toàn diện, giúp bạn tiết kiệm chi phí tối đa."
        }
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
                    Ưu đãi hiện tại
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Ưu đãi điều chỉnh
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
                      href="/goi-cuoc-viettel/MXH120"
                    >
                      MXH120
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 10 phút/cuộc gọi nội mạng và 30 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50GB TikTok + 50GB Youtube + 50GB Facebook &amp; nhắn tin
                    Messenger
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 10 phút/cuộc gọi nội mạng và 30 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>
                      Miễn phí data truy cập TikTok, Youtube, Facebook &amp;
                      nhắn tin Messenger
                    </b>
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
                      MXH150
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 10 phút/cuộc gọi nội mạng và 50 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50GB TikTok + 50GB Youtube + 50GB Facebook &amp; nhắn tin
                    Messenger
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 10 phút/cuộc gọi nội mạng và 50 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>
                      Miễn phí data truy cập TikTok, Youtube, Facebook &amp;
                      nhắn tin Messenger
                    </b>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Giải thích thay đổi:</b>
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Ưu đãi mới</b>
            {" chuyển từ tặng thêm 50GB mỗi nền tảng → sang "}
            <b>miễn phí truy cập không giới hạn</b>
            {" ứng dụng TikTok, YouTube, Facebook và Messenger."}
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Giúp người dùng "}
            <b>tiết kiệm hơn</b>
            {" và "}
            <b>truy cập không giới hạn</b>
            {" các nền tảng mạng xã hội yêu thích."}
          </p>
        </li>
      </ul>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>Cách đăng ký nhanh:</b>
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>MXH120</b>
            {": Soạn "}
            <b>MXH120 UP gửi 290</b>
            {" hoặc MXH120 gửi "}
            <b>{"191 "}</b>
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>MXH150</b>
            {": Soạn "}
            <b>MXH150 UP gửi 290</b>
            {" hoặc MXH150 gửi "}
            <b>191</b>
          </p>
        </li>
      </ul>
      <hr />
    </>
  );
}

function GoiCuocViettelThang32026GoiCuocDataViettelReNhat2026() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Gói Cước Data Viettel Rẻ Nhất 2026
      </h2>
      <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
        {"Dưới đây là các gói cước được sử dụng phổ biến với ưu đãi cực tốt: "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/SD90"
        >
          SD90
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/SD135"
        >
          SD135
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/5G135"
        >
          5G135
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/5G150"
        >
          5G150
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/MXH100"
        >
          MXH100
        </a>
        {" và "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/MXH120"
        >
          MXH120
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
                      href="/goi-cuoc-viettel/SD90"
                    >
                      SD90
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=SD90 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=SD90 UP"
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
                      href="/goi-cuoc-viettel/SD135"
                    >
                      SD135
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150GB (5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 Basic
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    135.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=SD135 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=SD135 UP"
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
                      href="/goi-cuoc-viettel/5G135"
                    >
                      5G135
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120GB (4GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    20GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    135.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G135 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G135 UP"
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
                      href="/goi-cuoc-viettel/5G150"
                    >
                      5G150
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    180GB (6GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G150 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G150 UP"
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
                      href="/goi-cuoc-viettel/MXH100"
                    >
                      MXH100
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí data truy cập TikTok, Youtube, Facebook, Messenger
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    100.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=MXH100 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=MXH100 UP"
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
                      href="/goi-cuoc-viettel/MXH120"
                    >
                      MXH120
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 10 phút/cuộc gọi nội mạng và 30 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí data truy cập TikTok, Youtube, Facebook &amp; nhắn
                    tin Messenger
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=MXH120 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=MXH120 UP"
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
                      href="/goi-cuoc-viettel/V200B"
                    >
                      V200B
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    240GB (8GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 20 phút/cuộc gọi nội mạng và 100 phút gọi ngoại
                    mạng
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=V200B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=V200B UP"
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
    </>
  );
}

function GoiCuocViettelThang32026GoiCuoc5GViettelSieuTocDoPhuKhap63Tinh() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Gói Cước 5G Viettel – Siêu Tốc Độ, Phủ Khắp 63 Tỉnh
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Các gói cước 5G Viettel vẫn có thể sử dụng trên hạ tầng 4G và hoạt động
        tốt trên mạng 4G tại những khu vực chưa có sóng 5G.
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
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ (tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <br />
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G135"
                    >
                      5G135
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>4GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 20GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    135.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G135 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G135 UP"
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
                      href="/goi-cuoc-viettel/5G135N"
                    >
                      5G135N
                    </a>
                    {" (mới)"}
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>6GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 20GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    135.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G135N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G135N UP"
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
                      href="/goi-cuoc-viettel/5G150"
                    >
                      5G150
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>6GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 30GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G150 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G150 UP"
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
                      href="/goi-cuoc-viettel/5G150N"
                    >
                      5G150N
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>8GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 30GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G150N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G150N UP"
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
                      href="/goi-cuoc-viettel/5G160B"
                    >
                      5G160B
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>4GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi
                    ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 20GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    160.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G160B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G160B UP"
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
                      href="/goi-cuoc-viettel/5G180B"
                    >
                      5G180B
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>6GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 10 phút và 100 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 30GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    180.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G180B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G180B UP"
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
                      href="/goi-cuoc-viettel/5G230B"
                    >
                      5G230B
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>8GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 50GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    230.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G230B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G230B UP"
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
                      href="/goi-cuoc-viettel/5G280B"
                    >
                      5G280B
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>10GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 20 phút và 200 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 70GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    280.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G280B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G280B UP"
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
                      href="/goi-cuoc-viettel/5G330B"
                    >
                      5G330B
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>12GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 100GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    330.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G330B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G330B UP"
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
                      href="/goi-cuoc-viettel/5G380B"
                    >
                      5G380B
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>15GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 150GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    380.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G380B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G380B UP"
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
                      href="/goi-cuoc-viettel/5G480B"
                    >
                      5G480B
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>20GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    480.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G480B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G480B UP"
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
        * Gói cước 5G135N và 5G150N áp dụng cho thuê bao trả trước Viettel kích
        hoạt từ 01/01/2025 và thuê bao nằm trong danh sách.
      </p>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        <b>Gói cước 5G dành cho game thủ Liên Quân Mobile:</b>
      </h3>
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
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ (tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <br />
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5GLQ190"
                    >
                      5GLQ190
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>6GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 2GB/ngày chơi Liên Quân
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    190.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5GLQ190 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5GLQ190 UP"
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
                      href="/goi-cuoc-viettel/5GLQ210"
                    >
                      5GLQ210
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>6GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 2GB/ngày chơi Liên Quân
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 20 phút và 100 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 30GB Mybox
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    210.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5GLQ210 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5GLQ210 UP"
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
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        <b>Gói cước 5G Mạng xã hội:</b>
      </h3>
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
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ (tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <br />
                </th>
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
                      5GMXH200
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 10 phút và 30 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>- 50GB Facebook &amp; nhắn tin Messenger</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>- 50GB TikTok</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>- 50GB Youtube</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5GMXH200 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5GMXH200 UP"
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
                      href="/goi-cuoc-viettel/5GMXH230"
                    >
                      5GMXH230
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 10 phút và 50 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>- 50GB Facebook &amp; nhắn tin Messenger</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>- 50GB TikTok</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>- 50GB Youtube</b>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    230.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5GMXH230 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5GMXH230 UP"
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
        *Hết 50GB truy cập theo ứng dụng sẽ trừ tiếp lưu lượng của gói cước (nếu
        còn)
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Gói cước 5G nhiều phút gọi:</b>
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
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ (tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <br />
                </th>
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
                      5G200C
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>6GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 Basic 4K
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G200C UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G200C UP"
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
                      href="/goi-cuoc-viettel/5G300C"
                    >
                      5G300C
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <b>10GB/ngày</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại
                    mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 Basic 4K
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G300C UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G300C UP"
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
    </>
  );
}

function GoiCuocViettelThang32026Goi4GViettelPhoBienGiaTotNhieuData() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Gói 4G Viettel Phổ Biến – Giá Tốt, Nhiều Data
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
                      href={siteConfig.url("/goi-cuoc-viettel/SD70")}
                    >
                      SD70
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    70.000đ (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=SD70 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=SD70 UP"
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
                      href="/goi-cuoc-viettel/SD90"
                    >
                      SD90
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90.000đ (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=SD90 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=SD90 UP"
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
                      href="/goi-cuoc-viettel/SD120"
                    >
                      SD120
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    60GB (2GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 Basic
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=SD120 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=SD120 UP"
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
                      href="/goi-cuoc-viettel/SD135"
                    >
                      SD135
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150GB (5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 Basic
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    135.000đ (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=SD135 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=SD135 UP"
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
                      href="/goi-cuoc-viettel/SD150"
                    >
                      SD150
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90GB (3GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 Basic
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ (30 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=SD150 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=SD150 UP"
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
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
            Gói Data Kèm Ưu Đãi TV360 – Giải Trí Không Giới Hạn
          </h2>
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
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ (tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <br />
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/TV75K"
                    >
                      TV75K
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    75.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=TV75K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=TV75K UP"
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
                      href="/goi-cuoc-viettel/TV90C"
                    >
                      TV90C
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi
                    ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=TV90C UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=TV90C UP"
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
                      href="/goi-cuoc-viettel/TV120C"
                    >
                      TV120C
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.5GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi
                    ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=TV120C UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=TV120C UP"
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
                      href="/goi-cuoc-viettel/TV125K"
                    >
                      TV125K
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    125.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=TV125K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=TV125K UP"
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
    </>
  );
}

function GoiCuocViettelThang32026GoiMangXaHoiMienPhiYouTubeTikTokFacebook() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Gói Mạng Xã Hội – Miễn Phí YouTube, TikTok, Facebook
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Dưới đây là danh sách "}
        <b>các gói miễn phí mạng xã hội Viettel</b>
        {
          " mới nhất, bạn có thể tham khảo và lựa chọn gói phù hợp với nhu cầu sử dụng hàng tháng. "
        }
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
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ (tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <br />
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/MXH100"
                    >
                      MXH100
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí data TikTok, Youtube, Facebook, Messenger
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    100.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=MXH100 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=MXH100 UP"
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
                      href="/goi-cuoc-viettel/MXH120"
                    >
                      MXH120
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí data TikTok, Youtube, Facebook, Messenger
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=MXH120 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=MXH120 UP"
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
                      href="/goi-cuoc-viettel/MXH150"
                    >
                      MXH150
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí data TikTok, Youtube, Facebook, Messenger
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=MXH150 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=MXH150 UP"
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
                      href="/goi-cuoc-viettel/T50K"
                    >
                      T50K
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50GB truy cập TikTok
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=T50K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=T50K UP"
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
                      href="/goi-cuoc-viettel/YT50K"
                    >
                      YT50K
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50GB truy cập Youtube
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=YT50K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=YT50K UP"
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
                      href="/goi-cuoc-viettel/FB50K"
                    >
                      FB50K
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50GB truy cập Facebook và nhắn tin Messenger
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=FB50K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=FB50K UP"
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
        {"Đăng ký các gói cước qua "}
        <b>SMS</b>: [Tên gói] UP gửi 290 hoặc [Tên gói] gửi 191
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Ví dụ: MXH120 UP gửi 290</b>
      </p>
    </>
  );
}

function GoiCuocViettelThang32026GoiCuocComboDataThoaiGoiMienPhi() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Gói Cước Combo Data + Thoại – Gọi Miễn Phí
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Gói Combo Data + Thoại Viettel (V90B – V200B) là lựa chọn trọn gói cho những ai muốn vừa có "
        }
        <b>data 4G/5G tốc độ cao</b>
        {", vừa có "}
        <b>ưu đãi gọi nội mạng và ngoại mạng miễn phí</b>, không phải nạp tiền
        nhiều lần. Đây là giải pháp tiện lợi cho sinh viên, dân văn phòng và
        người thường xuyên gọi điện, lướt web hay xem video online.
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
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ (tháng)
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐĂNG KÝ
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
                      href="/goi-cuoc-viettel/V90B"
                    >
                      <u>V90B</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=V90B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=V90B UP"
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
                      href="/goi-cuoc-viettel/V120B"
                    >
                      <u>V120B</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.5GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=V120B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=V120B UP"
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
                      href="/goi-cuoc-viettel/V150B"
                    >
                      <u>V150B</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 80 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=V150B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=V150B UP"
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
                      href="/goi-cuoc-viettel/V160B"
                    >
                      <u>V160B</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    160.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=V160B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=V160B UP"
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
                      href="/goi-cuoc-viettel/V180B"
                    >
                      <u>V180B</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    180.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=V180B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=V180B UP"
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
                      href="/goi-cuoc-viettel/V200B"
                    >
                      <u>V200B</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    8GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=V200B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=V200B UP"
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
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>Hướng dẫn đăng ký nhanh</b>
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Chỉ cần nhấn "}
            <b>nút ĐĂNG KÝ</b>
            {
              " tương ứng trong bảng, hệ thống sẽ tự động soạn tin nhắn đăng ký."
            }
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Bạn cũng có thể đăng ký qua "}
            <b>My Viettel, Viettel Money, tổng đài 191</b>
            {" hoặc "}
            <b>website viettel.vn</b>.
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Ví dụ: "}
            <b>V160B gửi 191</b>
          </p>
        </li>
      </ul>
    </>
  );
}

function GoiCuocViettelThang32026GoiCuocNgayViettel() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Gói Cước Ngày Viettel
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Với nhu cầu sử dụng data di động ngày càng cao của các nhóm khách hàng
        khác nhau, Viettel ra mắt thêm các gói ngắn ngày với chi phí hấp dẫn chỉ
        từ 7000đ/ngày.
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
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ
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
                      href="/goi-cuoc-viettel/ST7K"
                    >
                      ST7K
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
                    7.000đ (1 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=ST7K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=ST7K UP"
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
                      href="/goi-cuoc-viettel/5G10"
                    >
                      5G10
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
                    10.000đ (1 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G10 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G10 UP"
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
                      href="/goi-cuoc-viettel/5GVS12"
                    >
                      5GVS12
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    12.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (1 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5GVS12 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5GVS12 UP"
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
                      href="/goi-cuoc-viettel/5G30"
                    >
                      5G30
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    21GB (7GB/ngày)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30.000đ (3 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G30 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G30 UP"
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
                      href="/goi-cuoc-viettel/5G70"
                    >
                      5G70
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    56GB (8GB/ngày)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    70.000đ (7 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5G70 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5G70 UP"
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
                      href="/goi-cuoc-viettel/5GVS80"
                    >
                      5GVS80
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    56GB (8GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360 4K
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    80.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (7 ngày)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=5GVS80 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="sms:290?body=5GVS80 UP"
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
    </>
  );
}

function GoiCuocViettelThang32026GoiCuocThangDanhChoThueBaoTraSauDangKyLienHe18008098MienPhi() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Gói Cước Tháng Dành Cho Thuê Bao Trả Sau - Đăng Ký Liên Hệ 18008098
        (Miễn Phí)
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
                    Gói cước
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Ưu đãi
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
                      href="/goi-cuoc-viettel/tra-sau/V120K"
                    >
                      V120K
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (120.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 20 phút mỗi cuộc gọi nội mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 50 phút gọi ngoại mạng
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
                      href="/goi-cuoc-viettel/tra-sau/V160X"
                    >
                      V160X
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (160.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120GB (4GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 20 phút mỗi cuộc gọi nội mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 50 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 60 SMS nội mạng
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
                      href="/goi-cuoc-viettel/tra-sau/V180X"
                    >
                      V180X
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (180.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    180GB (6GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 10 phút mỗi cuộc gọi nội mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100 phút gọi ngoại mạng
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
                      href="/goi-cuoc-viettel/tra-sau/N200"
                    >
                      N200
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (200.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    180GB (6GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí truy cập Youtube (tối đa 50GB) và Spotify (tối đa
                    30GB).
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi
                    ngoại mạng.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100 SMS trong nước.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi
                    nhỡ MCA.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 30GB Cloud lưu trữ trên Mybox.
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
                      href="/goi-cuoc-viettel/tra-sau/N250"
                    >
                      N250
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (250.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    240GB (8GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí truy cập Youtube (tối đa 50GB) và Spotify (tối đa
                    30GB).
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 30 phút và 150 phút gọi
                    ngoại mạng.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 150 SMS trong nước.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi
                    nhỡ MCA.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 50GB Cloud lưu trữ trên Mybox.
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
                      href="/goi-cuoc-viettel/tra-sau/N300"
                    >
                      N300
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (300.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    300GB (10GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và
                    Spotify (*)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 60 phút và 200 phút gọi
                    ngoại mạng.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 200 SMS trong nước.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi
                    nhỡ MCA.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 70GB Cloud lưu trữ trên Mybox.
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
                      href="/goi-cuoc-viettel/tra-sau/N350"
                    >
                      N350
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (350.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    360GB (12GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và
                    Spotify (*)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 60 phút và 200 phút gọi
                    ngoại mạng.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 200 SMS trong nước.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi
                    nhỡ MCA.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100GB Cloud lưu trữ trên Mybox.
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
                      href="/goi-cuoc-viettel/tra-sau/N400"
                    >
                      N400
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (400.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    450GB (15GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và
                    Spotify (*)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 60 phút và 200 phút gọi
                    ngoại mạng.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 200 SMS trong nước.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi
                    nhỡ MCA.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100GB Cloud lưu trữ trên Mybox.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"Kho voucher đổi quà tặng độc quyền trên "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://viettel.vn/vx/viettelplus?ch=HNI1_TTHKM_VTP_00004_DBDN"
                    >
                      Viettel++
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Tặng 10% điểm Viettel++ theo giá gói đăng ký, tối đa không
                    quá 50.000 điểm (Chỉ áp dụng cho thuê bao hoà mạng mới)
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
                      href="/goi-cuoc-viettel/tra-sau/N500"
                    >
                      N500
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (500.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    600GB (20GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và
                    Spotify (*)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 60 phút và 300 phút gọi
                    ngoại mạng.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 250 SMS trong nước.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi
                    nhỡ MCA.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100GB Cloud lưu trữ trên Mybox.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"Kho voucher đổi quà tặng độc quyền trên "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://viettel.vn/vx/viettelplus?ch=HNI1_TTHKM_VTP_00004_DBDN"
                    >
                      Viettel++
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Tặng 10% điểm Viettel++ theo giá gói đăng ký, tối đa không
                    quá 50.000 điểm (Chỉ áp dụng cho thuê bao hoà mạng mới)
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
                      href="/goi-cuoc-viettel/tra-sau/N1000"
                    >
                      N1000
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (1.000.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    900GB (30GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và
                    Spotify (*)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 60 phút và 300 phút gọi
                    ngoại mạng.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 250 SMS trong nước.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi
                    nhỡ MCA.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100GB Cloud lưu trữ trên Mybox.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Ưu tiên phòng chờ sân bay đối với hội viên Vàng: dành cho
                    thuê bao trả sau dùng gói cước 1.000.000đ và đóng cước trước
                    12 tháng (chi tiết liên hệ 18008098)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"Kho voucher đổi quà tặng độc quyền trên "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://viettel.vn/vx/viettelplus?ch=HNI1_TTHKM_VTP_00004_DBDN"
                    >
                      Viettel++
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Tặng 10% điểm Viettel++ theo giá gói đăng ký, tối đa không
                    quá 50.000 điểm (Chỉ áp dụng cho thuê bao hoà mạng mới)
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
                      href="/goi-cuoc-viettel/tra-sau/N2000"
                    >
                      N2000
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (2.000.000đ)
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.500GB (50GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và
                    Spotify (*)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 60 phút và 400 phút gọi
                    ngoại mạng.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 250 SMS trong nước.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi
                    nhỡ MCA.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100GB Cloud lưu trữ trên Mybox.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Ưu tiên phòng chờ sân bay đối với hội viên Kim cương: dành
                    cho thuê bao trả sau dùng gói cước 2.000.000đ và đóng cước
                    trước 12 tháng (chi tiết liên hệ 18008098)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"Kho voucher đổi quà tặng độc quyền trên "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://viettel.vn/vx/viettelplus?ch=HNI1_TTHKM_VTP_00004_DBDN"
                    >
                      Viettel++
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Tặng 10% điểm Viettel++ theo giá gói đăng ký, tối đa không
                    quá 50.000 điểm (Chỉ áp dụng cho thuê bao hoà mạng mới)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        (*) Data truy cập ứng dụng Spotify (tối đa 30GB). Youtube, Facebook,
        Messenger, TikTok (tối đa 50GB/ứng dụng)
      </p>
    </>
  );
}

function GoiCuocViettelThang32026HuongDanDangKyGoiCuoc4G5GViettel() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>Hướng dẫn đăng ký gói cước 4G/5G Viettel</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Viettel cung cấp nhiều phương thức đăng ký gói cước linh hoạt, phù hợp
        với nhu cầu của người dùng:
      </p>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        1. Đăng ký qua ứng dụng My Viettel
      </h3>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Bước 1</b>: Tải và cài đặt ứng dụng My Viettel từ App Store hoặc
            Google Play.
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Bước 2</b>: Đăng nhập bằng số điện thoại Viettel của bạn.
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Bước 3</b>: Tại màn hình chính, chọn mục “Gói cước 4G/5G”.
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Bước 4</b>: Lựa chọn gói cước phù hợp và nhấn “Đăng ký”.
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Bước 5</b>: Chọn phương thức thanh toán và xác nhận để hoàn tất.
          </p>
        </li>
      </ul>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        2. Đăng ký trên ứng dụng Viettel Money
      </h3>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Bước 1: Tải "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              href="https://km.vtmoney.vn/314y/webnew"
            >
              ứng dụng Viettel Money
            </a>
            {" từ App Store hoặc Google Play."}
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới
            nếu chưa có.
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            Bước 3: Trong ứng dụng chọn mục “Viễn thông&quot; -&gt; “Mua Data
            4G/5G&quot;, sau đó làm theo hướng dẫn để hoàn tất đăng ký
          </p>
        </li>
      </ul>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        3. Đăng ký qua mã USSD *098#
      </h3>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Bước 1</b>: Trên điện thoại, bấm *098# và nhấn gọi.
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Bước 2</b>: Làm theo hướng dẫn trên màn hình để chọn và đăng ký
            gói cước mong muốn.
          </p>
        </li>
      </ul>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        4. Đăng ký qua tin nhắn SMS
      </h3>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Bước 1</b>
            {": Soạn tin nhắn theo cú pháp: [TÊN GÓI CƯỚC]  gửi "}
            <b>191</b>
            {". Ví dụ: Soạn "}
            <b>{"5G150N "}</b>
            {" gửi "}
            <b>191</b>
            {" để đăng ký gói 5G150N."}
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Bước 2</b>: Chờ tin nhắn xác nhận từ hệ thống.
          </p>
        </li>
      </ul>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        5. Đăng ký qua website Viettel
      </h3>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Truy cập trang web chính thức của Viettel tại "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              href="https://viettel.vn/lan-toa/goi-cuoc?kh=HNI1_TTHKM_VTP_00004_DBDN"
            >
              https://viettel.vn
            </a>
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            Tìm kiếm và chọn gói cước phù hợp, sau đó làm theo hướng dẫn để đăng
            ký.
          </p>
        </li>
      </ul>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        6. Đăng ký qua tổng đài 198
      </h3>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            Gọi đến tổng đài 198 để được nhân viên hỗ trợ tư vấn và đăng ký gói
            cước phù hợp với nhu cầu của bạn.
          </p>
        </li>
      </ul>
      <br />
    </>
  );
}
