import { ReactNode } from "react";
import { BottomNav } from "./bottom-nav";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-light text-neutral-900 transition-colors duration-200 dark:bg-surface-dark dark:text-white">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-1 gap-6 px-4 pb-20 pt-6 md:px-6">
        <Sidebar />
        <main className="flex-1 space-y-6">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
