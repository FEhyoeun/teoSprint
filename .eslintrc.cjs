module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', // 새로 추가
    'plugin:jsx-a11y/recommended', // 새로 추가
    'plugin:prettier/recommended', // 새로 추가
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'], // 새로 추가
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
