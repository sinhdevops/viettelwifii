# HTML source → Next.js TSX browser comparison

- Source: http://127.0.0.1:4185/
- Next preview: http://127.0.0.1:4191/
- Samples: 1; samples needing review: 1
- Full-page comparison scrolls to load content, then compares overlapping pixels; differing document heights are reported separately.

| Route | Width | Source HTTP | Next HTTP | Next H1 | Overflow | Missing images | Runtime errors | MAE | Changed pixels | Height delta |
| --- | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | ---: | ---: |
| /tin-tuc | 1440 | 200 | 200 | DÙNG MẠNG MỖI NGÀY
KHÔNG CẦN WIFI | false | 0 | 1 | 0.24 | 0.13% | -1 |

Full console/network evidence and PNG paths: `RESULTS.json` and `screenshots/`.