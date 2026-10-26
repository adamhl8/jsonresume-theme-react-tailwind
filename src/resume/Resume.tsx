import fs from "node:fs"
import path from "node:path"

import { PrintButton } from "#resume/components/PrintButton.tsx"
import { About } from "#resume/sections/About.tsx"
import { Education } from "#resume/sections/Education.tsx"
import { Projects } from "#resume/sections/Projects.tsx"
import { Skills } from "#resume/sections/Skills.tsx"
import { Work } from "#resume/sections/Work.tsx"
import type { ResumeSchema } from "#ResumeSchema.extended.ts"

const css = fs.readFileSync(path.join(import.meta.dirname, "global.css"), "utf8")
const styleHtml = { __html: css }

interface ResumeProps {
  resume: ResumeSchema
}

export function Resume({ resume }: ResumeProps) {
  const { basics } = resume
  if (!basics) return

  return (
    <html className="bg-background text-base/tight font-semimedium text-primary" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui" />
        <title>{basics.name}</title>
        {/* oxlint-disable-next-line react/no-danger - inlines the compiled stylesheet so the resume is one self-contained HTML file */}
        <style dangerouslySetInnerHTML={styleHtml} />
      </head>

      <body className="my-10 grid grid-cols-1 justify-items-center print:m-0">
        <PrintButton className="mb-8 print:hidden" />
        <main className="w-203.75 p-12 shadow-page print:w-full print:p-0 print:shadow-none">
          <div className="mb-4 border-t-8 border-secondary" />

          <div className="mt-4 grid grid-cols-7 space-x-4">
            <section className="col-span-2 space-y-6">
              <div>
                <h1 className="text-2xl/tight font-bold">{basics.name}</h1>
                <h2 className="text-base/tight font-bold text-secondary">{basics.label}</h2>
              </div>

              <About resume={resume} />
              <Education resume={resume} />
              <Skills resume={resume} />
            </section>
            <section className="col-span-5 space-y-4">
              <Work resume={resume} />
              <Projects resume={resume} />
            </section>
          </div>
        </main>
      </body>
    </html>
  )
}
