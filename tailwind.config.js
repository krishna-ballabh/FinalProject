module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize:{
      '75%':'75%',
    },
    extend: {
      backgroundImage: theme => ({
        'hero-image' : "url('shield-1086703_960_720.webp')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
