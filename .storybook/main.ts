import type { StorybookConfig } from "@storybook/react-vite";

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
} satisfies StorybookConfig;
