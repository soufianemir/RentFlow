import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        "w-full rounded-xl border border-neutral-200/80 bg-white/80 px-3 py-2 text-sm text-neutral-900 shadow-subtle outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
