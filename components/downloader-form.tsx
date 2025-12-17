"use client"

import type React from "react"

import { useState } from "react"
import { Download, Loader2, Link, AlertCircle, CheckCircle2, Video, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface MediaItem {
  type: "video" | "image"
  url: string
  quality?: string
  thumbnail?: string
}

interface ScrapeResult {
  success: boolean
  data?: {
    media?: MediaItem[]
    title?: string
    description?: string
  }
  error?: string
}

export function DownloaderForm() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState<ScrapeResult | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url.trim()) {
      setError("Please enter a Facebook URL")
      return
    }

    if (!url.includes("facebook.com") && !url.includes("fb.watch") && !url.includes("fb.com")) {
      setError("Please enter a valid Facebook URL")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch("https://s-p-1.onrender.com/app/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (data.success && data.data?.media?.length > 0) {
        setResult(data)
      } else {
        setError(data.error || "No downloadable content found. Make sure the content is public.")
      }
    } catch {
      setError("Failed to fetch content. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async (mediaUrl: string, type: string) => {
    try {
      const response = await fetch(mediaUrl)
      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = downloadUrl
      a.download = `facebook-${type}-${Date.now()}.${type === "video" ? "mp4" : "jpg"}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(downloadUrl)
    } catch {
      window.open(mediaUrl, "_blank")
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-2xl px-4">
      <Card className="border-border bg-card">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <Link className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="url"
                placeholder="Paste Facebook video or reel URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-14 pl-12 text-base bg-input border-border placeholder:text-muted-foreground"
              />
            </div>
            <Button type="submit" disabled={loading} className="h-12 gap-2 text-base font-medium">
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Fetching Content...
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  Download
                </>
              )}
            </Button>
          </form>

          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-destructive/10 p-4 text-destructive">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          {result?.success && result.data?.media && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Content Found!</span>
              </div>

              {result.data.title && <p className="text-sm text-muted-foreground line-clamp-2">{result.data.title}</p>}

              <div className="grid gap-3">
                {result.data.media.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      {item.type === "video" ? (
                        <Video className="h-5 w-5 text-primary" />
                      ) : (
                        <ImageIcon className="h-5 w-5 text-primary" />
                      )}
                      <div>
                        <p className="font-medium capitalize text-foreground">
                          {item.type} {item.quality && `(${item.quality})`}
                        </p>
                        <p className="text-xs text-muted-foreground">Click to download</p>
                      </div>
                    </div>
                    <Button onClick={() => handleDownload(item.url, item.type)} size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Only public Facebook content can be downloaded. We do not store any data.
      </p>
    </div>
  )
}
