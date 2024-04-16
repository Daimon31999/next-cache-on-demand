"use client";

import UIButton from "@/shared/ui/UIButton";
import { useFormStatus } from "react-dom";

export function SubmitBtn() {
  const { pending } = useFormStatus();

  return <UIButton disabled={pending} text="Add Todo" />;
}
