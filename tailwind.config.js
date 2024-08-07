/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1fb6ff',
        secondary: '#7e5bef',
      },
      fontFamily: {
        sans: ['LibreBaskerville', 'sans-serif'],
        title: ['Spectral', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
