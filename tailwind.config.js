const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,jsx,js,html}",
  "./components/**/*.{ts,tsx,jsx,js,html}",
  "./pages/**/*.{ts,tsx,jsx,js,html}"
],
  darkMode: "class",
  theme: {
    extend: {
    },
  },
  plugins: [addVariablesForColors],
};
