/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "../article-layout";
import { newsArticles } from "../article-records";
/** Authored sections from archive 0144; keep historical copy and source irregularities. */
export default function GoiCuoc5gViettelTet5gArticle() {
  return (
    <ArticleLayout article={newsArticles["goi-cuoc-5g-viettel-tet5g"]}>
      <GoiCuoc5gViettelTet5gIntroduction />
      <GoiCuoc5gViettelTet5gQuyDinhChungCuaGoiCuoc />
      <GoiCuoc5gViettelTet5gDoiNetVeGoiCuoc5GViettel />
    </ArticleLayout>
  );
}
function GoiCuoc5gViettelTet5gIntroduction() {
  return (
    <>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <i>
          {
            "Thấu hiểu nhu cầu nghe gọi, sử dụng internet của khách hàng tăng cao những ngày cận Tết, Viettel ra mắt gói cước 5G mới - TET5G chỉ 50.000 đồng, giúp khách hàng được trải nghiệm 5G đầy đủ tiện ích với mức giá phải chăng. "
          }
        </i>
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
                    TÊN GÓI
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
                  <br />
                </th>
              </tr>
              <tr className="border border-b-0 border-l-0 border-r border-t border-black">
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    TET5G
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - 25GB (5GB/ngày)
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí cuộc gọi nội mạng dưới 10 phút và 25 phút gọi ngoại mạng.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí SMS Viettel.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    - Miễn phí TV360.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    (Áp dụng cho cả thuê bao 4G và 5G)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    50.000đ
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    (5 ngày)
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0">
                  <div className="flex justify-center md:hidden">
                    <a
                      className="flex h-[28px] w-[80px] items-center justify-center rounded-full bg-primary text-12 font-medium text-gray-50 hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 md:w-[106px] md:text-14"
                      href="sms:290?body=TET5G UP"
                    >
                      ĐĂNG KÝ
                    </a>
                  </div>
                  <div className="hidden justify-center md:flex">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary hover:bg-primary-dark dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-4 rounded-full py-0 h-[28px] w-[106px] font-medium text-gray-50 md:pb-1 md:text-16"
                      href="sms:290?body=TET5G UP"
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

function GoiCuoc5gViettelTet5gQuyDinhChungCuaGoiCuoc() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Quy định chung của gói cước
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Đăng ký gói qua SMS: TET5G UP gửi 290
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Huỷ gia hạn gói: HUY TET5G gửi 191
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Huỷ gói cước: HUYDATA TET 5G gửi 191
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Tra cứu lưu lượng data: KTTK gửi 191 hoặc truy cập "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://viettel.vn/app"
        >
          My Viettel
        </a>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Thuê bao được gia hạn khi hết chu kỳ. Không khôi phục
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Gói cước áp dụng cho cả thuê bao 4G và 5G
      </p>
    </>
  );
}

