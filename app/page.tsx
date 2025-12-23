import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/shared/icon";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-br from-white via-white to-blue-50 p-8 shadow-subtle ring-1 ring-neutral-200/70 dark:from-white/5 dark:via-white/5 dark:to-blue-500/10 dark:ring-white/10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-300">
            <Badge variant="success">Nouveau</Badge>
            Portail de gestion locative
          </div>
          <h1 className="text-3xl font-semibold">Bienvenue sur RentFlow</h1>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300">
            Centralisez vos baux, factures et documents dans une interface épurée. Connectez-vous ou créez un compte pour activer la collaboration et la synchronisation Supabase.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/connexion">
                <Icon name="log-in" className="h-4 w-4" />
                Connexion
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/inscription">
                <Icon name="user-plus" className="h-4 w-4" />
                Créer un compte
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/tableau-de-bord">Découvrir le tableau de bord</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Icon name="file-digit" className="h-4 w-4" />
            Baux et contrats
          </div>
          <p className="text-lg font-semibold">Suivez l'état de vos baux</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Créez, dupliquez et archivez les baux tout en gardant une trace claire des paiements et documents associés.
          </p>
        </Card>
        <Card className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Icon name="receipt-euro" className="h-4 w-4" />
            Facturation
          </div>
          <p className="text-lg font-semibold">Factures & quittances</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Organisez vos factures, émettez des quittances et partagez les pièces jointes avec vos locataires en toute simplicité.
          </p>
        </Card>
        <Card className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Icon name="life-buoy" className="h-4 w-4" />
            Assistance
          </div>
          <p className="text-lg font-semibold">Guides et support</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Consultez la section d'aide pour retrouver les bonnes pratiques, la gestion des rôles Read-Only et les accès Supabase.
          </p>
        </Card>
      </section>
    </div>
  );
}
