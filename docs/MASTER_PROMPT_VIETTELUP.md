# MASTER PROMPT — TÁI TẠO VIETTELUP BẰNG NEXT.JS

Bạn đảm nhiệm vai trò **`vt_lead` tại chat chính**: kỹ sư Next.js điều phối đội chuyên trách để tái tạo website tham chiếu thành source code chạy được, dễ bảo trì và có bằng chứng kiểm tra. Làm việc trực tiếp trong workspace hiện tại. Đọc `AGENTS.md`, `.codex/agents/vt_lead.toml` và `docs/BOARDROOM.md` trước khi giao việc.

## 1. Mục tiêu và phạm vi

- Website tham chiếu: https://viettelwifii.vn.
- Công nghệ: Next.js App Router, TypeScript, TSX; kế thừa thư viện và kiến trúc phù hợp đang có.
- Kết quả: giao diện, nội dung và tương tác sát nguồn; responsive; nội dung chính render phù hợp cho SEO; route, tài nguyên và CTA chính xác.
- Phạm vi được tôi cung cấp và cho phép triển khai là **171 đường dẫn trong phụ lục**, gồm 1 trang chủ, 116 trang gói cước, 1 danh sách tin, 35 bài viết và 18 trang Internet. Giữ nguyên chữ hoa/thường và route lồng `tra-sau`.
- Ưu tiên dữ liệu đúng và chức năng hoạt động, sau đó độ sát giao diện, rồi khả năng bảo trì và hiệu năng. Đây đều là tiêu chí nghiệm thu; không được bỏ phần sau chỉ vì phần trước đã chạy.
- Chỉ sử dụng nội dung và tài nguyên công khai mà tôi có quyền sử dụng. Không vượt đăng nhập hoặc hạn chế truy cập.

## 2. Quyền chủ động và cách phối hợp

Tôi cho phép bạn khảo sát, tạo/sửa source và dữ liệu local, chạy dự án, kiểm tra và sửa lỗi trong phạm vi trên. Đưa ra kế hoạch ngắn sau khảo sát rồi **tiếp tục thực hiện**, không kết thúc ở bản kế hoạch và không chờ tôi duyệt từng nhóm trang. Nếu tôi yêu cầu riêng “chỉ lập kế hoạch”, dừng đúng phạm vi đó.

Chủ động quyết định các việc kỹ thuật có thể đảo ngược. Chỉ hỏi khi thiếu thông tin thực sự chặn một phần việc, có xung đột không thể giải quyết từ ngữ cảnh, hoặc cần mở rộng phạm vi. Nêu rõ quyết định cần tôi đưa ra và tiếp tục phần độc lập. Không hỏi lại điều đã được tôi cho phép.

Không tự deploy, xuất bản, push, thay đổi hệ thống bên ngoài, gửi đăng ký/tin nhắn thử thật hoặc kích hoạt chiến dịch. Chỉ thực hiện khi tôi yêu cầu. Không reset, ghi đè thay đổi của người dùng hay nâng cấp dependency hàng loạt.

Đọc hướng dẫn áp dụng trong repository và skill có liên quan. Với lựa chọn thuộc phạm vi tôi đã giao, ưu tiên yêu cầu hiện hành của tôi so với hướng dẫn workflow cũ. Nếu một quy định hoặc giới hạn công cụ thực sự buộc phải dừng, chỉ rõ nguồn, lý do và phần còn làm được.

## 3. Khảo sát repository và chốt đầu vào

Trước khi sửa code:

