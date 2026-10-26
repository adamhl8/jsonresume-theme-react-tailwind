import { Title } from "#resume/components/Title.tsx"
import type { ResumeSchema } from "#ResumeSchema.extended.ts"

export function Education({ resume }: { resume: ResumeSchema }) {
  const { education } = resume
  if (!education || education.length === 0) return

  return (
    <div>
      <Title title="Education" />

      <div className="space-y-4">
        {education.map((entry, index) => (
          <div key={index}>
            <div className="text-md/tight">{entry.institution}</div>

            {entry.studyType && entry.area ? (
              <div className="text-sm/tight font-bold text-secondary">
                {entry.studyType} in {entry.area}
              </div>
            ) : undefined}

            {entry.score ? (
              <div className="text-sm/tight font-lighter italic">GPA: {entry.score}</div>
            ) : (
              <div className="text-sm/tight font-lighter italic">in progress</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
