"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { cn, waLink } from "@/lib/utils";

export function FloatingWhatsApp({ message }: { message: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat ${site.name} via WhatsApp`}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex h-12 w-12 min-h-11 items-center justify-center rounded-full border border-accent bg-accent px-0 text-black transition-all duration-300 hover:brightness-110 sm:h-auto sm:w-auto sm:gap-2 sm:px-4",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <MessageCircle aria-hidden="true" size={17} strokeWidth={1.5} />
      <span className="eyebrow hidden sm:inline">WhatsApp</span>
    </a>
  );
}
