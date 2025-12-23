import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/shared/icon";

const tabs = ["Aperçu", "Paiements", "Documents", "Notes"];

export default function BailDetailPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Détails du bail sélectionné</p>
          <h1 className="text-2xl font-semibold">Bail #ID</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="download" className="h-4 w-4" />
            Exporter
          </Button>
          <Button>
            <Icon name="check" className="h-4 w-4" />
            Marquer comme validé
          </Button>
        </div>
      </div>

      <Card className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab, index) => (
            <Button key={tab} variant={index === 0 ? "primary" : "ghost"} size="sm">
              {tab}
            </Button>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Aperçu</h2>
              <Badge variant="outline">Vide</Badge>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Résumé du bail, loyers, occupants et dates clés. Remplacez cette zone par vos données Supabase.
            </p>
          </Card>
          <Card className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Paiements</h2>
              <Badge variant="warning">À configurer</Badge>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Suivi des encaissements, relances automatiques et case « Validé ? » pour la comptabilité.
            </p>
          </Card>
          <Card className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Documents</h2>
              <Badge variant="outline">0</Badge>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Ajoutez contrats signés, état des lieux et pièces justificatives. Les rôles Read-Only y accèdent en lecture seule.
            </p>
          </Card>
          <Card className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Notes</h2>
              <Badge variant="outline">Collab</Badge>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Laissez des commentaires internes, to-do et rappels de visites techniques.
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
}
