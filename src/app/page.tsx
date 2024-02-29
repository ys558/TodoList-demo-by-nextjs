import { prisma } from "@/db";
import Link from "next/link";
import TodoItem from "./components/TodoItem";
import { redirect } from "next/navigation";

const getTodos = () => prisma.todo.findMany();

const toggleItem = async (id: string, complete: boolean) => {
  "use server"
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      complete,
    },
  });
}

const deleteItem = async (id: string) => {
  "use server"
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  redirect("/")
}

const Home = async () => {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todo List</h1>
        <Link href="/new" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 ouline-none">
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(({ id, complete, title}) => (
          <TodoItem key={id} id={id} title={title} complete={complete} toggleItem={toggleItem} deleteItem={deleteItem}/>
        ))}
      </ul>
    </>
  );
}

export default Home;