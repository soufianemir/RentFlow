import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Icon } from "@/components/shared/icon";

export default function ConnexionPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Accédez à votre espace sécurisé</p>
        <h1 className="text-2xl font-semibold">Connexion</h1>
      </div>

      <Card className="space-y-6">
        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <Badge variant="outline">Supabase ready</Badge>
          Authentification et rôles Read-Only inclus
        </div>
        <div className="grid gap-4 md:grid-cols-2">
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
            <Icon name="log-in" className="h-4 w-4" />
            Se connecter
          </Button>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Pas encore de compte ? <Link href="/inscription" className="underline">Créer un compte</Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
