import { DOMAttributes } from "react";
import { cn } from "../lib/utils";

type Props = {
  text: string;
  className?: string;
} & DOMAttributes<HTMLButtonElement>;

export default function UIButton({ text, className }: Props) {
  return (
    <button
      className={cn(
        "px-3 py-2 font-semibold rounded-md w-fit bg-slate-800 text-white text-xs hover:bg-slate-950 transition-all",
        className
      )}
    >
      {text}
    </button>
  );
}
