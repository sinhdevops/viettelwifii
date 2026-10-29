# A second, isolated local Next dev server for inspecting draft ViettelUp pages.
# Does not share the .next cache/lock with an existing developer session.
$env:VIETTELUP_PREVIEW_ISOLATED = "1"
$env:SITE_PREVIEW_DRAFTS = "1"
$env:SITE_LIVE = "false"
$env:NEXT_PUBLIC_SITE_URL = "http://localhost:3211"

node node_modules/next/dist/bin/next dev --port 3211
