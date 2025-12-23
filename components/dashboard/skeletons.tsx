export function CardSkeleton() {
  return (
    <div className="glass-card h-32 animate-pulse rounded-3xl border bg-gradient-to-br from-white/60 to-white/30 dark:from-slate-900/40 dark:to-slate-900/20" />
  );
}

export function TableSkeleton() {
  return (
    <div className="glass-card h-64 animate-pulse rounded-3xl border bg-gradient-to-br from-white/60 to-white/30 dark:from-slate-900/40 dark:to-slate-900/20" />
  );
}
