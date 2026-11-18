import { cn } from "@/lib/utils";

export function BrandMark({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1.5 whitespace-nowrap text-2xl",
        className,
      )}
    >
      <span className="font-medium leading-none tracking-[-0.035em] text-fg">{name}</span>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
    </span>
  );
}
