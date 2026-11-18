import type { Heading, ProcessStep } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process({
  heading,
  steps,
  note,
}: {
  heading: Heading;
  steps: ProcessStep[];
  note: string;
}) {
  return (
    <section id="proses" aria-labelledby="proses-title" className="section">
      <div className="shell">
        <SectionHeading heading={heading} titleId="proses-title" count={steps.length} />

        <Reveal delay={0.1}>
          <ol className="mt-14 border-t border-line">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="row-glow group grid gap-3 border-b border-line py-6 transition-colors duration-300 hover:border-accent/40 sm:grid-cols-[3.5rem_9rem_1fr] sm:items-baseline sm:gap-8 sm:py-7"
              >
                <span className="eyebrow text-accent transition-transform duration-300 group-hover:translate-x-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow text-muted">{step.duration}</span>
                <div>
                  <h3 className="h3 text-fg">{step.title}</h3>
                  <p className="caption mt-2 max-w-2xl text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="eyebrow mt-8 flex items-center gap-3 text-muted">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
