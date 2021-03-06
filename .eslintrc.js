/**
 * @type { import("eslint").Linter.Config }
 */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'tsc'],
  parser: '@typescript-eslint/parser',
  env: { node: true, es6: true },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: true, arrowParens: 'avoid' },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    'react/prop-types': 'off',
    'tsc/config': [
      'error',
      {
        configFile: 'tsconfig.json',
      },
    ],
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.12',
    },
  },
};
