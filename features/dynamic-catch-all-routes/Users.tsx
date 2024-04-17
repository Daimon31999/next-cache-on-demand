import { DYNAMIC_CATCH_ALL_ROUTES_URL } from "@/shared/const/routes";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

export default function Users({
  users,
  userId,
}: {
  userId: string;
  users: any[];
}) {
  return (
    <div className="flex w-fit rounded-md flex-col p-10 bg-gray-100 gap-2 justify-center">
      {users.map((user: any) => (
        <div key={user.name} className="flex gap-4 items-center">
          <Link
            href={DYNAMIC_CATCH_ALL_ROUTES_URL(user.id)}
            className={cn(
              "font-semibold cursor-pointer hover:underline text-sm text-slate-600",
              {
                "underline decoration-sky-500 underline-offset-4":
                  userId === user.id,
              }
            )}
          >
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
