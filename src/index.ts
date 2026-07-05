import { renderToStaticMarkup } from "react-dom/server"

import { Resume } from "#/resume/Resume.tsx"
import type { ResumeSchema } from "#/ResumeSchema.extended.ts"

const render = (resumeJSON: ResumeSchema): string => {
  const resume = resumeJSON
  // oxlint-disable-next-line new-cap
  let markup = renderToStaticMarkup(Resume({ resume }))
  markup = `<!doctype html>\n${markup}`
  return markup
}

export { render }
