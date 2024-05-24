import { createFileRoute } from "@tanstack/react-router";
import { VStack } from "@yamada-ui/react";
import type { FC } from "react";
import { H, Main } from "midashi";
import { DeleteButton, TodoForm, TodoItem } from "./-components";

const component: FC = () => (
  <>
    <H>Hello /todo!</H>
    <Main>
      <VStack>
        <H>Todo</H>
        <TodoForm />
        <DeleteButton />
        <TodoItem
          todo={{
            id: "1",
            title: "タイトル",
            content: "内容",
            isComplete: false,
            category: { name: "カテゴリー", id: "1" },
            createdAt: "",
          }}
        />
      </VStack>
    </Main>
  </>
);

export const Route = createFileRoute("/todo")({
  component,
});
