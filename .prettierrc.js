/** @type {import('prettier').Config} */
export default {
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
};
