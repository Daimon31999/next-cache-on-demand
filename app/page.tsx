import Todos from "../features/Todos";
import Users from "../features/Users";
import BaseLayout from "../layouts/BaseLayout";
import { revalidateAll } from "../lib/actions";
import Container from "../shared/components/Container";
import UIButton from "../shared/ui/UIButton";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../shared/ui/shadcn/ui/alert";

export default async function Home() {
  return (
    <BaseLayout>
      <Container className="py-10">
        <section className="mb-10">
          <form action={revalidateAll}>
            <h1 className="heading">On-demand Revalidation</h1>
            <UIButton text="Revalidate the entire path" />
            <Alert className="my-2">
              <AlertTitle>How to use?</AlertTitle>
              <AlertDescription>
                to try it, change users or todos here:{" "}
                <a
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  href="https://mockapi.io/projects/661ac6b465444945d04e7a1b"
                >
                  link
                </a>
              </AlertDescription>
            </Alert>
          </form>
        </section>
        <Users />
        <Todos />
      </Container>
    </BaseLayout>
  );
}
