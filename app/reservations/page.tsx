import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { Icon } from "@/components/shared/icon";

const tabs = [
  { label: "A traiter", key: "pending" },
  { label: "Confirmées", key: "confirmed" },
  { label: "Archivées", key: "archived" }
];

export default function ReservationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Planifiez vos séjours</p>
          <h1 className="text-2xl font-semibold">Réservations</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="download" className="h-4 w-4" />
            Exporter
          </Button>
          <Button>
            <Icon name="plus" className="h-4 w-4" />
            Nouvelle
          </Button>
        </div>
      </div>

      <Card className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            {tabs.map((tab, index) => (
              <Button key={tab.key} variant={index === 0 ? "primary" : "ghost"} size="sm">
                {tab.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Input placeholder="Rechercher une réservation" className="w-64" />
            <Badge variant="warning">Validé ?</Badge>
          </div>
        </div>
        <TableSkeleton rows={6} columns={5} />
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          La table reste vide pour accueillir vos données Supabase (RLS et rôles Read-Only inclus).
        </p>
      </Card>
    </div>
  );
}
