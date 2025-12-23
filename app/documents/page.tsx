import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const columns = ["Nom", "Type", "Lien", "Propriétaire", "Ajouté le"];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Centralisez vos pièces jointes</p>
          <h1 className="text-2xl font-semibold">Documents</h1>
        </div>
        <Button>
          Créer
        </Button>
      </div>

      <Card className="space-y-4">
        <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <span>Bibliothèque</span>
          <Badge variant="outline">Vide</Badge>
        </div>
        <div className="overflow-hidden rounded-xl border border-neutral-200/80 bg-white/60 shadow-subtle dark:border-white/10 dark:bg-white/5">
          <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-300">
            {columns.map((column) => (
              <span key={column} className="col-span-2 first:col-span-3">
                {column}
              </span>
            ))}
          </div>
          <div className="px-4 py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
            Déposez vos PDFs, contrats et pièces jointes. Les rôles Read-Only voient le contenu sans modifications.
          </div>
        </div>
      </Card>
    </div>
  );
}
