import type { Todo } from "@/features/todo/types";
import { getFormProps, getInputProps, getTextareaProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import {
  Button,
  Checkbox,
  FormControl,
  Input,
  Label,
  Text,
  Textarea,
  VStack,
} from "@yamada-ui/react";
import type { FC } from "react";
import { z } from "zod";
import { useTodoMutation } from "../-state";

const schema = z.object({
  title: z
    .string({ required_error: "タイトルを入力してください" })
    .max(32, "タイトルは32文字以内で入力してください"),
  content: z
    .string({ required_error: "内容を入力してください" })
    .max(4095, "内容は4095文字以内で入力してください"),
  isComplete: z.coerce.boolean(),
});

export const TodoForm: FC = () => {
  const { addTodo } = useTodoMutation();
  const [form, fields] = useForm({
    id: "todo",
    shouldValidate: "onBlur",
    onValidate: ({ formData }) => parseWithZod(formData, { schema }),
    onSubmit: (event, { submission }) => {
      event.preventDefault();
      if (!submission || submission.status === "error") return;
      console.log(JSON.stringify(submission.payload, null, 2));
      addTodo(submission.payload as Omit<Todo, "id">);
      event.target.reset();
    },
  });

  return (
    <VStack as="form" {...getFormProps(form)}>
      <FormControl>
        <Label htmlFor={fields.title.id}>タイトル</Label>
        <Input {...getInputProps(fields.title, { type: "text" })} />
        <Text color="red.500" id={fields.title.errorId}>
          {fields.title.errors}
        </Text>
      </FormControl>
      <Label htmlFor={fields.content.id}>内容</Label>
      <Textarea {...getTextareaProps(fields.content)} />
      <Text color="red.500" id={fields.content.errorId}>
        {fields.content.errors}
      </Text>
      <Label htmlFor={fields.isComplete.id}>完了</Label>
      <Checkbox
        defaultChecked={false}
        {...getInputProps(fields.isComplete, { type: "checkbox" })}
      />
      <Button type="submit" bg="blue.500" color="white">
        追加
      </Button>
    </VStack>
  );
};
