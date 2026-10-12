/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F5EF",
        "paper-dim": "#ECEBE2",
        ink: "#1B2420",
        "ink-soft": "#4A554E",
        muted: "#767F76",
        trace: "#1F6F64",
        "trace-bright": "#2F9C8C",
        copper: "#B4552B",
        "copper-bright": "#DD7A3F",
        line: "#D9D8CC",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, #D9D8CC 1px, transparent 1px), linear-gradient(to bottom, #D9D8CC 1px, transparent 1px)",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(12px)", opacity: "0.4" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
