import { tsdownConfig } from "@adamhl8/configs"
import { $ } from "bun"
import { defineConfig } from "tsdown"

const config = tsdownConfig({
  platform: "node",
  hooks: {
    "build:done": async () => {
      await $`bun tailwindcss -i ./src/resume/global.css -o ./dist/resume/global.css`
    },
  },
})

export default defineConfig(config)
