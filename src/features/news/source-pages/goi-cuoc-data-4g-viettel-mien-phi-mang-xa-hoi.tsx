/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "../article-layout";
import { newsArticles } from "../article-records";
/** Authored sections from archive 0126; keep historical copy and source irregularities. */
export default function GoiCuocData4gViettelMienPhiMangXaHoiArticle() {
  return (
    <ArticleLayout
      article={newsArticles["goi-cuoc-data-4g-viettel-mien-phi-mang-xa-hoi"]}
    >
      <GoiCuocData4gViettelMienPhiMangXaHoiIntroduction />
      <GoiCuocData4gViettelMienPhiMangXaHoiDanhSachGoiCuoc4GViettelMienPhiDataTruyCapMangXaHoi />
      <GoiCuocData4gViettelMienPhiMangXaHoiGoiCuocMXHDanhChoThueBaoTraSau />
      <GoiCuocData4gViettelMienPhiMangXaHoiDanhSachGoiCuocMienPhiDataTheoTungNenTang />
      <GoiCuocData4gViettelMienPhiMangXaHoiDieuKienDangKySuDungGoiCuocMangXaHoiCuaViettel />
      <GoiCuocData4gViettelMienPhiMangXaHoiDanhSachGoiCuocViettelMienPhiMangXaHoiTrenUngDungViettelMoney />
      <GoiCuocData4gViettelMienPhiMangXaHoiHuongDanDangKyGoiCuocMangXaHoiTrenUngDungViettelMoney />
      <GoiCuocData4gViettelMienPhiMangXaHoiLoiIchKhiSuDungCacGoiCuocMangXaHoiViettel />
    </ArticleLayout>
  );
}
function GoiCuocData4gViettelMienPhiMangXaHoiIntroduction() {
  return (
    <>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {
          "Bạn muốn lướt TikTok, Facebook, YouTube mà không lo hết dung lượng? Viettel cung cấp các "
        }
        <b>gói 4G miễn phí mạng xã hội</b>, giúp truy cập thoải mái, tiết kiệm data chính
        và dễ đăng ký ngay trên điện thoại.
      </p>
    </>
  );
}

function GoiCuocData4gViettelMienPhiMangXaHoiDanhSachGoiCuoc4GViettelMienPhiDataTruyCapMangXaHoi() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Danh sách gói cước 4G Viettel miễn phí data truy cập Mạng xã hội
      </h2>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-news-table-scroll"
          role="region"
          aria-label="Bảng nội dung bài viết"
          tabIndex={0}
        >
          <table className="border-separate border-spacing-0 rounded-md border border-b border-l border-r border-t border-black">
            <tbody>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐƠN GIÁ
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    (tháng)
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐĂNG KÝ
                  </p>
                </th>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data TikTok, Youtube, Facebook, Messenger.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    100.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=MXH100 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=MXH100 UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data TikTok, Youtube, Facebook, Messenger.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=MXH120 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=MXH120 UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data TikTok, Youtube, Facebook, Messenger.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=MXH150 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=MXH150 UP"
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
      <p className="pb-2 text-18 leading-[28px] md:text-20 md:leading-[28px]">
        {"Đăng ký các gói cước qua "}
        <b>SMS</b>
        {": "}
        <b>{"[Tên gói] UP gửi 290 "}</b>
        {"hoặc "}
        <b>[Tên gói] gửi 191</b>.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Ví dụ: MXH120 UP gửi 290</b>
      </p>
    </>
  );
}

function GoiCuocData4gViettelMienPhiMangXaHoiGoiCuocMXHDanhChoThueBaoTraSau() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Gói cước MXH dành cho thuê bao trả sau
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Các gói trả sau như "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/tra-sau/MXH120"
        >
          <b>MXH120</b>
        </a>
        <b>{", "}</b>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/tra-sau/MXH150"
        >
          <b>MXH150</b>
        </a>
        <b>{", "}</b>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/tra-sau/MXH200"
        >
          <b>MXH200</b>
        </a>
        <b>{", "}</b>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/tra-sau/MXH250"
        >
          <b>MXH250</b>
        </a>
        {
          " cung cấp dung lượng data hàng tháng khác nhau, kèm ưu đãi gọi nội/ngoại mạng và SMS miễn phí."
        }
      </p>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-news-table-scroll"
          role="region"
          aria-label="Bảng nội dung bài viết"
          tabIndex={0}
        >
          <table className="border-separate border-spacing-0 rounded-md border border-b border-l border-r border-t border-black">
            <tbody>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Gói cước
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Ưu đãi
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Đơn giá (tháng)
                  </p>
                </th>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/tra-sau/MXH120"
                    >
                      MXH120
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data TikTok, Youtube, Facebook, Messenger.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/tra-sau/MXH150"
                    >
                      MXH150
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data TikTok, Youtube, Facebook, Messenger.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/tra-sau/MXH200"
                    >
                      MXH200
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    120GB (4GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data TikTok, Youtube, Facebook, Messenger
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí 100 SMS trong nước
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/tra-sau/MXH250"
                    >
                      MXH250
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    150GB (5GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data TikTok, Youtube, Facebook, Messenger.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí 150 SMS trong nước
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    250.000đ
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="pb-2 text-18 leading-[28px] md:text-20 md:leading-[28px]">
        {"Để đăng ký các "}
        <b>gói cước miễn phí mạng xã hội Viettel dành cho thuê bao trả sau</b>, liên hệ
        tổng đài 18008098 (miễn phí) hoặc tới cửa hàng Viettel gần nhất.
      </p>
    </>
  );
}

