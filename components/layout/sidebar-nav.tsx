"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  CalendarRange,
  Workflow,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { navItems } from "@/lib/mock";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const iconMap = {
  layout: LayoutDashboard,
  file: FileText,
  calendar: CalendarRange,
  workflow: Workflow,
  settings: Settings,
};

export function SidebarNav() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const items = useMemo(() => navItems, []);

  return (
    <aside
      className={cn(
        "hidden h-screen flex-col border-r border-white/10 bg-slate-950/70 px-4 pb-6 pt-6 text-sm backdrop-blur-2xl transition-all duration-300 lg:flex",
        collapsed ? "w-[88px]" : "w-72"
      )}
    >
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-semibold">RentFlow</p>
              <p className="text-xs text-muted-foreground">Revenue intelligence</p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          onClick={() => setCollapsed((prev) => !prev)}
          aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {items.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const active = pathname?.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "group relative flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition hover:bg-white/10",
                  active ? "bg-white/10 text-white" : "text-muted-foreground",
                  collapsed && "justify-center"
                )}
              >
                <Icon className="h-5 w-5" />
                {!collapsed && (
                  <div className="flex flex-1 items-center justify-between">
                    <span>{item.label}</span>
                    {item.comingSoon && <Badge variant="secondary">Soon</Badge>}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
