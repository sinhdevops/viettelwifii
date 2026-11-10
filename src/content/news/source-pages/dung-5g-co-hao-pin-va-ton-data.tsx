import { siteConfig } from "@/lib/site-config";
import { ArticleLayout } from "@/components/news/article-layout";
import { newsArticles } from "@/constants/news/article-records";
/** Authored sections from archive 0132; keep historical copy and source irregularities. */
export default function Dung5gCoHaoPinVaTonDataArticle() {
  return (
    <ArticleLayout article={newsArticles["dung-5g-co-hao-pin-va-ton-data"]}>
      <Dung5gCoHaoPinVaTonDataIntroduction />
      <Dung5gCoHaoPinVaTonDataTraLoi5GCoThucSuTonDataHon4GKhong />
      <Dung5gCoHaoPinVaTonDataTraLoiDung5GCoLamNongMayVaNhanhHetPinHon4GKhong />
      <Dung5gCoHaoPinVaTonDataGiaiPhapCachToiUu5GDeTietKiemPinToiDa />
      <Dung5gCoHaoPinVaTonDataNhungLyDoNenNangCapTu4GLen5GViettel />
      <Dung5gCoHaoPinVaTonDataLamTheNaoDeKiemTraVaDangKy5GViettel />
      <Dung5gCoHaoPinVaTonDataDanhSachGoiCuoc5GTietKiem />
      <Dung5gCoHaoPinVaTonDataCacCauHoiThuongGapVe5GHaoPinTonData />
    </ArticleLayout>
  );
}
function Dung5gCoHaoPinVaTonDataIntroduction() {
  return (
    <>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Rất nhiều người khi chuyển sang dùng 5G đều có chung nỗi lo: "}
        <b>“Bật 5G có làm hao pin nhanh hơn không?”</b>
        {" hoặc "}
        <b>“Dùng mạng 5G có tốn nhiều data hơn 4G không?”</b>. Điều này hoàn
        toàn dễ hiểu, vì sử dụng tốc độ cao hơn khiến người dùng lo rằng máy sẽ
        nóng nhanh, pin xuống nhanh và hết data trong thời gian ngắn.
      </p>
    </>
  );
}

function Dung5gCoHaoPinVaTonDataTraLoi5GCoThucSuTonDataHon4GKhong() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>{"Trả lời: "}</b>
        <b>5G có thực sự tốn data hơn 4G không?</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Câu trả lời là "}
        <b>KHÔNG</b>. Nếu bạn sử dụng cùng một nội dung ở cùng mức chất lượng,
        dung lượng tiêu thụ của 5G và 4G là hoàn toàn như nhau. Sở dĩ có hiểu
        lầm này là vì 5G có tốc độ cực nhanh, nhưng cơ chế tiêu thụ dữ liệu vẫn
        dựa trên tệp tin bạn xem:
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Nhu cầu cơ bản:</b>
            {
              " Lướt Facebook, TikTok, xem YouTube Full HD... tốn dung lượng tương đương 4G."
            }
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Cơ chế tải đệm:</b>
            {
              " Các ứng dụng hiện nay chỉ tải trước một phần dữ liệu, không tải toàn bộ nên không gây lãng phí data."
            }
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Sự khác biệt:</b>
            {
              " Data chỉ tốn hơn khi bạn tận dụng tốc độ 5G để xem video 4K hoặc chơi game đồ họa nặng – những thứ mà 4G khó đáp ứng mượt mà."
            }
          </p>
        </li>
      </ul>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Chốt lại:</b>
        {" 5G giúp trải nghiệm nhanh hơn, không phải tốn data hơn."}
      </p>
    </>
  );
}

