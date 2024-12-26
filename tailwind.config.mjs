import { pompiere } from '@/app/layout';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

   
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        titleColor: "#EE2171",   // Your custom color for titles
        customPink: "#e9c2e0",   // Your custom background color
        customGray: "#f0f0f0",   // Light gray color for gradients
      },
      backgroundImage: {
        'gradient-to-light': "linear-gradient(to right, #e9c2e0, #f8e8ee)", // Your custom gradient
        'gradient-to-center': "radial-gradient(circle, #f0f0f0 , #F5ceec)",
      },

      fontFamily : {

        pompiere: ["Pompiere", "cursive"],
      }
    },
  },
  plugins: [],
};
