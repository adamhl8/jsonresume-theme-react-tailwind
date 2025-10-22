import type { ResumeSchema as BaseResumeSchema } from "~/ResumeSchema.d.ts"

type BaseProject = NonNullable<BaseResumeSchema["projects"]>[number]

type Project = BaseProject & {
  stars?: number
}

export interface ResumeSchema extends BaseResumeSchema {
  projects?: Project[]
}
