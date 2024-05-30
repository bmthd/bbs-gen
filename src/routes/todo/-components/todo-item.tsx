import type { Todo } from "@/features/todo/types";
import { useTodos } from "@/routes/todo/-state";
import { Button, Card, HStack } from "@yamada-ui/react";
import { useAtomValue, type Atom } from "jotai";
import type { FC } from "react";

export const TodoItems: FC = () => {
  const todoAtomsAtom = useTodos();
  return (
    <>
      {todoAtomsAtom.map((todoAtom) => (
        <TodoItem key={`${todoAtom}`} todoAtom={todoAtom} />
      ))}
    </>
  );
};

export const TodoItem: FC<{ todoAtom: Atom<Todo> }> = ({ todoAtom }) => {
  const todo = useAtomValue(todoAtom);
  return (
    <Card variant="elevated" p="md">
      <HStack>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
        <p>{todo.isComplete ? "Complete" : "Incomplete"}</p>
        <p>{todo.category?.name ?? ""}</p>
        <p>{todo.createdAt}</p>
        <Button bg="blue.500" color="white">
          編集
        </Button>
      </HStack>
    </Card>
  );
};