function Dung5gCoHaoPinVaTonDataTraLoiDung5GCoLamNongMayVaNhanhHetPinHon4GKhong() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        <b>{"Trả lời: "}</b>
        <b>Dùng 5G có làm nóng máy và nhanh hết pin hơn 4G không?</b>
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Thực tế, việc sử dụng 5G sẽ tiêu tốn pin hơn 4G khoảng "}
        <b>5% - 11%</b>
        {
          " tùy vào dòng thiết bị. Tuy nhiên, tình trạng nóng máy và hao pin chỉ thực sự xảy ra trong các trường hợp cụ thể:"
        }
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Tải dữ liệu lớn:</b>
            {
              " Khi bạn download các tệp tin hàng GB hoặc xem video chất lượng 4K liên tục, chip xử lý phải hoạt động tối đa công suất."
            }
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Khu vực sóng yếu:</b>
            {
              " Tương tự như 4G, khi tín hiệu chập chờn, điện thoại phải tăng cường tìm kiếm sóng khiến máy nóng lên."
            }
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            <b>Tác vụ nhẹ:</b>
            {
              " Nếu chỉ lướt Facebook, đọc báo hay xem YouTube Full HD, sự khác biệt về pin giữa 4G và 5G là "
            }
            <b>không đáng kể</b>.
          </p>
        </li>
      </ul>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Mẹo nhỏ:</b>
        {
          ' Bạn có thể bật chế độ "5G tự động" trên điện thoại để máy chỉ chuyển sang 5G khi cần thiết, giúp tối ưu thời lượng pin hiệu quả.'
        }
      </p>
    </>
  );
}

function Dung5gCoHaoPinVaTonDataGiaiPhapCachToiUu5GDeTietKiemPinToiDa() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Giải Pháp: Cách Tối Ưu 5G để Tiết Kiệm Pin Tối Đa
      </h2>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        3 Cách Tắt/Tối ưu 5G để Tiết kiệm PIN và Data Tối Đa
      </h3>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        1. Bật chế độ Tự động (5G Auto) trên iPhone (giải pháp tiết kiệm pin):
        Chế độ này cho phép điện thoại iPhone tự động chuyển giữa 5G và 4G tùy
        theo nhu cầu, giúp tiết kiệm pin đáng kể so với việc luôn bật 5G.&#8203;
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "2. Chuyển về 4G thủ công khi Data không cần thiết (dành cho thiết bị Android): Bạn có thể vào "
        }
        <b>
          {'Cài đặt > Mạng di động > Chế độ mạng, rồi chọn "4G" hoặc "3G" '}
        </b>
        để tắt 5G khi không cần thiết, giúp giảm tiêu hao pin và data.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "3. Kiểm tra và Tắt các ứng dụng chạy ngầm (Background Data) trên cả hai hệ điều hành: Trên cả iOS và Android, vào "
        }
        <b>
          Cài đặt &gt; Dữ liệu di động hoặc Ứng dụng &gt; Chọn ứng dụng &gt; Tắt
          &quot;Dữ liệu nền&quot;
        </b>
        . Việc này giúp ngăn các ứng dụng ngốn data và hao pin khi không sử
        dụng.&#8203;
      </p>
      <h3 className="text-20 md:text-24 py-3 leading-[28px] font-bold md:leading-[32px]">
        Khi nào nên sử dụng 5G?
      </h3>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Chỉ bật 5G khi cần tốc độ cao, tải file lớn, livestream, hoặc chơi game
        online. Khi không cần thiết, nên chuyển về chế độ 4G hoặc tự động để tối
        ưu pin và data.
      </p>
    </>
  );
}

