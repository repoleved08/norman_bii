/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe", 
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554"
        },
        'neon-green': '#39FF14',
        'neon-blue': '#1F51FF',
        'neon-purple': '#D500F9',
        'dark-bg': '#0f172a',
        'dark-text': '#e2e8f0',
        'light-bg': '#f8fafc',
        'light-text': '#1e293b'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

