import { IconDownload } from "@tabler/icons-react"

const printScript = {
  __html: `document.getElementById('print-button').onclick = () => window.print()`,
}

export const PrintButton = ({ className }: { className?: string }) => (
  <div className={className}>
    <button
      type="button"
      id="print-button"
      className="border-secondary flex cursor-pointer items-center space-x-2 rounded-lg border bg-white px-4 py-2 font-medium hover:bg-gray-100"
    >
      <IconDownload size={18} />
      <span>Print / Save as PDF</span>
    </button>

    {/* oxlint-disable-next-line react/no-danger */}
    <script dangerouslySetInnerHTML={printScript} />
  </div>
)
