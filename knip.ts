import { knipConfig } from "@adamhl8/configs"

const config = knipConfig({
  ignoreDependencies: ["tailwindcss", "resumed"],
  ignoreFiles: ["src/resume/global.css"],
} as const)

export default config
