import { IconStar } from "@tabler/icons-react"

import type { ResumeSchema } from "~/ResumeSchema.extended.ts"
import Title from "~/resume/components/Title.tsx"
import { removeProtocol } from "~/utils.ts"

const Projects = ({ resume }: { resume: ResumeSchema }) => {
  const { projects } = resume
  if (!projects || projects.length === 0) return

  return (
    <div>
      <Title title="Open Source Projects" />

      <div className="space-y-3.5">
        {projects.map((project, index) => (
          <div key={index}>
            <header className="flex items-center space-x-1.5">
              <span className="font-bold text-md/tight">{project.name}</span>
              <span className="flex items-center space-x-1.5 font-lighter text-[dimgray] text-xs/tight">
                {project.url && (
                  <>
                    <span>&#8226;</span>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {removeProtocol(project.url)}
                    </a>
                  </>
                )}

                {project.stars && (
                  <>
                    <span>&#8226;</span>
                    <span className="inline-flex items-center">
                      <IconStar size={12} className="mr-0.5" /> {project.stars}
                    </span>
                  </>
                )}
              </span>
            </header>

            <div className="space-y-2">
              {project.keywords && project.keywords.length > 0 && (
                <div>
                  {project.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="mr-[0.15rem] ml-[0.15rem] rounded-sm bg-[ghostwhite] pr-[0.15rem] pl-[0.15rem] text-xs/tight leading-none"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}

              {project.description && <p className="text-smaller/3.5">{project.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
