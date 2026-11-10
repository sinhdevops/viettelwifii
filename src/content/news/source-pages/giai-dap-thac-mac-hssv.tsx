import { siteConfig } from "@/lib/site-config";
import { ArticleLayout } from "@/components/news/article-layout";
import { newsArticles } from "@/constants/news/article-records";
/** Authored sections from archive 0123; keep historical copy and source irregularities. */
export default function GiaiDapThacMacHssvArticle() {
  return (
    <ArticleLayout article={newsArticles["giai-dap-thac-mac-hssv"]}>
      <GiaiDapThacMacHssvIntroduction />
    </ArticleLayout>
  );
}
function GiaiDapThacMacHssvIntroduction() {
  return (
    <>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <i>
          Gói cước HSSV là gì? Có thực sự rẻ hơn gói thông thường? Làm sao để
          đăng ký và có cần giấy tờ xác nhận sinh viên không?
        </i>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Đây là những câu hỏi mà rất nhiều học sinh, sinh viên đang quan tâm khi tìm kiếm "
        }
        <b>gói cước HSSV Viettel</b>
        {
          " phù hợp với nhu cầu học tập và giải trí mỗi ngày. Trong bài viết này, chúng tôi sẽ giải đáp toàn bộ thắc mắc về gói cước sinh viên: điều kiện đăng ký, ưu đãi data, giá cước và cách kích hoạt nhanh nhất."
        }
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>1. Gói cước HSSV là gì?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Đây không chỉ là một gói data mua thêm mà thường là "}
        <b>chế độ SIM Sinh viên (Student Sim)</b>
        {" hoặc "}
        <b>SIM Trendy (SIM giới trẻ)</b>. Khi SIM của bạn được chuyển sang chế
        độ này, bạn sẽ được hưởng các đặc quyền mà SIM thường không có.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>2. Có thực sự rẻ hơn gói thông thường không?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Câu trả lời là CÓ. Đặc biệt là hệ "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href={siteConfig.url("/goi-cuoc-gic")}
        >
          gói cước GIC
        </a>
        {
          " của Viettel, cho phép sinh viên đăng ký gói cước chỉ từ 30.000đ/tháng. "
        }
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <i>{"Đọc thêm: "}</i>
        <i>
            Tại sao GIC Viettel vẫn là gói cước quốc dân dành cho HSSV năm 2026?
          </i>
        <i></i>
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>3. Có cần giấy tờ xác nhận sinh viên không?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        KHÔNG, hệ thống của Viettel Telecom sẽ tự động quét thông tin ngày sinh
        từ dữ liệu CCCD/CMND mà bạn đã đăng ký chính chủ trước đó.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>3. Gói cước sinh viên Viettel còn đăng ký được không?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {
          "Hiện nay, một số gói cước sinh viên như MIMAXSV, ST90SV, TRE60, TRE90 đã "
        }
        <b>ngừng đăng ký mới và không còn gia hạn tự động</b>
        {". Tuy nhiên, người dùng có thể thay thế bằng các gói data như "}
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
          href="/goi-cuoc-viettel/MXH120"
        >
          MXH120
        </a>
        {" hoặc các gói theo ngày "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/ST15K"
        >
          ST15K
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="/goi-cuoc-viettel/5G30"
        >
          5G30
        </a>
        .
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Hoặc các gói GIC: "}
        <b>GIC30N</b>
        {", "}
        <b>GIC90N</b>
        {", "}
        <b>GIC125N</b>
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>
          4. Làm sao để kiểm tra thuê bao có được đăng ký gói sinh viên không?
        </b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bạn có thể kiểm tra bằng một trong các cách sau:
      </p>
      <ul className="list-disc py-3 pl-7 md:py-4 md:pl-10">
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Trên ứng dụng "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              href="https://viettel.vn/app"
            >
              My Viettel
            </a>
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Trên website "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              href="https://viettel.vn/lan-toa/goi-cuoc?kh=HNI1_TTHKM_VTP_00004_DBDN"
            >
              viettel.vn
            </a>
          </p>
        </li>
        <li>
          <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
            {"Gọi tổng đài "}
            <b>18008098</b>
            {" (miễn phí) để được tư vấn trực tiếp"}
          </p>
        </li>
      </ul>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>5. Cách đăng ký gói cước Viettel cho sinh viên?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bạn chỉ cần soạn tin theo cú pháp:
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>[Tên gói] gửi 191 hoặc 290</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Ví dụ: "}
        <b>SD90 UP gửi 290</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Ngoài ra, bạn có thể đăng ký trên app "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://viettel.vn/app"
        >
          My Viettel
        </a>
        {" hoặc "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://viettelmoney.go.link/hvnWR"
        >
          Viettel Money
        </a>
        .
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>6. Gói cước sinh viên Viettel có tự gia hạn không?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Trước đây, các gói như MIMAXSV, ST90SV có cơ chế "}
        <b>gia hạn tự động hàng tháng</b>
        {
          " nếu tài khoản còn đủ tiền. Tuy nhiên, hiện nay các gói đã dừng nên sẽ không còn tiếp tục gia hạn. Với các gói mới, người dùng cần kiểm tra thông tin gia hạn cụ thể trong mô tả gói khi đăng ký."
        }
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>7. Cách huỷ gói cước Viettel cho sinh viên?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Nếu không còn nhu cầu sử dụng gói cước, bạn có thể huỷ nhanh chóng bằng
        cách:
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>HUY [Tên gói] gửi 191</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Ví dụ: "}
        <b>HUY SD90 gửi 191</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        Bạn sẽ nhận được tin nhắn xác nhận yêu cầu hủy gia hạn gói cước. Nếu
        đồng ý hủy gia hạn gói cước soạn: Y gửi 191, muốn hủy bỏ yêu cầu gia hạn
        soạn: N gửi 191. Nếu như sau 10 phút bạn chưa xác nhận lại là đồng ý hủy
        hay không thì yêu cầu hủy gia hạn gói cước của bạn sẽ bị từ chối, gói
        cước của bạn vẫn sẽ tự động gia hạn.
      </p>
      <p className="text-18 md:text-20 pb-2 leading-[28px] md:leading-[28px]">
        <b>8. Có thể sử dụng nhiều gói cước cùng lúc không?</b>
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        {"Không. Mỗi thời điểm bạn chỉ có thể sử dụng "}
        <b>1 gói data chính</b>. Nếu đăng ký gói mới, gói cũ sẽ bị hủy hoặc ghi
        đè (tùy theo chính sách của từng gói). Bạn nên kiểm tra kỹ trước khi
        đăng ký.
      </p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]"></p>
      <p className="text-16 md:text-18 pb-2 leading-[24px] md:leading-[24px]">
        <b>Lưu ý khi đăng ký</b>
        {
          ": Một số gói chỉ áp dụng cho thuê bao nằm trong danh sách ưu đãi của Viettel. Vui lòng đăng nhập và kiểm tra  tại website "
        }
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://viettel.vn/lan-toa/goi-cuoc?kh=HNI1_TTHKM_VTP_00004_DBDN"
        >
          viettel.vn
        </a>
        {" hoặc trên ứng dụng "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          href="https://viettel.vn/app"
        >
          My Viettel
        </a>
        <b> </b>để biết thuê bao của bạn có đủ điều kiện đăng ký không.
      </p>
      <br />
    </>
  );
}
