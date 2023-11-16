// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'black': '#000000',
        'dark-grey': '#191919',
        'white-grey': '#C4C4C4',
        'white-white-grey': '#E5E5E5',
        'white': '#FFFFFF',
      },
      fontSize: {
        'p': '1em',
        'h1': '3.05em',
        'h2': '2.44em',
        'h3': '1.95em',
        'h4': '1.56em',
        'h5': '1.25em',
        'caption': '0.8em',
        'small': '0.64em',
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semi-bold': 600,
        'bold': 700,
      },
    },
  },
  plugins: [],
};
