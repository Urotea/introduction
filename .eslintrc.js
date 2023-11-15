module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    "next/core-web-vitals",
    'plugin:@rushstack/eslint-plugin-packlets/recommended' // <--- ADD THIS
  ],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname
  }
};
