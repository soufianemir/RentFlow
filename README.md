# RentFlow

Prototype Next.js 14 (App Router) en TypeScript, prêt pour connecter Supabase (PostgreSQL, auth, RLS) et déployer sur Vercel. L’interface s’inspire des UI Apple avec un thème clair/sombre, une navigation responsive (header + sidebar + bottom nav) et des composants partagés (boutons, cartes, badges, saisie, modale placeholder, table skeleton).

## Prérequis
- Node.js 18+
- npm

## Installation
```bash
npm install
```

## Développement
```bash
npm run dev
```

## Lint
```bash
npm run lint
```

## Build
```bash
npm run build
```

## Structure
- `app/` : pages App Router en français (tableau de bord, réservations, propriétés, finances, équipe).
- `components/` : UI partagée (Button, Card, Badge, Input, Modal placeholder, TableSkeleton) et layout (header, sidebar, bottom nav, toggle de thème).
- `lib/` : configuration de navigation.
- `tailwind.config.ts` : thème clair/sombre avec styles doux.

Remplacez les placeholders (tableaux vides, onglets, cartes) par vos données et logique métier Supabase (CRUD menus, liste de courses, rôles Read-Only). Ajoutez ensuite votre workflow CI/CD GitHub Actions et la configuration Vercel si nécessaire.
