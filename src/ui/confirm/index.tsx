import { Button, Dialog as Component } from "@yamada-ui/react";
import { useCallback, useMemo, type FC, type ReactNode } from "react";
import { useConfirmState } from "./hooks";

/**
 * 確認ダイアログを抽象化したカスタムフック
 * ダイアログ内に表示される内容と、確認関数の結果を利用側で実装する
 */
export const useConfirm = () => {
  const { isOpen, confirm, handleOk, handleCancel } = useConfirmState();

  const successButton = useMemo(
    () => (
      <Button bg={"blue.500"} onClick={handleOk}>
        <span>OK</span>
      </Button>
    ),
    [handleOk]
  );
  const cancelButton = useMemo(
    () => (
      <Button onClick={handleCancel}>
        <span>キャンセル</span>
      </Button>
    ),
    [handleCancel]
  );
  const Dialog: FC<{ children: ReactNode }> = useCallback(
    ({ children }) => (
      <Component
        isOpen={isOpen}
        onClose={handleCancel}
        cancel={cancelButton}
        success={successButton}
        className="m-4 flex h-auto w-4/5 max-w-screen-sm flex-col items-center justify-between overflow-hidden rounded-lg bg-white p-4 shadow-2xl"
      >
        {children}
      </Component>
    ),
    [isOpen, handleCancel, cancelButton, successButton]
  );
  return {
    /** ダイアログコンポーネント */
    Dialog,
    /** 確認ダイアログの操作を待機する関数 */
    confirm,
  };
};
