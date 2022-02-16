module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'no-console': ['error'],
    'react/no-array-index-key': ['error'],
    'react/jsx-key': ['error'],
    'react/boolean-prop-naming': ['error'],
    '@typescript-eslint/no-var-requires': ['warn'],
    'prettier/prettier': 'error',
  },
  globals: {
    JSX: 'readonly',
  },
  env: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
};
