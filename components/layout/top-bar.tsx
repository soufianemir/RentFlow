"use client";

import { useEffect, useState } from "react";
import { Bell, Sparkles, SunMedium, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { clearMockSession, getMockSession } from "@/lib/mock";
import { useRouter } from "next/navigation";

export function TopBar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [role, setRole] = useState<string>("Owner");
  const [email, setEmail] = useState<string>("owner@demo.com");

  useEffect(() => {
    const session = getMockSession();
    if (session) {
      setRole(session.role);
      setEmail(session.email);
    }
  }, []);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-white/60 px-4 py-3 backdrop-blur-xl dark:bg-slate-950/70">
      <div className="flex items-center gap-3">
        <div className="hidden lg:block">
          <Badge variant="secondary" className="bg-gradient-to-r from-sky-500/10 to-indigo-500/10 text-sky-500">
            <Sparkles className="mr-1 h-4 w-4" /> BETA
          </Badge>
        </div>
        <div className="relative w-[280px] max-w-xs">
          <Input placeholder="Search properties, tenants, tasks..." className="pl-4 pr-12" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge variant="secondary" className="hidden sm:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-semibold">{role}</span>
        </Badge>
        <Button variant="ghost" size="icon" aria-label="Notifications" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <SunMedium className="h-5 w-5" />}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-11 w-11 cursor-pointer ring-1 ring-white/10">
              <AvatarFallback>{email.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="text-xs uppercase text-muted-foreground">Profile</DropdownMenuLabel>
            <div className="px-3 pb-2 text-sm">
              <p className="font-semibold text-foreground">{email}</p>
              <p className="text-muted-foreground">{role}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/app/dashboard")}>Dashboard</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/")}>Marketing site</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-rose-500"
              onClick={() => {
                clearMockSession();
                router.push("/auth/sign-in");
              }}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
