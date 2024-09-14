/// <reference types="vitest"/>

import tailwindCSS from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defaultConfig, getColorModeScript } from "@yamada-ui/react";
import * as path from "node:path";
import { defineConfig, type Plugin } from "vite";

const injectScript = (): Plugin => ({
  name: "vite-plugin-inject-scripts",
  transformIndexHtml: (html) =>
    html.replace(
      "<body>",
      `<body><script>${getColorModeScript({
        initialColorMode: defaultConfig.initialColorMode,
      })}</script>`,
    ),
});

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    TanStackRouterVite(),
    injectScript(),
    tailwindCSS(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/test/setup.ts",
    coverage: {
      enabled: !process.env.CI,
      reportsDirectory: "coverage",
    },
    exclude: ["./node_modules/**", "./e2e/**/*"],
  },
});
