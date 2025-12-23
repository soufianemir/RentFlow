import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { Icon } from "@/components/shared/icon";

const cards = [
  { title: "Appartements", value: "12", hint: "Inventaire actif" },
  { title: "Maisons", value: "4", hint: "Ajoutez les pièces" },
  { title: "Maintenance", value: "3 tickets", hint: "Assignations en cours" }
];

export default function ProprietesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Gestion du parc</p>
          <h1 className="text-2xl font-semibold">Propriétés</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Importer</Button>
          <Button>
            <Icon name="plus" className="h-4 w-4" />
            Nouvelle fiche
          </Button>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {cards.map((item) => (
          <Card key={item.title} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.title}</p>
              <Badge>Live</Badge>
            </div>
            <p className="text-3xl font-semibold">{item.value}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.hint}</p>
          </Card>
        ))}
      </section>

      <Card className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Icon name="map" className="h-4 w-4" />
            Détails par propriété
          </div>
          <Input placeholder="Filtrer par ville" className="w-60" />
        </div>
        <TableSkeleton rows={4} columns={4} />
        <div className="grid gap-3 sm:grid-cols-3">
          {["Caractéristiques", "Tarifs", "Documents"].map((tab, idx) => (
            <div key={tab} className="rounded-xl bg-neutral-50 px-3 py-3 text-sm dark:bg-white/5">
              <p className="font-medium">{tab}</p>
              <p className="text-neutral-500 dark:text-neutral-400">Onglet de détails #{idx + 1}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
