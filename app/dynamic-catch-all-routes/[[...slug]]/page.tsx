import Users from "@/features/dynamic-catch-all-routes/Users";
import Todos from "@/features/dynamic-catch-all-routes/Todos";
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

export default async function DynamicCatchAllRoutes({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const { users = [] } = await getUsers();

  const userId = slug?.[0];
  const todoId = slug?.[2];

  console.log("slug", slug);
  console.log("userId", userId);
  console.log("todoId", todoId);

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
