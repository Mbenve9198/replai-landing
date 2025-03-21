/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            deep: "#1e5fcc",
            DEFAULT: "#3085ff",
            light: "#5a9dff",
          },
          purple: {
            DEFAULT: "#8B4FD1",
            light: "#AB6FF1",
          },
          orange: {
            DEFAULT: "#fe953e",
            light: "#ffa95e",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#3085ff",
        background: "#000000",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#3085ff",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8B4FD1",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#fe953e",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "rgba(255, 255, 255, 0.5)",
        },
        accent: {
          DEFAULT: "#8B4FD1",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(to right, #1e5fcc, #8B4FD1, #fe953e)",
        "gradient-glow":
          "radial-gradient(circle at center, rgba(48, 133, 255, 0.3), rgba(139, 79, 209, 0.2), rgba(254, 149, 62, 0.1))",
      },
      animation: {
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        grid: "grid 15s linear infinite",
        "glow-spin": "glow-spin 20s linear infinite",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "glow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: 0.8 },
          "50%": { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

