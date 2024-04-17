import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function UIInput(p: Props) {
  return (
    <input
      {...p}
      type="text"
      className="peer flex-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 sm:text-sm hover:border-slate-800"
    />
  );
}
