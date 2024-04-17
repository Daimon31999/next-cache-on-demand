import BaseLayout from "../../layouts/BaseLayout";
import Container from "../../shared/components/Container";
import Todos from "../../features/optimistic-todos/Todos";
import { getTodos } from "../../lib/actions";

export default async function TodosPage() {
  const { todos = [] } = await getTodos();

  return (
    <BaseLayout>
      <Container className="py-10">
        <section>
          <h1 className="heading">Todos</h1>
          <Todos todos={todos} />
        </section>
      </Container>
    </BaseLayout>
  );
}
