import Image from "next/image";
import type { Heading, Work } from "@/lib/content";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Works({ heading, items }: { heading: Heading; items: Work[] }) {
  return (
    <section id="karya" aria-labelledby="karya-title" className="section">
      <div className="shell">
        <SectionHeading heading={heading} titleId="karya-title" count={items.length} />

        <Stagger className="mt-14 grid gap-3 md:grid-cols-2 md:gap-4">
          {items.map((work, index) => (
            <StaggerItem key={work.name}>
              <article className="group">
                <div className="relative aspect-video overflow-hidden rounded-lg border border-line-strong bg-surface transition-colors duration-500 group-hover:border-accent/50">
                  {work.image ? (
                    <Image
                      src={work.image}
                      alt={`Ilustrasi proyek ${work.name}`}
                      fill
                      sizes="(min-width: 1024px) 44rem, (min-width: 768px) 50vw, 100vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  ) : (
                    <>
                      <span
                        aria-hidden="true"
                        className="service-glow pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div className="relative flex h-full flex-col justify-end p-5 sm:p-7">
                        <span className="eyebrow text-accent">{work.category}</span>
                        <p className="mt-2 text-[clamp(1.75rem,4.2vw,3rem)] font-light leading-none tracking-[-0.04em] text-fg">
                          {work.name}
                        </p>
                      </div>
                    </>
                  )}
                  <span className="eyebrow absolute left-3 top-3 z-10 rounded-sm bg-black/70 px-2 py-1 text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <CornerBrackets className="text-fg/30" inset="inset-3" />
                </div>

                <div className="relative mt-4 flex flex-col gap-2 border-t border-line pt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/40 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div>
                    <h3 className="h3 text-fg">{work.name}</h3>
                    <p className="caption mt-1 text-muted">{work.summary}</p>
                  </div>
                  <p className="eyebrow shrink-0 text-muted sm:text-right">{work.category}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
