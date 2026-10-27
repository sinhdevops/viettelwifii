# HTML source → Next.js TSX browser comparison

- Source: http://localhost:4185/
- Next preview: http://localhost:4191/
- Samples: 3; samples needing review: 0
- Measurements are first viewport only; animated banners, runtime timing, text and responsive differences must be reviewed visually.

| Route | Width | Source HTTP | Next HTTP | Next H1 | Overflow | Missing images | Runtime errors | MAE | Changed pixels | Height delta |
| --- | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | ---: | ---: |
| /tin-tuc | 390 | 200 | 200 | Dùng mạng mỗi ngàykhông cần wifi | false | 0 | 0 | 26.14 | 18.31% | 0 |
| /tin-tuc | 768 | 200 | 200 | Dùng mạng mỗi ngàykhông cần wifi | false | 0 | 0 | 12.94 | 9.06% | 0 |
| /tin-tuc | 1440 | 200 | 200 | DÙNG MẠNG MỖI NGÀY
KHÔNG CẦN WIFI | false | 0 | 0 | 0.51 | 0.13% | 0 |

Full console/network evidence and PNG paths: `RESULTS.json` and `screenshots/`.