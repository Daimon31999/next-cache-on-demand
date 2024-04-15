import Todos from "@/features/Todos";
import Users from "@/features/Users";
import BaseLayout from "@/layouts/BaseLayout";
import { revalidateAll } from "@/lib/actions";
import Container from "@/shared/components/Container";
import UIButton from "@/shared/ui/UIButton";

export default function Home() {
  return (
    <BaseLayout>
      <Container className="py-10">
        <section className="mb-10">
          <form action={revalidateAll}>
            <h1 className="text-2xl font-bold py-2 text-slate-950">
              On-demand Revalidation
            </h1>
            <UIButton text="Revalidate the entire path" />
          </form>
        </section>
        <Users />
        <Todos />
      </Container>
    </BaseLayout>
  );
}
