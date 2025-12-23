import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const columns = ["Référence", "Locataire", "Propriété", "Échéance", "Statut"];

export default function BauxPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Suivez vos contrats de location</p>
          <h1 className="text-2xl font-semibold">Baux</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/baux/nouveau">Nouveau brouillon</Link>
          </Button>
          <Button asChild>
            <Link href="/baux/nouveau">
              Créer
            </Link>
          </Button>
        </div>
      </div>

      <Card className="space-y-4">
        <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <span>Tableau des baux</span>
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
            Aucune donnée pour le moment. Connectez Supabase pour alimenter la liste.
          </div>
        </div>
      </Card>
    </div>
  );
}
