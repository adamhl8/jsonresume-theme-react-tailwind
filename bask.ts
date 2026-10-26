import path from "node:path"

import { task } from "@adamhl8/bask"
import { build } from "@adamhl8/configs/bask"
import bun from "bun"
import type { JSONSchema } from "json-schema-to-typescript"
import { compile } from "json-schema-to-typescript"

export * from "@adamhl8/configs/bask"

export const refreshSchema = task(async () => {
  const response = await fetch("https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json")
  // oxlint-disable-next-line typescript/no-unsafe-type-assertion - the upstream file is the JSON Resume JSON Schema
  const schema = (await response.json()) as JSONSchema
  await bun.write("./src/ResumeSchema.d.ts", await compile(schema, "ResumeSchema", { bannerComment: "", maxItems: -1 }))
})

export const render = task(async ({ sh }) => {
  await sh`tsdown`.quiet()
  // Pass an absolute path because resumed imports the theme relative to its own module.
  await sh`resumed render resume.json --theme ${path.resolve("dist/index.js")}`
})

export const watch = task(async ({ sh }) => {
  console.log("Open 'resume.html' in your browser\n")
  await sh`watchexec --watch resume.json --watch src bask render`
})

build.before(refreshSchema)
