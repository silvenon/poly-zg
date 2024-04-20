import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { metronome } from "metronome-sh/vite";

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
    metronome(),
  ],
  server: {
    port: 3000,
  },
  build: {
    // inlining SVG sprite breaks the sprite
    assetsInlineLimit: (filePath) => {
      if (filePath.endsWith("sprite.svg")) {
        return false;
      }
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./setup-test-env.ts"],
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["./node_modules", "./e2e"],
  },
}));
