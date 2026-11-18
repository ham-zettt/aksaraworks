import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  variant?: "solid" | "frame";
  size?: "sm" | "md";
  arrow?: "right" | "up-right" | "none";
};

const sizes = {
  sm: "!min-h-10 !px-4 !py-2 text-[0.625rem]",
  md: "",
};

const variants = {
  solid: "btn-solid",
  frame: "btn-frame",
};

export function Button({
  children,
  className,
  variant = "solid",
  size = "md",
  arrow = "right",
  ...props
}: ButtonProps) {
  const Arrow = arrow === "up-right" ? ArrowUpRight : ArrowRight;

  return (
    <a {...props} className={cn(variants[variant], sizes[size], "group", className)}>
      {children}
      {arrow !== "none" && (
        <Arrow
          aria-hidden="true"
          size={14}
          strokeWidth={1.5}
          className={cn(
            "transition-transform duration-300",
            arrow === "up-right"
              ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              : "group-hover:translate-x-1",
          )}
        />
      )}
    </a>
  );
}
