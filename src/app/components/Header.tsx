import Link from "next/link";
import { TITLE, NEW_BUTTON_TEXT } from "../const";

const Header = () => (
  <header className="flex justify-between items-center mb-4">
    <h1 className="text-2xl">{TITLE}</h1>
    <Link
      href="/new"
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
    >
      {NEW_BUTTON_TEXT}
    </Link>
  </header>
);

export default Header;