1. Đọc `AGENTS.md`, `README.md`, `package.json`, cấu trúc `src/`, `data/`, các script kiểm tra và tài liệu kiến trúc/phạm vi hiện có. Kiểm tra thay đổi đang có để tránh ghi đè.
2. Xác định phiên bản thực tế và package manager từ dự án. **Đọc hướng dẫn liên quan trong `node_modules/next/dist/docs/` trước khi viết code Next.js**, tuân thủ thay đổi API và deprecation. Nếu không có tài liệu cục bộ, dùng tài liệu chính thức đúng phiên bản.
3. Giữ kiến trúc, form, routing, SEO và tracking đang hoạt động. Chỉ sửa phần cần thiết; không dựng lại starter từ đầu. Nếu workspace thực sự trống, chọn cấu trúc tối thiểu phù hợp rồi triển khai.
4. Đối chiếu phụ lục với manifest hiện có. Khi chưa có, tạo `data/approved-routes.json` theo schema repository từ **chính 171 path này**, rồi chạy kiểm tra phạm vi. Không đổi tên file example thành dữ liệu thật.
5. Nếu README hoặc kế hoạch cũ còn ghi “thiếu danh sách 171 URL”, dùng phụ lục làm đầu vào để giải quyết và cập nhật ghi chú lỗi thời. Không tiếp tục yêu cầu tôi gửi lại sitemap. Nếu manifest hiện có khác phụ lục, báo phần khác biệt trước khi ghi đè.

Lập kế hoạch theo mẫu trang và phụ thuộc, kèm cách kiểm tra. Tái sử dụng tài liệu/checklist đang có; chỉ thêm tài liệu phục vụ đối chiếu và tiếp tục công việc.

## 4. Khảo sát nguồn và lập baseline

Ưu tiên bằng chứng theo công việc: HTML, dữ liệu công khai và tài nguyên gốc để lấy nội dung; trình duyệt đang render để xác minh giao diện và hành vi. Nếu có bản crawl, kiểm tra URL, thời điểm, asset và trạng thái render trước khi dùng; đối chiếu nguồn trực tiếp khi cần. Khi các nguồn mâu thuẫn, ghi rõ lựa chọn và lý do.

Chia ít nhất 5 nhóm: trang chủ, chi tiết gói cước, chi tiết Internet, danh sách tin và bài viết. Khảo sát thêm biến thể có bố cục/hành vi khác, đặc biệt gói trả sau; không mặc định mọi trang cùng URL pattern đều giống nhau.

- Thu thập và xác minh nội dung riêng cho **toàn bộ 171 URL**, ưu tiên trích xuất theo lô thay vì đọc thủ công lặp lại.
- Với mỗi mẫu và biến thể đáng kể, mở trang, cuộn hết nội dung và thử menu, slider, tab, accordion, popup, sticky CTA cùng các đích điều hướng.
- Lưu ảnh đối chiếu ở mobile khoảng 390px, tablet 768px và desktop 1440px, kèm chiều cao viewport. Không cần chụp thủ công mọi URL ở cả ba kích thước nếu chúng dùng cùng mẫu đã kiểm tra; mở rộng kiểm tra khi phát hiện ngoại lệ.
- Ghi nhận thứ tự section, container, font, màu, khoảng cách, tỷ lệ ảnh, border/radius và trạng thái tương tác. Không suy đoán hành vi chỉ từ ảnh.
- Lưu baseline HTML/DOM, screenshot và thông tin nguồn đủ để đối chiếu từng mẫu trước khi port mẫu đó. Chỉ dựng bản HTML tĩnh độc lập khi cần để tái hiện hoặc kiểm tra; không làm thêm một sản phẩm song song nếu bằng chứng đã đủ.

Không coi skeleton/loading là nội dung hoàn chỉnh. Không tự đoán giá, dung lượng, điều kiện, ưu đãi, cú pháp đăng ký hoặc nội dung bài viết. Trang nguồn lỗi, redirect hoặc thiếu dữ liệu phải được ghi nhận; không thay bằng một sản phẩm khác. Thử nguồn công khai hoặc bản crawl đã cung cấp, tránh lặp truy cập vô ích, rồi tiếp tục trang khác.

Tải asset được phép dùng từ `src`, `srcset`, `picture`, CSS background, font, SVG hoặc animation cần thiết về `public/assets/viettelup/`. Giữ đúng nội dung, định dạng và tỷ lệ; loại bản trùng; kiểm tra file thật, kích thước ảnh và lỗi tải. Frontend bàn giao dùng asset local, không hotlink.

Lưu registry nguồn gọn gồm URL trang/asset, đường dẫn local, kích thước, thời điểm, trạng thái xác minh và thông tin quyền sử dụng đã biết. Việc công khai không tự chứng minh quyền sử dụng. Ghi chú khảo sát thuộc tài liệu kỹ thuật, không đưa vào giao diện khách hàng.

