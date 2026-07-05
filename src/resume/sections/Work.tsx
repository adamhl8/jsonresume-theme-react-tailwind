import { Title } from "#/resume/components/Title.tsx"
import type { ResumeSchema } from "#/ResumeSchema.extended.ts"
import { removeProtocol } from "#/utils.ts"

export const Work = ({ resume }: { resume: ResumeSchema }) => {
  const { work } = resume
  if (!work || work.length === 0) return

  return (
    <div>
      <Title title="Experience" />

      <div className="space-y-3.5">
        {work.map((job, index) => (
          <div key={index} className="space-y-2">
            <header>
              <div className="text-md/tight font-bold">{job.position}</div>

              <div className="space-x-1.5 text-sm/tight">
                <span className="text-secondary font-bold">{job.name}</span>
                {job.url ? (
                  <span className="font-lighter space-x-1.5 text-xs/tight text-[dimgray]">
                    <span>&#8226;</span>
                    <a href={job.url} target="_blank" rel="noreferrer">
                      {removeProtocol(job.url)}
                    </a>
                  </span>
                ) : undefined}
                <span>|</span>
                <span className="font-lighter italic">{`${job.startDate} - ${job.endDate ?? "Present"}`}</span>
              </div>
            </header>

            <div className="space-y-1">
              {job.summary ? <p className="text-smaller/3.5">{job.summary}</p> : undefined}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="text-smaller/3.5 list-inside list-disc">
                  {job.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
