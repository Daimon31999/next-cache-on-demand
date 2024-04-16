import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// add prefix  to all tailwind classes
const customMerge = extendTailwindMerge({
  prefix: "",
});

export const cn = (...className: ClassValue[]) =>
  customMerge(clsx(...className));
