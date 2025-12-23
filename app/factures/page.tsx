import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const columns = ["Numéro", "Bail", "Montant", "Échéance", "Statut"];

export default function FacturesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Suivi des factures et relances</p>
          <h1 className="text-2xl font-semibold">Factures</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/factures/nouvelle">Brouillon</Link>
          </Button>
          <Button asChild>
            <Link href="/factures/nouvelle">Créer</Link>
          </Button>
        </div>
      </div>

      <Card className="space-y-4">
        <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <span>Tableau des factures</span>
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
            Liste vide pour l'instant. L'intégration Supabase viendra alimenter ces colonnes.
          </div>
        </div>
      </Card>
    </div>
  );
}
