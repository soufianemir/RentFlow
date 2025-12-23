import { AlertsTable } from "@/components/dashboard/alerts-table";
import { KPIStatCard } from "@/components/dashboard/kpi-stat-card";
import { alerts, kpiData } from "@/lib/mock";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-sky-500">Portfolio cockpit</p>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Monitor receivables, surface risk, and action alerts with a workspace designed for premium property operations.
        </p>
      </div>

      <div className="card-grid">
        {kpiData.map((kpi) => (
          <KPIStatCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <AlertsTable data={alerts} />
    </div>
  );
}
