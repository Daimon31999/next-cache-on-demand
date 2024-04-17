import { TUser, TTodo } from "@/lib/types";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function getUserById(
  id: string
): Promise<{ user: TUser | null; error: string | null }> {
  try {
    const endpoint = `https://661ac6b465444945d04e7a1a.mockapi.io/blog/users/${id}`;
    const res = await fetch(endpoint);
    const data = await res.json();

    if (typeof data === "string" || !data) {
      throw new Error("User not found");
    }

    return { user: data, error: null };
  } catch (error: any) {
    return { user: null, error: error.message || "Failed to fetch user" };
  }
}

export async function getTodosByUserId(
  id: string
): Promise<{ todos: TTodo[] | null; error: string | null }> {
  try {
    const endpoint = `https://661ac6b465444945d04e7a1a.mockapi.io/blog/users/${id}/todos`;
    const res = await fetch(endpoint);
    const data = await res.json();

    if (typeof data === "string" || !data) {
      throw new Error("Todos not found");
    }

    return { todos: data, error: null };
  } catch (error: any) {
    return { todos: null, error: error.message || "Failed to fetch todos" };
  }
}

export default async function Todos({ slug }: { slug: string[] }) {
  const userId = slug?.[0];
  const todoId = slug?.[2];

  if (!slug) {
    return (
      <span className="font-bold text-slate-700">
        Select a user to see list of todos
      </span>
    );
  }

  const { user, error } = await getUserById(userId);
  if (!user || error) {
    notFound();
  }

  const { todos } = await getTodosByUserId(userId);
  const todo = todos?.find((todo) => todo.id === todoId);

  return (
    <section className="grow">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <Image
            src={user.avatar}
            alt=""
            className="h-11 w-11 rounded-full"
            width={100}
            height={100}
          />
          <div>
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-12 lg:flex-row">
          <ul className="flex list-disc flex-col gap-1 p-8 text-sm">
            <h3 className="mb-3 border-b pb-3 text-lg font-semibold">Todos</h3>
            {todos?.map((todo) => (
              <li key={todo.id} className="list-item list-inside">
                <Link
                  href={`/dynamic-catch-all-routes/${userId}/todos/${todo.id}`}
                  className={cn(
                    todo.id === todoId &&
                      "underline decoration-sky-500 underline-offset-4"
                  )}
                >
                  {todo.title}
                </Link>
              </li>
            ))}
          </ul>
          {todo && (
            <div className="grow rounded-lg p-8 shadow dark:shadow-gray-700">
              <h3 className="mb-3 border-b pb-3 text-lg font-semibold">
                Details
              </h3>
              <div className="mt-4 flex items-start justify-between text-sm">
                <div>
                  <h4 className="">{todo.title}</h4>
                </div>
                <p
                  className={cn(
                    "text-sm",
                    todo.isCompleted ? "text-emerald-500" : "text-rose-500"
                  )}
                >
                  {todo.isCompleted ? "Completed" : "Not completed"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
