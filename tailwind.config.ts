import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nt: {
          bg:       "#0a0a0b",
          surface:  "#111114",
          border:   "#1e1e24",
          muted:    "#3a3a44",
          dim:      "#7a7a8a",
          body:     "#c8c8d4",
          heading:  "#e8e8f0",
          accent:   "#6b8cff",
          accentDim:"#3a5acc",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-subtle": "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-subtle": "48px 48px",
      },
    },
  },
  plugins: [],
};
export default config;
