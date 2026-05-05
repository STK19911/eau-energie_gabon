import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        volt: {
          DEFAULT: "#E2F167",
          dark: "#c8d64d",
        },
        gabon: {
          green: "#009E60",
          yellow: "#FCD116",
          blue: "#3A75C4",
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slow-pan': 'slowPan 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowPan: {
          '0%': { transform: 'scale(1) translateX(0)' },
          '50%': { transform: 'scale(1.1) translateX(-2%)' },
          '100%': { transform: 'scale(1) translateX(0)' },
        }
      },
    },
  },
  plugins: [],
};

export default config;