import { Title } from "#/resume/components/Title.tsx"
import type { ResumeSchema } from "#/ResumeSchema.extended.ts"

export const Education = ({ resume }: { resume: ResumeSchema }) => {
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
              <div className="text-secondary text-sm/tight font-bold">
                {entry.studyType} in {entry.area}
              </div>
            ) : undefined}

            {entry.score ? (
              <div className="font-lighter text-sm/tight italic">GPA: {entry.score}</div>
            ) : (
              <div className="font-lighter text-sm/tight italic">in progress</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
