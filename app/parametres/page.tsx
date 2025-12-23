import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ParametresPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Personnalisez votre espace</p>
        <h1 className="text-2xl font-semibold">Paramètres</h1>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-3 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Identité et accès</p>
              <h2 className="text-lg font-semibold">Equipe & rôles</h2>
            </div>
            <Badge variant="outline">Read-Only</Badge>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Gérez les rôles propriétaires, gestionnaires et Read-Only pour la nounou. Configurez l'authentification Supabase et les règles RLS.
          </p>
          <Button variant="outline" size="sm">Gérer les membres</Button>
        </Card>
        <Card className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Notifications</p>
              <h2 className="text-lg font-semibold">Alertes</h2>
            </div>
            <Badge variant="warning">Bientôt</Badge>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Paramétrez vos rappels pour les paiements, signatures de bail et génération automatique de la liste de courses.
          </p>
        </Card>
      </section>

      <Card className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Automatisations</p>
            <h2 className="text-lg font-semibold">Planification des menus</h2>
          </div>
          <Badge variant="outline">Mock</Badge>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Zones prêtes pour les formulaires de CRUD (menus, liste de courses) et la case « Validé ? ». Connectez-les à vos tables Supabase.
        </p>
      </Card>
    </div>
  );
}
