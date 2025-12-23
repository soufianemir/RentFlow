import { PageShell } from "@/components/layout/page-shell";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