function Dung5gCoHaoPinVaTonDataNhungLyDoNenNangCapTu4GLen5GViettel() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Những lý do nên nâng cấp từ 4G lên 5G Viettel
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Dưới đây là những lợi ích mà mạng 5G Viettel mang lại, giúp bạn dễ dàng
        đưa ra quyết định:
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Trải nghiệm tốc độ vượt trội:</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "- Gói cước 5G sử dụng trên cả hạ tầng 4G. Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng còn lại trong ngày. Xem thêm: "
        }
        Cách bật 5G Viettel
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        - Tải 1GB chỉ trong vài giây.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        - Không gián đoạn khi xem video trực tuyến hoặc chơi game online.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Hỗ trợ công việc và học tập:
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        - Làm việc từ xa, hội họp qua video call chất lượng cao mà không bị giật
        lag.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        - Tải và gửi tài liệu nhanh chóng, tiết kiệm thời gian.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Ưu đãi hấp dẫn từ Viettel:</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"- Gói cước 5G Viettel như "}
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
          href="/goi-cuoc-viettel/5G160B"
        >
          5G160B
        </a>
        {
          " cung cấp dung lượng lớn (tới 120GB/tháng) và ưu đãi kèm theo như TV360 4K, data MyBox miễn phí."
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        - Giá cước hợp lý chỉ từ 135K/tháng, phù hợp cho mọi nhu cầu.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Dễ dàng chuyển đổi:</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"- Không cần đổi SIM, chỉ cần đăng ký gói cước và "}
        bật 5G trên điện thoại
        .
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        - Dịch vụ chăm sóc khách hàng tận tâm, hỗ trợ mọi lúc, mọi nơi (hotline:
        button 18008098)
      </p>
    </>
  );
}

function Dung5gCoHaoPinVaTonDataLamTheNaoDeKiemTraVaDangKy5GViettel() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Làm thế nào để kiểm tra và đăng ký 5G Viettel?
      </h2>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Viettel đã có các điểm phủ sóng 5G tại 63 tỉnh thành Việt Nam. "}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Ngoài ra, khách hàng có thể kiểm tra vùng phủ sóng 5G bằng ứng dụng Speedtest theo hướng dẫn: "
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Bước 1: Tải "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://www.speedtest.net/apps"
        >
          ứng dụng Speedtest
        </a>
        {" từ Google Play/App Store."}
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bước 2: Mở ứng dụng, chọn biểu tượng Map (bản đồ) ở góc dưới.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bước 3: Chọn 5G ở góc trên bên phải để hiển thị vùng phủ sóng 5G.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bước 4: Khu vực phủ sóng 5G sẽ được hiển thị bằng màu xanh đậm.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bước 5: Nếu cần, nhấn Go để kiểm tra tốc độ mạng 5G tại vị trí hiện tại.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Lưu ý: Đảm bảo điện thoại hỗ trợ 5G và SIM đã kích hoạt dịch vụ. Tắt
        Wi-Fi khi kiểm tra mạng di động.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Khách hàng kiểm tra gói cước 5G phù hợp với thuê bao và đăng ký trực tiếp tại website chính thức "
        }
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://viettel.vn/lan-toa/goi-cuoc?kh=HNI1_TTHKM_VTP_00004_DBDN"
        >
          viettel.vn
        </a>
        . Hoặc click nút đăng ký trên {siteConfig.hostname} (hỗ trợ bạn soạn cú
        pháp SMS nhanh hơn)
      </p>
    </>
  );
}

