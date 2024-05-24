import type { Meta, StoryObj } from "@storybook/react";
import { AlertProvider, type AlertStatus, useAlert } from ".";
import { Button } from "@yamada-ui/react";

const AddAlertButton = (props: AlertStatus) => {
  const { addAlert } = useAlert();
  const handleClick = () => addAlert(props);
  return (
    <AlertProvider>
      <Button bg={"blue.500"} color={"white"} onClick={handleClick}>
        Add Alert
      </Button>
    </AlertProvider>
  );
};

export default {
  title: "アラート追加ボタン",
  component: AddAlertButton,
} satisfies Meta<typeof AddAlertButton>;

export const Success: StoryObj<typeof AddAlertButton> = {
  args: {
    status: "success",
    title: "成功",
    message: "成功しました",
  },
};

export const Error_: StoryObj<typeof AddAlertButton> = {
  args: {
    status: "error",
    title: "エラー",
    message: "エラーが発生しました",
  },
};

export const Info: StoryObj<typeof AddAlertButton> = {
  args: {
    status: "info",
    title: "情報",
    message: "情報です",
  },
};

export const Warning: StoryObj<typeof AddAlertButton> = {
  args: {
    status: "warning",
    title: "警告",
    message: "警告です",
  },
};

export const Loading: StoryObj<typeof AddAlertButton> = {
  args: {
    status: "loading",
    title: "ローディング",
    message: "ローディング中です",
  },
};
