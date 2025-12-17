import { Zap, Shield, Smartphone, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Download videos in seconds with our optimized servers.",
  },
  {
    icon: Shield,
    title: "100% Safe",
    description: "No registration required. We don't store your data.",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Compatible with all devices and browsers.",
  },
  {
    icon: Globe,
    title: "No Limits",
    description: "Download unlimited videos without restrictions.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-card px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">Why Choose Us?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          The fastest and most reliable way to download Facebook content
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
