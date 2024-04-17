import Header from "../shared/components/Header";
import type { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
}
