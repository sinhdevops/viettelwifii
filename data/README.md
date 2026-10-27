This directory intentionally excludes two required source-of-truth files:

- `approved-routes.json`: exact **171** URL paths from the user's 2026-10-26 sitemap, never guessed from a live crawl.
- `pages.json`: authored/verified page content, keyed by those exact paths.

See `approved-routes.example.json` and `pages.example.json` for **shape only**. The example files are not production inputs. A production build is blocked until the allowlist is present and has the prescribed counts. A page without reviewed content is a 404 and never enters the sitemap.
