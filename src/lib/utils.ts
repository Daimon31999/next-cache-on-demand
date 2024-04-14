import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const cn = (...className: ClassValue[]) => twMerge(clsx(className));