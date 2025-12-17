const steps = [
  {
    step: "01",
    title: "Copy the URL",
    description: "Find a public Facebook video or reel and copy its URL from your browser.",
  },
  {
    step: "02",
    title: "Paste & Download",
    description: "Paste the URL in the input field above and click the download button.",
  },
  {
    step: "03",
    title: "Save Your Video",
    description: "Choose your preferred quality and save the video to your device.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Download Facebook videos in three simple steps
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                <span className="text-xl font-bold text-primary">{item.step}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border md:block" />
              )}
              <h3 className="mt-6 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
