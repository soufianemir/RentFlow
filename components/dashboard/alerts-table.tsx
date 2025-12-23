import { Alert } from "@/lib/mock";
import { StatusBadge } from "./status-badge";

export function AlertsTable({ data }: { data: Alert[] }) {
  return (
    <div className="glass-card mt-6 overflow-hidden rounded-3xl border">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-sm font-semibold">Recent Alerts</p>
          <p className="text-xs text-muted-foreground">Signals needing your attention</p>
        </div>
        <button className="text-xs font-semibold text-sky-500 hover:text-sky-400">View all</button>
      </div>
      <div className="divide-y divide-white/5">
        {data.map((alert) => (
          <div
            key={alert.id}
            className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">{alert.title}</p>
              <p className="text-xs text-muted-foreground">{alert.property}</p>
            </div>
            <div className="flex flex-1 items-center justify-between gap-3 sm:justify-end">
              <div className="text-sm font-semibold text-foreground">{alert.amount}</div>
              <StatusBadge status={alert.status} />
              <p className="text-xs text-muted-foreground">{alert.due}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
