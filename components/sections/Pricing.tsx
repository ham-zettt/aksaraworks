import { Check } from "lucide-react";
import type { Heading, Package } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { PackageCta } from "@/components/ui/PackageCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Pricing({
  heading,
  items,
  note,
}: {
  heading: Heading;
  items: Package[];
  note: { custom: string; disclaimer: string };
}) {
  return (
    <section id="harga" aria-labelledby="harga-title" className="section">
      <div className="shell">
        <SectionHeading heading={heading} titleId="harga-title" count={items.length} />

        <Stagger className="mt-14 grid gap-3 md:gap-4 lg:grid-cols-3" delay={0.05}>
          {items.map((tier, index) => (
            <StaggerItem key={tier.id} className="h-full">
              <article
                className={cn(
                  "panel relative flex h-full flex-col p-5 sm:p-6 lg:p-8",
                  tier.featured &&
                    "overflow-hidden border-accent/55 bg-surface/25 hover:border-accent/70",
                )}
              >
                {tier.featured && (
                  <span aria-hidden="true" className="brand-gradient absolute inset-x-0 top-0 h-[3px]" />
                )}
                <CornerBrackets className={tier.featured ? "text-accent/50" : "text-fg/20"} />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="eyebrow text-muted">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="h3 mt-2 text-fg">{tier.name}</h3>
                  </div>
                  {tier.featured && (
                    <span className="micro rounded-full bg-accent px-2.5 py-1 text-black">
                      Rekomendasi
                    </span>
                  )}
                </div>

                <p className="caption mt-2 max-w-[26ch] text-muted">{tier.audience}</p>

                <div className="mt-6 border-y border-line py-5">
                  <p className="eyebrow text-muted">Mulai dari</p>
                  <p className="mt-2 text-4xl font-light leading-none tracking-[-0.03em] text-fg tabular-nums">
                    {tier.price}
                  </p>
                  <p className="eyebrow mt-3 text-accent">Estimasi {tier.delivery}</p>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="caption flex items-start gap-2.5 text-muted">
                      <Check
                        aria-hidden="true"
                        size={14}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <PackageCta id={tier.id} featured={tier.featured} />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow max-w-sm leading-relaxed text-muted">{note.custom}</p>
          <p className="caption max-w-md text-muted sm:text-right">{note.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
