const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  productionSourceMap: false,
  pages: {
    index: {
      entry: './src/main.ts',
      template: './public/index.html',
      title: '카트라이더 전적 검색 TMI',
    },
  },
  chainWebpack(config) {
    config
      .optimization
      .minimize(false);
  },
  devServer: {
    proxy: {
      [process.env.VUE_APP_OPEN_API_URL]: {
        target: 'https://api.nexon.co.kr/kart',
      },
    },
  },
});
