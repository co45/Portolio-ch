import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#070A12",
        panel: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        glow: "0 0 80px rgba(70, 223, 203, 0.22)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
    },
  },
  plugins: [],
} satisfies Config;
