module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'verla': ['Varela Round', 'sans-serif'],
      },
      colors: {
        primary: '#0d1117',
        secondary: '#e6edf3',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px);'
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // ...
    pointerEvents: true,
  }
};
