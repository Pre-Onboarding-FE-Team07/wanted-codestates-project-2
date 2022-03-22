module.exports = {
  content: [
    './public/index.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: 'url("/src/assets/main_bg1.png")',
        flag: 'url("/src/assets/background_flag.png")',
      },
    },
  },
  plugins: [],
};
