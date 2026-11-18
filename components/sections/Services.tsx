import {
  BarChart3,
  BookOpen,
  Building2,
  Calculator,
  ChartColumn,
  ClipboardList,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LayoutTemplate,
  MonitorSmartphone,
  Palette,
  PenTool,
  Printer,
  Quote,
  RefreshCw,
  Share2,
  ShoppingBag,
  SpellCheck,
  Store,
  Table2,
  Type,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Heading, Service, ServiceIcon } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const icons: Record<ServiceIcon, LucideIcon> = {
  landing: LayoutTemplate,
  store: Store,
  profile: Building2,
  shop: ShoppingBag,
  app: LayoutDashboard,
  care: Wrench,
  logo: PenTool,
  palette: Palette,
  type: Type,
  print: Printer,
  social: Share2,
  book: BookOpen,
  essay: FileText,
  journal: BookOpen,
  thesis: GraduationCap,
  quote: Quote,
  report: ClipboardList,
  edit: SpellCheck,
  clean: RefreshCw,
  formula: Calculator,
  table: Table2,
  chart: BarChart3,
  dashboard: ChartColumn,
  convert: RefreshCw,
  web: MonitorSmartphone,
  data: BarChart3,
};

export function Services({ heading, services }: { heading: Heading; services: Service[] }) {
  return (
    <section id="layanan" aria-labelledby="layanan-title" className="section">
      <div className="shell">
        <SectionHeading
          heading={heading}
          titleId="layanan-title"
          count={services.length}
        />

        <Stagger className="mt-14 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <StaggerItem key={service.title} className="h-full">
                <article className="group panel relative flex h-full min-h-48 flex-col justify-between overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-[3px] hover:border-accent/45 sm:p-6 lg:p-8">
                  <span
                    aria-hidden="true"
                    className="service-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/40 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="flex size-11 items-center justify-center border border-line text-accent transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/10">
                      <Icon aria-hidden="true" size={19} strokeWidth={1.25} />
                    </span>
                    <span className="eyebrow text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-1">
                    <h3 className="h3 text-fg">{service.title}</h3>
                    <p className="caption mt-2 max-w-[26ch] text-muted">{service.description}</p>
                  </div>
                </article>
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