function Dung5gCoHaoPinVaTonDataDanhSachGoiCuoc5GTietKiem() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Danh sách gói cước 5G tiết kiệm
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
                    GÓI 5G DATA
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
                    <u></u>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      href="/goi-cuoc-viettel/5G135"
                    >
                      <u>5G135</u>
                    </a>
                    <u></u>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    4GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    20GB Mybox
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
                      href="/goi-cuoc-viettel/5G150"
                    >
                      <u>5G150</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB Mybox
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
                    GÓI 5G COMBO
                  </p>
                </th>
                <th className="bg-primary [&amp;&gt;p]:md:text-16 border border-t-0 border-r border-b-0 border-l-0 border-black px-2 py-1 text-white last:border-r-0 md:px-4 md:py-2">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    {" ƯU ĐÃI"}
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
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi nội mạng dưới 10 phút
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    20GB Mybox
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
                      <u>5G180B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi nội mạng dưới 10 phút
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB Mybox
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
                      <u>5G230B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    8GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi nội mạng dưới 20 phút
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 150 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    50GB Mybox
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
                      <u>5G280B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    10GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi nội mạng dưới 20 phút
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 200 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    70GB Mybox
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
                      <u>5G330B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    12GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi nội mạng dưới 20 phút
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 300 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    100GB Mybox
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
                      <u>5G380B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    15GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi nội mạng dưới 20 phút
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 300 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    150GB Mybox
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
                      <u>5G480B</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    20GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi nội mạng dưới 20 phút
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 300 phút gọi ngoại mạng
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
                    GÓI 5G CAO CẤP
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
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày chơi Liên Quân
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
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
                      <u>5GLQ210</u>
                    </a>
                  </p>
                </td>
                <td className="[&amp;&gt;p]:text-14 [&amp;&gt;p]:md:text-16 border border-t border-r border-b-0 border-l-0 border-black px-2 py-1 last:border-r-0 md:px-4 md:py-3">
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    6GB/ngày
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    2GB/ngày chơi Liên Quân
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí gọi nội mạng dưới 20 phút
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí 100 phút gọi ngoại mạng
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    Miễn phí TV360 4K
                  </p>
                  <p className="text-12 md:text-14 pb-2 leading-[22px] md:leading-[22px]">
                    30GB Mybox
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
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Nâng cấp ngay để tận hưởng 5G Viettel!\n5G không chỉ nhanh hơn, mà còn giúp bạn kết nối ổn định, mượt mà và bắt kịp nhịp sống số hiện nay. Với chi phí dễ tiếp cận, nhiều ưu đãi kèm theo và vùng phủ sóng được mở rộng liên tục, đây chính là thời điểm hoàn hảo để bạn chuyển sang sử dụng 5G Viettel và tận hưởng chất lượng mạng vượt trội mỗi ngày."
        }
      </p>
    </>
  );
}

function Dung5gCoHaoPinVaTonDataCacCauHoiThuongGapVe5GHaoPinTonData() {
  return (
    <>
      <h2 className="text-24 py-[20px] leading-[28px] md:text-[28px] md:leading-[32px]">
        Các câu hỏi thường gặp về 5G hao pin, tốn data
      </h2>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>Dùng 5G có hao pin không?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Dùng 5G sẽ hao pin hơn so với 4G, mức độ hao khoảng 5-11% tùy thiết bị
        và cách sử dụng.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>5G tốn nhiều data hơn 4G không?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        5G không làm tốn data hơn 4G nếu dùng cùng nội dung và chất lượng, nhưng
        do tốc độ nhanh, người dùng thường xem video chất lượng cao hơn, dẫn đến
        tiêu thụ data nhiều hơn.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>Tại sao bật 5G máy lại nóng nhanh hơn?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bật 5G khiến máy nóng nhanh hơn vì thiết bị phải xử lý dữ liệu lớn, duy
        trì kết nối tần số cao và liên tục tìm kiếm tín hiệu, làm tăng nhiệt độ
        thiết bị.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>Lướt TikTok/YouTube bằng 5G có tốn data nhiều hơn?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Nếu xem cùng chất lượng video, lượng data tiêu thụ không khác biệt so
        với 4G, nhưng nếu xem video độ phân giải cao hơn thì data sẽ “ngốn”
        nhiều hơn.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>Chênh lệch mức tiêu thụ pin giữa 4G và 5G là bao nhiêu?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Pin điện thoại dùng 5G sẽ cạn nhanh hơn khoảng 5-10% so với dùng 4G, đặc
        biệt khi bật chế độ &quot;5G Only&quot;.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>Nên dùng 5G liên tục hay chỉ bật khi cần?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Nên bật 5G khi cần tốc độ cao như livestream, chơi game hoặc tải nhanh,
        còn khi không cần thiết thì chuyển về chế độ tự động hoặc 4G để tiết
        kiệm pin.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>Cách tiết kiệm pin và data khi dùng 5G là gì?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Chuyển sang chế độ tự động giữa 4G và 5G, tắt 5G khi không cần thiết,
        dùng Wi-Fi khi có thể, giảm độ sáng màn hình và đóng các ứng dụng chạy
        nền.
      </p>
      <br />
    </>
  );
}
