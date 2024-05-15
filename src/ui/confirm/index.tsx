import { Button, Dialog as Component } from "@yamada-ui/react";
import { useCallback, type FC, type ComponentProps, type ReactNode } from "react";
import { useConfirmState } from "./hooks";

/**
 * 確認ダイアログを抽象化したカスタムフック
 * ダイアログ内に表示される内容と、確認関数の結果を利用側で実装する
 */
export const useConfirm = () => {
  const { isOpen, confirm, handleSuccess, handleCancel } = useConfirmState();

  const Dialog: FC<{ cancelText?: ReactNode, successText?: ReactNode } & Omit<ComponentProps<typeof Component>, 'isOpen' | 'onClose'>> = useCallback(
    ({ cancelText = "キャンセル", successText = "OK", ...props }) => (
      <Component
        isOpen={isOpen}
        onClose={handleCancel}
        cancel={
          <Button onClick={handleCancel}>
            {cancelText}
          </Button>
        }
        success={
          <Button bg={"blue.500"} onClick={handleSuccess}>
            {successText}
          </Button>
        }
        {...props}
      />
    ),
    [isOpen, handleCancel, handleSuccess]
  );
  return {
    /** ダイアログコンポーネント */
    Dialog,
    /** 確認ダイアログの操作を待機する関数 */
    confirm,
  };
};
