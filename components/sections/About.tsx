import { site, type AboutContent } from "@/lib/content";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About({ about }: { about: AboutContent }) {
  return (
    <section id="tentang" aria-labelledby="tentang-title" className="section">
      <div className="shell">
        <SectionHeading heading={about.heading} titleId="tentang-title" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              {about.paragraphs.map((paragraph, index) =>
                index === 0 ? (
                  <p key={paragraph} className="lead max-w-xl text-pretty">
                    {paragraph}
                  </p>
                ) : (
                  <p key={paragraph} className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ),
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 border-t border-line">
                {about.values.map((value, index) => (
                  <div
                    key={value.title}
                    className="grid gap-2 border-b border-line py-5 sm:grid-cols-[3rem_1fr_1.2fr] sm:items-baseline sm:gap-6"
                  >
                    <dt className="eyebrow text-accent">{String(index + 1).padStart(2, "0")}</dt>
                    <dd className="h3">{value.title}</dd>
                    <dd className="caption text-muted">{value.text}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="self-start">
            <div className="panel relative p-6 sm:p-8">
              <CornerBrackets className="text-fg/25" />
              <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                <p className="eyebrow text-muted">{about.panelLabel}</p>
                <p className="eyebrow flex items-center gap-2 text-muted">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  {site.availability}
                </p>
              </div>

              <dl className="mt-2">
                {[
                  ["Lokasi", `${site.location} (${site.locationNote})`],
                  ["Respon", site.responseTime],
                  ["WhatsApp", site.whatsapp.display],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-line py-4"
                  >
                    <dt className="eyebrow text-muted">{label}</dt>
                    <dd className="text-right text-sm text-fg">{value}</dd>
                  </div>
                ))}
              </dl>

              <p className="eyebrow mt-6 text-muted">{about.panelListLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {about.panelList.map((item) => (
                  <li
                    key={item}
                    className="micro rounded-full border border-line px-3 py-1.5 text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
