module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "indent": ["error", 2],
    "max-len": ["error", { "code": 120 }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-comment": "off" // allow @ts-ignore
  },
  ignorePatterns: ["node_modules/", "lib/", "dist/", ".eslintrc.js"],
};