import defaultTheme from "tailwindcss/defaultTheme.js";
import aspectRatio from "@tailwindcss/aspect-ratio";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        writing: ["montez", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": {
              content: "normal",
            },
            "blockquote p:last-of-type::after": {
              content: "normal",
            },
          },
        },
      },
    },
  },
  plugins: [aspectRatio, typography, forms],
};
