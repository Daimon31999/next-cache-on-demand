import BaseLayout from "../../layouts/BaseLayout";
import Container from "../../shared/components/Container";
import Todos from "../../features/todos/Todos";
import { getTodos } from "../../lib/actions";

export default async function TodosPage() {
  const { todos = [] } = await getTodos();

  return (
    <BaseLayout>
      <Container className="py-10">
        <section>
          <h1 className="text-2xl font-bold py-2 text-slate-950">Todos</h1>
          <Todos todos={todos} />
        </section>
      </Container>
    </BaseLayout>
  );
}