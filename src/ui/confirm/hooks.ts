import { useCallback, useState } from "react";

type State = {
  isOpen: boolean;
  resolve: (isSuccess: boolean) => void;
};

const initialState:State = {
  isOpen: false,
  resolve: () => {},
};

/**
 * 確認ダイアログの状態管理実装
 */
export const useConfirmState = () => {
  const [state, setState] = useState<State>(initialState);

  const confirm = useCallback(
    () =>
      new Promise<boolean>((resolve) => {
        setState({ isOpen: true, resolve });
      }),
    [],
  );

  const handleOk = useCallback(() => {
    state.resolve(true);
    setState(initialState);
  }, [state]);

  const handleCancel = useCallback(() => {
    state.resolve(false);
    setState(initialState);
  }, [state]);

  return {
    /** ダイアログの開閉状態 */
    isOpen: state.isOpen,
    /** 確認ダイアログの操作を待機する関数 */
    confirm,
    /** 確認ダイアログのOKボタンを押した時の処理 */
    handleOk,
    /** 確認ダイアログのキャンセルボタンを押した時の処理 */
    handleCancel,
  };
};