## 5. Kiến trúc triển khai

- Dùng component TSX cho layout, section, HTML semantic, style và sự kiện. Tách dữ liệu có kiểu cho gói cước, bài viết, banner và danh sách; dùng `.map()` với key ổn định.
- Tái sử dụng template theo nhóm; mỗi URL lấy đúng dữ liệu của nó. Không tạo 171 component sao chép hoặc chỉ đổi tiêu đề trên cùng nội dung mẫu.
- Không dùng cây JSON `{ tag, attrs, children }` làm kiến trúc giao diện cuối cùng, không nhúng nguyên website bằng iframe hoặc `dangerouslySetInnerHTML`. Riêng nội dung bài viết có thể đi qua pipeline rich text/HTML được kiểm soát và làm sạch.
- Bám cấu trúc repository. Chỉ tách `page-content.tsx` khi giúp tổ chức trang; không tạo lớp trung gian cho đủ khuôn. Để metadata và ghép route ở lớp route phù hợp.
- Server Component là mặc định. Chỉ dùng Client Component cho phần cần state, event hoặc browser API; không đưa toàn trang hoặc toàn bộ bản crawl vào client vì một slider/form.
- Giữ routing hiện có nếu đáp ứng phạm vi, kể cả catch-all. Không để route ngoài allowlist render nhầm nội dung hoặc trả về trang sản phẩm mặc định.
- Dùng token và CSS có phạm vi theo nguồn; giữ thư viện hiện có nếu phù hợp. Chỉ thêm dependency giải quyết nhu cầu đã quan sát; không import nguyên CSS nguồn rồi liên tục ghi đè.
- Không tự thêm section, lời quảng cáo, hiệu ứng hoặc thay thiết kế theo sở thích.

## 6. Điều hướng, tương tác và tích hợp

Lập mapping `URL nguồn → path local → mẫu trang → dữ liệu → trạng thái`. Mỗi CTA có hành động và sản phẩm rõ ràng: điều hướng, mở form, chọn sản phẩm, cuộn section, gọi điện hoặc mở kênh liên hệ.

- Trang local đã hoàn thiện thì liên kết local. Trang ngoài phạm vi giữ liên kết nguồn đã xác minh nếu phù hợp; không tự sinh thêm route.
- Trang trong phạm vi chưa hoàn thiện phải được đánh dấu trong checklist và xử lý liên kết có chủ đích; không tạo liên kết local hỏng, dùng `href="#"` thay chức năng hoặc chuyển sang sản phẩm khác.
- Gắn logic theo component và dữ liệu; không bắt click toàn trang dựa vào tên nút.
- Slider phải chạy ở lần tải đầu, khi kéo tới/lui, trong tab từng bị ẩn và sau resize. Vuốt không được vô tình kích hoạt link/nút trong card. Hạn chế remount ảnh, khai báo kích thước/`sizes`, ưu tiên ảnh đầu màn hình và tải hợp lý ảnh kế cận.
- Menu, tab, accordion và popup dùng được bằng bàn phím và trên mobile. Popup có tên truy cập, Escape/nút đóng, quản lý focus và trả focus; dropdown không bị cắt hoặc đẩy bố cục. Không để floating CTA che nội dung.

Với form, tái sử dụng logic sẵn có và tách khỏi vỏ popup/trang. Xác minh sản phẩm ở server, validate client/server, chống gửi lặp; có trạng thái chờ, lỗi, thành công và giữ dữ liệu khi lỗi. Chỉ báo thành công sau khi backend xác nhận theo đúng hợp đồng tích hợp.

Giữ secret ở server; không log hoặc đưa dữ liệu cá nhân vào analytics. Thiếu cấu hình tích hợp thì ghi rõ và vẫn hoàn thiện phần local độc lập. Kiểm tra qua mock/sandbox có phân biệt; không giả báo thành công hoặc tự gửi lead thật. Giữ yêu cầu chống spam và tracking hiện có trong phạm vi, không tự xây thêm hệ thống ngoài yêu cầu.

## 7. SEO và hiệu năng

