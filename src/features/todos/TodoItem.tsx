"use client";

import { deleteTodo, toggleTodo } from "@/actions/todoActions";
import UICheckbox from "@/shared/ui/UICheckbox";
import { Todo } from "@prisma/client";
import { FormEvent } from "react";
import TodosActions from "./components/TodosActions";

export default function TodoItem({ todo }: { todo: Todo }) {
  const handleChange = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.currentTarget.form?.requestSubmit();
  };

  return (
    <div className="flex items-center justify-between gap-2 py-2">
      <form action={toggleTodo} className="">
        <input
          name="inputId"
          value={todo.id}
          className="border-gray-700 border"
          type="hidden"
        />
        <div className="flex items-center gap-2">
          <UICheckbox
            checked={todo.completed}
            onChange={(e) => handleChange(e)}
            label={todo.title}
          />
        </div>
      </form>
      <TodosActions id={todo.id} title={todo.title} />
    </div>
  );
}
