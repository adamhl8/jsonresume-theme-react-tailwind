import { oxlintConfig } from "@adamhl8/configs"
import { defineConfig } from "oxlint"

const config = oxlintConfig({
  rules: {
    "react/no-array-index-key": "off",
  },
})

export default defineConfig(config)
