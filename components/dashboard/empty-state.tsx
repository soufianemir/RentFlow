import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export function EmptyState({ title, description, actionLabel }: { title: string; description: string; actionLabel?: string }) {
  return (
    <div className={cn("glass-card flex flex-col items-center justify-center rounded-3xl border px-6 py-10 text-center") }>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-500">
        <Sparkles className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      {actionLabel && <Button className="mt-5">{actionLabel}</Button>}
    </div>
  );
}
