import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { divisions, site, type BranchKey } from "@/lib/content";
import { BrandMark } from "@/components/ui/BrandMark";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer({
  brand,
  role,
  menu,
  current,
}: {
  brand: string;
  role: string;
  menu: string;
  current: BranchKey | "home";
}) {
  return (
    <footer className="pb-8">
      <div className="shell">
        <div className="relative border border-line p-6 sm:p-8">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          />
          <CornerBrackets className="text-fg/20" inset="inset-3" />

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <a href="#top" aria-label={`${brand}, kembali ke atas`} className="inline-block">
                <BrandMark name={brand} />
              </a>
              <p className="eyebrow mt-2 text-accent">{role}</p>
              <p className="caption mt-3 max-w-xs text-muted">{menu}</p>
            </div>

            <div className="flex flex-col gap-4 sm:items-end">
              <SocialLinks />
              <a
                href="#top"
                className="eyebrow group inline-flex min-h-11 items-center gap-2 text-muted transition-colors duration-300 hover:text-accent"
              >
                Kembali ke atas
                <ArrowUp
                  aria-hidden="true"
                  size={13}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <nav aria-label="Divisi AKSARA" className="mt-10 border-t border-line pt-5">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              <li>
                <Link
                  href="/"
                  aria-current={current === "home" ? "page" : undefined}
                  className="eyebrow inline-flex min-h-11 items-center text-muted transition-colors duration-300 hover:text-accent"
                >
                  AKSARA
                </Link>
              </li>
              {divisions.map((division) => (
                <li key={division.key} data-accent={division.key}>
                  <Link
                    href={division.path}
                    aria-current={current === division.key ? "page" : undefined}
                    className="eyebrow inline-flex min-h-11 items-center gap-2 text-muted transition-colors duration-300 hover:text-accent"
                  >
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="eyebrow text-muted">
              © 2026 {site.name}. Seluruh hak cipta dilindungi.
            </p>
            <p className="eyebrow text-muted">
              {site.location} · {site.locationNote}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
