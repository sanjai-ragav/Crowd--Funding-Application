/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFF8F0",
          100: "#FFECD4",
          200: "#FFD5A0",
          300: "#FFBB6B",
          400: "#FFA033",
          500: "#E88A1A",
          600: "#964B00",
          700: "#7A3F00",
          800: "#5C2F00",
          900: "#3D1F00",
        },
        surface: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          800: "#1A1A2E",
          900: "#0F0F1A",
          950: "#080810",
        },
        accent: {
          amber: "#F59E0B",
          gold: "#D4A853",
          warm: "#E8A87C",
        },
      },
      fontFamily: {
        gravitas: ["'Gravitas One'", "cursive"],
        heading: ["'Outfit'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(150, 75, 0, 0.3)",
        "glow-md": "0 0 30px rgba(150, 75, 0, 0.4)",
        "glow-lg": "0 0 60px rgba(150, 75, 0, 0.3)",
        "glow-amber": "0 0 30px rgba(245, 158, 11, 0.3)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.12)",
        "card-hover": "0 20px 60px rgba(150, 75, 0, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
