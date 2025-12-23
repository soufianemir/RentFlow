import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Icon } from "@/components/shared/icon";

export default function NouveauBailPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Préparez un bail prêt à signer</p>
        <h1 className="text-2xl font-semibold">Nouveau bail</h1>
      </div>

      <Card className="space-y-5">
        <div className="flex items-center justify-between">
          <Badge variant="outline">Brouillon</Badge>
          <Button variant="outline">
            <Icon name="save" className="h-4 w-4" />
            Enregistrer
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Référence du bail</label>
            <Input placeholder="BAIL-2024-001" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Locataire</label>
            <Input placeholder="Nom du locataire" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Propriété</label>
            <Input placeholder="Adresse ou référence" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Date d'entrée</label>
            <Input placeholder="JJ/MM/AAAA" />
          </div>
        </div>
        <Card className="space-y-3 bg-neutral-50/60 dark:bg-white/5">
          <h2 className="text-lg font-semibold">Pièces et validations</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Ajoutez vos annexes (diagnostics, état des lieux) et précisez la case « Validé ? » avant de partager aux rôles Read-Only.
          </p>
        </Card>
        <div className="flex gap-2">
          <Button>
            <Icon name="send" className="h-4 w-4" />
            Envoyer pour signature
          </Button>
          <Button variant="ghost">Créer plus tard</Button>
        </div>
      </Card>
    </div>
  );
}
