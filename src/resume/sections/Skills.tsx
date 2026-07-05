import { Title } from "#/resume/components/Title.tsx"
import type { ResumeSchema } from "#/ResumeSchema.extended.ts"

export const Skills = ({ resume }: { resume: ResumeSchema }) => {
  const { skills } = resume
  if (!skills || skills.length === 0) return

  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index}>
          {skill.name ? <Title title={skill.name} /> : undefined}

          {skill.keywords && skill.keywords.length > 0 && (
            <div className="flex flex-wrap">
              {skill.keywords.map((keyword, keywordIndex) => (
                <span key={keywordIndex} className="m-[0.15rem] rounded-sm bg-[ghostwhite] p-[0.15rem] text-sm/tight">
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
