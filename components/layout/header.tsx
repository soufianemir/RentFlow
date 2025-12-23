"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import { navItems } from "@/lib/nav";
import { ThemeToggle } from "./theme-toggle";
import { Icon } from "../shared/icon";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-neutral-200/80 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-black/60 md:px-6">
      <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-neutral-900 dark:text-white">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-subtle dark:bg-white dark:text-black">
          RF
        </div>
        <span className="hidden sm:inline">RentFlow</span>
      </Link>
      <div className="flex items-center gap-2 sm:gap-3">
        <nav className="hidden items-center gap-1 rounded-xl bg-neutral-100/70 p-1 text-sm shadow-subtle dark:bg-white/5 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 transition duration-200 ${
                  active
                    ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-white"
                    : "text-neutral-600 hover:bg-white/70 dark:text-neutral-300 dark:hover:bg-white/10"
                }`}
              >
                <Icon name={item.icon} className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          className="hidden h-10 w-10 items-center justify-center rounded-xl border border-neutral-200/80 text-neutral-500 transition hover:border-neutral-300 hover:text-neutral-900 dark:border-white/10 dark:text-neutral-300 dark:hover:border-white/30 dark:hover:text-white sm:flex"
          aria-label="Notifications"
          type="button"
        >
          <Bell className="h-5 w-5" />
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}
