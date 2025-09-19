import { knipConfig } from "@adamhl8/configs"

const config = knipConfig({
  ignoreDependencies: ["tailwindcss", "resumed", "@tailwindcss/cli"],
} as const)

export default config
