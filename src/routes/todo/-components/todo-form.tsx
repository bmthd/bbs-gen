import { getFormProps, getInputProps, getTextareaProps, useForm } from "@conform-to/react";
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
import { getValibotConstraint, parseWithValibot } from "conform-to-valibot";
import type { FC } from "react";
import * as v from "valibot";
import { useTodoMutation } from "../-state";

const schema = v.object({
  title: v.pipe(
    v.string("タイトルを入力してください"),
    v.nonEmpty("タイトルを入力してください"),
    v.maxLength(32, "タイトルは32文字以内で入力してください"),
  ),
  content: v.pipe(
    v.string("内容を入力してください"),
    v.nonEmpty("内容を入力してください"),
    v.maxLength(4095, "内容は4095文字以内で入力してください"),
  ),
  isComplete: v.pipe(
    v.unknown(),
    v.transform((value) => Boolean(value)),
  ),
});

export const TodoForm: FC = () => {
  const { addTodo } = useTodoMutation();
  const [form, fields] = useForm({
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    constraint: getValibotConstraint(schema),
    onValidate: ({ formData }) => parseWithValibot(formData, { schema }),
    onSubmit: (event, { submission }) => {
      event.preventDefault();
      if (submission?.status !== "success") return;
      addTodo(submission.value);
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
