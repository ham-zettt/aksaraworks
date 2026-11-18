"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  divisions,
  home,
  site,
  type BranchKey,
  type NavItem,
} from "@/lib/content";
import { cn, waLink } from "@/lib/utils";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

type NavbarProps = {
  brand: string;
  role: string;
  nav: NavItem[];
  brandHref: string;
  current?: BranchKey | "home";
};

export function Navbar({ brand, role, nav, brandHref, current = "home" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-6 lg:px-8">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-2 rounded-sm border border-line bg-black/55 px-2 pl-2.5 backdrop-blur-xl md:gap-3 md:px-3 md:pl-4"
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="menu"
            aria-label="Buka menu"
            className="eyebrow flex min-h-11 shrink-0 items-center gap-2 text-fg transition-colors duration-300 hover:text-accent"
          >
            <span aria-hidden="true" className="grid grid-cols-2 gap-[3px]">
              {Array.from({ length: 4 }).map((_, dot) => (
                <span key={dot} className="size-[3px] rounded-full bg-current" />
              ))}
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>

          <Link href={brandHref} aria-label={`${brand}, kembali ke atas`} className="flex items-center gap-2.5 md:gap-4">
            <Image
              src="/logo.png"
              alt=""
              aria-hidden="true"
              width={36}
              height={36}
              className="size-8 shrink-0 rounded-sm md:size-9"
            />
            <BrandMark name={brand} className="text-base sm:text-xl lg:text-2xl" />
            <span aria-hidden="true" className="hidden h-4 w-px bg-line-strong md:block" />
            <span className="eyebrow hidden text-muted lg:block">{role}</span>
          </Link>

          <div className="flex shrink-0 items-center gap-2">
            <SocialLinks className="hidden md:flex" />
            <Button href="#kontak" size="sm" arrow="none">
              Mulai Proyek
            </Button>
          </div>
        </nav>
      </header>

      <dialog
        ref={dialogRef}
        id="menu"
        aria-modal="true"
        aria-labelledby="menu-title"
        onClose={() => setOpen(false)}
        className="fixed inset-0 z-[60] m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-black p-0 text-fg backdrop:bg-black/80"
      >
        <div className="relative flex min-h-dvh flex-col">
          <span aria-hidden="true" className="menu-glow pointer-events-none absolute inset-0" />

          <div className="relative flex h-20 shrink-0 items-center justify-between gap-4 px-5 md:px-10">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                className="size-9 rounded-sm"
              />
              <BrandMark name={brand} className="text-xl sm:text-2xl" />
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
              className="flex size-11 items-center justify-center rounded-md border border-line text-fg transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <X aria-hidden="true" size={18} strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Navigasi menu" className="relative flex-1 px-5 py-8 md:px-10 md:py-12">
            <h2 id="menu-title" className="sr-only">
              Menu
            </h2>
            <ul>
              {nav.map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-4 md:gap-6 md:py-5"
                  >
                    <span className="eyebrow w-6 shrink-0 text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[clamp(2rem,6vw,4rem)] font-light leading-none tracking-[-0.04em] text-fg transition-colors duration-300 group-hover:text-accent">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={20}
                      strokeWidth={1.25}
                      className="ml-auto self-center text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <p className="eyebrow text-muted">Divisi AKSARA</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                <li>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    aria-current={current === "home" ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center justify-between gap-3 rounded-md border px-4 text-sm transition-colors duration-300",
                      current === "home"
                        ? "border-line-strong text-fg"
                        : "border-line text-muted hover:border-accent hover:text-fg",
                    )}
                  >
                    AKSARA
                    <span className="eyebrow text-accent">Utama</span>
                  </Link>
                </li>
                {divisions.map((division) => (
                  <li key={division.key} data-accent={division.key}>
                    <Link
                      href={division.path}
                      onClick={() => setOpen(false)}
                      aria-current={current === division.key ? "page" : undefined}
                      className={cn(
                        "flex min-h-11 items-center justify-between gap-3 rounded-md border px-4 text-sm transition-colors duration-300",
                        current === division.key
                          ? "border-line-strong text-fg"
                          : "border-line text-muted hover:border-accent hover:text-fg",
                      )}
                    >
                      <span className="flex items-center gap-2.5">
                        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                        {division.name}
                      </span>
                      <span className="eyebrow text-muted">{division.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 grid max-w-xl gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-muted">WhatsApp</p>
                <a
                  href={waLink(home.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-11 items-center text-sm text-fg transition-colors duration-300 hover:text-accent"
                >
                  {site.whatsapp.display}
                </a>
                <p className="caption mt-1 text-muted">{site.tagline}</p>
              </div>
              <div>
                <p className="eyebrow text-muted">Ikuti</p>
                <SocialLinks variant="list" className="mt-2" />
              </div>
            </div>

            <div className="mt-10">
              <Button href="#kontak" onClick={() => setOpen(false)}>
                Mulai Proyek
              </Button>
            </div>
          </nav>
        </div>
      </dialog>
    </>
  );
}
