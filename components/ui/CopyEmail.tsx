"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyState = "idle" | "copied" | "failed";

export function CopyEmail({ value, label }: { value: string; label?: string }) {
  const [state, setState] = useState<CopyState>("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Salin ${label ?? value}`}
      className="eyebrow inline-flex min-h-11 items-center gap-2 border border-line px-3 text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      {state === "copied" ? "Tersalin" : state === "failed" ? "Gagal" : "Salin"}
      {state === "copied" ? (
        <Check aria-hidden="true" size={13} strokeWidth={1.5} />
      ) : (
        <Copy aria-hidden="true" size={13} strokeWidth={1.5} />
      )}
    </button>
  );
}
