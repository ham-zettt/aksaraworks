"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// Four repeats per copy keep one copy wider than a 4K viewport so the -50%
// translate never exposes a gap.
export function Marquee({ items: source }: { items: string[] }) {
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const items = [...source, ...source, ...source, ...source];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // ponytail: one CSS loop, no rAF. Two identical copies make the -50% translate seamless.
  return (
    <div ref={ref} className="marquee border-y border-line" data-paused={paused || !inView}>
      <div className="flex items-center">
        <div aria-hidden="true" className="marquee-mask min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track h-12 items-center">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center">
                {items.map((item, index) => (
                  <li
                    key={`${copy}-${index}`}
                    className="eyebrow flex items-center gap-6 whitespace-nowrap pl-6 text-muted"
                  >
                    {item}
                    <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-accent" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          disabled={reduce}
          aria-label={paused ? "Jalankan ticker layanan" : "Jeda ticker layanan"}
          className="flex h-12 w-12 shrink-0 items-center justify-center border-l border-line text-muted transition-colors duration-300 hover:text-accent disabled:cursor-default disabled:opacity-40 disabled:hover:text-muted"
        >
          {paused ? (
            <Play aria-hidden="true" size={12} strokeWidth={1.5} />
          ) : (
            <Pause aria-hidden="true" size={12} strokeWidth={1.5} />
          )}
        </button>
      </div>
    </div>
  );
}
