/** @type {import("prettier").Config} */

const config = {
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  arrowParens: "always",
  endOfLine: "lf",
  printWidth: 80,
  trailingComma: "all",
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;

