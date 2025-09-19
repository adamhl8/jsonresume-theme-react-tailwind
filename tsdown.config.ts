import { execSync } from "node:child_process"
import { tsdownConfig } from "@adamhl8/configs"
import { defineConfig } from "tsdown"

const config = tsdownConfig({
  platform: "node",
  hooks: {
    "build:done": () => {
      execSync("tailwindcss -i ./src/resume/global.css -o ./dist/resume/global.css", {
        stdio: ["inherit", "inherit", "inherit"],
      })
    },
  },
} as const)

export default defineConfig(config)
