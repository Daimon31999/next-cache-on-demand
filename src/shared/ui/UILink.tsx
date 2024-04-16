import Link, { LinkProps } from "next/link";
import { cn } from "../lib/utils";

type UILinkProps = LinkProps & {
  label: string;
  className?: string;
  isActive?: boolean;
};

export default function UILink(props: UILinkProps) {
  const { label, className, isActive, ...other } = props;
  return (
    <Link
      {...other}
      className={cn(
        "hover:text-slate-950 text-slate-700 hover:underline",
        {
          "px-3 py-2 font-semibold rounded-md border-2": isActive,
        },
        className
      )}
    >
      {label}
    </Link>
  );
}
