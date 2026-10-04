/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6", // primary teal - calm, medical, interactive
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        warm: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c", // warm peach - interactive CTA
          500: "#f97316",
          600: "#ea580c",
        },
        ink: {
          950: "#020617",
          900: "#0B1120",
          800: "#111D32",
          700: "#1E2D4A",
        },
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"], display: ["Space Grotesk", "sans-serif"] },
      boxShadow: {
        glow: "0 0 40px rgba(20,184,166,0.15)",
        "glow-warm": "0 0 40px rgba(251,146,60,0.2)",
        soft: "0 8px 32px rgba(0,0,0,0.2)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
    },
  },
  plugins: [],
}
