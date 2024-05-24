/// <reference types="vitest"/>
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defaultConfig, getColorModeScript } from "@yamada-ui/react";
import * as path from "node:path";
import { type Plugin, defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const injectScript = (): Plugin => ({
  name: "vite-plugin-inject-scripts",
  transformIndexHtml(html) {
    const content = getColorModeScript({
      initialColorMode: defaultConfig.initialColorMode,
    });
    return html.replace("<body>", `<body><script>${content}</script>`);
  },
});

export default defineConfig({
  plugins: [react(), TanStackRouterVite(), injectScript(), tailwindcss()],
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