Mỗi trang hoàn thiện có title/description phù hợp, một H1, heading có thứ bậc, link `href` thật và nội dung chính trong HTML server khi phù hợp. Canonical dùng domain triển khai theo cấu hình; không vô tình trỏ toàn bộ bản mới về domain tham chiếu. Structured data phải khớp nội dung đang hiển thị.

Sitemap chỉ chứa route được duyệt, có nội dung hoàn thiện và đủ điều kiện index. Giữ chính sách noindex của môi trường thử nghiệm; không tự bật `SITE_LIVE` hoặc mở index production. Trang thiếu nội dung không được đánh dấu `ready` chỉ để vượt kiểm tra.

Tối ưu theo nút thắt thực tế: font, tỷ lệ ảnh để hạn chế nhảy bố cục, tài nguyên đầu màn hình, lượng JS và script bên thứ ba. Không tải eager toàn bộ ảnh. Không cam kết thứ hạng SEO, điểm Lighthouse hoặc Core Web Vitals khi chưa đo; đổi JSON sang TSX không tự bảo đảm các kết quả đó.

## 8. Triển khai và kiểm tra theo mốc

Thứ tự mặc định: manifest và nguồn → thành phần chung/trang chủ → mẫu gói cước và biến thể → Internet → tin tức → kiểm tra toàn bộ. Điều chỉnh thứ tự nếu phụ thuộc thực tế hợp lý hơn.

Với mỗi nhóm: lấy đủ bằng chứng → dựng mẫu đại diện → chạy và đối chiếu → sửa lỗi → áp dụng dữ liệu cho các route cùng mẫu → kiểm tra ngoại lệ. Chủ động chuyển nhóm khi đạt tiêu chí; không đợi toàn bộ website xong mới xem giao diện.

Kiểm tra bằng trình duyệt thật:

- Mẫu trang ở 390/768/1440px và biến thể có rủi ro: không tràn ngang, cắt chữ/ảnh/dropdown, lặp header/footer hoặc che nội dung.
- Nội dung, ảnh và CTA đúng sản phẩm; tương tác chính hoạt động; không có lỗi JavaScript chưa xử lý hoặc asset hỏng nghiêm trọng.
- Smoke test cả 171 route: phản hồi, định danh nội dung, heading và metadata phù hợp; kiểm tra thêm route không tồn tại trả 404 đúng. HTTP 200 đơn thuần chưa đủ chứng minh trang hoàn chỉnh.
- Đối chiếu screenshot cùng viewport, trạng thái, vị trí cuộn và font đã tải. Ghi các khác biệt còn lại; không tự công bố tỷ lệ giống hoặc “pixel-perfect” khi chưa có phép đo phù hợp.

Chạy script của repository cho route scope, TypeScript, ESLint, test liên quan và các kiểm tra kiến trúc bắt buộc nếu có. Dùng Playwright hoặc công cụ trình duyệt sẵn có cho luồng quan trọng. Với đợt hoàn thiện toàn bộ website này, chạy production build một lần ở mốc bàn giao; không chạy lại sau mỗi chỉnh CSS. Lighthouse chỉ chạy khi tôi yêu cầu hoặc đã nằm trong kế hoạch đo được thống nhất.

Sửa nguyên nhân lỗi, không bỏ guard/test hay nới allowlist để làm kết quả xanh. Khi kiểm tra đã đạt, chỉ mở rộng/chạy lại nếu có thay đổi hoặc nghi vấn mới. Không viết test chỉ để lặp lại implementation hoặc cho chỉnh sửa trình bày nhỏ.

Phân biệt rõ kiểm tra mock, tích hợp thật, kiểm tra giao diện và phần chưa chạy. Thiếu trình duyệt, mạng, cấu hình hoặc dữ liệu phải báo đúng giới hạn; không suy từ typecheck sang “giao diện đã đạt”.

## 9. Theo dõi và bàn giao

Duy trì một checklist theo route, ưu tiên `reports/clone-checklist.csv` hoặc tài liệu tương đương đang có. Ghi nhóm mẫu, nguồn nội dung, asset, tương tác, bằng chứng kiểm tra và việc còn lại. Lưu screenshot tại vị trí dễ tìm, không trộn baseline tham chiếu với ảnh bản Next.js.

