"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const revalidateUsers = async () => {
  revalidateTag("users");
};

export const revalidateTodos = async () => {
  revalidateTag("todos");
};

export const revalidateAll = async () => {
  revalidatePath("/");
};
