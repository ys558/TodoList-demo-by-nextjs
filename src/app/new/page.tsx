import Link from "next/link";
import { createTodo } from "../request";
import { CANCEL_BUTTON_TEXT, CREATE_BUTTON_TEXT, NEW_TITLE } from "../const";

const Page = () => {
  const title = (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">{NEW_TITLE}</h1>
    </header>
  );

  const form = (
    <form action={createTodo} className="flex gap-2 flex-col">
      <input
        type="text"
        name="title"
        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
      />
      <div className="flex gap-1 justify-end">
        <Link
          href=".."
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          {CANCEL_BUTTON_TEXT}
        </Link>
        <button
          type="submit"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          {CREATE_BUTTON_TEXT}
        </button>
      </div>
    </form>
  );

  return (
    <>
      {title}
      {form}
    </>
  );
};

export default Page;
