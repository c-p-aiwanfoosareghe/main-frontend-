import { Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Download className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">FB Downloader</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            This tool is for personal use only. Respect copyright and privacy.
          </p>
        </div>
      </div>
    </footer>
  )
}
