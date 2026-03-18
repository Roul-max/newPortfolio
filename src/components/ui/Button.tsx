import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground shadow-[0_12px_30px_-18px_rgba(14,75,79,0.9)] hover:bg-primary/90 hover:-translate-y-0.5": variant === "default",
            "border border-border bg-background/70 text-foreground hover:bg-primary/10 hover:text-foreground": variant === "outline",
            "text-foreground/80 hover:text-foreground hover:bg-muted": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "h-10 px-5": size === "default",
            "h-9 rounded-full px-4": size === "sm",
            "h-12 rounded-full px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
