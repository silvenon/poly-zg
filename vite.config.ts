import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";
import { configDefaults as testConfigDefaults } from "vitest/config";
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";

installGlobals();

export default defineConfig(({ mode }) => ({
  plugins: [
    tsconfigPaths(),
    mode === "test" && react(),
    mdx(),
    mode !== "test" &&
      remix({
        ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
      }),
  ],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
    exclude: [...testConfigDefaults.exclude, "./playwright"],
  },
}));