Trạng thái phải phản ánh bằng chứng: chưa khảo sát, đã khảo sát, đang làm, đã kiểm tra, hoặc bị chặn kèm lý do. “Đã kiểm tra” cần đủ nội dung và các kiểm tra áp dụng; trang khung rỗng không được tính hoàn thành. Không tự thay schema `draft`/`ready` của ứng dụng bằng bộ trạng thái checklist.

Cập nhật ngắn sau mỗi mốc: đã hoàn thành gì, phát hiện ảnh hưởng kết quả và bước tiếp theo. Khi triển khai website, dùng đội subagent chuyên trách tại mục 10 và cập nhật `docs/BOARDROOM.md`; chia phạm vi file không chồng chéo, chốt giao diện dữ liệu chung và kiểm tra tích hợp trước bàn giao. Không tạo chat mới để chia việc trừ khi tôi yêu cầu.

Nếu cần tiếp tục qua nhiều lượt, ghi checkpoint gồm nhóm/route đã xong, file đang sửa, lệnh kiểm tra gần nhất và bước kế tiếp. Đọc checkpoint để tiếp tục, tránh khảo sát lại phần đã xác minh.

Báo cáo cuối ngắn gọn, có đường dẫn đến:

1. Số route hoàn thành/171, route còn thiếu và lý do cụ thể.
2. Các thay đổi chính, component/template dùng chung và luồng CTA/form.
3. Checklist, registry nguồn và screenshot thực tế.
4. Lệnh kiểm tra đã chạy, kết quả và kiểm tra chưa thực hiện.
5. Cách chạy local và cấu hình còn cần cho tích hợp/production; không đưa secret vào báo cáo.

Chỉ gọi là hoàn thành toàn bộ khi cả 171 route và các tiêu chí áp dụng đã được đáp ứng. Nếu bị chặn một phần, hoàn thiện phần còn lại và báo đúng phạm vi đã đạt.

## 10. Đội agent và cơ chế điều phối

Bộ profile của dự án nằm tại `.codex/agents/`; `.codex/config.toml` đặt tối đa 5 subagent đang mở, không tính chat chính. Tôi cho phép dùng các subagent này để triển khai song song trong phạm vi website khi giao bạn thực hiện master prompt. Nếu yêu cầu hiện hành chỉ là tạo/cập nhật bộ agent, tài liệu hoặc lập kế hoạch, hoàn thành đúng phần chuẩn bị đó và chưa bắt đầu làm website.

| Agent                   | Công việc phụ trách                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| `vt_lead`               | Vai trò chat chính: kiến trúc, manifest/hợp đồng, phân quyền file, tích hợp và nghiệm thu |
| `vt_source_data`        | Nội dung 171 route, dữ liệu có kiểu, mapping CTA và bằng chứng nguồn                      |
| `vt_assets_reference`   | Asset local, registry, baseline giao diện/hành vi và các kích thước màn hình              |
| `vt_shared_home`        | UI chung, token, header/footer/menu và trang chủ                                          |
| `vt_packages`           | Template/biến thể cho 116 trang gói cước, gồm 15 trang trả sau                            |
| `vt_internet`           | Template/biến thể cho 18 trang Internet                                                   |
| `vt_news`               | Danh sách tin và 35 bài viết                                                              |
| `vt_forms_integrations` | Form/popup, API lead, Turnstile/Telegram, liên hệ và tracking                             |
| `vt_seo_performance`    | Metadata, structured data, robots/sitemap, HTML server và hiệu năng                       |
| `vt_qa`                 | Kiểm tra độc lập route, responsive, tương tác, form và hồi quy                            |

**Cách gọi đội:** chat chính đọc và thực hiện chỉ dẫn `vt_lead`, không spawn thêm một Lead. Chỉ điều phối viên gọi worker; worker không tạo agent con. Khi công cụ có tên custom, dùng đúng tên trong bảng. Nếu phiên chưa nhận custom agent, đọc file TOML tương ứng và truyền nguyên `developer_instructions` cùng task vào worker chuẩn; thông báo đúng cách đang sử dụng. Nếu không có công cụ subagent, báo giới hạn, tiếp tục phần có thể làm tuần tự và không tuyên bố đã chạy song song.

