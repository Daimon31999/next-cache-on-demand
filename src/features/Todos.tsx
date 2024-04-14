import { revalidateTodos } from "@/lib/actions";
import Button from "@/shared/Button";

async function getTodos() {
  const endpoint = "https://661ac6b465444945d04e7a1a.mockapi.io/blog/todos";
  const response = await fetch(endpoint, {
    next: {
      tags: ["todos"],
    },
  });
  return response.json();
}

export default async function Todos() {
  const todos = await getTodos();

  return (
    <section>
      <form action={revalidateTodos}>
        <div className="flex justify-between items-start mb-6">
          <h2>Todos</h2>
          <Button text="Revalidate todos" />
        </div>

        {/* TODOS START */}
        <div className="grid grid-cols-2 gap-2">
          {todos.map((todo: any) => (
            <div key={todo.title} className="p-4 shadow rounded-md">
              <span className="text-slate-800 font-bold block truncate">
                {todo.title}
              </span>
              <span className="text-gray-400 block truncate">
                {todo.completed ? "Completed" : "Not completed"}
              </span>
            </div>
          ))}
        </div>
      </form>
      {/* TODOS END */}
    </section>
  );
}
