import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-neutral-900 text-white dark:bg-white dark:text-black",
    success: "bg-emerald-500/90 text-white dark:bg-emerald-400/90",
    warning: "bg-amber-500/90 text-white dark:bg-amber-400/90"
  };
  return (
    <span className={clsx("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold", styles[variant])}>
      {children}
    </span>
  );
}