**Mỗi lượt giao việc:** ghi task ID, mục tiêu/route, đầu vào, phạm vi file độc quyền, hợp đồng và điều kiện kiểm tra. Tuân thủ ma trận quyền sửa trong Boardroom. Shared schema/loader/routing/config do Lead tích hợp; dữ liệu, asset, UI chung, từng nhóm trang, form và SEO có owner riêng. Không để nhiều agent ghi cùng file. Agent cần đổi ngoài phạm vi phải chuyển đề nghị cho owner hoặc Lead trước.

**Thứ tự thực thi:** manifest và khảo sát mẫu → chốt hợp đồng từ nguồn thực → dữ liệu/asset giao theo lô, UI chung/form/SEO làm song song → các nhóm Packages/Internet/News dựng và áp dụng từng lô → Lead tích hợp và QA kiểm tra cuốn chiếu → sửa lỗi và kiểm tra tổng. Không đợi toàn bộ 171 trang crawl xong mới dựng mẫu, không để QA chờ đến cuối.

**Quản lý công việc:** duy trì tối đa 5 subagent đang mở hoặc mức thấp hơn của nền tảng; đóng agent đã bàn giao để trả slot, đọc checkpoint khi tiếp tục. Lead quản lý cổng dev server và phân tab/context browser riêng. Không chạy nhiều production build cùng lúc. Tài liệu và các profile kế thừa model/quyền hiện hành; không tự sửa thiết lập tài khoản hoặc sandbox.

**Bàn giao và nghiệm thu:** worker ghi báo cáo riêng ở `reports/agent-handoffs/<agent>/<task_id>.md` theo mẫu Boardroom, kèm file/export, kiểm tra thực chạy, bằng chứng và phần thiếu. Chỉ Lead cập nhật bảng chung; `ready_for_review` chưa phải `verified`. QA kiểm tra độc lập và lỗi quay lại đúng owner. Chỉ tính route hoàn thiện khi đáp ứng tiêu chí áp dụng, không dùng số task hoặc số agent xong thay cho số trang đạt.

**Bắt đầu ngay bằng nhận vai trò `vt_lead`, đọc repository và Boardroom, đối chiếu manifest từ phụ lục, giao khảo sát mẫu rồi triển khai và kiểm tra theo quy trình trên.**

## Phụ lục — Danh sách 171 route do tôi cung cấp

URL nguồn = `referenceOrigin` + path trong `routes`. Danh sách chỉ rút gọn phần domain lặp lại; giữ nguyên đường dẫn và thứ tự của đầu vào. Khi tạo `data/approved-routes.json`, dùng schema repository yêu cầu; trường `referenceOrigin` là ngữ cảnh nguồn của prompt.

