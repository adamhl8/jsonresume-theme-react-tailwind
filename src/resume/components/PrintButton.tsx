import { IconDownload } from "@tabler/icons-react"

const printScript = {
  __html: `document.getElementById('print-button').onclick = () => window.print()`,
}

export function PrintButton({ className }: { className?: string }) {
  return (
    <div className={className}>
      <button
        type="button"
        id="print-button"
        className="flex cursor-pointer items-center space-x-2 rounded-lg border border-secondary bg-background px-4 py-2 font-medium hover:bg-button-hover"
      >
        <IconDownload size={18} />
        <span>Print / Save as PDF</span>
      </button>

      {/* oxlint-disable-next-line react/no-danger - inlines the print handler because the theme ships no JS bundle */}
      <script dangerouslySetInnerHTML={printScript} />
    </div>
  )
}
