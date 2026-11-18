"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import type { FaqItem, Heading } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq({ heading, items }: { heading: Heading; items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="section">
      <div className="shell">
        <SectionHeading heading={heading} titleId="faq-title" count={items.length} />

        <div className="mt-14 border-t border-line">
          {items.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.question}
                className={cn(
                  "border-b transition-colors duration-300",
                  isOpen ? "border-accent/45" : "border-line",
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 py-5 text-left transition-colors duration-300 hover:text-accent sm:grid-cols-[3.5rem_1fr_auto] sm:gap-6"
                  >
                    <span className="eyebrow text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-normal leading-snug text-fg transition-colors duration-300 group-hover:text-accent sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center border border-line transition-transform duration-300",
                        isOpen
                          ? "rotate-45 border-accent/60 text-accent"
                          : "text-muted group-hover:border-accent/40",
                      )}
                    >
                      <Plus size={13} strokeWidth={1.5} />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                  >
                    <p className="caption max-w-2xl pb-6 pl-[3.25rem] pr-8 text-muted sm:pl-[4.75rem]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
