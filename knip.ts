import { knipConfig } from "@adamhl8/configs"

const config = knipConfig({
  entry: ["src/index.ts", "refresh-schema.ts"],
  ignoreDependencies: ["tailwindcss", "resumed"],
  ignoreFiles: ["src/resume/global.css"],
})

export default config
