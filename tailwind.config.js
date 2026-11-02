/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F1E8',
        charcoal: {
          DEFAULT: '#242420',
          muted: '#4A4A42',
          light: '#6E6E64',
        },
        sand: {
          DEFAULT: '#E6DFD2',
          light: '#F0EAE0',
          dark: '#D6CEBF',
        },
        sage: {
          DEFAULT: '#74786A',
          light: '#8F9484',
          muted: '#9FA494',
        },
        terracotta: {
          DEFAULT: '#B85C42',
          dark: '#994B34',
          light: '#CE745B',
        },
        newsprint: {
          DEFAULT: '#FAF7F0',
          dark: '#EFE8DA',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'paper': '0 4px 20px -2px rgba(36, 36, 32, 0.08), 0 12px 40px -4px rgba(36, 36, 32, 0.06)',
        'paper-lg': '0 10px 40px -4px rgba(36, 36, 32, 0.12), 0 25px 60px -8px rgba(36, 36, 32, 0.15)',
        'editorial': '0 1px 3px rgba(36, 36, 32, 0.05), 0 20px 40px -15px rgba(36, 36, 32, 0.07)',
      },
    },
  },
  plugins: [],
}
