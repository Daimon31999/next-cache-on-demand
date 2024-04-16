import BaseLayout from "@/layouts/BaseLayout";
import Container from "@/shared/components/Container";
import UIButton from "@/shared/ui/UIButton";
import prisma from "@/lib/prisma";
import { createTodo, toggleTodo } from "@/actions/todoActions";
import ToggleTodo from "@/features/cache-todos/ToggleTodo";
import UIForm from "@/shared/ui/UIForm";

async function getTodos() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      completed: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function CacheTodosPage() {
  const todos = await getTodos();

  return (
    <BaseLayout>
      <Container className="py-10">
        <section>
          <h1 className="text-2xl font-bold py-2 text-slate-950">Todos</h1>

          <UIForm action={createTodo}>
            <div className="flex gap-1">
              <input
                name="input"
                type="text"
                placeholder="Add a new todo"
                className="peer flex-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 sm:text-sm hover:border-slate-800"
              />
              <UIButton text="Add Todo" />
            </div>
          </UIForm>
        </section>

        <section className="py-10">
          <h2 className="mb-2">Previous todos</h2>
          <div className="h-[1px] w-full bg-gray-200" />
          {todos.map((todo) => (
            <ToggleTodo key={todo.id} todo={todo} />
          ))}
        </section>
      </Container>
    </BaseLayout>
  );
}
