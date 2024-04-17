"use client";

import {
  DYNAMIC_CATCH_ALL_ROUTES_URL,
  OPTIMISTIC_TODOS_URL,
  ROOT_URL,
} from "../const/routes";
import UILink from "../ui/UILink";
import Container from "./Container";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  console.log({ pathname });

  return (
    <header>
      <Container className="flex overflow-x-scroll hide-scroll transition-all pt-10 h-full w-full items-center justify-between gap-4 lg:gap-8">
        <UILink
          href={ROOT_URL}
          label="On-demand Revalidation"
          isActive={pathname === ROOT_URL}
        />
        <UILink
          href={OPTIMISTIC_TODOS_URL}
          label="Optimistic Todos"
          isActive={pathname === OPTIMISTIC_TODOS_URL}
        />

        <UILink
          href={DYNAMIC_CATCH_ALL_ROUTES_URL("")}
          label="Dynamic catch all routes"
          isActive={pathname.includes(DYNAMIC_CATCH_ALL_ROUTES_URL(""))}
        />
      </Container>
    </header>
  );
}
