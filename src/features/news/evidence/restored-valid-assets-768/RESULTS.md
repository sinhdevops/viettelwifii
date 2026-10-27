# HTML source → Next.js TSX browser comparison

- Source: http://127.0.0.1:4185/
- Next preview: http://127.0.0.1:4191/
- Samples: 1; samples needing review: 1
- Full-page comparison scrolls to load content, then compares overlapping pixels; differing document heights are reported separately.

| Route | Width | Source HTTP | Next HTTP | Next H1 | Overflow | Missing images | Runtime errors | MAE | Changed pixels | Height delta |
| --- | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | ---: | ---: |
| /tin-tuc | 768 | 200 | 200 | Dùng mạng mỗi ngàykhông cần wifi | false | 0 | 1 | 22.05 | 14.71% | -165 |

Full console/network evidence and PNG paths: `RESULTS.json` and `screenshots/`.