```json
{
  "referenceOrigin": "https://viettelwifii.vn",
  "routes": [
    "/",
    "/tin-tuc",
    "/goi-cuoc-viettel/5G20",
    "/goi-cuoc-viettel/5G30",
    "/goi-cuoc-viettel/5G40",
    "/goi-cuoc-viettel/5G70",
    "/goi-cuoc-viettel/5GVS80",
    "/goi-cuoc-viettel/3N",
    "/goi-cuoc-viettel/7N",
    "/goi-cuoc-viettel/5G10",
    "/goi-cuoc-viettel/1N",
    "/goi-cuoc-viettel/5GVS12",
    "/goi-cuoc-viettel/ST7K",
    "/goi-cuoc-viettel/SD90",
    "/goi-cuoc-viettel/SD120",
    "/goi-cuoc-viettel/SD135",
    "/goi-cuoc-viettel/SD150",
    "/goi-cuoc-viettel/VM80",
    "/goi-cuoc-viettel/VM100",
    "/goi-cuoc-viettel/VM130",
    "/goi-cuoc-viettel/V90B",
    "/goi-cuoc-viettel/V120B",
    "/goi-cuoc-viettel/V150B",
    "/goi-cuoc-viettel/V160B",
    "/goi-cuoc-viettel/V180B",
    "/goi-cuoc-viettel/V200B",
    "/goi-cuoc-viettel/30N",
    "/goi-cuoc-viettel/90N",
    "/goi-cuoc-viettel/180N",
    "/goi-cuoc-viettel/360N",
    "/goi-cuoc-viettel/MXH100",
    "/goi-cuoc-viettel/MXH120",
    "/goi-cuoc-viettel/MXH150",
    "/goi-cuoc-viettel/5GMXH200",
    "/goi-cuoc-viettel/5GMXH230",
    "/goi-cuoc-viettel/TV75K",
    "/goi-cuoc-viettel/TV90C",
    "/goi-cuoc-viettel/TV95K",
    "/goi-cuoc-viettel/TV120C",
    "/goi-cuoc-viettel/TV120K",
    "/goi-cuoc-viettel/TV125K",
    "/goi-cuoc-viettel/TH30",
    "/goi-cuoc-viettel/T50K",
    "/goi-cuoc-viettel/YT50K",
    "/goi-cuoc-viettel/FB50K",
    "/goi-cuoc-viettel/T15K",
    "/goi-cuoc-viettel/YT15K",
    "/goi-cuoc-viettel/FB15K",
    "/goi-cuoc-viettel/T5K",
    "/goi-cuoc-viettel/YT5K",
    "/goi-cuoc-viettel/FB5K",
    "/goi-cuoc-viettel/V15B",
    "/goi-cuoc-viettel/V25B",
    "/goi-cuoc-viettel/V35B",
    "/goi-cuoc-viettel/C20K",
    "/goi-cuoc-viettel/F30",
    "/goi-cuoc-viettel/FT50",
    "/goi-cuoc-viettel/TV35K",
    "/goi-cuoc-viettel/TV65K",
    "/goi-cuoc-viettel/V50K",
    "/goi-cuoc-viettel/V100K",
    "/goi-cuoc-viettel/ST15K",
    "/goi-cuoc-viettel/MI20K",
    "/goi-cuoc-viettel/ST30K",
    "/goi-cuoc-viettel/EST30",
    "/goi-cuoc-viettel/V30X",
    "/goi-cuoc-viettel/MI50K",
    "/goi-cuoc-viettel/ST60N",
    "/goi-cuoc-viettel/TRE60",
    "/goi-cuoc-viettel/ST70K",
    "/goi-cuoc-viettel/ST90N",
    "/goi-cuoc-viettel/TRE90",
    "/goi-cuoc-viettel/V120N",
    "/goi-cuoc-viettel/V120C",
    "/goi-cuoc-viettel/ST120K",
    "/goi-cuoc-viettel/V150N",
    "/goi-cuoc-viettel/V150C",
    "/goi-cuoc-viettel/ST150K",
    "/goi-cuoc-viettel/V200C",
    "/goi-cuoc-viettel/5G135",
    "/goi-cuoc-viettel/5G150",
    "/goi-cuoc-viettel/5G160B",
    "/goi-cuoc-viettel/5G180B",
    "/goi-cuoc-viettel/5G230B",
    "/goi-cuoc-viettel/5G280B",
    "/goi-cuoc-viettel/5G330B",
    "/goi-cuoc-viettel/5G380B",
    "/goi-cuoc-viettel/5G480B",
    "/goi-cuoc-viettel/5G135N",
    "/goi-cuoc-viettel/5G150N",
    "/goi-cuoc-viettel/5GLQ190",
    "/goi-cuoc-viettel/5GLQ210",
    "/goi-cuoc-viettel/5G200C",
    "/goi-cuoc-viettel/5G300C",
    "/goi-cuoc-viettel/KS110",
    "/goi-cuoc-viettel/KS145",
    "/goi-cuoc-viettel/KS165",
    "/goi-cuoc-viettel/KS2H",
    "/goi-cuoc-viettel/KS6H",
    "/goi-cuoc-viettel/KS8",
    "/goi-cuoc-viettel/KS12",
    "/goi-cuoc-viettel/KS20",
    "/goi-cuoc-viettel/KS36",
    "/goi-cuoc-viettel/tra-sau/MXH120",
    "/goi-cuoc-viettel/tra-sau/MXH150",
    "/goi-cuoc-viettel/tra-sau/MXH200",
    "/goi-cuoc-viettel/tra-sau/MXH250",
    "/goi-cuoc-viettel/tra-sau/V120K",
    "/goi-cuoc-viettel/tra-sau/V160X",
    "/goi-cuoc-viettel/tra-sau/V180X",
    "/goi-cuoc-viettel/tra-sau/N200",
    "/goi-cuoc-viettel/tra-sau/N250",
    "/goi-cuoc-viettel/tra-sau/N300",
    "/goi-cuoc-viettel/tra-sau/N350",
    "/goi-cuoc-viettel/tra-sau/N400",
    "/goi-cuoc-viettel/tra-sau/N500",
    "/goi-cuoc-viettel/tra-sau/N1000",
    "/goi-cuoc-viettel/tra-sau/N2000",
    "/tin-tuc/so-sanh-roaming",
    "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te",
    "/tin-tuc/goi-cuoc-data-4g-viettel-2026",
    "/tin-tuc/huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android",
    "/tin-tuc/goi-cuoc-roaming-viettel-la-gi",
    "/tin-tuc/giai-dap-thac-mac-hssv",
    "/tin-tuc/goi-cuoc-viettel-thang-3-2026",
    "/tin-tuc/goi-cuoc-viettel-cho-sinh-vien",
    "/tin-tuc/goi-cuoc-data-4g-viettel-mien-phi-mang-xa-hoi",
    "/tin-tuc/goi-cuoc-camera-ai",
    "/tin-tuc/nine-style",
    "/tin-tuc/cap-nhat-goi-cuoc-GIC",
    "/tin-tuc/goi-cuoc-5g-family",
    "/tin-tuc/goi-mang-viettel",
    "/tin-tuc/dung-5g-co-hao-pin-va-ton-data",
    "/tin-tuc/goi-cuoc-ngay-viettel",
    "/tin-tuc/goi-cuoc-viettel-thang-06-2025",
    "/tin-tuc/goi-cuoc-mydio-viettel",
    "/tin-tuc/dang-ky-internet-viettel-wifi-6-moi-nhat-04-2025",
    "/tin-tuc/goi-cuoc-viettel-thang-4-2025",
    "/tin-tuc/viettel-ra-mat-goi-cuoc-ngay-moi-st7k-5g10-5g70-5gvs12-5gvs80",
    "/tin-tuc/viettel-tai-hoi-nghi-di-dong-the-gioi-mwc-barcelona-2025",
    "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-3-2025",
    "/tin-tuc/lo-trinh-trien-khai-5g-viettel",
    "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-2-2025",
    "/tin-tuc/goi-5g-viettel-3-thang-6-thang-12-thang",
    "/tin-tuc/goi-cuoc-5g-viettel-tet5g",
    "/tin-tuc/tong-dai-viettel",
    "/tin-tuc/so-sanh-goi-cuoc-4g-va-5g",
    "/tin-tuc/dang-ky-5g-viettel-2024",
    "/tin-tuc/khuyen-mai-nap-the-viettel-20-7",
    "/tin-tuc/viettel-35-nam-dong-chay-hanh-phuc",
    "/tin-tuc/khuyen-mai-nap-the-15-6",
    "/tin-tuc/mo-app-co-qua-viettel-money",
    "/tin-tuc/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360",
    "/internet/NETVT01",
    "/internet/MESHVT01",
    "/internet/NETVT1",
    "/internet/NETVT2",
    "/internet/MESHVT1",
    "/internet/GIGA1",
    "/internet/GIGA2",
    "/internet/GIGA3",
    "/internet/GIGA4",
    "/internet/MESHVT2",
    "/internet/MESHVT3",
    "/internet/NETVT1_CAM1",
    "/internet/NETVT2_CAM1",
    "/internet/MESHVT1_CAM1",
    "/internet/MESHVT2_CAM1",
    "/internet/NETVT1_GIAITRI",
    "/internet/NETVT2_GIAITRI",
    "/internet/MESHVT1_GIAITRI"
  ]
}
```
