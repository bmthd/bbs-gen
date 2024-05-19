import { atom, useAtomValue, useSetAtom } from "jotai";
import { splitAtom } from "jotai/utils";
import { useCallback } from "react";

export type Todo = {
  text: string;
  isComplete: boolean;
};

const todosAtom = atom<Todo[]>([]);

const todosAtomsAtom = splitAtom(todosAtom);

export const useTodo = () => {
  const todoIds = useAtomValue(todosAtomsAtom).map((_, i) => i);

  const useTodoValue = (index: number) => {
    const todoAtoms = useAtomValue(todosAtomsAtom);
    const todoAtom = todoAtoms[index];
    if (!todoAtom) throw new Error("invalid index");
    const todo = useAtomValue(todoAtom);
    return todo;
  };

  const setTodos = useSetAtom(todosAtom);

  const addTodo = useCallback(
    (todo: Todo) => {
      setTodos((prev) => [...prev, todo]);
    },
    [setTodos],
  );

  const removeTodo = useCallback(
    (index: number) => {
      setTodos((prev) => prev.filter((_, i) => i !== index));
    },
    [setTodos],
  );

  const updateTodo = useCallback(
    (index: number, todo: Todo) => {
      setTodos((prev) => prev.map((t, i) => (i === index ? todo : t)));
    },
    [setTodos],
  );

  return {
    todoIds,
    useTodoValue,
    addTodo,
    removeTodo,
    updateTodo,
  };
};
