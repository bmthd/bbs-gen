import { TodoItems } from "@/routes/todo/-components/todo-item";
import { createFileRoute } from "@tanstack/react-router";
import { VStack } from "@yamada-ui/react";
import { H, Main } from "midashi";
import type { FC } from "react";
import { DeleteButton, TodoForm } from "./-components";

const component: FC = () => (
  <>
    <H>Hello /todo!</H>
    <Main>
      <VStack>
        <H>Todo</H>
        <TodoForm />
        <DeleteButton />
        <TodoItems />
      </VStack>
    </Main>
  </>
);

export const Route = createFileRoute("/todo")({
  component,
});
