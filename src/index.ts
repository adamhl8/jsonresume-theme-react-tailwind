import { renderToStaticMarkup } from "react-dom/server"

import type { ResumeSchema } from "~/ResumeSchema.ts"
import { Resume } from "~/resume/Resume.ts"

let resume: ResumeSchema

function render(resumeJSON: ResumeSchema): string {
  resume = resumeJSON
  let markup = renderToStaticMarkup(Resume())
  markup = `<!doctype html>\n${markup}`
  return markup
}

export { render, resume }
