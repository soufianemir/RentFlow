import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { Icon } from "@/components/shared/icon";

const kpis = [
  { label: "Revenus du mois", value: "€18,4k", trend: "+3.2%" },
  { label: "Baux actifs", value: "42", trend: "Stable" },
  { label: "Factures ouvertes", value: "12", trend: "-4 en attente" },
  { label: "Taux d'encaissement", value: "93%", trend: "+1.1 pt" }
];

const activities = [
  { title: "Signature de bail #458", detail: "Ajouté par Marie Martin" },
  { title: "Facture #F-920 en attente", detail: "Rappel automatique programmé" },
  { title: "Document ajouté", detail: "Quittance juin 2024" },
  { title: "Note partagée", detail: "Visite technique planifiée" }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Vue synthétique de vos données locatives</p>
          <h1 className="text-2xl font-semibold">Tableau de bord</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="download" className="h-4 w-4" />
            Exporter
          </Button>
          <Button>
            <Icon name="sparkles" className="h-4 w-4" />
            Générer un rapport
          </Button>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => (
          <Card key={item.label} className="space-y-3">
            <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
              <span>{item.label}</span>
              <Badge variant="outline">Mock</Badge>
            </div>
            <div className="text-3xl font-semibold">{item.value}</div>
            <p className="text-sm text-emerald-500">{item.trend}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Suivi chronologique</p>
              <h2 className="text-lg font-semibold">Dernières activités</h2>
            </div>
            <Button variant="ghost" size="sm">
              <Icon name="filter" className="h-4 w-4" />
              Filtrer
            </Button>
          </div>
          <div className="space-y-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex items-center justify-between rounded-xl border border-neutral-200/80 bg-white/50 px-4 py-3 text-sm shadow-subtle dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-neutral-500 dark:text-neutral-400">{activity.detail}</p>
                </div>
                <Badge variant="outline">Vide</Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Actions rapides</p>
              <h3 className="text-lg font-semibold">Planification</h3>
            </div>
            <Badge variant="warning">Bientôt</Badge>
          </div>
          <TableSkeleton rows={4} columns={3} />
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Les sections sont prêtes à accueillir des automatisations (menu planning, liste de courses, validations).
          </p>
        </Card>
      </section>
    </div>
  );
}
