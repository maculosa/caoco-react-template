module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': 'error',
    strict: 'off',
    'no-console': 'off',
    'no-debugger': 'off'
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/prettier'
  ]
};
