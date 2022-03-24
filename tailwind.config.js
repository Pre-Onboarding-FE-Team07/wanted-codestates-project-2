module.exports = {
  content: [
    './public/index.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        main: '#07f',
        darken: '#005fcc',
      },
      backgroundImage: {
        'flag-main': 'url("@/assets/main_bg1.png")',
        flag: 'url("@/assets/background_flag.png")',
        'flag-w': 'url("@/assets/background_flag_w.png")',
        wave: 'url("@/assets/background_wave.svg")',
      },
    },
  },
  plugins: [],
};
