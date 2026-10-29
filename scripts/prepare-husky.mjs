import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

if (!existsSync(".git")) {
  console.log(
    "Skipping Husky hook setup: Git repository has not been initialized yet.",
  );
} else {
  const result = spawnSync("husky", { shell: true, stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
}
