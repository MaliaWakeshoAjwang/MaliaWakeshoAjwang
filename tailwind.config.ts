import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair-display)', 'serif'],
      },
      colors: {
        primary: '#0070f3',
        background: {
          DEFAULT: '#ffffff',
          dark: '#000000',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

export default config