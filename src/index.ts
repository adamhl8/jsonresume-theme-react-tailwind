import { renderToStaticMarkup } from "react-dom/server"

import type { ResumeSchema } from "~/ResumeSchema.d.ts"
import { Resume } from "~/resume/Resume.tsx"

function render(resumeJSON: ResumeSchema): string {
  const resume = resumeJSON
  let markup = renderToStaticMarkup(Resume({ resume }))
  markup = `<!doctype html>\n${markup}`
  return markup
}

export { render }
