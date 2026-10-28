import { siteConfig } from "@/lib/site-config";
/* Source copy: /goi-cuoc-viettel/V150N. Preserve irregular tables, links and paragraphs here. */
import { PackageSourceDialogTrigger } from "../_components/package-source-dialog-trigger";
export default function GeneralV150NPageDetails() {
  return (
    <div className="flex flex-col">
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        V150N - Gói cước 4G Viettel chỉ 150.000đ nhận ngay 180GB data/tháng,
        tương đương 6GB/ngày. Miễn phí cước gọi nội mạng dưới 20 phút và 100
        phút gọi ngoại mạng.
      </p>
      <p className="pb-2 text-14 leading-[25px] md:text-16 md:leading-[24px]">
        <i>
          Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và
          gia hạn lại gói V150N, thay vào đó là các{" "}
        </i>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/tin-tuc/goi-cuoc-data-4g-viettel-2024")}
        >
          <u>
            <i>gói cước 4G khuyến mãi</i>
          </u>
        </a>
        <i> mới được cập nhật từ 15/06/2023</i>
      </p>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Thông tin chi tiết gói cước V150N của Viettel
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Tên gói cước: <b>V150N</b>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Cước phí: <b>150.000đ</b>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Thời hạn sử dụng: <b>1 tháng</b>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Dung lượng: <b>180GB/30 ngày </b>(4GB/ngày)
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Ưu đãi đặc biệt:{" "}
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Miễn phí cước gọi nội mạng dưới 20 phút</b>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Miễn phí 100 phút cước gọi ngoại mạng</b>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Đối tượng áp dụng: Thuê bao di động mạng Viettel trong danh sách được
        hưởng ưu đãi
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Đăng ký qua SMS: <b>V150N UP </b>
        gửi <b>290</b>
      </p>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Cách đăng ký gói cước V150N
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Đăng ký qua tin nhắn SMS: </b>
        Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú
        pháp <b>V150N UP </b>gửi<b> 290</b>. Sau khi gửi, bạn sẽ nhận được thông
        báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có
        thể click nút đăng ký trên website {siteConfig.hostname}, hỗ trợ bạn soạn tin
        nhắn nhanh hơn.
      </p>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Điều kiện đăng ký gói cước V150N
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính
        là 150.000 đồng để đăng ký gói cước.
      </p>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Lựa chọn nâng cao dành riêng cho gói cước V150N
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
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
          <table className="border-separate border-spacing-0 rounded-md border border-b border-l border-r border-t border-black">
            <tbody>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐƠN GIÁ
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐĂNG KÝ
                  </p>
                </th>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    3V150N
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    540GB (6GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    450.000đ (3 tháng)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=3V150N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    6V150N
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    1.080GB (6GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    900.000đ (6 tháng)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=6V150N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    12V150N
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    2.160GB (6GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí gọi
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    1.800.000đ (12 tháng)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=12V150N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
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
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Lợi ích khi sử dụng gói cước V150N
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Dung lượng dữ liệu lớn:</b> Cung cấp 180GB/tháng (6GB/ngày) giúp
        người dùng thoải mái truy cập internet mà không phải lo lắng về data
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Tốc độ truy cập cao:</b> Thoả sức xem video, clip, hay chơi game trực
        tuyến mà không gặp trở ngại về tốc độ
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Miễn phí cước viễn thông:</b> Miễn phí cước nội mạng dưới 20 phút và
        100 phút gọi ngoại mạng
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Đa nền tảng:</b> Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên
        tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube,
        Telegram, Zalo, Viber, Instagram, ...)
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Cước phí minh bạch:</b> Hết dung lượng trong ngày, dịch vụ sẽ tạm
        dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu
        ngày mới, áp dụng suốt chu kỳ
      </p>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Cách quản lý gói cước V150N
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Để kiểm tra dung lượng data gói cước V150N: Soạn &quot;KTTK&quot; gửi
        191 (miễn phí)
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Để hủy gói V150N: Soạn &quot;HUY V150N&quot; gửi 191 (miễn phí)
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
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
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất
      </h2>
      <div className="flex justify-start overflow-x-auto py-4 sm:justify-center md:py-8">
        <div
          className="source-package-table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Bảng thông tin gói cước"
        >
          <table className="border-separate border-spacing-0 rounded-md border border-b border-l border-r border-t border-black">
            <tbody>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    GÓI CƯỚC
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ƯU ĐÃI
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐƠN GIÁ (tháng)
                  </p>
                </th>
                <th className="border border-b-0 border-l-0 border-r border-t-0 border-black bg-primary px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    ĐĂNG KÝ
                  </p>
                </th>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí data TikTok, Youtube, Facebook, Messenger,
                    Instagram.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
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
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí data TikTok, Youtube, Facebook, Messenger,
                    Instagram.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
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
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí data TikTok, Youtube, Facebook, Messenger,
                    Instagram.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi
                    ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
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
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href={siteConfig.url("/goi-cuoc-viettel/SD70")}
                    >
                      <u>SD70</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    30GB (1GB/ngày){" "}
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    70.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=SD70 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    45GB (1.5GB/ngày){" "}
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    90.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=SD90 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    60GB (2GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=SD120 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    150GB (5GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    135.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=SD135 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    90GB (3GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí TV360
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=SD150 UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    30GB (1GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí 30 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    90.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=V90B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    45GB (1.5GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí 50 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    120.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=V120B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    60GB (2GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí 80 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    150.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=V150B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    120GB (4GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí 100 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    160.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=V160B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    180GB (6GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí 100 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    180.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=V180B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    240GB (8GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 20 phút.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí 100 phút gọi ngoại mạng.
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    200.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=V200B UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      itemPath="/goi-cuoc-viettel/V150N"
                    >
                      Đăng ký
                    </PackageSourceDialogTrigger>
                  </div>
                </td>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    150GB (5GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi
                    ngoại mạng
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí SMS
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí TV360
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&>p]:text-14 [&>p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    300.000đ
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=30N UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <PackageSourceDialogTrigger
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
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
      <br />
    </div>
  );
}
