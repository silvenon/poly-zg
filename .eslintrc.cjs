/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["*.{jsx,tsx}"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
    },
    {
      files: ["*.{ts,tsx}"],
      extends: ["plugin:@typescript-eslint/recommended"],
    },
    {
      files: ["*.{test,spec}.{js,jsx,ts,tsx}"],
      excludedFiles: ["e2e/**"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
      env: {
        node: true,
      },
    },
    {
      files: [".eslintrc.cjs"],
      env: {
        node: true,
      },
    },
    {
      files: ["**/*"],
      extends: ["prettier"],
    },
  ],
};
