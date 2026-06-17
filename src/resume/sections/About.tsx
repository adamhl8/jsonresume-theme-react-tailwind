import { IconMailFilled, IconMapPinFilled, IconPhoneFilled, IconWorld } from "@tabler/icons-react"

import type { ResumeSchema } from "~/ResumeSchema.extended.ts"
import InfoTag from "~/resume/components/InfoTag.tsx"
import Social from "~/resume/components/Social.tsx"
import Title from "~/resume/components/Title.tsx"
import { removeProtocol } from "~/utils.ts"

function About({ resume }: { resume: ResumeSchema }) {
  const { basics } = resume
  if (!basics) return

  const location = [
    basics.location?.address,
    basics.location?.city,
    basics.location?.region,
    basics.location?.postalCode,
    basics.location?.countryCode,
  ]
    .filter(Boolean)
    .join(", ")

  return (
    <div>
      <Title title="About" />

      {basics.location ? <InfoTag text={location} Icon={IconMapPinFilled} /> : null}
      {basics.email ? <InfoTag text={basics.email} url={`mailto:${basics.email}`} Icon={IconMailFilled} /> : null}
      {basics.phone ? <InfoTag text={basics.phone} url={`tel:${basics.phone}`} Icon={IconPhoneFilled} /> : null}
      {basics.profiles ? <Social profiles={basics.profiles} /> : null}
      {basics.url ? <InfoTag text={removeProtocol(basics.url)} url={basics.url} Icon={IconWorld} /> : null}
    </div>
  )
}

export default About
