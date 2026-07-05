import fs from "node:fs/promises"

import { compileFromFile } from "json-schema-to-typescript"

const response = await fetch("https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json")
const rawSchema = await response.text()
await fs.mkdir("./tmp/", { recursive: true })
await fs.writeFile("./tmp/schema.json", rawSchema)

const schema = await compileFromFile("./tmp/schema.json", { bannerComment: "", maxItems: -1 })
await fs.writeFile("./src/ResumeSchema.d.ts", schema)

await fs.rm("./tmp/", { force: true, recursive: true })
