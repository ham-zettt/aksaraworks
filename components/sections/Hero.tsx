"use client";

import { motion } from "motion/react";
import { site, type HeroContent } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { Button } from "@/components/ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const facts = [
  `${site.location} (${site.locationNote})`,
  `Respon ${site.responseTime.toLowerCase()}`,
  site.availability,
];

export function Hero({ hero }: { hero: HeroContent }) {
  const reduce = usePrefersReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40"
    >
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">
        <div className="hero-mesh" />
      </div>

      <div className="shell relative z-10 flex flex-col items-center text-center">
        <motion.p
          className="eyebrow flex items-center gap-2 text-muted"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-accent"
            style={{ boxShadow: "0 0 0 4px color-mix(in srgb, var(--accent) 16%, transparent)" }}
          />
          {hero.eyebrow}
        </motion.p>

        <h1
          id="hero-title"
          className="mt-6 max-w-5xl text-[clamp(2.9rem,7.2vw,6.4rem)] font-light leading-[0.88] tracking-[-0.05em] text-fg"
        >
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            >
              {hero.headline.first}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className="block text-accent"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
            >
              {hero.headline.second}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="lead mt-6 max-w-xl text-pretty"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.66, ease: EASE }}
        >
          <Button href={hero.primary.href}>{hero.primary.label}</Button>
          <Button href={hero.secondary.href} variant="frame">
            {hero.secondary.label}
          </Button>
        </motion.div>

        {/* <motion.ul
          className="eyebrow mt-6 flex flex-col items-center gap-1.5 text-muted sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-2"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.72 }}
        >
          {hero.claims.map((claim, index) => (
            <li key={claim} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden="true" className="hidden text-accent sm:inline">
                  /
                </span>
              )}
              {claim}
            </li>
          ))}
        </motion.ul> */}

        <motion.ul
          className="eyebrow mt-8 flex flex-col items-center gap-1.5 text-muted sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.78 }}
        >
          {facts.map((fact, index) => (
            <li key={fact} className="flex items-center gap-5">
              {index > 0 && (
                <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
              )}
              {fact}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
