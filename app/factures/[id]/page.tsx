import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/shared/icon";

const tabs = ["Aperçu", "Paiements", "Documents", "Notes"];

export default function FactureDetailPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Détail de la facture et suivis</p>
          <h1 className="text-2xl font-semibold">Facture #ID</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="download" className="h-4 w-4" />
            Exporter
          </Button>
          <Button>
            <Icon name="check" className="h-4 w-4" />
            Marquer comme payée
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
              Résumé de la facture, bail associé, échéance et case « Validé ? ». Ajoutez vos métadonnées Supabase.
            </p>
          </Card>
          <Card className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Paiements</h2>
              <Badge variant="warning">Suivi</Badge>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Encaissements, retards et relances automatiques. Prévu pour se connecter à votre passerelle de paiement.
            </p>
          </Card>
          <Card className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Documents</h2>
              <Badge variant="outline">0</Badge>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Stockez les PDF, pièces jointes et quittances générées. Les rôles Read-Only peuvent consulter sans modifier.
            </p>
          </Card>
          <Card className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Notes</h2>
              <Badge variant="outline">Collab</Badge>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Commentaires internes, tâches et suivis de communication avec les locataires.
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
}
