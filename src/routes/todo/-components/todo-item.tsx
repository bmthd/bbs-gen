import type { Todo } from "@/features/todo/types";
import { Button, Card, HStack } from "@yamada-ui/react";
import type { FC } from "react";

export const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <Card variant="elevated" p="md">
      <HStack>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
        <p>{todo.isComplete ? "Complete" : "Incomplete"}</p>
        <p>{todo.category.name}</p>
        <p>{todo.createdAt}</p>
        <Button bg="blue.500" color="white">
          編集
        </Button>
      </HStack>
    </Card>
  );
};
