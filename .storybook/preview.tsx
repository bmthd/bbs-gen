import type { Preview, Decorator } from "@storybook/react";
import React from "react";
import { Container, UIProvider } from "@yamada-ui/react";
import "@/assets/app.css";

export const decorators: Decorator[] = [
  (Story) => (
    <UIProvider>
      <Container>
        <Story />
      </Container>
    </UIProvider>
  ),
];

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview;
