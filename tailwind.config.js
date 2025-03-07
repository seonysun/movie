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
        },
      },
    },
  },
  plugins: [],
};
