/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["**/*.{jsx,tsx}"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
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
        "import/resolver": {
          typescript: {},
        },
      },
    },
    {
      files: ["**/*.{ts,tsx}"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
    {
      files: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
      excludedFiles: ["playwright/**"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
      env: {
        node: true,
      },
    },
    {
      files: ["**/.eslintrc.*"],
      env: {
        node: true,
      },
    },
  ],
};
