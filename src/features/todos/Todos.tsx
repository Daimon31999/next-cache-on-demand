import UIForm from "@/shared/ui/UIForm";
import UIInput from "@/shared/ui/UIInput";
import TodoItem from "./TodoItem";
import { Todo } from "@prisma/client";
import { SubmitBtn } from "./components/SubmitBtn";
import { createTodo } from "@/lib/actions";
import { useOptimistic } from "react";

export default function Todos({ todos }: { todos: Todo[] }) {
  return (
    <>
      <UIForm action={createTodo}>
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
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
    </>
  );
}
