import type { TablerIcon } from "@tabler/icons-react"

interface InfoTagProps {
  Icon: TablerIcon
  text: string
  url?: string
}

export const InfoTag = ({ Icon, text, url }: InfoTagProps) => (
  <div className="flex items-center space-x-1.5">
    <Icon size={14} />
    <span className="text-sm">
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          {text}
        </a>
      ) : (
        text
      )}
    </span>
  </div>
)
