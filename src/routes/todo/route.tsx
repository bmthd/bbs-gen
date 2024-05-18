import { createFileRoute } from "@tanstack/react-router";
import { FormControl, Input, Label, VStack } from "@yamada-ui/react";
import type { FC } from "react";
import { H, Main } from "midashi";
import { DeleteButton } from "./-components/delete-button";

const component: FC = () => (
  <>
    <H>Hello /todo!</H>
    <Main>
      <VStack>
        <H>Todo</H>
        <FormControl label="todo">
          <Label htmlFor="todo">Todo</Label>
          <Input id="todo" />
        </FormControl>
        <DeleteButton />
      </VStack>
    </Main>
  </>
);

export const Route = createFileRoute("/todo")({
  component,
});
