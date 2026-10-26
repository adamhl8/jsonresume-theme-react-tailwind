import { tsdownConfig } from "@adamhl8/configs"
import { $ } from "bun"
import { defineConfig } from "tsdown"

const config = tsdownConfig({
  platform: "node",
  dts: false,
  attw: false,
  hooks: {
    "build:done": async () => {
      await $`bun tailwindcss --input ./src/resume/global.css --output ./dist/resume/global.css`
    },
  },
})

export default defineConfig(config)
