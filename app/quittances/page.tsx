import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { Icon } from "@/components/shared/icon";

export default function QuittancesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Archivez et partagez vos preuves de paiement</p>
          <h1 className="text-2xl font-semibold">Quittances</h1>
        </div>
        <Button>
          <Icon name="plus" className="h-4 w-4" />
          Générer
        </Button>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
            <span>Historique</span>
            <Badge variant="outline">Vide</Badge>
          </div>
          <TableSkeleton rows={4} columns={4} />
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Importez vos données pour afficher les quittances classées par période et bail.
          </p>
        </Card>
        <Card className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Aide express</h2>
            <Badge variant="warning">À configurer</Badge>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Paramétrez vos modèles, signatures et envois automatiques. Les rôles Read-Only pourront consulter les PDF générés.
          </p>
        </Card>
      </section>
    </div>
  );
}
