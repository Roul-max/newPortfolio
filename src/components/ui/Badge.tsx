import * as React from "react";
import { cn } from "@/src/utils/cn";

export type BadgeProps = React.ComponentPropsWithoutRef<"div"> & {
  variant?: "default" | "secondary" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80": variant === "default",
          "border-transparent bg-primary/10 text-primary hover:bg-primary/20": variant === "secondary",
          "border-border text-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
