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
        brand: {
          primary: '#1B6B3A',
          secondary: '#F5A623',
          accent: '#E8F5EE',
          dark: '#1A1A2E',
          muted: '#6B7280',
        }
      },
      typography: {
        green: {
          css: {
            '--tw-prose-links': '#1B6B3A',
            '--tw-prose-headings': '#1A1A2E',
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
