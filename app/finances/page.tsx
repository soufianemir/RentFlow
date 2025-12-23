import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { Icon } from "@/components/shared/icon";

export default function FinancesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Prévisions et revenus</p>
          <h1 className="text-2xl font-semibold">Finances</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="refresh-ccw" className="h-4 w-4" />
            Rafraîchir
          </Button>
          <Button>
            <Icon name="wallet" className="h-4 w-4" />
            Générer un budget
          </Button>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {["Revenus mensuels", "Dépenses", "Cashflow prévisionnel"].map((title, idx) => (
          <Card key={title} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{title}</p>
              <Badge variant={idx === 2 ? "success" : "default"}>Auto</Badge>
            </div>
            <p className="text-3xl font-semibold">{idx === 0 ? "€24.8k" : idx === 1 ? "€9.6k" : "+€5.1k"}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Placer ici vos graphiques financiers.</p>
          </Card>
        ))}
      </section>

      <Card className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Icon name="table" className="h-4 w-4" />
            Prévisions sur 12 mois
          </div>
          <Input placeholder="Filtrer par catégorie" className="w-60" />
        </div>
        <TableSkeleton rows={5} columns={5} />
        <div className="grid gap-3 sm:grid-cols-2">
          {["Recettes", "Charges"].map((tab, idx) => (
            <div key={tab} className="rounded-xl bg-neutral-50 px-3 py-3 text-sm dark:bg-white/5">
              <p className="font-medium">{tab}</p>
              <p className="text-neutral-500 dark:text-neutral-400">Onglet #{idx + 1} pour vos détails.</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
