module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  plugins: [
    'tailwindcss',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
