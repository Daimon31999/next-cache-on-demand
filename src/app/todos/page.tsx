import BaseLayout from "@/layouts/BaseLayout";
import Container from "@/shared/components/Container";
import UIButton from "@/shared/ui/UIButton";
import { createTodo, getTodos } from "@/actions/todoActions";
import UIForm from "@/shared/ui/UIForm";
import TodoItem from "@/features/todos/TodoItem";
import UIInput from "@/shared/ui/UIInput";

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <BaseLayout>
      <Container className="py-10">
        <section>
          <h1 className="text-2xl font-bold py-2 text-slate-950">Todos</h1>

          <UIForm action={createTodo}>
            <div className="flex gap-1">
              <UIInput placeholder="Add a new todo" name="input" />
              <UIButton text="Add Todo" />
            </div>
          </UIForm>
        </section>

        <section className="py-10">
          <h2 className="mb-2">Previous todos</h2>
          <div className="h-[1px] w-full bg-gray-200" />
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </section>
      </Container>
    </BaseLayout>
  );
}
