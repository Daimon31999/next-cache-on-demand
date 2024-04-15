import { revalidateUsers } from "@/lib/actions";
import UIButton from "@/shared/ui/UIButton";

async function getUsers() {
  const endpoint = "https://661ac6b465444945d04e7a1a.mockapi.io/blog/users";
  const response = await fetch(endpoint, {
    next: {
      tags: ["users"],
    },
  });
  return response.json();
}

export default async function Users() {
  const users = await getUsers();

  return (
    <section className="mb-20">
      <form action={revalidateUsers}>
        <div className="flex justify-between items-start mb-6">
          <h2>Users</h2>
          <UIButton text="Revalidate users" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {users.map((user: any) => (
            <div key={user.email} className="p-4 shadow rounded-md">
              <span className="text-slate-800 font-bold block truncate">
                {user.name}
              </span>
              <span className="text-gray-400 block truncate">{user.email}</span>
            </div>
          ))}
        </div>
      </form>
    </section>
  );
}
