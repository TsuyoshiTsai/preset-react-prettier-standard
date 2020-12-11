module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
  },
  extends: [
    // https://github.com/standard/eslint-config-standard
    'standard',

    // https://github.com/standard/eslint-config-standard-react
    'standard-react',

    // https://github.com/prettier/eslint-config-prettier#installation
    'prettier',
    'prettier/standard',
    'prettier/react',
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    // https://prettier.io/docs/en/integrating-with-linters.html#use-eslint-to-run-prettier
    'prettier/prettier': 'error',

    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
