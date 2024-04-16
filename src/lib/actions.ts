"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const revalidateUsers = async () => {
  revalidateTag("users");
};

export const revalidateTodos = async () => {
  revalidateTag("todos");
};

export const revalidateAll = async () => {
  revalidatePath("/");
};
