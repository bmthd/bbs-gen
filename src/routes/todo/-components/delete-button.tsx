import { ConfirmDialog } from "@/ui/confirm-dialog";
import { Button } from "@yamada-ui/react";
import { type FC, useCallback, useRef } from "react";

export const DeleteButton: FC = () => {
  const ref = useRef<{ confirm: () => Promise<boolean> }>(null);

  const handleClick = useCallback(async () => {
    if (await ref.current?.confirm()) {
      console.log("削除処理を実行");
    }
  }, []);

  return (
    <>
      <Button onClick={handleClick}>削除</Button>
      <ConfirmDialog ref={ref}>削除しますか？</ConfirmDialog>
    </>
  );
};
