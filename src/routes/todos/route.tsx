import { createFileRoute } from "@tanstack/react-router";
import { FormControl, Input, Label } from "@yamada-ui/react";
import { DeleteButton } from "./-components";

export const Route = createFileRoute("/todos")({
  component: () => (
    <>
      <div>Hello /todo!</div>
      <FormControl label="todo">
        <Label htmlFor="todo">Todo</Label>
        <Input id="todo" />
      </FormControl>
      <DeleteButton />
    </>
  ),
});
