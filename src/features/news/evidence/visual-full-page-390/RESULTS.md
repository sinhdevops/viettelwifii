# HTML source → Next.js TSX browser comparison

- Source: http://localhost:4185/
- Next preview: http://localhost:4191/
- Samples: 1; samples needing review: 0
- Full-page comparison scrolls to load content, then compares overlapping pixels; differing document heights are reported separately.

| Route | Width | Source HTTP | Next HTTP | Next H1 | Overflow | Missing images | Runtime errors | MAE | Changed pixels | Height delta |
| --- | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | ---: | ---: |
| /tin-tuc | 390 | 200 | 200 | Dùng mạng mỗi ngàykhông cần wifi | false | 0 | 0 | 36.46 | 25.29% | -164 |

Full console/network evidence and PNG paths: `RESULTS.json` and `screenshots/`.