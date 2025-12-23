import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        blueprint: "radial-gradient(circle at 20% 20%, rgba(48, 128, 255, 0.05), transparent 35%), radial-gradient(circle at 80% 30%, rgba(12, 65, 153, 0.05), transparent 30%), url('data:image/svg+xml,%3Csvg width=\"1600\" height=\"900\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" stroke=\"rgba(60,90,150,0.08)\" stroke-width=\"1\"%3E%3Cpath d=\"M0 50h1600M0 150h1600M0 250h1600M0 350h1600M0 450h1600M0 550h1600M0 650h1600M0 750h1600M0 850h1600\"/%3E%3Cpath d=\"M50 0v900M150 0v900M250 0v900M350 0v900M450 0v900M550 0v900M650 0v900M750 0v900M850 0v900M950 0v900M1050 0v900M1150 0v900M1250 0v900M1350 0v900M1450 0v900M1550 0v900\"/%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
