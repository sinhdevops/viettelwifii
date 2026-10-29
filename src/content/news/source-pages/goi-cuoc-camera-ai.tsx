import { siteConfig } from "@/lib/site-config";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "@/components/news/article-layout";
import { newsArticles } from "@/constants/news/article-records";
/** Authored sections from archive 0127; keep historical copy and source irregularities. */
export default function GoiCuocCameraAiArticle() {
  return (
    <ArticleLayout article={newsArticles["goi-cuoc-camera-ai"]}>
      <GoiCuocCameraAiIntroduction />
      <GoiCuocCameraAiTopGoiCuocInternetTichHopCameraDuocYeuThichNhat />
      <GoiCuocCameraAiLapDatGoiInternetCameraMienPhi />
    </ArticleLayout>
  );
}
function GoiCuocCameraAiIntroduction() {
  return (
    <>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Trong thời đại số, việc vừa đi làm vừa muốn quan sát, đảm bảo an toàn cho con nhỏ tại nhà là nhu cầu thiết yếu. Hiểu được điều đó, Viettel ra mắt dòng gói cước "
        }
        <b>Camera gia đình an tâm</b>, kết hợp hoàn hảo giữa đường truyền
        Internet cáp quang siêu tốc và công nghệ Camera AI thông minh.
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="Camera an ninh tặng kèm khi đăng ký internet Viettel được trang bị độ phân giải cao, cho phép bạn ghi lại những hình ảnh sắc nét và rõ ràng."
          loading="lazy"
          width="900"
          height="563"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2FmCYPz4oLK0NkBEn24lMXw%2Fe2f0eb27e66d9ecb8354f6229bf6f67f%2Fviettelup5.jpeg&w=1920&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">
          Camera an ninh tặng kèm khi đăng ký internet Viettel được trang bị độ
          phân giải cao, cho phép bạn ghi lại những hình ảnh sắc nét và rõ ràng.
        </p>
      </div>
    </>
  );
}

function GoiCuocCameraAiTopGoiCuocInternetTichHopCameraDuocYeuThichNhat() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Top gói cước Internet tích hợp Camera được yêu thích nhất
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Tùy vào nhu cầu sử dụng và diện tích căn hộ, ba mẹ có thể lựa chọn các
        gói cước phù hợp tại các khu vực Hà Nội, TP HCM và Tỉnh/TP như sau:
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
                    Gói cước tích hợp Camera AI
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Ưu đãi
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Giá cước
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
                      href="/internet/NETVT1_CAM1"
                    >
                      Gói NETVT1_CAM1
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"- Tốc độ "}
                    <b>350Mbps</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 01 Camera AI Viettel + lưu trữ Cloud 24h
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 01 Modem WiFi 6 Viettel
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Phù hợp hộ gia đình nhỏ, giúp giám sát bé, nhu cầu
                    internet cơ bản
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    từ 200.000đ/tháng
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
                      href="/internet/NETVT2_CAM1"
                    >
                      Gói NETVT2_CAM1
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"- Tốc độ từ "}
                    <b>500Mbps đến 1Gbps</b>{" "}
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 01 Camera AI Viettel + lưu trữ Cloud 24h
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 01 Modem WiFi 6 Viettel
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Phù hợp hộ gia đình có nhu cầu sử dụng mạng cao hơn
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    từ 260.000đ/tháng
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
                      href="/internet/MESHVT1_CAM1"
                    >
                      Gói MESHVT1_CAM1
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"- Tốc độ từ "}
                    <b>350Mbps đến 450Mbps</b>
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 01 Camera AI Viettel + lưu trữ Cloud 24h
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 01 Modem WiFi 6
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    -<b>{" 01 Mesh WiFi "}</b>(tương đương 02 vùng phủ)
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Phù hợp với gia đình có căn hộ 1-2 tầng, nhà có trẻ nhỏ và
                    người lớn tuổi cần giám sát
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    từ 230.000đ/tháng
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
                      href="/internet/MESHVT2_CAM1"
                    >
                      Gói MESHVT2_CAM1
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"- Tốc độ từ "}
                    <b>500Mbps đến 1Gbps</b>{" "}
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 01 Camera AI Viettel + lưu trữ Cloud 24h
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - 01 Modem WiFi 6
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {"- "}
                    <b>02 Mesh WiFi</b>
                    {" (tương đương 03 vùng phủ)"}
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    - Phù hợp với gia đình có căn hộ nhiều phòng, nhà cao tầng,
                    nhu cầu quản lý nhà thông minh
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    265.000đ/tháng
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

function GoiCuocCameraAiLapDatGoiInternetCameraMienPhi() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Lắp đặt gói Internet Camera miễn phí
      </h2>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        Bước 1: Đăng ký
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>{"Cách 1: "}</b>
        {"Nhanh nhất\nNhấn vào "}
        <u>
          <b>ĐÂY</b>
        </u>
        . Khách hàng để lại thông tin trên website và sẽ có nhân viên tư vấn
        liên hệ trực tiếp.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Cách 2:</b>
        {
          " Liên hệ tổng đài Viettel, cung cấp địa chỉ để kiểm tra hạ tầng và chọn gói cước phù hợp"
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Số tổng đài: {siteConfig.phoneNumber}
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        Bước 2: Lắp đặt tận nhà
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Nhân viên kỹ thuật đến tận nhà lắp đặt, lắp đặt camera, đi dây mạng (nếu
        cần), và kết nối internet.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        Bước 3: Kích hoạt
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Kỹ thuật viên cấu hình camera AI, cài đặt ứng dụng My Viettel trên điện
        thoại để quản lý.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        Bước 4: Nghiệm thu
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Kiểm tra hoạt động của camera và thanh toán phí hòa mạng "}
      </p>
      <br />
    </>
  );
}
