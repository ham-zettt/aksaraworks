"use client";

import { PACKAGE_EVENT } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function PackageCta({ id, featured }: { id: string; featured?: boolean }) {
  return (
    <Button
      href="#kontak"
      variant={featured ? "solid" : "frame"}
      className="w-full"
      onClick={() => {
        window.dispatchEvent(new CustomEvent<string>(PACKAGE_EVENT, { detail: id }));
      }}
    >
      Pilih Paket
    </Button>
  );
}
