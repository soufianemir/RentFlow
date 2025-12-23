import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { Icon } from "@/components/shared/icon";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 rounded-3xl bg-gradient-to-br from-white/80 via-white/50 to-blue-50/80 p-6 shadow-subtle ring-1 ring-neutral-200/60 backdrop-blur-md dark:from-white/5 dark:via-white/5 dark:to-blue-500/10 dark:ring-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-300">
              <Badge variant="success">Nouveau</Badge>
              Tableau de bord
            </div>
            <h1 className="text-3xl font-semibold">Bienvenue sur RentFlow</h1>
            <p className="max-w-2xl text-neutral-600 dark:text-neutral-300">
              Suivez vos réservations, propriétés et finances depuis ce hub. Les données sont factices pour guider la mise en page.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Icon name="sparkles" className="h-4 w-4" />
                Lancer un rapport
              </Button>
              <Button variant="ghost">Inviter un collaborateur</Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-white/50 bg-white/60 px-5 py-4 text-sm shadow-subtle backdrop-blur dark:border-white/5 dark:bg-white/10">
            <span className="text-neutral-500 dark:text-neutral-300">Synthèse du jour</span>
            <div className="text-3xl font-semibold">18 réservations</div>
            <p className="text-neutral-500 dark:text-neutral-400">2 arrivées, 1 départ, 5 validations en attente.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {["Taux d'occupation", "Revenus estimés", "Satisfaction client"].map((title, index) => (
          <Card key={title} className="space-y-3">
            <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
              <span>{title}</span>
              <Badge variant={index === 1 ? "warning" : "default"}>MàJ auto</Badge>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-semibold">{index === 0 ? "82%" : index === 1 ? "€12.4k" : "4.8/5"}</p>
              <span className="text-xs text-emerald-500">+2.1%</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Valeurs indicatives à remplacer par vos métriques.</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Suivi des flux</p>
              <h2 className="text-xl font-semibold">Activité récente</h2>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Rechercher" className="w-48" />
              <Button variant="outline">
                <Icon name="filter" className="h-4 w-4" />
                Filtrer
              </Button>
            </div>
          </div>
          <TableSkeleton rows={5} columns={4} />
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Validations</h3>
            <Badge variant="warning">En attente</Badge>
          </div>
          <div className="mt-4 space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-xl bg-neutral-50 px-3 py-3 text-sm dark:bg-white/5">
                <div>
                  <p className="font-medium">Séjour #{item}</p>
                  <p className="text-neutral-500 dark:text-neutral-400">À vérifier aujourd'hui</p>
                </div>
                <Button size="sm" variant="outline">
                  Voir
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
