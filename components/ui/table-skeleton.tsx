interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

export function TableSkeleton({ rows = 4, columns = 4 }: TableSkeletonProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200/80 bg-white/70 shadow-subtle dark:border-white/10 dark:bg-white/5">
      <div className="divide-y divide-neutral-100 dark:divide-white/5">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-12 gap-4 px-4 py-3">
            {Array.from({ length: columns }).map((__, colIndex) => (
              <div key={colIndex} className="col-span-3 h-3 rounded-full bg-neutral-200 dark:bg-white/10" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
