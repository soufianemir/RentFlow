import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Icon } from "@/components/shared/icon";

export default function NouvelleFacturePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Générez une facture pour un bail</p>
        <h1 className="text-2xl font-semibold">Nouvelle facture</h1>
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
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Numéro</label>
            <Input placeholder="FAC-2024-001" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Bail associé</label>
            <Input placeholder="Référence du bail" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Montant</label>
            <Input placeholder="€0,00" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Échéance</label>
            <Input placeholder="JJ/MM/AAAA" />
          </div>
        </div>
        <Card className="space-y-3 bg-neutral-50/60 dark:bg-white/5">
          <h2 className="text-lg font-semibold">Documents et validations</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Ajoutez le PDF, cochez « Validé ? » pour verrouiller la facture, et partagez en lecture seule si besoin.
          </p>
        </Card>
        <div className="flex gap-2">
          <Button>
            <Icon name="send" className="h-4 w-4" />
            Envoyer
          </Button>
          <Button variant="ghost">Programmer plus tard</Button>
        </div>
      </Card>
    </div>
  );
}
