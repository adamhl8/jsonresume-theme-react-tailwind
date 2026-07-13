import bun, { $ } from "bun"
import { compileFromFile } from "json-schema-to-typescript"

const response = await fetch("https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json")
const rawSchema = await response.text()
await bun.write("./tmp/schema.json", rawSchema)

const schema = await compileFromFile("./tmp/schema.json", { bannerComment: "", maxItems: -1 })
await bun.write("./src/ResumeSchema.d.ts", schema)

await $`rm -rf ./tmp/`
