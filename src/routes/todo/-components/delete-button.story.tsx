import { DeleteButton } from "./delete-button";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "削除ボタン",
  component: DeleteButton,
} satisfies Meta<typeof DeleteButton>;

export const Default: StoryObj<typeof DeleteButton> = {
  args: {
    title: "削除",
  },
};
