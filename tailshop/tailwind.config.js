/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      // set agar container berada ditengah
      center: true,

      // lebar padding dari container
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '4.5rem',
        xl: '6rem',
      },
    },
    extend: {
      // kustomisasi warna favorit
      colors: {
        primary: '#8b5cf6',
        light: '#f9fafb',
        dark: '#111827',
      },
    },
  },
  plugins: [],
}
