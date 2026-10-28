import { siteConfig } from "@/lib/site-config";
/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "../article-layout";
import { newsArticles } from "../article-records";
/** Authored sections from archive 0128; keep historical copy and source irregularities. */
export default function NineStyleArticle() {
  return (
    <ArticleLayout article={newsArticles["nine-style"]}>
      <NineStyleIntroduction />
      <NineStyleNINEstyleLaGiDinhNghiaPhongCachSongThoiDai5G />
      <NineStyleSection3TruCotTaoNenNINEstyleLoiSongCuaSuUuTien />
      <NineStyleTaiSaoNguoiDanDauChonNINEViettel />
      <NineStyleChiTietCacGoiCuocDinhHinhNINEstyle />
      <NineStyleCachDangKyGoiCuocNINE />
      <NineStyleLuuYVeUuDaiTangKem />
    </ArticleLayout>
  );
}
function NineStyleIntroduction() {
  return (
    <>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {
          "Trong kỷ nguyên 5G, kết nối không chỉ đơn thuần là nghe gọi. Với những người đang làm chủ cuộc sống, kết nối là cơ hội, là tốc độ xử lý công việc và là sự khẳng định vị thế cá nhân. Đó chính là lý do "
        }
        <b>NINEstyle</b>
        {
          " ra đời – một khái niệm mới về lối sống hiện đại được kiến tạo bởi hệ gói cước "
        }
        <b>NINE Viettel</b>.
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="Gói Nine Viettel (N-series) là dòng trả sau cao cấp thế hệ mới, cung cấp đặc quyền 5G tốc độ cao, data khủng (lên tới 50GB/ngày), miễn phí mạng xã hội, thoại và SMS. Gói cước dành cho khách hàng ưu tiên."
          loading="lazy"
          width="900"
          height="563"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F7gg8qwNti3g3993PBFdmvE%2F1336f490089e78db5fefc9485308a490%2Fviettelup_4.jpeg&w=1920&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">
          Gói Nine Viettel (N-series) là dòng trả sau cao cấp thế hệ mới, cung cấp đặc
          quyền 5G tốc độ cao, data khủng (lên tới 50GB/ngày), miễn phí mạng xã hội, thoại
          và SMS. Gói cước dành cho khách hàng ưu tiên.
        </p>
      </div>
    </>
  );
}

function NineStyleNINEstyleLaGiDinhNghiaPhongCachSongThoiDai5G() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        NINEstyle là gì? Định nghĩa phong cách sống thời đại 5G
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>NINEstyle</b>
        {
          " không chỉ là tên gọi của một dòng gói cước; đó là phong cách sống của thế hệ người dùng thông minh, những người coi trọng giá trị của sự ưu tiên. Lấy cảm hứng từ con số 9 – con số của sự viên mãn và vĩnh cửu, NINEstyle đại diện cho một cuộc sống không giới hạn, nơi mọi rào cản về công nghệ và khoảng cách đều bị xóa bỏ nhờ hạ tầng 5G vượt trội của Viettel."
        }
      </p>
    </>
  );
}

function NineStyleSection3TruCotTaoNenNINEstyleLoiSongCuaSuUuTien() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        3 Trụ cột tạo nên NINEstyle – Lối sống của sự ưu tiên
      </h2>
      <h3 className="py-3 text-20 font-bold leading-[28px] md:text-24 md:leading-[32px]">
        <i>3 lợi ích mà gói cước NINE mang lại cho bạn</i>
      </h3>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>1. Kết nối không giới hạn với hạ tầng 5G ưu tiên</b>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>NINEstyle</b>
        {
          ' đảm bảo bạn luôn ở trong "luồng ưu tiên" của băng thông 5G. Dù bạn đang ở giữa sự kiện đông đúc hay trong tòa nhà cao tầng, tốc độ data của gói NINE luôn được tối ưu để đảm bảo những cuộc họp video 4K, những tệp dữ liệu khổng lồ được truyền đi trong tích tắc.'
        }
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>2. Tận hưởng đặc quyền đẳng cấp (Beyond Telecom)</b>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Khi trở thành chủ nhân của các gói cước NINE cao cấp (từ "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/goi-cuoc-nine/N500")}
        >
          {"N500 "}
        </a>
        trở lên), bạn sẽ nhận được đặc quyền:
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
            <b>Phòng chờ thương gia (Business Lounge):</b>
            {
              " Tận hưởng không gian yên tĩnh, sang trọng tại các sân bay lớn trong khi chờ đợi chuyến bay."
            }
          </p>
        </li>
        <li>
          <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
            <b>Hỗ trợ ưu tiên:</b>
            {
              " Được phục vụ bởi đội ngũ chăm sóc khách hàng chuyên biệt, xử lý mọi yêu cầu trong thời gian ngắn nhất."
            }
          </p>
        </li>
      </ul>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Xem thêm: "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/goi-cuoc-nine/N500")}
        >
          Gói cước Viettel N500
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/goi-cuoc-nine/N1000")}
        >
          Gói cước Viettel N1000
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/goi-cuoc-nine/N2000")}
        >
          Gói cước Viettel N2000
        </a>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>3. Tự do dịch chuyển toàn cầu</b>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Với ưu đãi Data Roaming (*) (chuyển vùng quốc tế) được tích hợp sẵn, bạn có thể tự
        tin bước xuống máy bay tại hơn 150 quốc gia mà không cần lo lắng về việc mua SIM
        mới hay mất kết nối với đối tác.
      </p>
    </>
  );
}

