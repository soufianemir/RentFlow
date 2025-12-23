"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";
import { Icon } from "../shared/icon";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-64 shrink-0 flex-col gap-2 overflow-y-auto border-r border-neutral-200/80 bg-white/80 p-4 backdrop-blur-lg dark:border-white/10 dark:bg-black/50 lg:flex">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition duration-150 ${
              active
                ? "bg-neutral-900 text-white shadow-subtle dark:bg-white dark:text-black"
                : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-white/5"
            }`}
          >
            <Icon name={item.icon} className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </aside>
  );
}
