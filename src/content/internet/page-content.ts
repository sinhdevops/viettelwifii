import { siteConfig } from "@/lib/site-config";
import type { PageContent } from "@/lib/content-schema";

/** Detail-page metadata; visible UI remains authored in the existing Internet TSX. */
export const internetDetailPageContents: Record<string, PageContent> = {
  "/internet/NETVT01": {
    status: "ready",
    kind: "internet",
    title: "Gói NETVT01 Viettel 300Mbps + Camera + TV360 | Chỉ từ 225K/tháng",
    description:
      "Gói NETVT01 Viettel 300Mbps + Camera + TV360 | Chỉ từ 225K/tháng",
    heading: "Gói Internet NETVT01",
    sections: [
      {
        type: "text",
        heading: "Thông tin gói cước NETVT01",
        paragraphs: [
          "Tốc độ: 300 Mbps",
          "01 Modem WiFi 6",
          "01 Camera trong nhà",
          "Cloud lưu trữ 24h",
          "TV360 (Bundesliga, AFC)",
        ],
      },
      {
        type: "table",
        heading: "Chi phí & điều kiện đăng ký",
        table: {
          headings: ["Khu vực", "Cước phí"],
          rows: [
            ["Ngoại thành & các tỉnh", "225.000đ/tháng"],
            ["Nội thành Hà Nội & TP.HCM", "265.000đ/tháng"],
          ],
        },
      },
      {
        type: "text",
        heading: "Phí hòa mạng",
        paragraphs: ["Phí hòa mạng: 300.000đ", "Giá đã bao gồm VAT"],
      },
      {
        type: "text",
        heading: "Ưu đãi",
        paragraphs: ["Đóng trước 12 tháng tặng thêm 01 tháng"],
      },
    ],
    source: {
      url: siteConfig.url("/internet/NETVT01"),
      capturedAt: "2026-10-27T13:13:06+07:00",
      evidencePaths: [
        "data/sources/ref-01/archetypes.json",
        "reference-clone/raw/ref-01/internet-NETVT01.txt",
      ],
      verifiedFields: [
        "page title",
        "H1",
        "speed",
        "region-specific price labels",
        "equipment/benefits",
        "H2 headings",
      ],
      unverifiedFields: [
        "HTTP status / redirect chain",
        "final rendered DOM / live CTA handling",
        "meta description",
        "region selector behavior",
        "CTA popup/link",
        "direct status/redirect",
        "full comparison table values",
        "full FAQ answers",
        "source image URLs",
      ],
      notes: [
        "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
        "TV360 paragraph names NETVT1 although H1 and facts say NETVT01; do not silently rewrite",
        "Observed H2 sequence: Thông tin gói cước NETVT01 | Ưu điểm nổi bật của NETVT01 | Chi phí & điều kiện đăng ký | NETVT01 phù hợp với ai? | Câu hỏi thường gặp | Gói cước tương tự",
      ],
    },
    product: {
      id: "/internet/NETVT01",
      code: "NETVT01",
      subscription: "unspecified",
      regionalPrices: [
        {
          regionLabel: "Ngoại thành & các tỉnh",
          amountVND: 225000,
          periodLabel: "tháng",
        },
        {
          regionLabel: "Nội thành Hà Nội & TP.HCM",
          amountVND: 265000,
          periodLabel: "tháng",
        },
      ],
      speedLabel: "300 Mbps",
      benefits: [
        "01 Modem WiFi 6",
        "01 Camera trong nhà",
        "Cloud lưu trữ 24h",
        "TV360 (Bundesliga, AFC)",
        "Đóng trước 12 tháng tặng thêm 01 tháng",
      ],
    },
  },
  "/internet/MESHVT01": {
    status: "ready",
    kind: "internet",
    title:
      "MESHVT1 Viettel 300Mbps + Mesh WiFi + Camera | Phủ sóng rộng từ 240K",
    description:
      "Đăng ký MESHVT1 Viettel 300Mbps, WiFi 6 + Mesh phủ sóng rộng, kèm camera & TV360. Giá từ 240K/tháng, ổn định cho nhà nhiều phòng, nhiều thiết bị.",
    heading: "Gói Internet MESHVT01",
    sections: [
      {
        type: "text",
        heading: "Thông tin gói cước MESHVT01",
        paragraphs: [
          "Tốc độ: 300 Mbps",
          "Giá cước:",
          "Ngoại thành & các tỉnh: 240.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 285.000đ/tháng",
          "Thiết bị/dịch vụ kèm theo:",
          "01 Modem WiFi 6",
          "01 Mesh WiFi",
          "01 Camera trong nhà + Cloud lưu trữ 24h",
          "Truyền hình TV360 xem độc quyền Bundesliga & trọn vẹn AFC, cùng kho giải trí đặc sắc",
          "→ 02 vùng phủ WiFi",
          "Phí hòa mạng: 300.000đ",
          "Giá đã bao gồm VAT",
        ],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật của MESHVT1",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Phủ sóng WiFi rộng và ổn định",
        paragraphs: [
          "Hệ thống Mesh giúp:",
          "Sóng WiFi mạnh và đều hơn so với modem đơn",
          "Giảm điểm mù WiFi trong nhà",
          "Chuyển vùng mượt mà trên 01 tên WiFi duy nhất (SSID)",
        ],
      },
      {
        type: "text",
        heading: "Tốc độ 300Mbps đáp ứng tốt nhu cầu gia đình",
        paragraphs: [
          "Phù hợp cho:",
          "Học tập, làm việc online",
          "Xem phim HD – 4K",
          "Lướt web, mạng xã hội, giải trí hằng ngày",
        ],
      },
      {
        type: "text",
        heading: "Kết nối 20–25 thiết bị đồng thời",
        paragraphs: [
          "Đáp ứng tốt nhu cầu sử dụng của gia đình có nhiều điện thoại, laptop, TV và thiết bị thông minh.",
        ],
      },
      {
        type: "text",
        heading: "Công nghệ WiFi 6 thế hệ mới",
        paragraphs: [
          "Tốc độ cao hơn WiFi cũ",
          "Kết nối ổn định, giảm nhiễu",
          "Độ trễ thấp, trải nghiệm mượt mà hơn",
        ],
      },
      {
        type: "text",
        heading: "Tích hợp camera trong nhà, tăng sự an tâm",
        paragraphs: [
          "01 Camera trong nhà",
          "Cloud lưu trữ 24h",
          "Hỗ trợ theo dõi không gian sống tiện lợi hơn",
        ],
      },
      {
        type: "text",
        heading: "Giải trí đa dạng với TV360",
        paragraphs: [
          "Gói MESHVT1 đi kèm tài khoản TV360, phù hợp với gia đình có nhu cầu xem truyền hình, thể thao và giải trí tại nhà.",
          "Nội dung nổi bật:",
          "Xem độc quyền Bundesliga",
          "Theo dõi trọn vẹn AFC",
          "Kho nội dung giải trí phong phú",
        ],
      },
      {
        type: "text",
        heading: "Chi phí & điều kiện đăng ký",
        paragraphs: [
          "Cước tháng:",
          "Ngoại thành & tỉnh: 240.000đ",
          "Nội thành HN & TP.HCM: 285.000đ",
          "Ưu đãi đóng trước 12 tháng: Tặng thêm 01 tháng sử dụng",
          "Phí hòa mạng: 300.000đ",
          "Giá đã bao gồm VAT",
        ],
      },
      {
        type: "text",
        heading: "MESHVT1 phù hợp với ai?",
        paragraphs: [
          "Gia đình có nhu cầu WiFi ổn định, phủ sóng rộng",
          "Nhà nhiều phòng, nhà ống, nhà cao tầng nhỏ",
          "Gia đình sử dụng nhiều thiết bị cùng lúc",
          "Người muốn nâng cấp lên WiFi 6",
          "Gia đình có nhu cầu xem TV360, thể thao và giải trí tại nhà",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "Tốc độ 300Mbps thực tế dùng được bao nhiêu? Tốc độ 300Mbps đáp ứng tốt nhu cầu gia đình. Tốc độ thực tế phụ thuộc thiết bị sử dụng, khoảng cách tới điểm phát và hạ tầng khu vực.",
          "Thiết bị WiFi 6 có tương thích với điện thoại, laptop đời cũ không? Có. WiFi 6 tương thích ngược với WiFi 5 và WiFi 4, các thiết bị cũ vẫn sử dụng bình thường.",
          "Mesh WiFi hoạt động như thế nào? Mesh tạo nhiều điểm phát sóng liên kết với nhau, giúp WiFi phủ đều toàn bộ không gian và tự động chuyển vùng khi di chuyển trong nhà.",
          "Khi di chuyển trong nhà có bị rớt WiFi không? Không. Hệ thống Mesh cho phép chuyển vùng mượt trên cùng một tên WiFi, không cần kết nối lại thủ công.",
          "Có thể mở rộng thêm Mesh khi cần không? Có. Có thể lắp thêm thiết bị Mesh để mở rộng vùng phủ khi nhà lớn hoặc nhiều tầng hơn.",
          "Số lượng thiết bị kết nối tối đa là bao nhiêu? Khoảng 20–25 thiết bị kết nối đồng thời trong điều kiện sử dụng gia đình.",
          "Có cần cấu hình kỹ thuật phức tạp không? Không. Kỹ thuật Viettel lắp đặt, cấu hình sẵn, khách hàng chỉ cần sử dụng.",
          "Mạng có ổn định khi sử dụng nhiều thiết bị cùng lúc không? Có. WiFi 6 giúp phân bổ băng thông hiệu quả hơn, giảm nhiễu và hạn chế nghẽn mạng.",
          "Khi mất điện hoặc sự cố mạng thì xử lý thế nào? Thiết bị tự kết nối lại khi có điện. Trường hợp sự cố đường truyền, Viettel hỗ trợ kỹ thuật 24/7. Hotline miễn phí: 1800 8119",
          "Nếu bạn cần Internet ổn định – WiFi phủ rộng – có TV360 giải trí, MESHVT1 là lựa chọn phù hợp cho gia đình muốn nâng cấp trải nghiệm kết nối tại nhà.",
          "Đăng ký ngay: Gọi 1800 8132 miễn phí để kiểm tra hạ tầng và lắp đặt nhanh chóng",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/MESHVT01"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0154.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: aae53fd9f9f26c96ad38c0262d269a98d014ce18293510c3b2b4f6c604505161",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/MESHVT01",
      code: "MESHVT01",
      subscription: "unspecified",
    },
  },
  "/internet/NETVT1": {
    status: "ready",
    kind: "internet",
    title: "Lắp Wifi Viettel 300Mbps Wifi 6 | NETVT1",
    description:
      "Lắp đặt internet Viettel gói Wifi 6 300Mbps chỉ từ 195.000đ/tháng tại tỉnh, 235.000đ tại HN/HCM. Lắp nhanh, miễn phí công lắp, hỗ trợ 24/7.",
    heading: "Gói Internet NETVT1",
    sections: [
      {
        type: "text",
        paragraphs: [
          "Nếu bạn cần lắp đặt internet Viettel cho căn hộ nhỏ, nhà riêng hoặc gia đình ít người, gói NETVT1 Wifi 6 là lựa chọn kinh tế, tốc độ cao và ổn định. Với băng thông 300Mbps cùng modem Wifi 6 thế hệ mới, gói mang lại trải nghiệm lướt web, xem phim và học online mượt mà.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói lắp đặt Internet Viettel NETVT1",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tên gói: NETVT1",
          "Tốc độ: 300 Mbps",
          "Thiết bị: Modem Wifi 6 (áp dụng cho khách lắp mới)",
          "Số thiết bị: 10–15 thiết bị kết nối cùng lúc",
          "Phù hợp: Gia đình nhỏ, căn hộ diện tích vừa",
        ],
      },
      {
        type: "text",
        heading: "Giá gói NETVT1 theo khu vực",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Ngoại thành & các tỉnh: 195.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 235.000đ/tháng",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Phí hòa mạng: 300.000đ",
          "Phí lắp đặt: Miễn phí",
          "Ưu đãi: Tặng 01 tháng khi đóng trước 12 tháng",
        ],
      },
      {
        type: "text",
        heading: "Vì sao nên lắp đặt Internet Viettel gói NETVT1?",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Wifi 6 – Tốc độ cao, giảm nhiễu",
        paragraphs: ["Modem Wifi 6 giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tín hiệu ổn định hơn",
          "Giảm nhiễu trong khu vực đông mạng",
          "Kết nối mượt khi nhiều thiết bị dùng chung",
        ],
      },
      {
        type: "text",
        heading: "Internet ổn định cho nhu cầu gia đình",
        paragraphs: ["Gói phù hợp cho:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem phim online",
          "Học từ xa",
          "Lướt web, mạng xã hội",
          "Làm việc online nhẹ",
        ],
      },
      {
        type: "text",
        heading: "Lắp đặt nhanh – Hỗ trợ 24/7",
        paragraphs: ["Khi lắp đặt internet Viettel, khách hàng được:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Lắp nhanh trong 24–48 giờ",
          "Hỗ trợ kỹ thuật toàn quốc",
          "Chăm sóc khách hàng 24/7",
        ],
      },
      {
        type: "text",
        heading: "Gói NETVT1 phù hợp với ai?",
        paragraphs: ["Gói NETVT1 thích hợp cho:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Gia đình 2–4 người",
          "Nhà nhỏ, căn hộ",
          "Người cần lắp wifi ổn định với chi phí thấp",
          "Khách không cần camera hoặc truyền hình",
        ],
      },
      {
        type: "text",
        heading: "Cách đăng ký lắp Wifi Viettel nhanh nhất",
        paragraphs: [
          "📞 Tổng đài Viettel: 1800 8132 (miễn phí)",
          "Hoặc đến cửa hàng Viettel gần nhất.",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp khi lắp đặt Internet Viettel",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Lắp wifi Viettel bao lâu thì có mạng?",
        paragraphs: ["Thông thường từ 24–48 giờ tùy khu vực."],
      },
      {
        type: "text",
        heading: "Có miễn phí lắp đặt không?",
        paragraphs: ["Miễn phí công lắp, chỉ thu 300.000đ phí hòa mạng."],
      },
      {
        type: "text",
        heading: "Wifi 6 khác gì Wifi thường không?",
        paragraphs: ["Wifi 6 cho độ ổn định cao hơn và giảm nghẽn mạng."],
      },
      {
        type: "text",
        heading: "Có bị phát sinh chi phí không?",
        paragraphs: ["Không có chi phí ẩn, cước cố định hàng tháng."],
      },
    ],
    source: {
      url: siteConfig.url("/internet/NETVT1"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0155.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 0fc3ad9f0b88f0d9af7e939751231525415c5688daa18589c87d8a8a7df825c5",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/NETVT1",
      code: "NETVT1",
      subscription: "unspecified",
    },
  },
  "/internet/NETVT2": {
    status: "ready",
    kind: "internet",
    title: "Lắp Wifi Viettel 500Mbps Wifi 6 | NETVT2",
    description:
      "Lắp wifi Viettel NETVT2 500Mbps ổn định, hỗ trợ 10–15 thiết bị. Lắp đặt nhanh, hỗ trợ kỹ thuật 24/7.",
    heading: "Gói Internet NETVT2",
    sections: [
      {
        type: "text",
        paragraphs: [
          "Nếu bạn đang tìm lắp đặt internet Viettel cho gia đình cần tốc độ cao hơn gói phổ thông nhưng vẫn tiết kiệm chi phí, NETVT2 500Mbps là lựa chọn phù hợp. Gói mang lại đường truyền mạnh mẽ, trang bị modem Wifi 6 và hỗ trợ nhiều thiết bị cùng lúc.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói lắp đặt Internet Viettel NETVT2",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tốc độ: 500 Mbps",
          "Giá cước: từ 240.000đ/tháng",
          "Thiết bị: Modem Wifi 6 (áp dụng cho khách lắp mới)",
          "Hỗ trợ: 10–15 thiết bị hoạt động đồng thời",
          "Phù hợp: Gia đình diện tích vừa & trung bình",
        ],
      },
      {
        type: "text",
        heading: "Giá gói NETVT2 theo khu vực",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Ngoại thành & các tỉnh: 240.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 265.000đ/tháng",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Phí hòa mạng: 300.000đ",
          "Phí lắp đặt: Miễn phí",
          "Ưu đãi: Tặng 01 tháng khi đóng trước 12 tháng",
        ],
      },
      {
        type: "text",
        heading: "Lý do nên lắp đặt Internet Viettel NETVT2 500Mbps",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Tốc độ cao cho nhiều nhu cầu",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem phim 4K mượt",
          "Học online, họp Zoom ổn định",
          "Tải file nhanh hơn gói thường",
        ],
      },
      {
        type: "text",
        heading: "Wifi 6 – Tín hiệu ổn định",
        paragraphs: ["Modem Wifi 6 giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tăng tốc độ kết nối",
          "Giảm nhiễu sóng",
          "Phù hợp khu dân cư đông thiết bị",
        ],
      },
      {
        type: "text",
        heading: "Lắp đặt nhanh – Hỗ trợ 24/7",
        paragraphs: ["Khi lắp đặt internet Viettel, bạn được:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Lắp trong 24–48 giờ",
          "Hỗ trợ kỹ thuật toàn quốc",
          "Chăm sóc khách hàng 24/7",
        ],
      },
      {
        type: "text",
        heading: "Cách đăng ký lắp đặt Internet Viettel nhanh chóng",
        paragraphs: [
          "Tổng đài Viettel: 1800 8132 (miễn phí)",
          "Hoặc đến cửa hàng Viettel gần nhất.",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp khi lắp đặt Internet Viettel",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Lắp wifi Viettel bao lâu thì có mạng?",
        paragraphs: ["Thông thường từ 24–48 giờ tùy khu vực."],
      },
      {
        type: "text",
        heading: "Có mất phí lắp đặt không?",
        paragraphs: ["Miễn phí công lắp, chỉ thu phí hòa mạng 300.000đ."],
      },
      {
        type: "text",
        heading: "Wifi 6 có tốt hơn Wifi thường không?",
        paragraphs: ["Có. Wifi 6 ổn định hơn, giảm nghẽn khi nhiều thiết bị."],
      },
      {
        type: "text",
        heading: "Sau này có tăng giá không?",
        paragraphs: [
          "Viettel cam kết minh bạch, ổn định trong thời gian sử dụng.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/NETVT2"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0156.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 6d003d4abcb16e063ed20b21b442b3b3a0b9eb4fdfc7c585cf23c7f77f13b85d",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/NETVT2",
      code: "NETVT2",
      subscription: "unspecified",
    },
  },
  "/internet/MESHVT1": {
    status: "ready",
    kind: "internet",
    title: "Gói Mesh Wifi 6 Viettel MESHVT1 300Mbps | Phủ Sóng Rộng",
    description:
      "Gói Mesh Wifi 6 Viettel MESHVT1 tốc độ 300Mbps, phủ sóng rộng cho nhà nhiều tầng, hỗ trợ 25 thiết bị, tặng 1 tháng khi đóng trước 12 tháng.",
    heading: "Gói Internet MESHVT1",
    sections: [
      {
        type: "text",
        heading: "Thông tin gói cước MESHVT1",
        paragraphs: ["Tốc độ: 300 Mbps", "Giá cước:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Ngoại thành & các tỉnh: 210.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 255.000đ/tháng",
        ],
      },
      {
        type: "text",
        paragraphs: ["Thiết bị kèm theo:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "01 Modem WiFi thế hệ thứ 6 (tốc độ nhanh hơn, giảm độ trễ)",
          "01 Mesh WiFi (hệ thống WiFi gồm nhiều thiết bị đặt ở các vị trí khác nhau trong nhà, kết nối với nhau để tạo thành một mạng WiFi duy nhất, phủ sóng rộng và liền mạch)→ 02 vùng phủ WiFi",
        ],
      },
      {
        type: "text",
        paragraphs: ["Phí hòa mạng: 300.000đ", "Giá đã bao gồm VAT"],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật của MESHVT1",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Phủ sóng WiFi rộng và ổn định",
        paragraphs: ["Hệ thống Mesh giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Sóng Wifi mạnh và đều hơn so với modem đơn",
          "Giảm điểm mù Wifi trong nhà",
          "Chuyển vùng mượt mà trên 01 tên Wifi (SSID)",
        ],
      },
      {
        type: "text",
        heading: "Tốc độ 300Mbps đáp ứng tốt nhu cầu gia đình",
        paragraphs: ["Phù hợp cho:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Học tập, làm việc online",
          "Xem phim HD – 4K",
          "Lướt web, mạng xã hội, giải trí hằng ngày",
        ],
      },
      {
        type: "text",
        heading: "Kết nối 20–25 thiết bị đồng thời",
        paragraphs: [
          "Đáp ứng tốt nhu cầu sử dụng của gia đình có nhiều điện thoại, laptop, TV và thiết bị thông minh.",
        ],
      },
      {
        type: "text",
        heading: "Công nghệ WiFi 6 thế hệ mới",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tốc độ cao hơn WiFi cũ",
          "Kết nối ổn định, giảm nhiễu",
          "Độ trễ thấp, trải nghiệm mượt mà hơn",
        ],
      },
      {
        type: "text",
        heading: "Chi phí & điều kiện đăng ký",
        paragraphs: ["Cước tháng:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Ngoại thành & tỉnh: 210.000đ",
          "Nội thành HN & TP.HCM: 255.000đ",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Ưu đãi đóng trước 12 tháng: Tặng thêm 01 tháng sử dụng",
          "Phí hòa mạng: 300.000đ",
        ],
      },
      {
        type: "text",
        heading: "MESHVT1 phù hợp với ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Gia đình có nhu cầu Wifi ổn định, chi phí hợp lý",
          "Nhà nhiều phòng, nhà ống, nhà cao tầng nhỏ",
          "Gia đình sử dụng nhiều thiết bị cùng lúc",
          "Người muốn nâng cấp lên WiFi 6 với mức giá tiết kiệm",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "Tốc độ 300Mbps thực tế dùng được bao nhiêu? Tốc độ 300Mbps đáp ứng tốt nhu cầu gia đình. Tốc độ thực tế phụ thuộc thiết bị sử dụng, khoảng cách tới điểm phát và hạ tầng khu vực.",
          "Thiết bị WiFi 6 có tương thích với điện thoại, laptop đời cũ không? Có. WiFi 6 tương thích ngược với WiFi 5 và WiFi 4, các thiết bị cũ vẫn sử dụng bình thường.",
          "Mesh WiFi hoạt động như thế nào? Mesh tạo nhiều điểm phát sóng liên kết với nhau, giúp WiFi phủ đều toàn bộ không gian và tự động chuyển vùng khi di chuyển trong nhà.",
          "Khi di chuyển trong nhà có bị rớt WiFi không? Không. Hệ thống Mesh cho phép chuyển vùng mượt trên cùng một tên WiFi (SSID), không cần kết nối lại thủ công.",
          "Có thể mở rộng thêm Mesh khi cần không? Có. Có thể lắp thêm thiết bị Mesh để mở rộng vùng phủ khi nhà lớn hoặc nhiều tầng hơn.",
          "Số lượng thiết bị kết nối tối đa là bao nhiêu? Khoảng 20–25 thiết bị kết nối đồng thời trong điều kiện sử dụng gia đình.",
          "Có cần cấu hình kỹ thuật phức tạp không? Không. Kỹ thuật Viettel lắp đặt, cấu hình sẵn, khách hàng chỉ cần sử dụng.",
          "Mạng có ổn định khi sử dụng nhiều thiết bị cùng lúc không? Có. WiFi 6 giúp phân bổ băng thông hiệu quả hơn, giảm nhiễu và hạn chế nghẽn mạng.",
          "Khi mất điện hoặc sự cố mạng thì xử lý thế nào? Thiết bị tự kết nối lại khi có điện. Trường hợp sự cố đường truyền, Viettel hỗ trợ kỹ thuật 24/7. Hotline miễn phí: 1800 8119",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "Nếu bạn cần Internet ổn định – Wifi phủ rộng – chi phí hợp lý, MESHVT1 là lựa chọn rất phù hợp",
          "👉 Đăng ký ngay: Gọi 1800 8132 (miễn phí) để kiểm tra hạ tầng và lắp đặt nhanh chóng.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/MESHVT1"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0157.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: ca5eed4db6e124c477b0ead3b2a97d867e52fe635e83381ce19d72ce20c1374f",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/MESHVT1",
      code: "MESHVT1",
      subscription: "unspecified",
    },
  },
  "/internet/GIGA1": {
    status: "ready",
    kind: "internet",
    title: "Internet Viettel GIGA1_H 1Gbps | Nội Thành HN, HCM – 320K",
    description: "Internet Viettel GIGA1_H 1Gbps | Nội Thành HN, HCM – 320K",
    heading: "Gói Internet GIGA1",
    sections: [
      {
        type: "text",
        heading: "Tổng quan gói GIGA1",
        paragraphs: ["Tốc độ: 1 Gbps đối xứng", "01 modem WiFi 6 / XGSPON"],
      },
      {
        type: "table",
        heading: "Chi phí & điều kiện đăng ký",
        table: {
          headings: ["Khu vực", "Cước phí"],
          rows: [["Nội thành Hà Nội & TP.HCM", "320.000đ/tháng"]],
        },
      },
      {
        type: "text",
        heading: "Phí hòa mạng",
        paragraphs: ["Phí hòa mạng: 500.000đ", "Giá đã bao gồm VAT"],
      },
      {
        type: "text",
        heading: "Ưu đãi",
        paragraphs: ["Đóng trước 12 tháng tặng 01 tháng"],
      },
      {
        type: "text",
        heading: "Khu vực áp dụng",
        paragraphs: ["Ngoại thành và 32 tỉnh/thành khác đang cập nhật"],
      },
    ],
    source: {
      url: siteConfig.url("/internet/GIGA1"),
      capturedAt: "2026-10-27T13:13:06+07:00",
      evidencePaths: [
        "data/sources/ref-01/archetypes.json",
        "reference-clone/raw/ref-01/internet-GIGA1.txt",
      ],
      verifiedFields: [
        "page title",
        "H1",
        "speed",
        "region-specific price labels",
        "equipment/benefits",
        "H2 headings",
      ],
      unverifiedFields: [
        "HTTP status / redirect chain",
        "final rendered DOM / live CTA handling",
        "meta description",
        "live CTA behavior",
        "direct status/redirect",
        "full comparison table values",
        "full FAQ answers",
        "source image URLs",
      ],
      notes: [
        "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
        "Page title mentions GIGA1_H but approved path and heading are GIGA1",
        "Observed H2 sequence: Tổng quan gói GIGA1 | GIGA1 phù hợp với ai? | Ưu điểm nổi bật | Chi phí & ưu đãi | So sánh nhanh GIGA1 với gói phổ thông | Kết luận: Có nên lắp GIGA1?",
      ],
    },
    product: {
      id: "/internet/GIGA1",
      code: "GIGA1",
      subscription: "unspecified",
      regionalPrices: [
        {
          regionLabel: "Nội thành Hà Nội & TP.HCM",
          amountVND: 320000,
          periodLabel: "tháng",
        },
      ],
      speedLabel: "1 Gbps đối xứng",
      benefits: [
        "01 modem WiFi 6 / XGSPON",
        "Đóng trước 12 tháng tặng 01 tháng",
      ],
      conditions: ["Ngoại thành và 32 tỉnh/thành khác đang cập nhật"],
    },
  },
  "/internet/GIGA2": {
    status: "ready",
    kind: "internet",
    title: "Internet Viettel GIGA2 1Gbps + Mesh | HN, HCM – 355K",
    description:
      "Gói Internet Viettel GIGA2 tốc độ đối xứng 1Gbps, kèm Mesh mở rộng vùng phủ, hỗ trợ 35–40 thiết bị. Áp dụng nội thành HN & HCM, giá 355K/tháng.",
    heading: "Gói Internet GIGA2",
    sections: [
      {
        type: "text",
        paragraphs: [
          "GIGA2 là gói Internet cao cấp của Viettel dành cho hộ gia đình căn hộ rộng hoặc nhà 2 tầng cần tốc độ 1Gbps ổn định và phủ sóng WiFi mạnh toàn bộ không gian nhờ Mesh WiFi đi kèm. Phù hợp cho nhu cầu xem phim 8K, livestream, làm việc từ xa và nhà thông minh.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói GIGA2",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tên gói: GIGA2",
          "Tốc độ: 1Gbps đối xứng",
          "Giá cước: 355.000đ/tháng (đã gồm VAT)",
          "Thiết bị: 01 Modem WiFi công nghệ mới + 01 Mesh WiFi mở rộng vùng phủ",
          "Khu vực áp dụng: Nội thành Hà Nội & TP.HCM",
        ],
      },
      {
        type: "text",
        heading: "Điểm mạnh nổi bật",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "1) Tốc độ 1Gbps đối xứng",
        paragraphs: ["Băng thông cao giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Livestream mượt, độ trễ thấp",
          "Upload/Download file dung lượng lớn nhanh chóng",
          "Họp video ổn định giờ cao điểm",
        ],
      },
      {
        type: "text",
        heading: "2) Phủ sóng WiFi toàn nhà với Mesh",
        paragraphs: ["Bộ Mesh WiFi đi kèm giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Sóng mạnh và đều ở mọi phòng",
          "Giảm điểm chết WiFi so với router đơn lẻ",
          "Trải nghiệm ổn định cho nhà 2 tầng/căn hộ lớn",
        ],
      },
      {
        type: "text",
        heading: "3) Kết nối đồng thời 35–40 thiết bị",
        paragraphs: [
          "Phù hợp cho gia đình đông người, nhiều camera, TV, laptop, điện thoại, thiết bị IoT.",
        ],
      },
      {
        type: "text",
        heading: "4) Hậu mãi & kỹ thuật Viettel",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: ["Lắp đặt nhanh", "Hỗ trợ 24/7", "Đội ngũ kỹ thuật phủ khắp"],
      },
      {
        type: "text",
        heading: "Chi phí & ưu đãi",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Cước tháng: 355.000đ",
          "Đóng trước 12 tháng: tặng thêm 01 tháng",
          "Phí hòa mạng: 500.000đ",
        ],
      },
      {
        type: "text",
        heading: "GIGA2 dành cho ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Nhà 2 tầng, căn hộ diện tích vừa – lớn",
          "Gia đình đông người, nhiều thiết bị sử dụng song song",
          "Người làm việc online, creator, xem phim 4K–8K",
          "Hệ sinh thái Smart Home cần WiFi ổn định",
        ],
      },
      {
        type: "text",
        heading: "So sánh nhanh",
        paragraphs: [],
      },
      {
        type: "table",
        table: {
          headings: [],
          rows: [
            ["Tiêu chí", "GIGA2"],
            ["Tốc độ", "1Gbps đối xứng"],
            ["Thiết bị", "Modem công nghệ mới + 01 Mesh"],
            ["Số thiết bị", "35–40"],
            ["Phù hợp", "Nhà 2 tầng/căn hộ rộng"],
          ],
        },
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "GIGA2 lắp được ở đâu? Hiện áp dụng tại nội thành Hà Nội & TP.HCM.",
          "Mesh WiFi để làm gì? Giúp mở rộng vùng phủ, giảm điểm mù WiFi trong nhà.",
          "Có thể nâng cấp gói khác không? Có, theo chính sách Viettel tại thời điểm sử dụng.",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "Nếu bạn cần băng thông lớn + phủ sóng mạnh cho cả ngôi nhà, GIGA2 là lựa chọn cân bằng giữa hiệu năng và chi phí trong nhóm gói 1Gbps của Viettel.",
          "👉 Đăng ký ngay: Gọi 1800 8132 (miễn phí) để kiểm tra hạ tầng & lắp đặt.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/GIGA2"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0159.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 3bbe4e4caa9fdc8aaee3f0ee3b63c225909f10e32e1cbe7d93a21e0a7ae16f15",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/GIGA2",
      code: "GIGA2",
      subscription: "unspecified",
    },
  },
  "/internet/GIGA3": {
    status: "ready",
    kind: "internet",
    title: "Internet Viettel GIGA3 1Gbps + 2 Mesh | HN, HCM – 390K",
    description:
      "Gói Internet Viettel GIGA3 tốc độ 1Gbps, WiFi 6 kèm 2 Mesh, phủ sóng mạnh cho văn phòng và streamer. Giá từ 390.000đ/tháng.",
    heading: "Gói Internet GIGA3",
    sections: [
      {
        type: "text",
        paragraphs: [
          "GIGA3 là gói Internet cao cấp của Viettel dành cho căn hộ rộng hoặc nhà nhiều tầng cần băng thông lớn và vùng phủ WiFi mạnh. Tốc độ 1Gbps đối xứng kết hợp Mesh giúp trải nghiệm mượt mà cho xem phim 8K, livestream, làm việc từ xa và hệ sinh thái Smart Home.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói GIGA3",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tên gói: GIGA3",
          "Tốc độ: 1Gbps đối xứng",
          "Giá cước: 390.000đ/tháng (đã gồm VAT)",
          "Thiết bị: 01 Modem WiFi công nghệ mới + 02 Mesh WiFi mở rộng vùng phủ",
          "Khu vực áp dụng: Nội thành Hà Nội & TP.HCM",
        ],
      },
      {
        type: "text",
        heading: "Điểm mạnh nổi bật",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Băng thông đối xứng 1Gbps",
        paragraphs: ["Đảm bảo:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Livestream ổn định, độ trễ thấp",
          "Upload/Download dữ liệu nặng nhanh",
          "Họp video mượt giờ cao điểm",
        ],
      },
      {
        type: "text",
        heading: "Phủ sóng toàn nhà với 02 Mesh",
        paragraphs: ["Hai node Mesh giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Sóng mạnh, đều ở mọi tầng",
          "Giảm “điểm mù” WiFi",
          "Kết nối ổn định cho không gian lớn",
        ],
      },
      {
        type: "text",
        heading: "Kết nối đồng thời 40–45 thiết bị",
        paragraphs: [
          "Phù hợp gia đình đông người, nhiều camera/TV, laptop, thiết bị IoT.",
        ],
      },
      {
        type: "text",
        heading: "Hậu mãi Viettel",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: ["Lắp đặt nhanh", "Hỗ trợ kỹ thuật 24/7", "Bảo trì toàn quốc"],
      },
      {
        type: "text",
        heading: "Chi phí & ưu đãi",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Cước tháng: 390.000đ",
          "Đóng trước 12 tháng: tặng thêm 01 tháng",
          "Phí hòa mạng: 500.000đ",
        ],
      },
      {
        type: "text",
        heading: "GIGA3 dành cho ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Nhà 2–3 tầng, căn hộ rộng",
          "Gia đình dùng song song nhiều thiết bị",
          "Creator/streamer, làm việc online",
          "Smart Home cần WiFi ổn định toàn bộ không gian",
        ],
      },
      {
        type: "text",
        heading: "So sánh nhanh",
        paragraphs: [],
      },
      {
        type: "table",
        table: {
          headings: [],
          rows: [
            ["Tiêu chí", "GIGA3"],
            ["Tốc độ", "1Gbps đối xứng"],
            ["Thiết bị", "Modem mới + 02 Mesh"],
            ["Số thiết bị", "40–45"],
            ["Phù hợp", "Nhà nhiều tầng/căn hộ lớn"],
          ],
        },
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "GIGA3 lắp được ở đâu? Hiện áp dụng tại nội thành Hà Nội & TP.HCM.",
          "Mesh WiFi có cần thiết? Rất cần cho nhà nhiều tầng/căn hộ lớn để phủ sóng đều và ổn định.",
          "Có thể đổi gói trong quá trình sử dụng không? Có, theo chính sách Viettel hiện hành.",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "Nếu bạn muốn tốc độ cực cao + phủ sóng mạnh toàn nhà, GIGA3 là lựa chọn đáng đầu tư trong nhóm gói 1Gbps của Viettel.",
          "👉 Đăng ký ngay: Gọi 1800 8132 (miễn phí) để kiểm tra hạ tầng & lắp đặt.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/GIGA3"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0160.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: f916c838736e943201495c7a4fb61850e8b9bf1f558269b64af9a9f34a4c7b50",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/GIGA3",
      code: "GIGA3",
      subscription: "unspecified",
    },
  },
  "/internet/GIGA4": {
    status: "ready",
    kind: "internet",
    title: "1 Modem Wifi 6 + 1 Mesh Wifi",
    description:
      "Gói Internet Viettel GIGA4 tốc độ 1Gbps, WiFi 6 kèm 3 Mesh, phủ sóng toàn không gian cho văn phòng, streamer và dân công nghệ. Giá từ 425.000đ/tháng.",
    heading: "Gói Internet GIGA4",
    sections: [
      {
        type: "text",
        paragraphs: [
          "GIGA4 là gói Internet cao cấp nhất trong nhóm GIGA của Viettel, dành cho căn hộ lớn, biệt thự và nhà nhiều tầng cần băng thông siêu cao và vùng phủ WiFi mạnh toàn diện. Với 1Gbps đối xứng cùng hệ thống Mesh WiFi, gói này đáp ứng hoàn hảo nhu cầu giải trí 8K, livestream, làm việc online và Smart Home.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói GIGA4",
        paragraphs: [
          "Tên gói: GIGA4",
          "Tốc độ: 1Gbps đối xứng",
          "Giá cước: 425.000đ/tháng (đã gồm VAT)",
          "Thiết bị: 01 modem WiFi công nghệ mới + 03 Mesh WiFi mở rộng vùng phủ",
          "Khu vực áp dụng:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Hiện tại: Nội thành Hà Nội & TP.HCM",
          "Đang cập nhật: Ngoại thành & 32 tỉnh/thành còn lại (sẽ thông báo chính thức sau)",
        ],
      },
      {
        type: "text",
        heading: "Điểm mạnh nổi bật",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Tốc độ 1Gbps đối xứng",
        paragraphs: ["Giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Livestream mượt, độ trễ thấp",
          "Tải và upload dữ liệu dung lượng lớn cực nhanh",
          "Họp trực tuyến ổn định kể cả giờ cao điểm",
        ],
      },
      {
        type: "text",
        heading: "Phủ sóng toàn bộ không gian với 03 Mesh",
        paragraphs: ["Hệ thống 03 Mesh WiFi giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Phủ sóng mạnh và đều khắp nhiều tầng",
          "Hạn chế điểm mù WiFi",
          "Giữ tốc độ ổn định ở mọi khu vực trong nhà",
        ],
      },
      {
        type: "text",
        heading: "Kết nối tới khoảng 50 thiết bị cùng lúc",
        paragraphs: [
          "Phù hợp cho gia đình đông người, nhiều camera, TV, laptop và hệ thống IoT.",
        ],
      },
      {
        type: "text",
        heading: "Hậu mãi & kỹ thuật Viettel",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: ["Lắp đặt nhanh", "Hỗ trợ 24/7", "Hệ thống kỹ thuật toàn quốc"],
      },
      {
        type: "text",
        heading: "Chi phí & ưu đãi",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Cước hàng tháng: 425.000đ",
          "Đóng trước 12 tháng: Tặng thêm 01 tháng",
          "Phí hòa mạng: 500.000đ",
        ],
      },
      {
        type: "text",
        heading: "GIGA4 dành cho ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Biệt thự, nhà nhiều tầng, căn hộ cao cấp",
          "Gia đình đông người, sử dụng song song nhiều thiết bị",
          "Streamer, creator, làm việc từ xa chuyên sâu",
          "Hệ sinh thái Smart Home quy mô lớn",
        ],
      },
      {
        type: "text",
        heading: "So sánh nhanh",
        paragraphs: [],
      },
      {
        type: "table",
        table: {
          headings: [],
          rows: [
            ["Tiêu chí", "GIGA4"],
            ["Tốc độ", "1Gbps đối xứng"],
            ["Thiết bị", "Modem mới + 03 Mesh"],
            ["Thiết bị kết nối", "~50"],
            ["Phù hợp", "Nhà nhiều tầng, biệt thự"],
          ],
        },
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "GIGA4 có lắp được ở ngoại thành và tỉnh không? Hiện gói áp dụng chính thức tại nội thành Hà Nội & TP.HCM. Viettel đang cập nhật triển khai tại ngoại thành và 32 tỉnh/thành khác.",
          "Có cần nhiều Mesh không? Với nhà lớn, nhiều tầng, Mesh giúp phủ sóng đều và đảm bảo tốc độ ổn định ở mọi vị trí.",
          "Có được nâng cấp hoặc đổi gói? Có, theo chính sách Viettel tại từng thời điểm.",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "Nếu bạn muốn trải nghiệm Internet đẳng cấp cao cấp nhất của Viettel với vùng phủ WiFi gần như tuyệt đối, GIGA4 là lựa chọn lý tưởng.",
          "👉 Đăng ký ngay: Gọi 1800 8132 (miễn phí) để kiểm tra hạ tầng và lắp đặt.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/GIGA4"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0161.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 0011b95d52a486e924b6b593897b1eb47c589f2ad139297da6257d664058420b",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/GIGA4",
      code: "GIGA4",
      subscription: "unspecified",
    },
  },
  "/internet/MESHVT2": {
    status: "ready",
    kind: "internet",
    title: "Mesh WiFi 6 Viettel MESHVT2 | 500Gbps",
    description:
      "Gói Mesh WiFi 6 Viettel MESHVT2 phủ 3 vùng, tốc độ đến 500Mbps, hỗ trợ 25–30 thiết bị. Phù hợp nhà nhiều tầng.",
    heading: "Gói Internet MESHVT2",
    sections: [
      {
        type: "text",
        heading: "Thông tin gói cước MESHVT2",
        paragraphs: [
          "Tốc độ: Từ 500Mbps (có thể lên đến 1Gbps tùy hạ tầng)",
          "Giá cước:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Ngoại thành & 32 tỉnh/thành: 245.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 289.000đ/tháng",
        ],
      },
      {
        type: "text",
        paragraphs: ["Thiết bị kèm theo:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "01 Modem WiFi thế hệ thứ 6 (tốc độ nhanh hơn, giảm độ trễ)",
          "02 Mesh WiFi (hệ thống WiFi gồm nhiều thiết bị đặt ở các vị trí khác nhau trong nhà, kết nối với nhau để tạo thành một mạng WiFi duy nhất, phủ sóng rộng và liền mạch)→ 03 vùng phủ WiFi",
        ],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật của MESHVT2",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Phủ sóng WiFi toàn bộ không gian",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Sóng mạnh, đều nhiều phòng",
          "Giảm điểm mù WiFi",
          "Chuyển vùng mượt mà trên 1 tên WiFi",
        ],
      },
      {
        type: "text",
        heading: "Tốc độ cao – ổn định",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Băng thông linh hoạt 500Mbps – 1Gbps",
          "Phù hợp xem phim 4K–8K, họp online, livestream",
        ],
      },
      {
        type: "text",
        heading: "Kết nối nhiều thiết bị",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "25–30 thiết bị cùng lúc",
          "Phù hợp gia đình đông người, Smart Home",
        ],
      },
      {
        type: "text",
        heading: "WiFi 6 thế hệ mới",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: ["Tốc độ cao hơn WiFi cũ", "Giảm nhiễu, độ trễ thấp"],
      },
      {
        type: "text",
        heading: "Chi phí & điều kiện đăng ký",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: ["Phí hòa mạng: 300.000đ", "Giá cước đã bao gồm VAT"],
      },
      {
        type: "text",
        heading: "MESHVT2 phù hợp với ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Căn hộ nhiều phòng",
          "Nhà ống, nhà cao tầng",
          "Gia đình dùng WiFi thường xuyên",
          "Nhu cầu Internet ổn định cho học tập, làm việc, giải trí",
        ],
      },
      {
        type: "text",
        heading: "Đăng ký gói Mesh Wifi 6 MESHVT2",
        paragraphs: [
          "📞 Gọi 1800 8132 (miễn phí) để kiểm tra hạ tầng và lắp đặt nhanh chóng.",
          "👉 MESHVT2 – WiFi mạnh, phủ rộng, Tết kết nối trọn vẹn cùng Viettel.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/MESHVT2"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0162.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: a3c53d25dce81d122f61e537e9f4c84f5298169c021eb1ec7b96229d0fbe5566",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/MESHVT2",
      code: "MESHVT2",
      subscription: "unspecified",
    },
  },
  "/internet/MESHVT3": {
    status: "ready",
    kind: "internet",
    title: "Mesh WiFi 6 Viettel MESHVT3 | 500Mbps",
    description:
      "Gói Mesh WiFi 6 Viettel MESHVT3 phủ 4 vùng, tốc độ đến 1Gbps, hỗ trợ 30–40 thiết bị. Phù hợp nhà lớn",
    heading: "Gói Internet MESHVT3",
    sections: [
      {
        type: "text",
        heading: "Thông tin gói cước MESHVT3",
        paragraphs: [
          "Tốc độ: Từ 500Mbps đến 1Gbps (tùy hạ tầng và khoảng cách)",
          "Giá cước:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Nội thành Hà Nội & TP.HCM: 359.000đ/tháng",
          "Ngoại thành & 32 tỉnh/thành: 299.000đ/tháng",
        ],
      },
      {
        type: "text",
        paragraphs: ["Thiết bị kèm theo:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "01 Modem WiFi thế hệ thứ 6 (tốc độ nhanh hơn, giảm độ trễ)",
          "03 Mesh WiFi (hệ thống WiFi gồm nhiều thiết bị đặt ở các vị trí khác nhau trong nhà, kết nối với nhau để tạo thành một mạng WiFi duy nhất, phủ sóng rộng và liền mạch)→ 04 vùng phủ WiFi",
        ],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật của MESHVT3",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Phủ sóng WiFi toàn bộ không gian",
        paragraphs: ["Hệ thống 03 Mesh WiFi giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Sóng mạnh và đều ở mọi phòng",
          "Hạn chế tối đa điểm mù WiFi",
          "Chuyển vùng mượt mà trên 1 SSID duy nhất",
        ],
      },
      {
        type: "text",
        heading: "Tốc độ linh hoạt đến 1Gbps",
        paragraphs: ["Băng thông 500Mbps – 1Gbps đáp ứng tốt:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem phim 4K–8K, livestream",
          "Họp trực tuyến ổn định",
          "Tải và upload dữ liệu dung lượng lớn",
        ],
      },
      {
        type: "text",
        heading: "Kết nối 30–40 thiết bị đồng thời",
        paragraphs: [
          "Phù hợp gia đình đông người, nhiều TV, laptop, smartphone và thiết bị IoT.",
        ],
      },
      {
        type: "text",
        heading: "Thiết bị chuẩn WiFi 6",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tốc độ cao hơn thế hệ WiFi cũ",
          "Giảm nhiễu, kết nối ổn định",
          "Độ trễ thấp cho các tác vụ thời gian thực",
        ],
      },
      {
        type: "text",
        heading: "Chi phí & điều kiện đăng ký",
        paragraphs: ["Giá cước:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Nội thành HN & TP.HCM: 359.000đ/tháng",
          "Ngoại thành & 32 tỉnh/thành: 299.000đ/tháng",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Ưu đãi đóng trước 12 tháng: Tặng thêm 01 tháng sử dụng",
          "Phí hòa mạng: 300.000đ",
          "Giá đã bao gồm VAT",
        ],
      },
      {
        type: "text",
        heading: "MESHVT3 phù hợp với ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Căn hộ nhiều phòng, nhà ống cao tầng",
          "Biệt thự diện tích lớn",
          "Gia đình sử dụng đồng thời nhiều thiết bị",
          "Nhu cầu WiFi ổn định cho Smart Home",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "MESHVT3 khác gì so với MESHVT1 và MESHVT2? MESHVT3 có 03 Mesh WiFi, tạo 04 vùng phủ, phù hợp không gian lớn như nhà nhiều tầng, biệt thự, giúp sóng mạnh và đều hơn trên toàn bộ diện tích.",
          "Tốc độ thực tế có đạt 1Gbps không? Tốc độ phụ thuộc hạ tầng khu vực, thiết bị sử dụng và vị trí lắp đặt. Thực tế dao động trong khoảng 500Mbps – 1Gbps.",
          "Dùng nhiều thiết bị cùng lúc có bị nghẽn mạng không? Không. MESHVT3 hỗ trợ 30–40 thiết bị kết nối đồng thời, phù hợp gia đình đông người và hệ thống Smart Home.",
          "Có thể mở rộng thêm Mesh nếu nhà quá lớn không? Có. Có thể lắp thêm Mesh để mở rộng vùng phủ khi cần, tùy theo kết cấu và diện tích thực tế.",
          "Việc lắp đặt và cấu hình có phức tạp không? Không. Kỹ thuật Viettel khảo sát, lắp đặt và cấu hình sẵn, khách hàng chỉ cần sử dụng.",
          "Nếu bạn cần WiFi phủ toàn nhà, ổn định cho nhiều thiết bị và không gian lớn, MESHVT3 là lựa chọn cao cấp rất đáng cân nhắc, đặc biệt với ưu đãi hấp dẫn dịp Tết Nguyên Đán 2026.",
          "👉 Đăng ký ngay: Gọi 1800 8132 (miễn phí) để kiểm tra hạ tầng và lắp đặt nhanh chóng.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/MESHVT3"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0163.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 4d8c1f7d60edb6bf6983d928d6eac82eb3957a162062a29dd091c7db77a79f33",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/MESHVT3",
      code: "MESHVT3",
      subscription: "unspecified",
    },
  },
  "/internet/NETVT1_CAM1": {
    status: "ready",
    kind: "internet",
    title: "Internet + Camera Viettel NETVT1_CAM1 | 350Mbps",
    description: "Internet + Camera Viettel NETVT1_CAM1 | 350Mbps",
    heading: "Gói Internet NETVT1_CAM1",
    sections: [
      {
        type: "text",
        heading: "Thông tin gói cước",
        paragraphs: [
          "Tốc độ: 350 Mbps",
          "01 Camera AI Viettel",
          "01 ngày lưu trữ cloud",
          "01 Modem WiFi 6",
        ],
      },
      {
        type: "table",
        heading: "Chi phí & điều kiện đăng ký",
        table: {
          headings: ["Khu vực", "Cước phí"],
          rows: [
            ["Khu vực 32 tỉnh/thành", "215.000đ/tháng"],
            ["Ngoại thành Hà Nội & TP.HCM", "255.000đ/tháng"],
          ],
        },
      },
      {
        type: "list",
        heading: "Chi phí & khuyến mại",
        ordered: false,
        items: [
          "Camera thứ 2: 20.000đ/camera/tháng cho lưu trữ cloud 1 ngày",
          "Combo 01 camera: hòa mạng 300.000đ",
          "Từ camera thứ 2: hòa mạng 300.000đ/camera",
          "Lắp đặt miễn phí",
        ],
      },
      {
        type: "text",
        heading: "Ưu đãi",
        paragraphs: ["Đóng trước 12 tháng tặng 01 tháng"],
      },
    ],
    source: {
      url: siteConfig.url("/internet/NETVT1_CAM1"),
      capturedAt: "2026-10-27T13:13:06+07:00",
      evidencePaths: [
        "data/sources/ref-01/archetypes.json",
        "reference-clone/raw/ref-01/internet-NETVT1_CAM1.txt",
      ],
      verifiedFields: [
        "page title",
        "H1",
        "speed",
        "region-specific price labels",
        "equipment/benefits",
        "H2 headings",
      ],
      unverifiedFields: [
        "HTTP status / redirect chain",
        "final rendered DOM / live CTA handling",
        "meta description",
        "complete lower-page CTA",
        "actual applicability and regional selector",
        "direct status/redirect",
        "full comparison table values",
        "full FAQ answers",
        "source image URLs",
      ],
      notes: [
        "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
        "Observed H2 sequence: Thông tin gói cước | Chi phí & khuyến mại | Ưu điểm nổi bật | NETVT1_CAM1 phù hợp với ai?",
      ],
    },
    product: {
      id: "/internet/NETVT1_CAM1",
      code: "NETVT1_CAM1",
      subscription: "unspecified",
      regionalPrices: [
        {
          regionLabel: "Khu vực 32 tỉnh/thành",
          amountVND: 215000,
          periodLabel: "tháng",
        },
        {
          regionLabel: "Ngoại thành Hà Nội & TP.HCM",
          amountVND: 255000,
          periodLabel: "tháng",
        },
      ],
      speedLabel: "350 Mbps",
      benefits: [
        "01 Camera AI Viettel",
        "01 ngày lưu trữ cloud",
        "01 Modem WiFi 6",
        "Camera thứ 2: 20.000đ/camera/tháng cho lưu trữ cloud 1 ngày",
        "Combo 01 camera: hòa mạng 300.000đ",
        "Từ camera thứ 2: hòa mạng 300.000đ/camera",
        "Lắp đặt miễn phí",
        "Đóng trước 12 tháng tặng 01 tháng",
      ],
      conditions: [
        "Có thể tới 450Mbps khi dùng 2 camera và đăng ký truyền hình",
      ],
    },
  },
  "/internet/NETVT2_CAM1": {
    status: "ready",
    kind: "internet",
    title: "Internet + Camera Viettel NETVT2_CAM1 | 500Mbps",
    description:
      "Combo Internet Viettel + Camera NETVT2_CAM1: WiFi 6 tốc độ 500Mbps, tặng camera AI 2K, lưu trữ cloud 24h.",
    heading: "Gói Internet NETVT2_CAM1",
    sections: [
      {
        type: "text",
        paragraphs: [
          "NETVT2_CAM1 là combo Internet Viettel dành cho gia đình có nhu cầu mạng ổn định + giám sát an ninh thông minh. Gói tích hợp sẵn 01 Camera AI Viettel cùng lưu trữ đám mây 1 ngày (24h), phù hợp căn hộ nhỏ, nhà phố hoặc hộ gia đình cần kết nối Internet ổn định và an tâm về an ninh.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói cước",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tên gói: NETVT2_CAM1",
          "Tốc độ Internet: Từ 500Mbps đến 1Gbps (tùy hạ tầng khu vực)",
          "Camera đi kèm: 01 Camera AI Viettel (cấp trong suốt thời gian sử dụng)",
          "Lưu trữ cloud: 01 ngày (24h) cho camera đầu tiên",
          "Thiết bị mạng: 01 Modem WiFi 6 Viettel",
        ],
      },
      {
        type: "text",
        heading: "Chi phí & khuyến mại",
        paragraphs: [
          "Ngoại thành & 32 tỉnh/thành: 260.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 285.000đ/tháng (Giá đã bao gồm VAT và phí lưu trữ cloud cho camera đầu tiên)",
          "Camera từ chiếc thứ 2: 20.000đ/camera/tháng (lưu trữ 1 ngày)",
          "Ưu đãi: Đóng trước 12 tháng, tặng thêm 01 tháng sử dụng",
          "Phí hòa mạng:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Combo 01 camera: 300.000đ",
          "Từ camera thứ 2 trở lên: 300.000đ/camera",
        ],
      },
      {
        type: "text",
        paragraphs: ["Phí lắp đặt: Miễn phí"],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "1) Internet tốc độ cao – ổn định",
        paragraphs: ["Băng thông 500Mbps–1Gbps đáp ứng tốt:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem phim 4K, học – họp online",
          "Upload/Download dữ liệu hàng ngày",
        ],
      },
      {
        type: "text",
        paragraphs: ["WiFi 6 cho kết nối mượt, giảm nhiễu, độ trễ thấp."],
      },
      {
        type: "text",
        heading: "2) Camera AI thông minh – rõ nét 2K",
        paragraphs: ["Camera Viettel hỗ trợ:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "AI phân biệt người & vật, giảm cảnh báo giả",
          "Độ phân giải 2K – 3MP (2304×1296)",
          "Hồng ngoại ban đêm ~10m (ngoài trời đến 30m)",
          "Đàm thoại 2 chiều (Two-way talking)",
          "Xoay 360°, bám theo chuyển động",
          "Camera ngoài trời hỗ trợ LAN, WiFi 2.4GHz & Ethernet",
        ],
      },
      {
        type: "text",
        heading: "3) Lưu trữ cloud an toàn",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Dữ liệu lưu trên hệ thống server Viettel tại Việt Nam",
          "Tránh rủi ro mất video do hỏng/mất thẻ nhớ.",
        ],
      },
      {
        type: "text",
        heading: "4) Quản lý tập trung trên ứng dụng Viettel Home",
        paragraphs: ["Khách hàng có thể:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem trực tiếp & xem lại video",
          "Quản lý camera từ xa",
          "Kết nối hệ sinh thái nhà thông minh 👉 Tải app tại: https://viettel.vn/ViettelHomeApp",
        ],
      },
      {
        type: "text",
        heading: "NETVT2_CAM1 phù hợp với ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Gia đình cần Internet ổn định + camera giám sát cơ bản",
          "Căn hộ nhỏ, nhà phố",
          "Khách hàng muốn chi phí hợp lý, vẫn có camera AI",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "Camera có phải mua thêm không? Không. Camera đầu tiên được cấp kèm gói và đã bao gồm phí lưu trữ cloud 1 ngày.",
          "Có thể lắp thêm camera không? Có. Phí lưu trữ cloud cho camera thứ 2 trở đi là 20.000đ/camera/tháng.",
          "Tốc độ có đạt 1Gbps không? Phụ thuộc hạ tầng tại khu vực. Tốc độ thực tế dao động trong khoảng 500Mbps–1Gbps.",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "Nếu bạn cần một gói Internet mạnh – WiFi 6 hiện đại – Camera AI 2K – chi phí tiết kiệm, NETVT2_CAM1 là lựa chọn hợp lý cho gia đình hiện đại.",
          "👉 Đăng ký ngay: Gọi 1800 8132 để kiểm tra hạ tầng và lắp đặt.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/NETVT2_CAM1"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0165.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 34721cb65ddd03321b32520ee52dee97447ea213df5c2c5f62d459c49849afdf",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/NETVT2_CAM1",
      code: "NETVT2_CAM1",
      subscription: "unspecified",
    },
  },
  "/internet/MESHVT1_CAM1": {
    status: "ready",
    kind: "internet",
    title: "Internet Mesh + Camera Viettel MESHVT1_CAM1 | 350Mbps",
    description:
      "Combo Internet Viettel MESHVT1H_CAM1: WiFi 6 Mesh phủ khắp nhà, tốc độ 350Mbps, camera AI 2K lưu trữ cloud 24h",
    heading: "Gói Internet MESHVT1_CAM1",
    sections: [
      {
        type: "text",
        paragraphs: [
          "MESHVT1_CAM1 là combo Internet gia đình tiết kiệm nhất của Viettel, tích hợp WiFi 6 Mesh + Camera AI phục vụ đồng thời nhu cầu kết nối Internet ổn định và giám sát an ninh. Gói phù hợp cho căn hộ vừa, nhà ống cao tầng và hộ gia đình cần mạng mạnh kèm camera trong nhà.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói cước",
        paragraphs: [
          "Tên gói: MESHVT1_CAM1",
          "Tốc độ Internet: 350Mbps (có thể lên đến 450Mbps khi lắp thêm camera & đăng ký truyền hình)",
          "Lưu trữ Camera: 01 ngày (24h)",
          "Thiết bị kèm theo:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "01 Modem WiFi 6",
          "01 Mesh WiFi (tương đương 02 vùng phủ)",
          "01 Camera AI Viettel (cấp trong suốt thời gian sử dụng)",
        ],
      },
      {
        type: "text",
        heading: "Chi phí & khuyến mại",
        paragraphs: [
          "Ngoại thành & 32 tỉnh/thành: 230.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 275.000đ/tháng (Đã bao gồm VAT & phí lưu trữ cloud cho camera đầu tiên)",
          "Camera từ chiếc thứ 2: 20.000đ/camera/tháng (lưu trữ 1 ngày)",
          "Ưu đãi: Đóng trước 12 tháng – tặng thêm 01 tháng sử dụng",
          "Phí hòa mạng:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Combo 01 camera: 300.000đ",
          "Từ camera thứ 2 trở lên: 300.000đ/camera",
        ],
      },
      {
        type: "text",
        paragraphs: ["Phí lắp đặt: Miễn phí"],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "1) WiFi phủ đều – ổn định toàn nhà",
        paragraphs: ["Hệ thống Mesh giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Mở rộng vùng phủ WiFi",
          "Giảm điểm mù",
          "Kết nối mượt trên một SSID duy nhất",
        ],
      },
      {
        type: "text",
        heading: "2) Internet tốc độ cao",
        paragraphs: ["Tốc độ 350Mbps (có thể lên tới 450Mbps) phù hợp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem video 4K",
          "Họp online",
          "Lướt web, học tập, làm việc từ xa",
        ],
      },
      {
        type: "text",
        heading: "3) Camera AI thông minh",
        paragraphs: ["Camera Viettel hỗ trợ:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "AI phân biệt người & vật – giảm cảnh báo giả",
          "Độ phân giải 2K (3MP – 2304×1296)",
          "Hồng ngoại ban đêm ~10m (ngoài trời tới 30m)",
          "Đàm thoại 2 chiều",
          "Xoay 360°, bám theo chuyển động",
          "Camera ngoài trời: LAN + WiFi 2.4GHz + Ethernet",
        ],
      },
      {
        type: "text",
        heading: "4) Lưu trữ cloud an toàn",
        paragraphs: [
          "Dữ liệu lưu tại server Viettel – tránh rủi ro hỏng/mất thẻ nhớ, mất camera.",
        ],
      },
      {
        type: "text",
        heading: "5) Quản lý trên app Viettel Home",
        paragraphs: [
          "Xem và điều khiển camera, quản lý nhà thông minh ngay trên điện thoại. 👉 Tải ứng dụng: https://viettel.vn/ViettelHomeApp",
        ],
      },
      {
        type: "text",
        heading: "MESHVT1_CAM1 phù hợp với ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Gia đình cần WiFi ổn định kèm camera",
          "Căn hộ vừa, nhà 1–2 tầng",
          "Nhà có trẻ nhỏ, người lớn tuổi",
          "Nhu cầu an ninh cơ bản – tiết kiệm chi phí",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "Camera có phải mua thêm không? Không. Gói đã bao gồm camera đầu tiên và phí cloud 1 ngày.",
          "Có lắp thêm camera được không? Có. Mỗi camera thêm tính phí lưu trữ 20.000đ/tháng.",
          "Tốc độ thực tế có đủ dùng không? Phù hợp gia đình 20–25 thiết bị hoạt động đồng thời.",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "Nếu bạn cần một gói Internet + camera kinh tế, dễ lắp đặt và quản lý, MESHVT1_CAM1 là lựa chọn rất đáng cân nhắc.",
          "👉 Đăng ký ngay: Gọi 1800 8132 (miễn phí) để được Viettel kiểm tra hạ tầng & lắp đặt.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/MESHVT1_CAM1"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0166.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 9b7d6dfc247189d8a1ed8befcea1bfb34558d1df5e4b61157cb29ee124acff61",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/MESHVT1_CAM1",
      code: "MESHVT1_CAM1",
      subscription: "unspecified",
    },
  },
  "/internet/MESHVT2_CAM1": {
    status: "ready",
    kind: "internet",
    title: "WiFi Mesh + Camera Viettel MESHVT2_CAM1 | 500Mbps",
    description:
      "Combo Internet Viettel MESHVT2_CAM1: WiFi 6 Mesh phủ 3 vùng, tốc độ 500Mbps, camera AI 2K lưu trữ cloud 24h.",
    heading: "Gói Internet MESHVT2_CAM1",
    sections: [
      {
        type: "text",
        paragraphs: [
          "MESHVT2_CAM1 là combo Internet WiFi 6 Mesh + Camera AI Viettel dành cho gia đình cần vừa mạng mạnh, phủ sóng rộng vừa giám sát an ninh 24/7. Gói tích hợp sẵn 01 Camera AI kèm lưu trữ đám mây 1 ngày (24h), phù hợp cho căn hộ nhiều phòng, nhà cao tầng và gia đình có trẻ nhỏ hoặc người lớn tuổi.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói cước",
        paragraphs: [
          "Tên gói: MESHVT2_CAM1",
          "Tốc độ Internet: Từ 500Mbps (có thể lên đến 1Gbps tùy hạ tầng)",
          "Lưu trữ Camera: 01 ngày (24h)",
          "Thiết bị kèm theo:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "01 Modem WiFi 6",
          "02 Mesh WiFi (tương đương 3 vùng phủ)",
          "01 Camera AI Viettel (cấp trong suốt thời gian sử dụng)",
        ],
      },
      {
        type: "text",
        heading: "Chi phí & khuyến mại",
        paragraphs: [
          "Ngoại thành & 32 tỉnh/thành: 265.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 309.000đ/tháng (Giá đã bao gồm VAT và phí lưu trữ cloud cho camera đầu tiên)",
          "Camera từ chiếc thứ 2: 20.000đ/camera/tháng (lưu trữ 1 ngày)",
          "Ưu đãi: Đóng trước 12 tháng, tặng thêm 01 tháng sử dụng",
          "Phí hòa mạng:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Combo 01 camera: 300.000đ",
          "Từ camera thứ 2 trở lên: 300.000đ/camera",
        ],
      },
      {
        type: "text",
        paragraphs: ["Phí lắp đặt: Miễn phí"],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "1) WiFi phủ rộng – ổn định toàn nhà",
        paragraphs: ["Hệ thống Mesh giúp:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Phủ sóng đều khắp các phòng",
          "Giảm điểm mù WiFi",
          "Kết nối liền mạch trên một SSID duy nhất",
        ],
      },
      {
        type: "text",
        heading: "2) Internet tốc độ cao",
        paragraphs: ["Băng thông từ 500Mbps–1Gbps đáp ứng:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem phim 4K/8K",
          "Livestream, họp trực tuyến",
          "Tải và upload dữ liệu lớn",
        ],
      },
      {
        type: "text",
        heading: "3) Camera AI thông minh",
        paragraphs: ["Camera Viettel trang bị:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "AI phân biệt người & vật, giảm cảnh báo giả",
          "Độ phân giải 2K (3MP – 2304×1296)",
          "Hồng ngoại ban đêm ~10m (ngoài trời lên tới 30m)",
          "Đàm thoại 2 chiều (Two-way talking)",
          "Xoay 360°, bám theo chuyển động",
          "Camera ngoài trời hỗ trợ LAN + WiFi 2.4GHz + Ethernet",
        ],
      },
      {
        type: "text",
        heading: "4) Lưu trữ cloud an toàn",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Dữ liệu lưu trên server Viettel tại Việt Nam",
          "Tránh rủi ro hỏng/mất thẻ nhớ",
        ],
      },
      {
        type: "text",
        heading: "5) Quản lý tập trung trên ứng dụng Viettel Home",
        paragraphs: ["Khách hàng dễ dàng:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem trực tiếp & xem lại video",
          "Điều khiển camera từ xa",
          "Quản lý nhà thông minh 👉 Tải ứng dụng tại: https://viettel.vn/ViettelHomeApp",
        ],
      },
      {
        type: "text",
        heading: "MESHVT2_CAM1 phù hợp với ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Gia đình cần WiFi mạnh + giám sát an ninh",
          "Căn hộ nhiều phòng, nhà cao tầng",
          "Nhà có trẻ nhỏ, người già",
          "Nhu cầu quản lý nhà thông minh",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "Camera có mất thêm tiền không? Không. Camera đầu tiên được cấp kèm gói và đã bao gồm phí cloud 1 ngày.",
          "Có thể lắp thêm camera không? Có. Phí lưu trữ cloud: 20.000đ/camera/tháng.",
          "Tốc độ có đạt 1Gbps không? Phụ thuộc hạ tầng từng khu vực và vị trí lắp đặt.",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "Nếu bạn muốn một gói Internet mạnh + camera thông minh + quản lý tập trung trên một app, MESHVT2_CAM1 là lựa chọn hiệu quả và kinh tế cho gia đình hiện đại.",
          "👉 Đăng ký ngay: Gọi 1800 8132 (miễn phí) để kiểm tra hạ tầng và lắp đặt.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/MESHVT2_CAM1"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0167.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: e9a81fba0042df388054ffd3b50d6a5257022859b9f54753d84cf787eb71c80a",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/MESHVT2_CAM1",
      code: "MESHVT2_CAM1",
      subscription: "unspecified",
    },
  },
  "/internet/NETVT1_GIAITRI": {
    status: "ready",
    kind: "internet",
    title: "Combo Internet + TV360 Viettel 300Mbps | NETVT1_GIAITRI",
    description:
      "Gói combo Internet Viettel + TV360 NETVT1_GIAITRI tốc độ 300Mbps, WiFi 6, hơn 100 kênh truyền hình và kho phim hấp dẫn",
    heading: "Gói Internet NETVT1_GIAITRI",
    sections: [
      {
        type: "text",
        paragraphs: [
          "NETVT1_GIAITRI là gói combo Internet Viettel kết hợp truyền hình TV360 dành cho các hộ gia đình có nhu cầu sử dụng mạng ổn định và xem truyền hình – phim ảnh với chi phí tiết kiệm. Gói phù hợp căn hộ nhỏ, nhà 1 tầng hoặc nhu cầu dùng Internet ở mức vừa phải.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói NETVT1_GIAITRI",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tên gói: NETVT1_GIAITRI",
          "Tốc độ Internet: 300 Mbps",
          "Thiết bị WiFi: 01 Modem WiFi 6 (áp dụng cho khách hàng lắp mới)",
          "Truyền hình: TV360",
          "Đối tượng phù hợp: Gia đình nhỏ, căn hộ chung cư, nhu cầu giải trí cơ bản",
        ],
      },
      {
        type: "text",
        heading: "Giá cước & khuyến mại",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "Giá theo khu vực",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Ngoại thành & 32 tỉnh thành: 215.000đ / tháng",
          "Hà Nội & TP.HCM (nội thành): 255.000đ / tháng",
        ],
      },
      {
        type: "text",
        paragraphs: ["Giá đã bao gồm VAT."],
      },
      {
        type: "text",
        heading: "Ưu đãi hiện hành",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Đóng trước 12 tháng: Tặng thêm 01 tháng sử dụng",
          "Phí hòa mạng: 300.000đ",
          "Hỗ trợ lắp đặt nhanh, kỹ thuật Viettel",
        ],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật của NETVT1_GIAITRI",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "1. Internet Viettel 300Mbps – ổn định, tiết kiệm",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Băng thông 300 Mbps, đủ dùng cho:Lướt web, học online, họp trực tuyếnXem phim, YouTube, Facebook",
          "WiFi 6 cho:Kết nối nhanh hơnÍt nhiễu sóng hơnMạng ổn định khi nhiều người dùng",
          "Hỗ trợ 10–15 thiết bị đồng thời",
        ],
      },
      {
        type: "text",
        heading: "2. Truyền hình TV360 – nội dung phong phú",
        paragraphs: [
          "Khách hàng cài ứng dụng TV360 trên Smart TV hoặc điện thoại để trải nghiệm:",
          "Hơn 100 kênh truyền hình:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: ["VTV, HTV, THVL, SCTV, nhóm kênh thiết yếu"],
      },
      {
        type: "text",
        paragraphs: ["Thể thao trực tiếp:"],
      },
      {
        type: "list",
        ordered: false,
        items: ["Xem trên các kênh truyền hình hiện có trong gói"],
      },
      {
        type: "text",
        paragraphs: ["Kho phim đồ sộ:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Hơn 2.000 phim lẻ",
          "Hơn 1.500 phim bộ",
          "Phim Hàn – Trung – Thái – Việt – Anime",
          "Phim Hollywood (không bao gồm nội dung 4K & độc quyền)",
        ],
      },
      {
        type: "text",
        paragraphs: ["Tiện ích nổi bật:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem lại chương trình trong 7 ngày",
          "Tua lại khi đang xem",
          "Phát trong nền",
          "Đăng nhập tối đa 05 thiết bị",
          "Xem đồng thời 02 thiết bị",
        ],
      },
      {
        type: "text",
        heading: "Ai nên dùng NETVT1_GIAITRI?",
        paragraphs: ["Gói phù hợp nếu bạn là:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Gia đình ít người",
          "Căn hộ chung cư nhỏ",
          "Nhà 1 tầng hoặc diện tích dưới 60m²",
          "Người cần mạng ổn định + xem TV cơ bản",
          "Muốn tiết kiệm chi phí internet hằng tháng",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "1. Mức 300Mbps có đủ dùng không?",
        paragraphs: ["✅ Đủ cho gia đình 3–5 người sử dụng cùng lúc:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem YouTube, phim HD",
          "Học online, họp Zoom",
          "Facebook, TikTok, lướt web",
        ],
      },
      {
        type: "text",
        heading: "2. Dùng TV360 có cần đầu thu không?",
        paragraphs: ["Không cần đầu thu. Chỉ cần:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Smart TV",
          "Điện thoại / máy tính bảng",
          "Laptop Cài app TV360 là xem được ngay.",
        ],
      },
      {
        type: "text",
        heading: "3. Có cần mua thêm modem không?",
        paragraphs: [
          "Không. Viettel trang bị miễn phí Modem WiFi 6 cho khách hàng lắp mới.",
        ],
      },
      {
        type: "text",
        heading: "4. Nhà tôi nhiều phòng có dùng được không?",
        paragraphs: [
          "Với nhà nhỏ hoặc căn hộ 1–2 phòng: dùng tốt. Nếu nhà nhiều tầng, nhiều phòng → Nên nâng cấp sang gói Mesh để WiFi phủ đều hơn.",
        ],
      },
      {
        type: "text",
        heading: "5. Tôi có được dùng TV360 trên nhiều thiết bị không?",
        paragraphs: ["Có:"],
      },
      {
        type: "list",
        ordered: false,
        items: ["Tối đa 05 thiết bị đăng nhập", "Xem đồng thời 02 thiết bị"],
      },
      {
        type: "text",
        heading: "6. Lắp đặt có mất nhiều thời gian không?",
        paragraphs: ["Thông thường lắp trong 24–48h tùy khu vực."],
      },
      {
        type: "text",
        heading: "7. Có phải ký hợp đồng dài hạn không?",
        paragraphs: [
          "Không bắt buộc. Bạn chỉ cần đóng trước nếu muốn nhận ưu đãi tháng tặng.",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "NETVT1_GIAITRI là gói combo Internet + Truyền hình giá tốt cho gia đình:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Mạng ổn định",
          "Nội dung TV đầy đủ",
          "Không phát sinh chi phí thiết bị",
          "Giá dễ tiếp cận",
        ],
      },
      {
        type: "text",
        heading: "Đăng ký ngay:",
        paragraphs: ["Gọi hotline 1800 8132 (miễn phí) để:"],
      },
      {
        type: "list",
        ordered: false,
        items: ["Kiểm tra hạ tầng", "Tư vấn khu vực", "Lắp đặt tận nhà"],
      },
    ],
    source: {
      url: siteConfig.url("/internet/NETVT1_GIAITRI"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0168.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: c149175067515db654d801e1370dfbd2fdce69e4606730db86e2362154dd13c2",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/NETVT1_GIAITRI",
      code: "NETVT1_GIAITRI",
      subscription: "unspecified",
    },
  },
  "/internet/NETVT2_GIAITRI": {
    status: "ready",
    kind: "internet",
    title: "Combo Internet Viettel + TV360 500Mbps | NETVT2_GIAITRI",
    description:
      "Combo Internet Viettel + TV360 NETVT2_GIAITRI: tốc độ 500Mbps, WiFi 6, hơn 100 kênh TV và kho phim phong phú.",
    heading: "Gói Internet NETVT2_GIAITRI",
    sections: [
      {
        type: "text",
        paragraphs: [
          "NETVT2_GIAITRI là combo Internet WiFi 6 + Truyền hình TV360 dành cho gia đình cần mạng nhanh, ổn định và nội dung giải trí phong phú. Gói phù hợp căn hộ diện tích vừa & trung bình, nhu cầu xem truyền hình, phim ảnh và sử dụng Internet hàng ngày.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói cước",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Tên gói: NETVT2_GIAITRI",
          "Tốc độ Internet: Từ 500Mbps đến 1Gbps (tùy hạ tầng từng khu vực)",
          "Thiết bị mạng: 01 Modem WiFi 6 Viettel",
          "Dịch vụ đi kèm: Truyền hình TV360",
        ],
      },
      {
        type: "text",
        heading: "Chi phí & khuyến mại",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "32 tỉnh/thành: 260.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 285.000đ/tháng (Giá đã bao gồm VAT)",
          "Ưu đãi: Đóng trước 12 tháng, tặng thêm 01 tháng sử dụng",
          "Phí hòa mạng: 300.000đ",
        ],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "1) Internet tốc độ cao – WiFi 6 ổn định",
        paragraphs: ["Băng thông từ 500Mbps–1Gbps đáp ứng tốt:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem phim 4K, giải trí trực tuyến",
          "Học/họp online mượt mà",
          "Tải/upload dữ liệu nhanh",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "WiFi 6 giảm nhiễu, kết nối ổn định hơn router thế hệ cũ.",
          "Hỗ trợ 10–15 thiết bị kết nối đồng thời.",
        ],
      },
      {
        type: "text",
        heading: "2) Truyền hình TV360 – nội dung đa dạng",
        paragraphs: [
          "Khách hàng cài app TV360 trên Smart TV hoặc thiết bị di động để trải nghiệm:",
          "Hơn 100 kênh truyền hình: VTV, HTV, SCTV, THVL…",
          "Nội dung thể thao trên các kênh truyền hình hiện có.",
          "Kho phim lớn:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Hơn 2.000 phim lẻ",
          "Hơn 1.500 phim bộ châu Á",
          "Phim Hàn – Trung – Thái – Việt – Anime",
          "Có phim Hollywood (không bao gồm nội dung 4K & độc quyền)",
        ],
      },
      {
        type: "text",
        paragraphs: ["Tiện ích:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Xem lại 7 ngày",
          "Tua lại chương trình đang phát",
          "Phát trong nền",
          "Đăng nhập tối đa 05 thiết bị, xem đồng thời 02 thiết bị.",
        ],
      },
      {
        type: "text",
        heading: "NETVT2_GIAITRI phù hợp với ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Gia đình cần Internet nhanh + truyền hình giải trí trọn gói.",
          "Căn hộ chung cư, nhà phố diện tích vừa.",
          "Người muốn chi phí hợp lý nhưng vẫn có WiFi mạnh và kho nội dung lớn.",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "Có cần đầu thu không? Không. Chỉ cần Smart TV hoặc thiết bị hỗ trợ cài app TV360.",
          "Tốc độ có đủ xem 4K không? Có. Băng thông tối thiểu 500Mbps đủ đáp ứng xem phim 4K và nhiều thiết bị cùng lúc.",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "Nếu bạn muốn một gói Internet Viettel tốc độ cao – WiFi 6 – truyền hình TV360 đầy đủ kênh và phim, NETVT2_GIAITRI là lựa chọn đáng cân nhắc.",
          "👉 Đăng ký nhanh: Gọi 1800 8132 để kiểm tra hạ tầng và lắp đặt.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/NETVT2_GIAITRI"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0169.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 79a5ded0397f59a1ab90f8234c4820ced804b207b7c12fd92669c1c7af9f0b34",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/NETVT2_GIAITRI",
      code: "NETVT2_GIAITRI",
      subscription: "unspecified",
    },
  },
  "/internet/MESHVT1_GIAITRI": {
    status: "ready",
    kind: "internet",
    title: "Combo WiFi Mesh Viettel + TV360 300Mbps | MESHVT_GIAITRI",
    description:
      "Combo Internet Viettel + TV360 MESHVT_GIAITRI: WiFi 6 Mesh phủ sóng nhiều phòng, tốc độ 300Mbps, xem hơn 100 kênh TV và kho phim lớn. Giá chỉ từ 230K/tháng.",
    heading: "Gói Internet MESHVT1_GIAITRI",
    sections: [
      {
        type: "text",
        paragraphs: [
          "MESHVT1_GIAITRI là combo Internet + Truyền hình dành cho gia đình muốn mạng ổn định – phủ sóng tốt – giải trí đầy đủ. Gói tích hợp WiFi 6 Mesh giúp sóng mạnh đều khắp nhà, kèm TV360 với hơn 100 kênh truyền hình và kho phim phong phú, phù hợp căn hộ nhiều phòng và nhà ống cao tầng.",
        ],
      },
      {
        type: "text",
        heading: "Thông tin gói cước",
        paragraphs: [
          "Tên gói: MESHVT1_GIAITRI",
          "Tốc độ Internet: 300Mbps",
          "Thiết bị mạng:",
        ],
      },
      {
        type: "list",
        ordered: false,
        items: ["01 Modem WiFi 6", "01 Mesh WiFi (tương đương 02 vùng phủ)"],
      },
      {
        type: "text",
        paragraphs: ["Dịch vụ đi kèm: Truyền hình TV360"],
      },
      {
        type: "text",
        heading: "Chi phí & khuyến mại",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "32 tỉnh/thành & ngoại thành HN, HCM: 230.000đ/tháng",
          "Nội thành Hà Nội & TP.HCM: 275.000đ/tháng (Giá đã bao gồm VAT)",
          "Ưu đãi: Đóng trước 12 tháng, tặng thêm 01 tháng sử dụng",
          "Phí hòa mạng: 300.000đ",
        ],
      },
      {
        type: "text",
        heading: "Ưu điểm nổi bật",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "1) Internet ổn định – WiFi 6 Mesh phủ sóng rộng",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Băng thông 300Mbps đáp ứng tốt: học/họp online, xem phim HD/4K, lướt web nhiều thiết bị.",
          "WiFi 6 giảm nhiễu, kết nối mượt, độ trễ thấp.",
          "01 Mesh mở rộng vùng phủ, hạn chế “điểm mù” WiFi trong nhà.",
        ],
      },
      {
        type: "text",
        paragraphs: ["Hỗ trợ 20–25 thiết bị kết nối đồng thời."],
      },
      {
        type: "text",
        heading: "2) Truyền hình TV360 – giải trí không giới hạn",
        paragraphs: ["Xem trực tiếp trên Smart TV, điện thoại, tablet, PC:"],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Hơn 100 kênh truyền hình (VTV, HTV, SCTV, THVL…).",
          "Thể thao trên các kênh truyền hình hiện có.",
          "Kho phim lớn: hơn 2.000 phim lẻ, hơn 1.500 phim bộ, phim Hàn – Trung – Thái – Việt – Anime; có phim Hollywood (trừ nội dung 4K & độc quyền).",
          "Tính năng tiện lợi: xem lại 7 ngày, tua chương trình đang phát, phát nền.",
          "Tối đa 05 thiết bị đăng nhập, xem đồng thời 02 thiết bị.",
        ],
      },
      {
        type: "text",
        heading: "MESHVT1_GIAITRI phù hợp với ai?",
        paragraphs: [],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Gia đình cần mạng ổn định + TV giải trí đầy đủ kênh.",
          "Căn hộ nhiều phòng, nhà ống cao tầng.",
          "Người muốn chi phí hợp lý mà vẫn có WiFi phủ tốt và kho nội dung phong phú.",
        ],
      },
      {
        type: "text",
        heading: "Câu hỏi thường gặp",
        paragraphs: [
          "Có cần đầu thu truyền hình không? Không bắt buộc. Cài ứng dụng TV360 trực tiếp trên Smart TV.",
          "Tốc độ có đủ xem phim 4K không? 300Mbps đáp ứng tốt xem phim 4K và nhiều thiết bị cùng lúc trong điều kiện hạ tầng tiêu chuẩn.",
          "Áp dụng khu vực nào? Hiện áp dụng tại 32 tỉnh/thành và ngoại thành HN, HCM. Nội thành HN & HCM có mức giá riêng.",
        ],
      },
      {
        type: "text",
        heading: "Kết luận",
        paragraphs: [
          "Nếu bạn muốn một combo Internet WiFi 6 ổn định – Mesh phủ sóng – TV giải trí đa dạng với chi phí hợp lý, MESHVT1_GIAITRI là lựa chọn đáng cân nhắc.",
          "👉 Đăng ký ngay: Gọi 1800 8132 để kiểm tra hạ tầng và lắp đặt.",
        ],
      },
    ],
    source: {
      url: siteConfig.url("/internet/MESHVT1_GIAITRI"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0170.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Region radio selection and quote/registration runtime behavior",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 6c6463878c681949f1eef33a5e8da70afc165c79e037c70aad81037dd0da97bb",
        "Template: internet_detail. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
      ],
    },
    product: {
      id: "/internet/MESHVT1_GIAITRI",
      code: "MESHVT1_GIAITRI",
      subscription: "unspecified",
    },
  },
};
