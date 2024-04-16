"use client";

import { useRef } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
};

const UIForm = ({ children, action, className, onSubmit }: Props) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default UIForm;
