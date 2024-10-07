import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C00FE",
        neutral: {
          light: "#fafafa",
          lightgray: "#f5f5f5",
          midlight: "#e5e5e5",
          gray: "#737373",
          middark: "#262626",
          darkgrey: "#171717",
          dark: "#0a0a0a",
        },
      },
    },
  },
  darkMode: ["class"],
  plugins: [nextui()],
};
export default config;
