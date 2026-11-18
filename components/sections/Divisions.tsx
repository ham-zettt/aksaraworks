import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  FileText,
  MonitorSmartphone,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { divisions, type Heading, type ServiceIcon } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const icons: Partial<Record<ServiceIcon, LucideIcon>> = {
  web: MonitorSmartphone,
  logo: PenTool,
  essay: FileText,
  data: BarChart3,
};

export function Divisions({ heading }: { heading: Heading }) {
  return (
    <section id="layanan" aria-labelledby="layanan-title" className="section">
      <div className="shell">
        <SectionHeading heading={heading} titleId="layanan-title" count={divisions.length} />

        <Stagger className="mt-14 grid gap-3 md:grid-cols-2 md:gap-4">
          {divisions.map((division, index) => {
            const Icon = icons[division.icon] ?? FileText;
            return (
              <StaggerItem key={division.key} className="h-full">
                <Link
                  href={division.path}
                  data-accent={division.key}
                  className="group panel relative flex h-full min-h-64 flex-col justify-between overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-[3px] hover:border-accent/45 sm:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="service-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/40 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="flex size-11 items-center justify-center border border-line text-accent transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/10">
                      <Icon aria-hidden="true" size={19} strokeWidth={1.25} />
                    </span>
                    <span className="eyebrow text-muted">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="relative mt-12">
                    <h3 className="text-[clamp(1.6rem,3vw,2.1rem)] font-light leading-none tracking-[-0.04em] text-fg">
                      {division.name}
                    </h3>
                    <p className="eyebrow mt-3 text-accent">{division.title}</p>
                    <p className="caption mt-3 max-w-[34ch] text-muted">{division.description}</p>
                    <p className="eyebrow mt-6 flex items-center gap-2 text-muted transition-colors duration-300 group-hover:text-accent">
                      Lihat layanan
                      <ArrowUpRight
                        aria-hidden="true"
                        size={13}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div
          aria-hidden="true"
          className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        />
      </div>
    </section>
  );
}
