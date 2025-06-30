/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        objektiv: ['"Objektiv"', 'sans-serif'], 
        frutiger: ['Frutiger', 'sans-serif'], 
        frutiger_bold: ['Frutiger_bold', 'sans-serif'], 
        Riad_semibold: ['Riad_semibold', 'sans-serif'], 
      },
    }
  },
  plugins: [],
  corePlugins: {
    ringWidth: true,
  },
  variants: {
    extend: {
      ringWidth: ['focus-visible'],
    },
}
}