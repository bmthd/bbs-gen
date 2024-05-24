import { getInputProps, useForm, getFormProps, getTextareaProps } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button, Checkbox, Input, Label, Textarea, VStack } from "@yamada-ui/react";
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
    onSubmit: (e, { submission }) => {
      e.preventDefault();
      if (!submission) return;
      console.log(JSON.stringify(submission.payload, null, 2));
      addTodo(submission.payload);
    },
  });

  return (
    // @ts-ignore
    <VStack as="form" {...getFormProps(form)}>
      <Label htmlFor={fields.title.id}>タイトル</Label>
      <Input {...getInputProps(fields.title, { type: "text" })} />
      <Label htmlFor={fields.content.id}>内容</Label>
      <Textarea {...getTextareaProps(fields.content)} />
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
