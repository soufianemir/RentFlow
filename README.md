# RentFlow (Step 1)

Design-first skeleton for RentFlow with a premium landing page, mock auth, and dashboard shell.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn-inspired components
- next-themes for dark/light
- framer-motion, lucide-react

## Getting started
1. Install dependencies (npm required):
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Mock auth
- Demo users: `owner@demo.com / demo1234` and `tenant@demo.com / demo1234`
- Sign-in sets a mock session in localStorage + cookie.
- Protected `/app/*` routes redirect to the sign-in screen when no mock session exists.

## Routes
- `/` landing page
- `/auth/sign-in` and `/auth/sign-up`
- `/app/dashboard` (KPI cards + alerts table)
- `/app/leases`, `/app/periods`, `/app/processes`, `/app/settings` (coming soon placeholders)

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
