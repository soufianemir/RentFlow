"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { demoUsers, setMockSession } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("owner@demo.com");
  const [password, setPassword] = useState("demo1234");
  const [error, setError] = useState<string | null>(null);
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = demoUsers.find((u) => u.email === email && u.password === password);
    if (!user) {
      setError("Invalid credentials. Try owner@demo.com / demo1234.");
      return;
    }
    setMockSession({ email: user.email, role: user.role });
    if (remember) {
      localStorage.setItem("rentflow_remember", "true");
    }
    router.push("/app/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100/40 via-white/40 to-slate-50/30 px-4 py-10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="w-full max-w-md space-y-8 rounded-[28px] border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-sky-500">Welcome back</p>
            <h1 className="text-2xl font-semibold">Sign in to RentFlow</h1>
          </div>
          <Badge variant="secondary">BETA</Badge>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="owner@demo.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted-foreground">
              <Checkbox checked={remember} onCheckedChange={() => setRemember((prev) => !prev)} />
              Remember me
            </label>
            <Link href="/auth/sign-up" className="text-sky-500 hover:text-sky-400">
              Create account
            </Link>
          </div>
          {error && <p className="text-sm text-rose-500">{error}</p>}
          <Button type="submit" className="w-full justify-center text-base">
            Sign in
          </Button>
        </form>
        <div className="rounded-2xl bg-slate-100/60 p-4 text-xs text-muted-foreground dark:bg-white/5">
          Demo credentials: owner@demo.com / demo1234 or tenant@demo.com / demo1234
        </div>
      </div>
    </div>
  );
}
