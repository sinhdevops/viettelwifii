# KHỞI ĐỘNG ĐỘI AGENT VIETTELUP

Bộ này chuẩn bị 10 vai trò đã duyệt và tối đa 5 subagent chạy đồng thời. Chat chính làm Lead; cấu hình kế thừa model và quyền hiện hành. Việc cài file không tự khởi động làm website.

## Cách dùng ngay trong project này

Mở chat ở đúng thư mục `VIETTELUP-CODEX-KIT`, rồi gửi:

```text
Bắt đầu triển khai website theo docs/MASTER_PROMPT_VIETTELUP.md.
Bạn đảm nhiệm vt_lead ở chat chính. Đọc AGENTS.md,
.codex/agents/vt_lead.toml và docs/BOARDROOM.md trước khi giao việc.
Dùng đội agent đã cấu hình để làm song song, tối đa 5 subagent đang mở.
Chốt manifest và hợp đồng trước khi nhân rộng, giao dữ liệu theo lô,
kiểm tra độc lập và cập nhật Boardroom sau mỗi mốc.
Tiếp tục trong phạm vi đã giao, chỉ hỏi khi thật sự thiếu đầu vào chặn việc.
Chưa deploy, push, gửi lead thật hoặc mở index production.
```

Nếu muốn dán master prompt đầy đủ, dùng toàn bộ `MASTER_PROMPT_VIETTELUP.md`, bao gồm phần điều phối và phụ lục 171 route. Các profile và Boardroom phải có trong workspace; chỉ gửi nội dung prompt không chuyển theo các file agent.

## Khi chuyển bộ này sang workspace khác

Giữ nguyên cấu trúc `.codex/config.toml`, `.codex/agents/*.toml` và các tài liệu kèm theo. Tích hợp vào repository đang có; không ghi đè cấu hình hoặc `AGENTS.md` của project khác một cách mù quáng. Nếu dùng ZIP kèm theo, đây là gói cấu hình/tài liệu, không chứa source website hoàn chỉnh.

Theo OpenAI Docs, cấu hình `.codex` của project cần project được tin cậy. Khi phiên hiện tại chưa thấy tên custom, mở phiên mới trong project. Nếu công cụ vẫn chỉ có worker chuẩn, master prompt đã có phương án Lead đọc chỉ dẫn profile và truyền vào worker, giữ nguyên phạm vi và quyền.

Không cần đổi model hoặc nhập API key chỉ để sử dụng các profile này trong phiên Codex đã đăng nhập. Tích hợp website thật vẫn cần cấu hình riêng khi đến giai đoạn đó; không đặt secret vào file agent hoặc prompt.

## Các tệp chính

- `.codex/config.toml`: bật agent và giới hạn số phiên phụ đang mở.
- `.codex/agents/`: 10 profile, mỗi profile có tên, nhiệm vụ, phạm vi và cách bàn giao.
- `docs/MASTER_PROMPT_VIETTELUP.md`: yêu cầu sản phẩm, QA và đủ 171 route.
- `docs/BOARDROOM.md`: điều phối, quyền sửa, lịch theo phụ thuộc và bảng nhiệm vụ.
- `AGENTS.md`: hướng dẫn Next.js hiện có và quy tắc dùng đội trong project.

Nguồn cấu hình: [OpenAI Docs — Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents), [Config basics](https://learn.chatgpt.com/docs/config-file/config-basic).
