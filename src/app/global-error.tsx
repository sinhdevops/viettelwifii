"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- global-error replaces the root layout and router; recovery home navigation must be a full document load. */

export default function GlobalError({ retry }: { retry: () => void }) {
  // global-error replaces the root layout, so it must own <html>/<body> and
  // carry every style inline instead of relying on the app stylesheets.
  return (
    <html lang="vi">
      <head>
        <title>Chưa thể tải trang | ViettelWiFii.vn</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background:
            "radial-gradient(120% 120% at 50% 0%, #fff5f5 0%, rgba(255,255,255,0) 58%), #ffffff",
          color: "#282828",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <main
          style={{
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
            padding: "56px 20px",
            boxSizing: "border-box",
          }}
        >
          <section
            style={{
              width: "100%",
              maxWidth: 640,
              border: "1px solid #f0e3e3",
              borderRadius: 20,
              background: "#ffffff",
              padding: "40px 24px 32px",
              textAlign: "center",
              boxShadow: "0 18px 44px -28px rgba(40,40,40,0.28)",
            }}
          >
            <p
              style={{
                margin: "0 0 14px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#ed1c24",
              }}
            >
              Lỗi hệ thống
            </p>
            <h1
              style={{
                margin: 0,
                fontSize: 28,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                color: "#1f1f1f",
              }}
            >
              Chưa thể tải trang
            </h1>
            <p
              style={{
                margin: "12px auto 0",
                maxWidth: "46ch",
                fontSize: 16,
                lineHeight: 1.6,
                color: "#5b5b5b",
              }}
            >
              Đã có lỗi xảy ra khi tải website. Vui lòng thử lại; nếu lỗi tiếp
              diễn, hãy tải lại trang hoặc quay lại sau ít phút.
            </p>
            <div
              style={{
                marginTop: 28,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <button
                type="button"
                onClick={retry}
                style={{
                  minHeight: 44,
                  minWidth: 168,
                  padding: "10px 22px",
                  border: 0,
                  borderRadius: 12,
                  background: "#ed1c24",
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                Thử lại
              </button>
              <a
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 44,
                  minWidth: 168,
                  padding: "10px 22px",
                  borderRadius: 12,
                  border: "1px solid #ed1c24",
                  background: "#ffffff",
                  color: "#1f1f1f",
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "inherit",
                }}
              >
                Về trang chủ
              </a>
            </div>
            <p
              style={{
                margin: "28px 0 0",
                paddingTop: 20,
                borderTop: "1px solid #f1ecec",
                fontSize: 15,
                lineHeight: 1.5,
                color: "#5b5b5b",
              }}
            >
              Cần hỗ trợ? Gọi{" "}
              <a
                href="tel:0325610016"
                style={{ color: "#ed1c24", fontWeight: 700 }}
              >
                0325610016
              </a>
              .
            </p>
          </section>
        </main>
      </body>
    </html>
  );
}