function GoiCuoc5gViettelTet5gDoiNetVeGoiCuoc5GViettel() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Đôi nét về gói cước 5G Viettel
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {
          "Nếu như trước đây khách hàng phải bỏ ra từ 135.000đ để đăng ký các gói cước 5G, thì nay chỉ với 50.000 đồng, khách hàng đã có thể trải nghiệm gói cước 5G mới của nhà mạng Viettel. Chỉ với 50.000 đồng, khách hàng sẽ được sử dụng trọn vẹn tiện ích với 25GB data 5G tốc độ cao, miễn phí gọi mạng Viettel (tối đa 10 phút/cuộc) và mạng ngoài Viettel (tối đa 25 phút), miễn phí nhắn tin đến mạng Viettel trong vòng 5 ngày sử dụng. Đặc biệt, khách hàng còn được xem các chương trình truyền hình, phim Tết trên ứng dụng TV360 hoàn toàn miễn phí. Đây là cơ hội tuyệt vời để khách hàng trải nghiệm công nghệ mới, 5G siêu tốc độ, đáp ứng trọn vẹn nhu cầu trong dịp Tết này mà không phải lo lắng về chi phí. Khách hàng có thể bắt đầu đăng ký gói cước TET5G từ ngày 14/01/2025 đến hết ngày 12/02/2025 với cú pháp TET5G UP gửi 290. "
        }
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="5g-viettel"
          loading="lazy"
          width="599"
          height="449"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F1gqCwlqe5eFSzUHQL6mTFa%2F663a7758be6db1cca8fc02d4584f771e%2F5g-viettel.jpg&w=1200&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">5g-viettel</p>
      </div>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {
          "Theo chuyên gia viễn thông của ITU, chính phủ cũng như các nhà mạng Việt Nam cần tập trung phủ sóng 5G rộng trên toàn quốc. Việc Viettel là nhà mạng đầu tiên triển khai gói cước 5G giá rẻ là tiền đề để đưa mạng 5G đến gần hơn với tất cả mọi người. \nBên cạnh đó, trong khuôn khổ chương trình “Tết mới, Quà tới”, từ nay đến hết ngày 28 tháng 2, Viettel tri ân khách hàng với hàng loạt các ưu đãi xuyên Tết như: khách hàng được nhận được mã số may mắn khi đăng ký các dịch vụ 5G, internet wifi, truyền hình TV360 của Viettel với tổng giá trị giải thưởng lên tới 2,5 tỷ đồng, chương trình lì xì Tết tới 99.999 điểm Viettel++. Hàng ngàn voucher mua sắm, dịch vụ cũng được tung ra trong giai đoạn này. Những chương trình khuyến mãi này không chỉ mang lại niềm vui mà còn góp phần làm phong phú thêm trải nghiệm sử dụng dịch vụ của khách hàng trong dịp Tết Nguyên đán sắp tới. Để biết thêm thông tin chi tiết, khách hàng có thể liên hệ tổng đài miễn phí 18008098. "
        }
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="5g-viettel2"
          loading="lazy"
          width="598"
          height="397"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2FhxUACVV9gjl8z6p2G5nN4%2F4f8a1a5857f9b77a309a9f97f8290408%2F5g-viettel2.jpg&w=1200&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">5g-viettel2</p>
      </div>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {
          "Viettel khai trương mạng 5G đầu tiên và lớn nhất Việt Nam với hơn 6.500 trạm phát sóng với vùng phủ ngoài trời trên 90% khu vực thủ phủ 63 tỉnh, thành phố, các khu công nghiệp, trường học, sân bay, cảng biển,… Mạng 5G Viettel nhanh chóng đạt mốc 3 triệu người dùng chỉ 2 tuần sau khi khai trương và tính đến nay đã có 70% thuê bao trong vùng phủ 5G Viettel đã sử dụng 5G (tương đương 4 triệu khách hàng), lưu lượng internet trên 5G đã chiếm 30% ở khu vực triển khai, cho thấy sức hút và tiềm năng của 5G tại Việt Nam là rất lớn. \nTốc độ mạng 5G Viettel có thể đạt từ 700Mbps-1Gb, gấp 10 lần so với 4G và độ trễ thấp gần như bằng 0, được triển khai đồng thời trên cả 2 nền tảng kiến trúc 5G NSA (non stand alone) và 5G SA (stand alone). Việc Viettel chính thức cung cấp dịch vụ 5G được đánh giá là cú hích để các nhà mạng khác tham gia vào tiến trình thương mại hóa một cách mạnh mẽ hơn, thúc đẩy mục tiêu chuyển đổi số quốc gia, cung cấp nền tảng cho các doanh nghiệp và tổ chức áp dụng công nghệ số; đồng thời giúp cải thiện chất lượng cuộc sống người dùng."
        }
      </p>
      <br />
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Tham khảo "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/tin-tuc/dang-ky-5g-viettel-2024"
        >
          danh sách gói cước 5G Viettel
        </a>
      </p>
      <br />
    </>
  );
}