function NineStyleTaiSaoNguoiDanDauChonNINEViettel() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Tại sao người dẫn đầu chọn NINE Viettel?
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Không phải ngẫu nhiên mà "}
        <b>NINE Viettel</b>
        {
          " lại tạo nên một cơn sốt trong cộng đồng doanh nhân và những người có sức ảnh hưởng (KOLs/KOCs). Họ chọn NINEstyle vì:"
        }
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
            <b>Sự liền mạch tuyệt đối:</b>
            {
              ' Dung lượng data lên đến 50GB/ngày giúp xóa bỏ hoàn toàn nỗi lo "hết lưu lượng" giữa chừng.'
            }
          </p>
        </li>
        <li>
          <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
            <b>Vị thế hội viên Kim Cương:</b>
            {
              " Tự động tích lũy điểm và nâng hạng Viettel++, mở khóa hàng loạt ưu đãi từ khách sạn 5 sao, sân golf đến các nhà hàng cao cấp."
            }
          </p>
        </li>
        <li>
          <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
            <b>Trải nghiệm cá nhân hóa:</b>
            {
              " Mọi dịch vụ từ âm nhạc (Spotify), video (YouTube, TikTok) đến mạng xã hội đều được miễn phí data, phục vụ tối đa nhu cầu giải trí cá nhân."
            }
          </p>
        </li>
      </ul>
    </>
  );
}

