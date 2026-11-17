import { siteConfig } from "@/lib/site-config";
/* Source copy: /goi-cuoc-viettel/V150N. Preserve irregular tables, links and paragraphs here. */
import { PackageSourceDialogTrigger } from "@/components/packages/package-source-dialog-trigger";
import { PriceTableMXH100V3 } from "./price-tables/price-table-mxh100v3";
export default function GeneralV150NPageDetails() {
  return (
    <div className="flex flex-col">
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        V150N - Gói cước 4G Viettel chỉ 150.000đ nhận ngay 180GB data/tháng,
        tương đương 6GB/ngày. Miễn phí cước gọi nội mạng dưới 20 phút và 100
        phút gọi ngoại mạng.
      </p>
      <p className="text-14 md:text-16 pb-2 leading-[25px] md:leading-[24px]">
        <i>
          Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và
          gia hạn lại gói V150N, thay vào đó là các{" "}
        </i>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/tin-tuc/goi-cuoc-data-4g-viettel-2026")}
        >
          <u>
            <i>gói cước 4G khuyến mãi</i>
          </u>
        </a>
        <i> mới được cập nhật từ 15/06/2023</i>
      </p>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Thông tin chi tiết gói cước V150N của Viettel
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Tên gói cước: <b>V150N</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Cước phí: <b>150.000đ</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Thời hạn sử dụng: <b>1 tháng</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Dung lượng: <b>180GB/30 ngày </b>(4GB/ngày)
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Ưu đãi đặc biệt:{" "}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Miễn phí cước gọi nội mạng dưới 20 phút</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Miễn phí 100 phút cước gọi ngoại mạng</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Đối tượng áp dụng: Thuê bao di động mạng Viettel trong danh sách được
        hưởng ưu đãi
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Đăng ký qua SMS: <b>V150N UP </b>
        gửi <b>290</b>
      </p>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Cách đăng ký gói cước V150N
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Đăng ký qua tin nhắn SMS: </b>
        Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú
        pháp <b>V150N UP </b>gửi<b> 290</b>. Sau khi gửi, bạn sẽ nhận được thông
        báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có
        thể click nút đăng ký trên website {siteConfig.hostname}, hỗ trợ bạn
        soạn tin nhắn nhanh hơn.
      </p>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Điều kiện đăng ký gói cước V150N
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính
        là 150.000 đồng để đăng ký gói cước.
      </p>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Lựa chọn nâng cao dành riêng cho gói cước V150N
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Cung cấp thêm lựa chọn đăng ký gói V150N trong nhiều tháng, cho phép
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
                    3V150N
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    540GB (6GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    450.000đ (3 tháng)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=3V150N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6V150N
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.080GB (6GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    900.000đ (6 tháng)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=6V150N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-t border-r border-b-0 border-l-0 border-black">
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    12V150N
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2.160GB (6GB/ngày)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="[&>p]:text-14 [&>p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    1.800.000đ (12 tháng)
                  </p>
                </td>
                <td className="border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="bg-primary text-12 hover:bg-primary-dark md:text-14 flex h-[28px] w-[80px] items-center justify-center rounded-full font-medium text-gray-50 md:w-[106px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                      href="sms:290?body=12V150N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="bg-primary hover:bg-primary-dark md:text-16 inline-flex h-[28px] w-[106px] items-center justify-center rounded-full px-4 py-0 text-sm font-medium whitespace-nowrap text-gray-50 ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:pb-1 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      itemPath="/goi-cuoc-viettel/V150N"
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
        Lợi ích khi sử dụng gói cước V150N
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Dung lượng dữ liệu lớn:</b> Cung cấp 180GB/tháng (6GB/ngày) giúp
        người dùng thoải mái truy cập internet mà không phải lo lắng về data
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Tốc độ truy cập cao:</b> Thoả sức xem video, clip, hay chơi game trực
        tuyến mà không gặp trở ngại về tốc độ
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Miễn phí cước viễn thông:</b> Miễn phí cước nội mạng dưới 20 phút và
        100 phút gọi ngoại mạng
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Đa nền tảng:</b> Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên
        tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube,
        Telegram, Zalo, Viber, Instagram, ...)
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Cước phí minh bạch:</b> Hết dung lượng trong ngày, dịch vụ sẽ tạm
        dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu
        ngày mới, áp dụng suốt chu kỳ
      </p>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Cách quản lý gói cước V150N
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Để kiểm tra dung lượng data gói cước V150N: Soạn &quot;KTTK&quot; gửi
        191 (miễn phí)
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Để hủy gói V150N: Soạn &quot;HUY V150N&quot; gửi 191 (miễn phí)
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/tin-tuc/tong-dai-viettel"
        >
          Tổng đài CSKH Viettel
        </a>
        : 198 (miễn phí)
      </p>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất
      </h2>
      <PriceTableMXH100V3 itemPath="/goi-cuoc-viettel/V150N" />
      <br />
    </div>
  );
}
