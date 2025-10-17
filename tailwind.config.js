/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0b0f16',
        'blue-primary': '#1e3a8a',
        'blue-accent': '#38bdf8',
        'violet-secondary': '#7c3aed',
        'text-light': '#e2e8f0',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
