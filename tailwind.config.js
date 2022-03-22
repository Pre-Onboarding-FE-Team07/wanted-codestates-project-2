module.exports = {
  content: [
    './public/index.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: 'url("@/assets/main_bg1.png")',
        flag: 'url("@/assets/background_flag.png")',
      },
    },
  },
  plugins: [],
};
