import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KPIStatCardProps {
  label: string;
  value: string;
  trend: string;
  description: string;
  accent?: "sky" | "emerald" | "amber";
}

export function KPIStatCard({ label, value, trend, description, accent = "sky" }: KPIStatCardProps) {
  const accentMap: Record<string, string> = {
    sky: "from-sky-500/20 to-cyan-500/5 border-sky-500/40",
    emerald: "from-emerald-500/25 to-teal-500/10 border-emerald-500/40",
    amber: "from-amber-400/25 to-orange-500/10 border-amber-400/40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={cn(
        "glass-card relative overflow-hidden rounded-3xl border px-5 py-6 shadow-lg",
        "bg-gradient-to-br",
        accentMap[accent]
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <span className="text-xs font-semibold text-foreground">{trend}</span>
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}
