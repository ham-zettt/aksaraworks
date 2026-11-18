import { ArrowUpRight } from "lucide-react";
import type { Heading } from "@/lib/content";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  heading: Heading;
  titleId?: string;
  count?: number;
  className?: string;
};

export function SectionHeading({ heading, titleId, count, className }: SectionHeadingProps) {
  return (
    <div className={cn("border-t border-line pt-5", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="eyebrow text-muted">
          <span className="text-accent">{heading.number}</span>
          <span aria-hidden="true"> / </span>
          {heading.label}
          {typeof count === "number" && (
            <span className="text-muted/70"> ({String(count).padStart(2, "0")})</span>
          )}
        </p>
        {heading.cta && (
          <a
            href={heading.cta.href}
            className="eyebrow group inline-flex items-center gap-2 text-muted transition-colors duration-300 hover:text-accent"
          >
            {heading.cta.label}
            <ArrowUpRight
              aria-hidden="true"
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        )}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
        <h2 id={titleId} className="h2 max-w-3xl text-fg">
          {heading.title} <span className="text-accent">{heading.accent}</span>
          {heading.after && <> {heading.after}</>}
        </h2>
        {heading.lead && (
          <div className="lead max-w-md text-pretty lg:justify-self-end">{heading.lead}</div>
        )}
      </div>
    </div>
  );
}
