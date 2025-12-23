import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/shared/icon";

const resources = [
  { title: "Prise en main", description: "Structure Next.js + Supabase, navigation et thèmes.", icon: "rocket" },
  { title: "Sécurité & RLS", description: "Configurer l'authentification, les rôles Read-Only et la case “Validé ?”.", icon: "shield" },
  { title: "Déploiement Vercel", description: "Pipeline GitHub Actions et aperçus Vercel automatiques.", icon: "cloud" }
];

export default function AidePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Guides et ressources</p>
        <h1 className="text-2xl font-semibold">Aide</h1>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.title} className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <Icon name={resource.icon} className="h-4 w-4" />
              {resource.title}
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{resource.description}</p>
            <Button variant="ghost" size="sm" className="w-fit">
              Ouvrir
            </Button>
          </Card>
        ))}
      </section>

      <Card className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Besoin d'aller plus loin ?</p>
            <h2 className="text-lg font-semibold">Support communautaire</h2>
          </div>
          <Badge variant="outline">Disponible</Badge>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Consultez la documentation Supabase et shadcn/ui ou discutez avec votre équipe pour alimenter les sections encore vides.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" asChild>
            <Link href="/documents">Voir les documents</Link>
          </Button>
          <Button asChild>
            <Link href="/connexion">Contacter l'assistance</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
