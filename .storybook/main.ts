import type { StorybookConfig } from "@storybook/react-vite";
import { type ConfigEnv, loadConfigFromFile, mergeConfig } from "vite";
import path from "node:path";

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.@(story|stories).@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config, { configType }) => {
    const isProduction = configType === "PRODUCTION";
    const configEnv: ConfigEnv = isProduction
      ? {
          mode: "production",
          command: "build",
          isSsrBuild: false,
        }
      : {
          mode: "development",
          command: "serve",
          isSsrBuild: false,
        };
    const { config: userConfig } =
      (await loadConfigFromFile(configEnv, path.resolve(__dirname, "../vite.config.mts"))) ?? {};
    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    });
  },
} satisfies StorybookConfig;
