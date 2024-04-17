"use client";

import UILink from "../ui/UILink";
import Container from "./Container";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Container className="flex overflow-x-scroll hide-scroll transition-all pt-10 h-full w-full items-center justify-center gap-4 lg:gap-8">
        <UILink
          href="/"
          label="On-demand Revalidation"
          isActive={pathname === "/"}
        />
        <UILink
          href="/todos"
          label="Optimistic Todos"
          isActive={pathname === "/todos"}
        />

        <UILink
          href="/todos"
          label="Dynamic catch all routes"
          isActive={pathname === "/catch-all/[[...slug]]"}
        />
      </Container>
    </header>
  );
}