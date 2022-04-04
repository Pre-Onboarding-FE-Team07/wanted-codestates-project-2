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
      animation: {
        wave: 'wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;',
        'second-wave': 'wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s  infinite, swell 7s ease -1.25s infinite;',
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97)',
      },
      keyframes: {
        wave: {
          '0%': { 'margin-left': 0 },
          '100%': { 'margin-left': '-1600px' },
        },
        swell: {
          '0%, 100%': { transform: 'translateY(-25px)' },
          '50%': { transform: 'translateY(5px)' },
        },
        shake: {
          '10%, 90%': {
            transform: 'translateX(-1px)',
          },
          '20%, 80%': {
            transform: 'translateX(2px)',
          },
          '30%, 50%, 70%': {
            transform: 'translateX(-4px)',
          },
          '40%, 60%': {
            transform: 'translateX(4px)',
          },
        },
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
