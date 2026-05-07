/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        "v2-serif": ["Cormorant Garamond", "Georgia", "serif"],
        "v2-sans": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },

      colors: {
        primary: "#2563eb",
        "section-dark": "#000000",
        "section-dark-fg": "#ffffff",
      },

      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },

 plugins: [],
};