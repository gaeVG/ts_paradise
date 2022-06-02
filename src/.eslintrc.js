module.exports = {
  root: true,
  env: {
    'node': true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ["webpack.config.js", "fliegdoc.config.js"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "no-async-promise-executor": "off"
  }
};