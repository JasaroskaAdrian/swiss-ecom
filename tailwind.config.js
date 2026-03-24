/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: { 
        background: '#0B1E2d',
        foreground: '#ffffff',
        accent: '#D4AF37',
      },
      boxShadow: { 
        soft: '0 6px 24px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
