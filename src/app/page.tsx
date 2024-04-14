import Todos from "@/features/Todos";
import Users from "@/features/Users";
import { revalidateAll } from "@/lib/actions";
import Button from "@/shared/Button";

export default function Home() {
  return (
    <main className="py-20 px-8 transition-all">
      <section className="mb-10">
        <form action={revalidateAll}>
          <h1 className="text-2xl font-bold py-2 text-slate-950">
            On-demand Revalidation
          </h1>
          <Button text="Revalidate the entire path" />
        </form>
      </section>
      <Users />
      <Todos />
    </main>
  );
}
