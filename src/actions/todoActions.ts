"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function toggleTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const id = parseInt(inputId) || 0;

  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  if (!todo) {
    return;
  }

  const updatedStatus = !todo.completed;

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed: updatedStatus,
    },
  });

  revalidatePath("/");

  return updatedStatus;
}

export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await prisma.todo.delete({
    where: {
      id: parseInt(inputId),
    },
  });

  revalidatePath("/");
}