function GoiCuocData4gViettelMienPhiMangXaHoiDanhSachGoiCuocMienPhiDataTheoTungNenTang() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Danh sách gói cước miễn phí data theo từng nền tảng
      </h2>
      <h3 className="py-3 text-20 font-bold leading-[28px] md:text-24 md:leading-[32px]">
        <b>1. Gói cước miễn phí data truy cập TikTok</b>
      </h3>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Các gói cước TikTok của Viettel như "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/T15K"
        >
          <u>T15K</u>
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/T50K"
        >
          T50K
        </a>
        {
          " giúp bạn thỏa sức xem video, livestream và đăng bài mà không lo tốn dung lượng chính. Từ gói 1 ngày đến gói 30 ngày, bạn có thể lựa chọn theo nhu cầu sử dụng."
        }
      </p>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-news-table-scroll"
          role="region"
          aria-label="Bảng nội dung bài viết"
          tabIndex={0}
        >
          <table className="border-separate border-spacing-0 rounded-md border border-b border-l border-r border-t border-black">
            <tbody>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐƠN GIÁ
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐĂNG KÝ
                  </p>
                </th>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/T5K"
                    >
                      <u>T5K</u>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    15GB data truy cập TikTok trong 1 ngày
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    5.000đ (1 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=T5K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=T5K UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/T15K"
                    >
                      <u>T15K</u>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    25GB data truy cập TikTok trong 7 ngày
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    15.000đ (7 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=T15K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=T15K UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    50GB data truy cập TikTok trong 30 ngày
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    50.000đ (30 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=T50K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=T50K UP"
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
      <p className="pb-2 text-18 leading-[28px] md:text-20 md:leading-[28px]">
        <b>{"[Tên gói] UP gửi 290 "}</b>
        {"hoặc "}
        <b>[Tên gói] gửi 191</b>.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Ví dụ: T50K UP gửi 290</b>
      </p>
      <h3 className="py-3 text-20 font-bold leading-[28px] md:text-24 md:leading-[32px]">
        <b>2. Gói cước miễn phí data truy cập Youtube</b>
      </h3>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Với "}
        <b>gói cước miễn phí data YouTube như</b>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/YT15K"
        >
          <u>YT15K</u>
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/YT50K"
        >
          YT50K
        </a>
        , bạn có thể xem phim, video học tập và giải trí cả ngày mà không tốn dung lượng
        4G chính. Gói cước phù hợp với nhu cầu dùng hàng ngày, tuần hoặc tháng.
      </p>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-news-table-scroll"
          role="region"
          aria-label="Bảng nội dung bài viết"
          tabIndex={0}
        >
          <table className="border-separate border-spacing-0 rounded-md border border-b border-l border-r border-t border-black">
            <tbody>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐƠN GIÁ
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐĂNG KÝ
                  </p>
                </th>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/YT5K"
                    >
                      <u>YT5K</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    15GB data truy cập TikTok trong 1 ngày
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    5.000đ (1 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=YT5K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=YT5K UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/YT15K"
                    >
                      <u>YT15K</u>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    25GB data truy cập Youtube trong 7 ngày
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    15.000đ (7 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=YT15K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=YT15K UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    50GB data truy cập Youtube trong 30 ngày
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    50.000đ (30 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=YT50K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=YT50K UP"
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
      <p className="pb-2 text-18 leading-[28px] md:text-20 md:leading-[28px]">
        <b>{"[Tên gói] UP gửi 290 "}</b>
        {"hoặc "}
        <b>[Tên gói] gửi 191</b>.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Ví dụ: YT50K UP gửi 290</b>
      </p>
      <h3 className="py-3 text-20 font-bold leading-[28px] md:text-24 md:leading-[32px]">
        <b>3. Gói cước miễn phí data truy cập Facebook, Messenger</b>
      </h3>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Các "}
        <b>gói mạng xã hội Viettel</b>
        {" dành cho Facebook và Messenger như  "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/FB15K"
        >
          <u>FB15K</u>
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/FB50K"
        >
          FB50K
        </a>
        {
          " cho phép bạn lướt feed, nhắn tin và gọi video miễn phí data, tiết kiệm chi phí và thuận tiện kết nối với bạn bè."
        }
      </p>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-news-table-scroll"
          role="region"
          aria-label="Bảng nội dung bài viết"
          tabIndex={0}
        >
          <table className="border-separate border-spacing-0 rounded-md border border-b border-l border-r border-t border-black">
            <tbody>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐƠN GIÁ
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐĂNG KÝ
                  </p>
                </th>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/FB5K"
                    >
                      <u>FB5K</u>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    15GB data truy cập Facebook, Messenger trong 1 ngày
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    5.000đ (1 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=FB5K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=FB5K UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/FB15K"
                    >
                      <u>FB15K</u>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    25GB data truy cập Facebook, Messenger trong 7 ngày
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    15.000đ (7 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=FB15K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=FB15K UP"
                    >
                      Đăng ký
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    50GB data truy cập Facebook, Messenger trong 30 ngày
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    50.000đ (30 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=FB50K UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
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
      <p className="pb-2 text-18 leading-[28px] md:text-20 md:leading-[28px]">
        <b>{"[Tên gói] UP gửi 290 "}</b>
        {"hoặc "}
        <b>[Tên gói] gửi 191</b>.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Ví dụ: FB50K UP gửi 290</b>
      </p>
    </>
  );
}

function GoiCuocData4gViettelMienPhiMangXaHoiDieuKienDangKySuDungGoiCuocMangXaHoiCuaViettel() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Điều kiện đăng ký sử dụng gói cước Mạng xã hội của Viettel
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>{"Số dư tài khoản: "}</b>Tài khoản chính của thuê bao phải có đủ số dư tối
        thiểu để đăng ký gói cước tương ứng. Kiểm tra tài khoản điện thoại bằng cú pháp
        bấm *101# nhấn gọi
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Thiết bị sử dụng:</b>
        {" Điện thoại, máy tính bảng hay thiết bị di động có hỗ trợ công nghệ 4G/LTE."}
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Đối tượng áp dụng:</b>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        - Đối với gói cước MXH100, MXH120, MXH150 áp dụng cho thuê bao Viettel kích hoạt
        mới từ 01/01/2023 trở đi
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        - Đối với gói cước theo từng nền tảng, áp dụng cho tất cả thuê bao Viettel (bao
        gồm trả trước và trả sau)
      </p>
    </>
  );
}

function GoiCuocData4gViettelMienPhiMangXaHoiDanhSachGoiCuocViettelMienPhiMangXaHoiTrenUngDungViettelMoney() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        {"Danh sách gói cước Viettel miễn phí Mạng xã hội trên "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://km.vtmoney.vn/314y/webnew"
        >
          <u>ứng dụng Viettel Money</u>
        </a>
        :
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Bạn có thể tận hưởng data mạng xã hội miễn phí cùng nhiều ưu đãi hấp dẫn với "}
        <b>MXH150S và MXH180S</b>
        {
          ". Thoải mái lướt Facebook, TikTok, Youtube, nhắn tin hay gọi điện mà không lo trừ dung lượng chính. Đăng ký ngay qua "
        }
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://apps.apple.com/vn/app/viettel-money/id1344204781"
        >
          Viettel Money
        </a>
        {" để trải nghiệm tiện ích mạng xã hội tối ưu."}
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="goi cuoc mxh150s mxh180s"
          loading="lazy"
          width="1290"
          height="1290"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F22scAafw2xZq2x1O5fMiCn%2F4b4b96dc6c80ca29fed3ddb3ab581ad0%2Fgoi_cuoc_mxh150s_mxh180s.PNG&w=3840&q=75",
          )}
        />
      </div>
      <h3 className="py-3 text-20 font-bold leading-[28px] md:text-24 md:leading-[32px]">
        1. Gói cước MXH150S Viettel
      </h3>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Ưu đãi</b>
        {": 30B data tốc độ cao (tương đương 1GB mỗi ngày) dành để truy cập Internet. "}
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Quyền lợi truy cập ứng dụng Facebook, Facebook Messenger, Instagram, TikTok,
        Youtube miễn phí không giới hạn data (không bị trừ trong 30GB data của gói).
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Miễn phí cước gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Đơn giá</b>: 150.000 đồng/tháng (gia hạn mỗi chu kỳ 30 ngày). Khách hàng được
        hoàn 7.500đ khi đăng ký gói cước lần đầu
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Đăng ký</b>
        {" truy cập ứng dụng "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://viettelmoney.vn/data?packageCode=MXH150S"
        >
          Viettel Money
        </a>
      </p>
      <h3 className="py-3 text-20 font-bold leading-[28px] md:text-24 md:leading-[32px]">
        2. Gói cước MXH180S Viettel
      </h3>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Ưu đãi</b>
        {": 45B data tốc độ cao (tương đương 1.5GB mỗi ngày) dành để truy cập Internet. "}
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Quyền lợi truy cập ứng dụng Facebook, Facebook Messenger, Instagram, TikTok,
        Youtube miễn phí không giới hạn data (không bị trừ trong 45GB data của gói).
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Miễn phí cước gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Đơn giá</b>: 180.000 đồng/tháng (gia hạn mỗi chu kỳ 30 ngày). Khách hàng được
        hoàn 9.000đ khi đăng ký gói cước lần đầu
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Đăng ký</b>
        {" truy cập ứng dụng Viettel Money"}
      </p>
    </>
  );
}

function GoiCuocData4gViettelMienPhiMangXaHoiHuongDanDangKyGoiCuocMangXaHoiTrenUngDungViettelMoney() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Hướng dẫn đăng ký gói cước Mạng xã hội trên ứng dụng Viettel Money
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Trường hợp khách hàng là thuê bao Viettel kích hoạt trước ngày 01/01/2023 có thể
        tham khảo đăng ký gói cước Mạng xã hội trên ứng dụng Viettel Money theo hướng dẫn:
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Bước 1</b>
        {": Mở "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://km.vtmoney.vn/314y/webnew"
        >
          ứng dụng Viettel Money
        </a>
        {" và đăng nhập."}
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Bước 2</b>: Tại màn hình trang chủ, chọn mục “Viễn thông&quot;, sau đó chọn
        &quot;Mua Data 3G/4G&quot;.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Bước 3</b>: Chọn gói cước MXH phù hợp
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Bước 4</b>: Xác nhận giao dịch và hoàn tất đăng ký.
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="3g 4g trên Viettel Money"
          loading="lazy"
          width="900"
          height="900"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F6IokQWDnLPxhq33d30Na66%2Fa4ad2b30aa88134460e0a6880a46698a%2F3g_4g_tr%C3%AAn_Viettel_Money.JPG&w=1920&q=75",
          )}
        />
      </div>
    </>
  );
}

function GoiCuocData4gViettelMienPhiMangXaHoiLoiIchKhiSuDungCacGoiCuocMangXaHoiViettel() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>Lợi ích khi sử dụng các gói cước mạng xã hội Viettel</b>
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>{"Tiết kiệm chi phí: "}</b>Các gói cước Viettel có mức giá hợp lý, phù hợp với
        mọi nhu cầu và ngân sách của người dùng. Bạn có thể lựa chọn gói cước theo ngày,
        theo tuần hoặc theo tháng tùy theo nhu cầu sử dụng của mình.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>{"Data tốc độ cao: "}</b>Mỗi gói cước cung cấp dung lượng data tốc độ cao riêng
        biệt cho từng nền tảng mạng xã hội, giúp bạn thoải mái sử dụng các ứng dụng mà
        không lo bị gián đoạn.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>{"Ưu đãi đặc biệt: "}</b>Ngoài quyền lợi miễn phí data truy cập mạng xã hội và
        tặng kèm GB truy cập internet, các gói cước như MXH120, MXH150, MXH150S, MXH180S
        còn miễn phí cuộc gọi thoại, giúp khách hàng giữ liên lạc với người thân mọi lúc
        mọi nơi.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>{"Dễ dàng đăng ký và quản lý: "}</b>
        {
          "Việc đăng ký các gói cước Viettel rất đơn giản, chỉ cần soạn tin nhắn theo cú pháp "
        }
        <b>[Tên gói cước] UP gửi 290 hoặc</b> <b>[Tên gói cước] gửi 191,</b>
        {
          " hoặc đăng ký trên ứng dụng Viettel Money. Bạn cũng có thể dễ dàng kiểm tra dung lượng còn lại và quản lý gói cước qua tin nhắn."
        }
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Với các gói cước mạng xã hội của Viettel, bạn sẽ luôn được kết nối và trải nghiệm
        những khoảnh khắc tuyệt vời trên các nền tảng yêu thích của mình. Hãy chọn ngay
        gói cước phù hợp để tận hưởng trải nghiệm mạng xã hội không giới hạn với Viettel!
      </p>
      <br />
    </>
  );
}
