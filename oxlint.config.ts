import { oxlintConfig } from "@adamhl8/configs"
import { defineConfig } from "oxlint"

const config = oxlintConfig({
  rules: {
    // Turn off `react/no-array-index-key` because the theme only renders static markup.
    // React never reconciles it, so keys have no effect.
    "react/no-array-index-key": "off",
  },
})

export default defineConfig(config)
