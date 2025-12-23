"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { SidebarNav } from "./sidebar-nav";
import { TopBar } from "./top-bar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { getMockSession } from "@/lib/mock";

export function PageShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const session = getMockSession();
    if (!session) {
      router.push("/auth/sign-in");
    }
  }, [router]);

  useEffect(() => {
    if (!mounted) return;
    const session = getMockSession();
    if (!session && pathname.startsWith("/app")) {
      router.push("/auth/sign-in");
    }
  }, [mounted, pathname, router]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100/40 via-white/50 to-slate-50/30 text-foreground dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <SidebarNav />

      <div className="flex flex-1 flex-col">
        <TopBar />
        <main className="flex-1 px-4 pb-10 pt-6 sm:px-8">
          <div className="lg:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="border border-white/20 bg-white/60 dark:bg-slate-900/50">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] bg-slate-950/90 text-white">
                <SidebarNav />
              </SheetContent>
            </Sheet>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
