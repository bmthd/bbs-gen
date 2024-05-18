import { Button, Dialog } from "@yamada-ui/react";
import { type ComponentProps, type ReactNode, useImperativeHandle, forwardRef } from "react";
import { useConfirmState } from "./hooks";

type ConfirmDialogHandle = { confirm: () => Promise<boolean> };

type ConfirmDialogProps = {
  /** キャンセルボタンのテキスト */
  cancelText?: ReactNode;
  /** OKボタンのテキスト */
  successText?: ReactNode;
} & Omit<ComponentProps<typeof Dialog>, "isOpen" | "onClose" | "success" | "cancel">;

/**
 * 確認ダイアログ
 * 親要素からconfirm関数を呼び出すことで、ダイアログを表示し、OK/キャンセルの選択を待機する
 * コンポーネントのProps経由でcancelText、successText、childrenに表示するメッセージを指定することができる
 */
export const ConfirmDialog = forwardRef<ConfirmDialogHandle, ConfirmDialogProps>(
  ({ cancelText = "キャンセル", successText = "OK", ...props }, ref) => {
    const { isOpen, confirm, handleSuccess, handleCancel } = useConfirmState();
    useImperativeHandle(ref, () => ({ confirm }), [confirm]);

    return (
      <Dialog
        onClose={handleCancel}
        cancel={<Button onClick={handleCancel}>{cancelText}</Button>}
        success={
          <Button bg={"blue.500"} onClick={handleSuccess}>
            {successText}
          </Button>
        }
        {...{ isOpen, ...props }}
      />
    );
  },
);
