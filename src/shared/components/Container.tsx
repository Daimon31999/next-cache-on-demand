import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & {
  className?: string;
  sz?: "M" | "L" | "XL";
  newDesign?: boolean;
};

export default function Container({
  children,
  className,
  sz = "M",
  newDesign = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-3 transition-all md:px-20",
        {
          "xl:max-w-screen-xl": sz === "M",
          "xl:max-w-screen-xxl": sz === "L",
          "xl:max-w-screen-xxxl": sz === "XL",
          "px-6 md:px-6 lg:px-6": newDesign,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
