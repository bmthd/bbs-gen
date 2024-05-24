import type { Todo } from "@/features/todo/types";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage, splitAtom } from "jotai/utils";
import { useCallback } from "react";

const todosAtom = atomWithStorage<Todo[]>("todo", []);

const addTodoAtom = atom(null, (_get, set, todo: Omit<Todo, "id">) => {
  set(todosAtom, (prev) => [...prev, { id: crypto.randomUUID(), ...todo }]);
});

const deleteTodoAtom = atom(null, (_get, set, id: string) => {
  set(todosAtom, (prev) => prev.filter((todo) => todo.id !== id));
});

const updateTodoAtom = atom(null, (_get, set, todo: Todo) => {
  set(todosAtom, (prev) => prev.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)));
});

const resetTodosAtom = atom(null, (_get, set) => {
  set(todosAtom, []);
});

const todoAtomsAtom = splitAtom(todosAtom);

export const useTodos = () => useAtomValue(todoAtomsAtom);

export const useTodoMutation = () => ({
  addTodo: useCallback(useSetAtom(addTodoAtom), []),
  deleteTodo: useCallback(useSetAtom(deleteTodoAtom), []),
  updateTodo: useCallback(useSetAtom(updateTodoAtom), []),
  resetTodos: useCallback(useSetAtom(resetTodosAtom), []),
});
