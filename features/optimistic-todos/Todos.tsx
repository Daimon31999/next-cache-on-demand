"use client";

import UIForm from "../../shared/ui/UIForm";
import UIInput from "../../shared/ui/UIInput";
import TodoItem from "./TodoItem";
import { Todo } from "@prisma/client";
import { SubmitBtn } from "./components/SubmitBtn";
import { createTodo } from "../../lib/actions";
import { useOptimistic } from "react";

export default function Todos({ todos }: { todos: Todo[] }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    }
  );

  async function action(data: FormData) {
    const input = data.get("input") as string;

    const newTodo = {
      id: Math.random(),
      title: input,
      completed: false,
      createdAt: new Date(),
    };

    addOptimisticTodo(newTodo);

    await createTodo(data);
  }

  return (
    <>
      <UIForm action={action}>
        <div className="flex gap-1">
          <UIInput placeholder="Add a new todo" name="input" />
          <SubmitBtn />
        </div>
      </UIForm>

      <section className="py-10">
        <h2 className="mb-2">Previous todos</h2>
        <div className="h-[1px] w-full bg-gray-200" />
        {todos.length === 0 && (
          // with lost emoji
          <p className="mt-4 text-gray-500">
            No todos yet
            <span role="img" aria-label="lost" className="ml-2">
              😢
            </span>{" "}
          </p>
        )}
        {optimisticTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
    </>
  );
}
