import { cn } from "@/lib/utils";

const marks = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

export function CornerBrackets({
  className,
  inset = "inset-2",
}: {
  className?: string;
  inset?: string;
}) {
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute", inset, className)}>
      {marks.map((mark) => (
        <span key={mark} className={cn("absolute size-3.5 border-current", mark)} />
      ))}
    </span>
  );
}
