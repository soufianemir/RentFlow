"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";
import { Icon } from "../shared/icon";

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-3 left-3 right-3 z-40 flex items-center justify-between gap-2 rounded-2xl border border-neutral-200/80 bg-white/90 px-3 py-2 shadow-subtle backdrop-blur-lg dark:border-white/10 dark:bg-black/70 lg:hidden">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-medium transition duration-150 ${
              active
                ? "bg-neutral-900 text-white shadow-subtle dark:bg-white dark:text-black"
                : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/5"
            }`}
            aria-label={item.label}
          >
            <Icon name={item.icon} className="h-4 w-4" />
            <span className="text-[11px] leading-none">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
