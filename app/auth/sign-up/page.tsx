"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { setMockSession, UserRole } from "@/lib/mock";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("owner@demo.com");
  const [password, setPassword] = useState("demo1234");
  const [confirm, setConfirm] = useState("demo1234");
  const [role, setRole] = useState<UserRole>("Owner");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setMockSession({ email, role });
    router.push("/app/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100/40 via-white/40 to-slate-50/30 px-4 py-10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="w-full max-w-md space-y-8 rounded-[28px] border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-sky-500">Get started</p>
            <h1 className="text-2xl font-semibold">Create your account</h1>
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
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm</Label>
              <Input
                id="confirm"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <div className="grid grid-cols-2 gap-3">
              {["Owner", "Tenant"].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRole(value as UserRole)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm shadow-sm transition ${
                    role === value
                      ? "border-sky-500/50 bg-sky-500/10 text-sky-600 dark:text-sky-300"
                      : "border-white/40 bg-white/60 text-foreground dark:border-white/10 dark:bg-slate-900/50"
                  }`}
                >
                  <p className="font-semibold">{value}</p>
                  <p className="text-xs text-muted-foreground">{value === "Owner" ? "Full visibility" : "Resident portal"}</p>
                </button>
              ))}
            </div>
          </div>
          {error && <p className="text-sm text-rose-500">{error}</p>}
          <Button type="submit" className="w-full justify-center text-base">
            Create account
          </Button>
        </form>
        <p className="text-sm text-muted-foreground">
          Already have an account? <Link href="/auth/sign-in" className="text-sky-500">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
