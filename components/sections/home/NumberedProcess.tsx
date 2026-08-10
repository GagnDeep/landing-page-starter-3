import { HugeiconsIcon } from "@hugeicons/react"
import {
  Search01Icon,
  Analytics01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"

export function NumberedProcess() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-[66ch]">
          <span className="mb-4 block font-mono text-sm tracking-wider text-primary uppercase">
            How It Works
          </span>
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Our Editorial Process
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute top-8 right-[16%] left-[16%] z-0 hidden h-[2px] bg-border md:block"></div>

          {[
            {
              step: "01",
              title: "Source",
              desc: "We monitor carrier moves, vendor deployments, and pricing shifts.",
              icon: Search01Icon,
            },
            {
              step: "02",
              title: "Analyze",
              desc: "We strip away marketing fluff to determine what actually changes the desk workflow.",
              icon: Analytics01Icon,
            },
            {
              step: "03",
              title: "Distill",
              desc: "A concise, high-signal dispatch lands in your inbox twice a week.",
              icon: Mail01Icon,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background">
                <HugeiconsIcon
                  icon={item.icon}
                  className="h-8 w-8 text-primary"
                />
              </div>
              <div className="mb-2 font-mono text-sm font-bold text-primary">
                PHASE {item.step}
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
