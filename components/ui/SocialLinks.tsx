import { ArrowUpRight } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { site, socials, type SocialKey } from "@/lib/content";
import { cn } from "@/lib/utils";
import { InstagramIcon, TwitterIcon } from "@/components/ui/BrandIcons";

const icons: Record<SocialKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  instagram: InstagramIcon,
  twitter: TwitterIcon,
};

export function SocialLinks({
  variant = "icons",
  className,
}: {
  variant?: "icons" | "list" | "rows" | "chips";
  className?: string;
}) {
  if (variant === "list") {
    return (
      <ul className={cn("flex flex-wrap gap-x-5 gap-y-2", className)}>
        {socials.map((social) => (
          <li key={social.key}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex min-h-11 items-center gap-1.5 text-muted transition-colors duration-300 hover:text-accent"
            >
              {social.label}
              <ArrowUpRight aria-hidden="true" size={11} strokeWidth={1.5} />
            </a>
          </li>
        ))}
      </ul>
    );
  }

  if (variant === "rows") {
    return (
      <ul className={cn("border-t border-line", className)}>
        {socials.map((social) => {
          const Icon = icons[social.key];
          return (
            <li key={social.key}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center justify-between gap-4 border-b border-line px-1 transition-colors duration-300 hover:text-accent"
              >
                <span className="flex items-center gap-3">
                  <Icon aria-hidden="true" width={20} height={20} />
                  <span className="eyebrow">{social.label}</span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  size={15}
                  strokeWidth={1.5}
                  className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socials.map((social) => {
        const Icon = icons[social.key];
        return (
          <li key={social.key}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} ${site.name}`}
              className={
                variant === "chips"
                  ? "flex min-h-11 items-center gap-2.5 rounded-md border border-line px-4 text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                  : "flex size-11 items-center justify-center rounded-md border border-line text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
              }
            >
              <Icon aria-hidden="true" width={16} height={16} />
              {variant === "chips" && <span className="eyebrow">{social.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
