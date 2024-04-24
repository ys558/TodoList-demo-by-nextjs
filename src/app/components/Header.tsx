import Link from "next/link";

const Header = () => (
  <header className="flex justify-between items-center mb-4">
    <h1 className="text-2xl">Todo List</h1>
    <Link
      href="/new"
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
    >
      New
    </Link>
  </header>
);

export default Header;
