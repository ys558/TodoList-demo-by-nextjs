import { prisma } from "@/db";
import { redirect } from "next/navigation";

// for todo List pages:
export const getTodos = () => prisma.todo.findMany();

export const toggleItem = async (id: string, complete: boolean) => {
  "use server";
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      complete,
    },
  });
};

export const deleteItem = async (id: string) => {
  "use server";
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  redirect("/");
};

// for create todo page:
export const createTodo = async (data: FormData) => {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0)
    throw new Error("Invalid title");

  await prisma?.todo.create({
    data: {
      title,
      complete: false,
    },
  });
  redirect("/");
};
