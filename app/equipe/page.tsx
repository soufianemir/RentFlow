import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { Icon } from "@/components/shared/icon";

export default function EquipePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Collaborateurs et rôles</p>
          <h1 className="text-2xl font-semibold">Équipe</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Invitations</Button>
          <Button>
            <Icon name="user-plus" className="h-4 w-4" />
            Ajouter
          </Button>
        </div>
      </div>

      <Card className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Icon name="shield-check" className="h-4 w-4" />
            Rôles & autorisations
          </div>
          <Badge variant="success">Read-Only nounou</Badge>
        </div>
        <TableSkeleton rows={4} columns={4} />
        <div className="grid gap-3 sm:grid-cols-3">
          {["Accès complet", "Lecture seule", "Invité"].map((tab, idx) => (
            <div key={tab} className="rounded-xl bg-neutral-50 px-3 py-3 text-sm dark:bg-white/5">
              <p className="font-medium">{tab}</p>
              <p className="text-neutral-500 dark:text-neutral-400">Onglet #{idx + 1} pour vos permissions.</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Notes internes</p>
          <Input placeholder="Partager une consigne" className="w-72" />
        </div>
        <div className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
          <p>Utilisez cette section pour documenter les règles RLS Supabase et les rôles personnalisés.</p>
          <p>Les cartes et tableaux restent vides en attendant la connexion à votre backend.</p>
        </div>
      </Card>
    </div>
  );
}
