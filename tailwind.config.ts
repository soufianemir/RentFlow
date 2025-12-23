import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          light: "#f5f5f7",
          dark: "#0b0b0f"
        }
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
