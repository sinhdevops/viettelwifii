/* eslint-disable @next/next/no-img-element */
import { sourceAsset } from "@/lib/viettelup-source-assets";
import { ArticleLayout } from "@/components/news/article-layout";
import { newsArticles } from "@/constants/news/article-records";
/** Authored sections from archive 0149; keep historical copy and source irregularities. */
export default function Viettel35NamDongChayHanhPhucArticle() {
  return (
    <ArticleLayout article={newsArticles["viettel-35-nam-dong-chay-hanh-phuc"]}>
      <Viettel35NamDongChayHanhPhucIntroduction />
      <Viettel35NamDongChayHanhPhucTuSo01VietNamVuonMinhRaNamChau />
      <Viettel35NamDongChayHanhPhucTuPhoCapVienThongDenTienPhongKienTaoXaHoiSo />
    </ArticleLayout>
  );
}
function Viettel35NamDongChayHanhPhucIntroduction() {
  return (
    <>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Mọi miền đất trù phú, mọi nền văn minh thịnh vượng đều bắt đầu từ những dòng chảy bất tận. Như một dòng chảy âm thầm, bền bỉ và mạnh mẽ, suốt 35 năm, Viettel len lỏi trong từng ngóc ngách của đời sống người Việt, góp phần kiến tạo 1 cuộc sống hạnh phúc, 1 xã hội phồn thịnh. "
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Dòng chảy khởi nguồn từ những năm 90 cuối thập kỷ 20, khi đó tiền thân
        của Viettel là 1 đơn vị xây lắp, chưa chính thức bước vào địa hạt viễn
        thông. Dấu ấn đậm nét cho năng lực của Viettel khi ấy là xây dựng thành
        công đường trục cáp quang 1A với công nghệ thu phát trên cùng 1 sợi
        quang.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          'Vào năm 2000, Viettel chính thức được cấp giấy phép và khai trương đầu số 178 trên nền dịch vụ VoiP đánh dấu cột mốc lịch sử mới của nền viễn thông Việt Nam. VoiP 178 là mốc son đánh dấu sự chuyển mình của Viettel từ kẻ làm thuê lên thành người làm chủ, là vốn dắt lưng của “gã khổng lồ" từ những ngày đầu để tạo nên kỳ tích như bây giờ. '
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Đến năm 2004, Viettel ra đời dịch vụ di động với đầu số 098, khép lại dịch vụ 178. Với mong muốn phổ cập di động cho người dân, khi ấy vẫn được coi là một dịch vụ xa xỉ, Viettel từng bước xây dựng hạ tầng và mạng lưới, để ở bất cứ đâu trên lãnh thổ Việt Nam đều có sóng Viettel, để người dân được dùng di động với giá rẻ hơn gấp nhiều lần. Sự ra mắt của gói cước Tomato đã tạo nên 1 cú hích, Viettel trên đà tăng trưởng năm sau gấp đôi năm trước. "
        }
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="khai truong 098"
          loading="lazy"
          width="3264"
          height="2448"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F4CRhOoMAF3xXo219b8QI81%2Fe5c63f20cb606274ccb039ce3d01d446%2F098_khai_tr%C6%B0%C6%A1ng.jpeg&w=3840&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">khai truong 098</p>
      </div>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Từ năm 2005 - 2017, liên tục bùng nổ với các cuộc cách mạng 2G-3G-4G và 5G tới đây, dòng chảy Viettel đã thực sự hoà quyện vào cuộc sống của người Việt. Trong suốt chặng đường hơn 2 thập kỉ qua, dòng chảy ấy đã bồi đắp phù sa mỗi nơi mà nó đi qua với: "
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <i>Hơn 97% xã phường đường được phủ sóng 4G</i>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <i>
          {
            "Hơn 70 triệu kết nối di động với 85% được kết nối tốc độ cao với công nghệ 4G,  5G "
          }
        </i>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <i>
          Hơn 56% thị phần di động và vị trí số 1 về thị phần di động tại Việt
          Nam
        </i>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <i>
          Hơn 622 nhà mạng tại 215 quốc gia vùng lãnh thổ trên thế giới được kết
          nối
        </i>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Không dừng lại ở dịch vụ Viễn thông, dòng chảy Viettel không ngừng mạnh mẽ, vượt mọi địa hình vươn đến những vùng đất mới, chinh phục những giới hạn mới. "
        }
      </p>
      <br />
    </>
  );
}

