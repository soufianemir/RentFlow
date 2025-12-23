"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  const icon = isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />;
  const label = isDark ? "Passer en thème clair" : "Passer en thème sombre";

  return (
    <Button
      type="button"
      variant="ghost"
      aria-label={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 w-10 rounded-full p-0"
    >
      {mounted ? icon : <span className="h-4 w-4" />}
    </Button>
  );
}