function NineStyleChiTietCacGoiCuocDinhHinhNINEstyle() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Chi tiết các gói cước định hình NINEstyle
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        {"Để gia nhập cộng đồng "}
        <b>NINEstyle</b>, Viettel mang đến nhiều lựa chọn linh hoạt phù hợp với mức độ chi
        tiêu của bạn:
      </p>
      <p className="pb-2 text-18 leading-[28px] md:text-20 md:leading-[28px]">
        <b>PHÂN HẠNG KHỞI ĐẦU (N200 – N350)</b>
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <b>Tên gói</b>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <b>Chi tiết</b>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <b>Ưu đãi đặc biệt</b>
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
                      href={siteConfig.url("/goi-cuoc-nine/N200")}
                    >
                      <b>N200</b>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    8GB/ngày
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    20p nội / 150p ngoại
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    100 SMS
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data, YouTube, Spotify.
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Voucher phòng chờ thương gia: 1 lần/tháng, tối đa 2 voucher/năm
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
                      href={siteConfig.url("/goi-cuoc-nine/N250")}
                    >
                      <b>N250</b>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    10GB/ngày
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    30p nội / 150p ngoại
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    150 SMS
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data, YouTube, Spotify
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Voucher phòng chờ thương gia: 1 lần/tháng, tối đa 2 voucher/năm
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
                      href={siteConfig.url("/goi-cuoc-nine/N300")}
                    >
                      <b>N300</b>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    12GB/ngày
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    60p nội / 200p ngoại
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    200 SMS
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phí
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Voucher phòng chờ thương gia: 1 lần/tháng, tối đa 2 voucher/năm
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
                      href={siteConfig.url("/goi-cuoc-nine/N350")}
                    >
                      <b>N350</b>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    15GB/ngày
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    60p nội / 300p ngoại
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    200 SMS
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phí
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Voucher phòng chờ thương gia: 1 lần/tháng, tối đa 2 voucher/năm
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="pb-2 text-18 leading-[28px] md:text-20 md:leading-[28px]">
        <b>PHÂN HẠNG TIÊU CHUẨN (N400-N500)</b>
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <b>Tên gói</b>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <b>Chi tiết</b>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <b>Ưu đãi đặc biệt</b>
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
                      href={siteConfig.url("/goi-cuoc-nine/N400")}
                    >
                      <b>N400</b>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    17GB/ngày
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    60p nội / 300p ngoại
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    200 SMS
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phí
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Voucher phòng chờ thương gia: 1 lần/tháng, tối đa 4 voucher/năm
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
                      href={siteConfig.url("/goi-cuoc-nine/N500")}
                    >
                      <b>N500</b>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    20GB/ngày
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    {"60p nội / 300p ngoại\t"}
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    250 SMS
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phí
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Voucher phòng chờ thương gia: 1 lần/tháng, tối đa 4 voucher/năm
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
        PHÂN HẠNG THƯỢNG LƯU (N1000-N2000)
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
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <b>Tên gói</b>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <b>Chi tiết</b>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    <b>Ưu đãi đặc biệt</b>
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
                      href={siteConfig.url("/goi-cuoc-nine/N1000")}
                    >
                      <b>N1000</b>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    30GB/ngày
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    {"60p nội / 300p ngoại\t"}
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    250 SMS
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phí
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Voucher phòng chờ thương gia: 1 lần/tháng, tối đa 12 voucher/năm
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
                      href={siteConfig.url("/goi-cuoc-nine/N2000")}
                    >
                      <b>N2000</b>
                    </a>
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    50GB/ngày
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    60p nội / 400p ngoại
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    250 SMS
                  </p>
                </td>
                <td className="border border-b-0 border-l-0 border-r border-t border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3 [&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16">
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phí
                  </p>
                  <p className="pb-2 text-12 leading-[22px] md:text-14 md:leading-[22px]">
                    Voucher phòng chờ thương gia: 1 lần/tháng, tối đa 12 voucher/năm
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

function NineStyleCachDangKyGoiCuocNINE() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Cách đăng ký gói cước NINE
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Cách 1:</b>
        {" ĐĂNG KÝ NHANH tại "}
        <u>ĐÂY</u>
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        Bạn chỉ cần nhập Tên và Số điện thoại, thông tin sẽ được gửi đến Tổng đài Viettel
        và nhân viên sẽ gọi xác nhận lại cho bạn chỉ sau vài phút.
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <b>Cách 2:</b>
        {" Truy cập ứng dụng "}
        <b>{"My Viettel --> "}</b>Tìm kiếm từ khóa &quot;<b>NINE</b>
        {'" tại mục tìm kiếm hoặc chọn mục '}
        <b>Gói cước</b>
        {" > "}
        <b>{"Trả sau --> "}</b>
        {"Chọn gói cước "}
        <b>NINE</b>
        {" phù hợp với phong cách sống của bạn và ấn "}
        <b>&quot;Đăng ký&quot;</b>.
      </p>
    </>
  );
}

function NineStyleLuuYVeUuDaiTangKem() {
  return (
    <>
      <h2 className="py-[20px] text-24 leading-[28px] md:text-[28px] md:leading-[32px]">
        Lưu ý về ưu đãi tặng kèm
      </h2>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        (*) Thuê bao khi chuyển đổi sang gói NINE sẽ được tặng 01 lần sử dụng gói Data
        Roaming miễn phí (áp dụng cho các lượt chuyển đổi thực hiện đến hết 31/12/2025,
        với hạn dùng gói quà tặng kéo dài đến hết 31/12/2026).
      </p>
      <p className="pb-2 text-16 leading-[24px] md:text-18 md:leading-[24px]">
        <i>
          {
            "Để kiểm tra chính xác quà tặng Roaming dành riêng cho số thuê bao của mình, bạn có thể soạn tin nhắn theo cú pháp: "
          }
        </i>
        <i>
          <b>KT QT</b>
        </i>
        <i>{" gửi "}</i>
        <i>
          <b>191</b>
        </i>
        <i>{" hoặc kiểm tra trong mục "}</i>
        <i>
          <b>NINE</b>
        </i>
        <i>{" trên ứng dụng My Viettel."}</i>
      </p>
      <br />
    </>
  );
}
