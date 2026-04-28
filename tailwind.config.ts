import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#fafafa",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        slideDown: "slideDown 0.4s ease-out",
        pulse: "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        glow: "glow 2s ease-in-out infinite",
        callPulse: "callPulse 2s ease-in-out infinite",
        callBounce: "callBounce 1.5s ease-in-out infinite",
        callGlow: "callGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(255, 255, 255, 0.2)",
          },
        },
        callPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(34, 211, 255, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 50px rgba(34, 211, 255, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)",
            transform: "scale(1.05)",
          },
        },
        callBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
        callGlow: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.85",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
