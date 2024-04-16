import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cn } from "../lib/utils";

type Props = {
  text: string;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function UIButton({
  text,
  className,
  disabled,
  ...other
}: Props) {
  return (
    <button
      className={cn(
        "px-3 py-2 cursor-pointer font-semibold rounded-md w-fit bg-slate-800 text-white text-xs hover:bg-slate-950 transition-all",
        { "bg-slate-400 cursor-not-allowed hover:bg-slate-400": disabled },
        className
      )}
      disabled={disabled}
      {...other}
    >
      {text}
    </button>
  );
}
