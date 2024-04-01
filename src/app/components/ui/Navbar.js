"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "./Menu";
import { MenuNav } from "./MenuNav";

export function Navbar() {
  const [menu, setMenu] = useState(false);

  function toggle() {
    setMenu(!menu);
  }
  function hiddeMenu() {
    setMenu(!menu);
  }
  return (
    <header className="mb-8 sticky top-0 w-full bg-[#303030] print:hidden">
      <nav className=" px-8 py-6 flex justify-between shadow-2xl max-w-3xl m-auto">
        <div>
          <h3>
            <Link href="/">Debord Company</Link>
          </h3>
        </div>
        <div onClick={toggle}>
          <Menu />
        </div>
      </nav>
      <div onClick={hiddeMenu} className={menu ? "" : "hidden"}>
        <MenuNav />
      </div>
    </header>
  );
}
