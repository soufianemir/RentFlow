import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Icon } from "@/components/shared/icon";

export default function InscriptionPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Créez votre espace en quelques secondes</p>
        <h1 className="text-2xl font-semibold">Inscription</h1>
      </div>

      <Card className="space-y-6">
        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <Badge variant="success">Sécurisé</Badge>
          Synchronisé avec Supabase (RLS prêts)
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Nom complet</label>
            <Input placeholder="Marie Martin" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Rôle</label>
            <Input placeholder="Propriétaire, Gestionnaire, Read-Only" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Adresse email</label>
            <Input placeholder="vous@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Mot de passe</label>
            <Input placeholder="••••••••" type="password" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button>
            <Icon name="user-plus" className="h-4 w-4" />
            Créer mon compte
          </Button>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Déjà inscrit ? <Link href="/connexion" className="underline">Retour à la connexion</Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
