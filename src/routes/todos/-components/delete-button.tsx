import { useConfirm } from "@/ui/confirm";
import { Button } from "@yamada-ui/react";
import { FC, useCallback } from "react";

export const DeleteButton: FC = () => {
    const { Dialog, confirm } = useConfirm();

    const handleClick = useCallback(async () => {
        const result = await confirm();
        if (result) {
            console.log("削除処理を実行");
        }
    }, [confirm]);

    return (
        <>
        <Button onClick={handleClick}>削除</Button>
        <Dialog>削除しますか？</Dialog>
        </>
    );
}