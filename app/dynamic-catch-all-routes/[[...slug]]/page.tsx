import Users from "@/features/dynamic-catch-all-routes/Users";
import Todos, {
  getTodosByUserId,
} from "@/features/dynamic-catch-all-routes/Todos";
import BaseLayout from "@/layouts/BaseLayout";
import Container from "@/shared/components/Container";

async function getUsers() {
  const endpoint = "https://661ac6b465444945d04e7a1a.mockapi.io/blog/users";
  const response = await fetch(endpoint, {
    next: {
      tags: ["users"],
    },
  });

  const users = await response.json();
  return { users };
}

export async function generateStaticParams() {
  const { users } = await getUsers();

  if (!users) {
    return [];
  }

  const slugs = [];
  for (const user of users) {
    const { todos } = await getTodosByUserId(user.id);
    if (!todos) {
      slugs.push([user.id]);
      continue;
    }

    for (const todo of todos) {
      slugs.push([user.id, "todos", todo.id]);
    }
  }

  const paths = slugs.map((slug) => ({ slug }));
  return paths;
}

export default async function DynamicCatchAllRoutes({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const { users = [] } = await getUsers();

  const userId = slug?.[0];
  const todoId = slug?.[2];

  return (
    <BaseLayout>
      <Container>
        <h1 className="heading mb-10">All users</h1>

        <div className="flex gap-10">
          {/* USERS LIST START */}
          <Users userId={userId} users={users} />
          {/* USERS LIST END */}

          {/* TODOS LIST START */}

          <Todos slug={slug} />

          {/* TODOS LIST END */}
        </div>
      </Container>
    </BaseLayout>
  );
}
