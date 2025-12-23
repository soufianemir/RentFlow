import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("rounded-2xl border border-neutral-200/80 bg-white/80 p-6 shadow-subtle backdrop-blur-sm dark:border-white/10 dark:bg-white/5", className)}>
      {children}
    </div>
  );
}
