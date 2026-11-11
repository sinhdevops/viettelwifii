<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## ViettelUp agent team

- For website implementation, read `docs/MASTER_PROMPT_VIETTELUP.md` and `docs/BOARDROOM.md`. The current user request controls whether this turn is setup, planning, implementation, or review; configuring the team does not authorize starting website work.
- The main chat acts as `vt_lead` and reads `.codex/agents/vt_lead.toml`. Do not spawn a second coordinator. Delegate independent work to the nine specialist profiles in `.codex/agents/`, with no more than five open subagents, subject to the actual platform limit.
- Only the coordinator dispatches agents and updates Boardroom. Workers do not delegate further. Assign exact tasks, file ownership, dependencies, output contracts and verification evidence before edits; do not write files owned by another active worker.
- Reuse existing code and preserve user changes. Shared schema, routing, root configuration and cross-feature integration belong to the coordinator. Follow the complete ownership matrix in Boardroom.
- The original 171 paths are supplied in the master prompt appendix; four additional user-approved collection routes bring the current content manifest to 175, with five support routes registered separately. Preserve the exact current manifest; do not request the same sitemap again. Agent setup alone must not create product data or claim the website is implemented.
- Preserve permissions and model selection inherited from the parent session. If custom roles are unavailable, load the matching profile instructions into a standard worker; report this fallback accurately. No separate user chats are needed for subtasks.
- Distinguish authored content, self-checks, independent QA and final verification. Do not deploy, push, submit real leads or enable production indexing without the user's authorization.
