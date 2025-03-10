/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          main: "#ffffff",
          gray: "#d1d5db",
        },
        dark: {
          main: "#383838",
          gray: "#9ca3af",
        },

        purple: {
          DEFAULT: "#7b78ff",
          hover: "#6867d7",
        },
        gray: {
          DEFAULT: "#626161",
          hover: "#4f4e4e",
          light: "#9c9c9c",
        },
      },
      animation: {
        spark: "spark 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fade: "fade 1.5s ease-in-out infinite",
      },
    },
    keyframes: {
      spark: {
        "0%, 100%": { opacity: "0.5" },
        "50%": { opacity: "1" },
      },
      fade: {
        "0%, 100%": { opacity: "0.3" },
        "50%": { opacity: "1" },
      },
    },
  },
  plugins: [],
};
