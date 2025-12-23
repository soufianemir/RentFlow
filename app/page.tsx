import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Automated rent flows",
    description: "One command center for invoicing, payouts, and reminders across every asset.",
  },
  {
    title: "Live portfolio health",
    description: "KPI cards, receivables, and late signals with instant cohort filtering.",
  },
  {
    title: "Audit-ready trails",
    description: "Secure logs, dual approvals, and tenant timelines designed for compliance teams.",
  },
];

const faqs = [
  {
    q: "Is RentFlow ready for production?",
    a: "Yes. The beta is built with enterprise-ready security and is SOC2 in progress.",
  },
  {
    q: "Do you support owners and tenants?",
    a: "Roles allow you to invite owners, tenants, and advisors with precise permissions.",
  },
  {
    q: "Can I export my data?",
    a: "CSV exports and webhooks keep your finance stack fully synced.",
  },
];

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_30%)]" />
      <div className="container relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 space-y-6">
            <Badge variant="secondary" className="bg-white/70 dark:bg-slate-900/80">
              <Sparkles className="mr-2 h-4 w-4" /> Modern revenue OS for property teams
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Rent intelligence that feels like a concierge.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              RentFlow brings receivables, alerts, and resident communications into a single premium workspace.
              Move faster with automation while keeping every stakeholder in the loop.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/auth/sign-up">
                <Button size="lg" className="glass-button px-6 text-base">
                  Create account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/auth/sign-in">
                <Button variant="ghost" size="lg" className="px-6 text-base">
                  Sign in
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              SOC2 in-progress • GDPR aligned • 24/7 monitoring
            </div>
          </div>
          <div className="flex-1">
            <div className="glass-card relative overflow-hidden rounded-[32px] border p-8 shadow-2xl">
              <div className="absolute right-8 top-8 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-500">
                Live insights
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Total Owed</p>
                  <p className="text-xs font-semibold text-emerald-500">+12.4% MoM</p>
                </div>
                <p className="text-4xl font-semibold">$128,400</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-2xl bg-white/70 p-3 text-center dark:bg-slate-900/50">
                    <p className="text-muted-foreground">Cleared</p>
                    <p className="text-lg font-semibold">$94k</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-3 text-center dark:bg-slate-900/50">
                    <p className="text-muted-foreground">Pending</p>
                    <p className="text-lg font-semibold">$22k</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-3 text-center dark:bg-slate-900/50">
                    <p className="text-muted-foreground">At risk</p>
                    <p className="text-lg font-semibold">$12k</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                    <p className="text-muted-foreground">Alert</p>
                    <p className="font-semibold">Late rent - Pier 7</p>
                    <p className="text-xs text-emerald-500">Recovery play started</p>
                  </div>
                  <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-4">
                    <p className="text-muted-foreground">Workflow</p>
                    <p className="font-semibold">ACH pending verification</p>
                    <p className="text-xs text-sky-500">Auto-clear in 3h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:gap-12">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card rounded-3xl border p-6 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-500">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 rounded-3xl border border-white/30 bg-white/60 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-sky-500">Security-grade by default</p>
                <h2 className="text-2xl font-semibold">Encryption, audit trails, and granular roles.</h2>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-emerald-500" /> Pen-tested • SSO ready
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/40 bg-white/50 p-4 dark:border-white/10 dark:bg-slate-900/50">
                <p className="text-sm font-semibold">Role-based access</p>
                <p className="text-sm text-muted-foreground">Owners, tenants, and advisors with read-only or action permissions.</p>
              </div>
              <div className="rounded-2xl border border-white/40 bg-white/50 p-4 dark:border-white/10 dark:bg-slate-900/50">
                <p className="text-sm font-semibold">Compliance ready</p>
                <p className="text-sm text-muted-foreground">Data residency and backups aligned with finance-grade standards.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/20 bg-white/60 p-10 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
            <div className="flex items-center gap-2 text-sm font-semibold text-sky-500">
              FAQ
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-white/30 bg-white/60 p-5 dark:border-white/10 dark:bg-slate-900/50">
                  <p className="text-sm font-semibold">{faq.q}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Need a walkthrough? Chat with our product specialists to shape your rollout.
              </p>
              <Link href="/auth/sign-up">
                <Button size="lg" className="glass-button px-5 text-base">
                  Start free pilot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
