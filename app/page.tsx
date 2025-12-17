import { Header } from "@/components/header"
import { DownloaderForm } from "@/components/downloader-form"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Download Facebook
            <span className="text-primary"> Videos & Reels</span>
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
            Paste any public Facebook video or reel URL and download it instantly. Fast, free, and no registration
            required.
          </p>
        </div>
        <DownloaderForm />
      </section>
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}
