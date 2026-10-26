import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"

import { Resume } from "#resume/Resume.tsx"
import type { ResumeSchema } from "#ResumeSchema.extended.ts"

export const render = (resume: ResumeSchema): string =>
  `<!doctype html>\n${renderToStaticMarkup(createElement(Resume, { resume }))}`