function Viettel35NamDongChayHanhPhucTuSo01VietNamVuonMinhRaNamChau() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>{"Từ số 01 Việt Nam vươn mình ra năm châu "}</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Khởi đầu với Metfone vào năm 2009, Viettel liên tục mở rộng thị trường quốc tế với việc triển khai hoạt động từ châu Á đến châu Phi và Mỹ Latinh. 10 công ty mang thương hiệu của Viettel đang hoạt động trên 3 châu lục, phục vụ hơn 100 triệu khách hàng. Trong đó, ở 6/10 thị trường, Viettel đang đứng ở vị trí hàng đầu về thị phần thuê bao bao gồm: Campuchia, Lào, Burundi, Đông Timor, Mozambique và Myanmar. "
        }
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="viettel global"
          loading="lazy"
          width="2048"
          height="2048"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F6oS3FeUrtdGYwilxSkSHju%2F75eb7a3c6d1551b77977e1b169d5257b%2Fviettel_global_map.jpeg&w=3840&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">viettel global</p>
      </div>
    </>
  );
}

function Viettel35NamDongChayHanhPhucTuPhoCapVienThongDenTienPhongKienTaoXaHoiSo() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>{"Từ phổ cập viễn thông đến tiên phong kiến tạo xã hội số "}</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Từ ngành nghề chính ban đầu là xây lắp công trình viễn thông, đến nay Viettel đã phát triển thêm 5 ngành nghề mới gồm ngành dịch vụ viễn thông & CNTT, nghiên cứu sản xuất thiết bị điện tử viễn thông, công nghiệp quốc phòng, công nghiệp an ninh mạng và ngành cung cấp dịch vụ số. Làm chủ công nghệ mạng 5G, và tiến tới là 6G, Viettel càng khẳng định vị thế và năng lực nghiên cứu, sản xuất các công nghệ lõi, sẵn sàng tiến vào kỉ nguyên mới, nơi vạn vật kết nối. "
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Sau 35 năm phát triển, Viettel đã thực sự lớn mạnh, thương hiệu viễn thông trị giá gần 9 tỷ đô la Mỹ, top 17 trên thế giới, số 1 Đông Nam Á, sẽ TIẾP NỐI sứ mệnh tiên phong, chủ lực kiến tạo xã hội số. "
        }
      </p>
      <div className="mx-auto my-6 w-fit text-center">
        <img
          alt="viettel 35 nam"
          loading="lazy"
          width="600"
          height="600"
          decoding="async"
          className="mx-auto w-full max-w-[800px] md:w-[unset]"
          style={{ color: "transparent" }}
          src={sourceAsset(
            "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F1fpapFKgwS6ETvCBOpUxj9%2Fed33e50062cb8baf8229f16eb27a85dd%2FVT-35nam-mobile.jpg&w=1200&q=75",
          )}
        />
        <p className="bg-neutral-200 p-1 italic">viettel 35 nam</p>
      </div>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Những dòng chảy từ yên ả đến mạnh mẽ của Viettel  đã len lỏi vào từng ngóc ngách của cuộc sống người Việt theo cách đó. Lúc hiện hữu khi âm thầm. Thế nhưng, không lúc nào ngưng sứ mệnh kiến tạo những rực rỡ tươi xanh cho cuộc sống. "
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Luôn sáng tạo để cuộc sống của con người ngày càng tốt hơn. "}
      </p>
      <br />
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Viettel, Theo cách của bạn. "}
      </p>
      <br />
    </>
  );
}
