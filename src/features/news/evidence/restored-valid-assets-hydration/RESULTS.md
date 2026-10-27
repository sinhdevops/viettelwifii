# News listing SSR and hydrated-image validation

- PASS: 390px and 768px, local asset HTTP 200; initial HTML and hydrated DOM use identical local image paths.
- PASS: both images decode successfully (natural width 1044px and 800px).
- PASS: no React hydration mismatch, page error, failed local requests, error overlay or horizontal overflow.
- Only remaining dev-console noise: Next HMR WebSocket handshake.
- Detail: `RESULTS.json`.
