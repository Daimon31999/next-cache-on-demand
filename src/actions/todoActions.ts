"use server";

import prisma from "@/lib/prisma";
import { sleep } from "@/shared/lib/utils";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await sleep(1000);

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

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany({
      select: {
        title: true,
        id: true,
        completed: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { todos };
  } catch (error) {
    return { error };
  }
}

export async function toggleTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const id = parseInt(inputId) || 0;

  try {
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

    return { updatedStatus };
  } catch (error) {
    return { error };
  }
}

export async function editTodo(formData: FormData) {
  try {
    const inputId = formData.get("inputId") as string;
    const text = formData.get("input") as string;
    const id = parseInt(inputId) || 0;

    const todo = await prisma.todo.findUnique({
      where: {
        id,
      },
    });

    if (!todo) {
      return;
    }

    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title: text,
      },
    });

    revalidatePath("/");
  } catch (error) {
    return { error };
  }
}
