import { oxlintConfig } from "@adamhl8/configs"
import { defineConfig } from "oxlint"

const config = oxlintConfig({
  rules: {
    "react/no-array-index-key": "off",
    "typescript/no-unsafe-assignment": "off",
  },
})

export default defineConfig(config)
