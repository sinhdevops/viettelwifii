import { siteConfig } from "@/lib/site-config";
/* Source copy: /goi-cuoc-viettel/V200C. Preserve irregular tables, links and paragraphs here. */
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { PackageSourceDialogTrigger } from "@/components/packages/package-source-dialog-trigger";
export default function GeneralV200CPageDetails() {
  return (
    <div className="flex flex-col">
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        V200C - Gói cước 4G Viettel thông dụng chỉ với 200.000đ, người dùng sở
        hữu ngay 120GB data/tháng, tương đương 4GB/ngày. Miễn phí lưu trữ 25 GB
        trên LifeBox và miễn phí data truy cập ứng dụng TV360
      </p>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Thông tin chi tiết gói cước V200C của Viettel
      </h2>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-package-table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Bảng thông tin gói cước"
        >
          <table className="border-separate border-spacing-0 rounded-md border border-t border-r border-b border-l border-black">
            <tbody>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Tên gói cước
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    V200C
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Cước phí
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Thời gian sử dụng
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1 tháng
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Dung lượng
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120GB (4GB/ngày)
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Ưu đãi đặc biệt
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí cước gọi nội mạng dưới 20 phút
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí data xem{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://tv360.vn/app"
                    >
                      <u>TV360</u>
                    </a>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 25GB lưu trữ trên{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="https://lifebox.vn/ui/jsp/login.jsp"
                    >
                      <u>LifeBox</u>
                    </a>
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Đối tượng
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Thuê bao di động mạng Viettel trong danh sách được hưởng ưu
                    đãi
                  </p>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Cú pháp đăng ký
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    V200C UP gửi 290
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="V200C"
          loading="lazy"
          width="1200"
          height="630"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F1EU86lP78aJoYHzbgGC7vW%2F296280a35aef1953e33636b8bf5d6b12%2FV200C.jpg&w=3840&q=75",
          )}
        />
      </div>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>Lựa chọn nâng cao dành riêng cho gói cước V200C</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Cung cấp thêm lựa chọn đăng ký gói V200Ctrong nhiều tháng, cho phép
        người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03
        tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được
        chia theo từng giai đoạn, như sau:
      </p>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-package-table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Bảng thông tin gói cước"
        >
          <table className="border-separate border-spacing-0 rounded-md border border-t border-r border-b border-l border-black">
            <tbody>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <th className="bg-primary [&>p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&>p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&>p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ
                  </p>
                </th>
                <th className="bg-primary [&>p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐĂNG KÝ
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    3V200C
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    360GB (4GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí Lifebox
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    600.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (3 tháng)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=3V200C UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6V200C
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    720GB (4GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí Lifebox
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.200.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (6 tháng)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=6V200C UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    12V200C
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.440GB (4GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí Lifebox
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2.400.000đ
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    (12 tháng)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=12V200C UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>Cách quản lý gói cước V200C</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Để kiểm tra dung lượng data gói cước V200C: Soạn &quot;KTTK&quot; gửi
        191 (miễn phí)
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Để hủy gói cước V200C: Soạn &quot;HUY V200C&quot; gửi 191 (miễn phí)
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/tin-tuc/tong-dai-viettel"
        >
          <u>Tổng đài CSKH Viettel</u>
        </a>
        : 198 (miễn phí)
      </p>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Lợi ích khi sử dụng gói cước V200C
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Dung lượng dữ liệu lớn:</b> Cung cấp 120GB/tháng (4GB/ngày) giúp
        người dùng thoải mái truy cập internet mà không phải lo lắng về data
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Tốc độ truy cập cao:</b> Thoả sức xem video, clip, hay chơi game trực
        tuyến mà không gặp trở ngại về tốc độ
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Đa nền tảng:</b> Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên
        tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube,
        Telegram, Zalo, Viber, Instagram, ...)
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Miễn phí cước viễn thông:</b> Miễn phí cước nội mạng dưới 20 phút và
        100 phút gọi ngoại mạng
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Cước phí minh bạch:</b> Hết dung lượng trong ngày, dịch vụ sẽ tạm
        dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu
        ngày mới, áp dụng suốt chu kỳ
      </p>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Tham khảo{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/tin-tuc/goi-cuoc-data-4g-viettel-2026")}
        >
          <u>gói cước 4G Viettel</u>
        </a>{" "}
        được đăng ký nhiều nhất
      </h2>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-package-table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Bảng thông tin gói cước"
        >
          <table className="border-separate border-spacing-0 rounded-md border border-t border-r border-b border-l border-black">
            <tbody>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <th className="bg-primary [&>p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="bg-primary [&>p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="bg-primary [&>p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐƠN GIÁ (tháng)
                  </p>
                </th>
                <th className="bg-primary [&>p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    ĐĂNG KÝ
                  </p>
                </th>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/MXH100"
                    >
                      <u>MXH100</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí data TikTok, Youtube, Facebook, Messenger,
                    Instagram.
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/MXH120"
                    >
                      <u>MXH120</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí data TikTok, Youtube, Facebook, Messenger,
                    Instagram.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/MXH150"
                    >
                      <u>MXH150</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí data TikTok, Youtube, Facebook, Messenger,
                    Instagram.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/SD90"
                    >
                      <u>SD90</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày){" "}
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90.000đ
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/SD120"
                    >
                      <u>SD120</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    60GB (2GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120.000đ
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/SD135"
                    >
                      <u>SD135</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150GB (5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    135.000đ
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/SD150"
                    >
                      <u>SD150</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    90GB (3GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150.000đ
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí 30 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí 50 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    60GB (2GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí 80 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    120GB (4GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí 100 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    180GB (6GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí 100 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    240GB (8GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 20 phút.
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí 100 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
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
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/30N"
                    >
                      <u>30N</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150GB (5GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi
                    ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí SMS
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Miễn phí TV360
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    300.000đ
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=30N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V200C"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
    </div>
  );
}
