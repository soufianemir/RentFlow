"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
        ghost: "bg-transparent text-neutral-800 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-white/5",
        outline: "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5"
      },
      size: {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-4 py-2",
        lg: "text-base px-5 py-2.5"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={clsx(buttonStyles({ variant, size }), className)} {...props} />;
  }
);
Button.displayName = "Button";

export { Button };
