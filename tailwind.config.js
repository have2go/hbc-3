/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customYellow: "#E2CE0A",
        customPurple: "#6A7BFE",
        customGray: "#333",
        bgGray: "#EFF0F4",
        paleGray: "#5E5E62",
        palePurple: "rgba(106, 123, 254, 0.1)",
      },
      screens: {
        "2XL": { max: "1600px" },
        // => @media (max-width: 1536px) { ... }

        "2xl": { min: "1601px" },
        // => @media (max-width: 1536px) { ... }

        "1.5XL": { max: "1400px" },
        // => @media (max-width: 1400px) { ... }
        "1.5xl": { min: "1401px" },

        // => @media (max-width: 1400px) { ... }
        XL: { max: "1280px" },
        xl: { min: "1281px" },
        // => @media (max-width: 1280px) { ... }
        "1200max": { max: "1200px" },
        "1201min": { min: "1201px" },
        // => @media (max-width: 1400px) { ... }
        LG: { max: "1024px" },
        // => @media (max-width: 1024px) { ... }

        "lg-min": { min: "1071px" },
        lg: { min: "1024px" },

        MD: { max: "768px" },
        // => @media (max-width: 768px) { ... }
        md: { min: "761px" },
        // => @media (max-width: 768px) { ... }
        "1.5SM": { max: "600px" },
        // => @media (max-width: 480px) { ... }

        SM: { max: "480px" },
        // => @media (max-width: 480px) { ... }

        XSM: { max: "410px" },
        // => @media (max-width: 480px) { ... }

        XXSM: { max: "380px" },
        // => @media (max-width: 480px) { ... }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
});
