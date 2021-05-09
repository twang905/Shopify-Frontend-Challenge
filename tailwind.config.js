module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vs-grey-1': '#1e2126',
        'vs-grey-2': '#24272e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
