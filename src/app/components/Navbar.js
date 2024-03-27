"use client";
import { useState } from "react";
import { Menu } from "./ui/Menu";
import { MenuNav } from "./ui/MenuNav";

export function Navbar() {
  const [menu, setMenu] = useState(false);

  function toggle() {
    setMenu(!menu);
  }
  return (
    <header className="mb-4">
      <nav className="backdrop-blur-md px-8 py-6 flex justify-between shadow-2xl">
        <div>
          <h3>Debord Company</h3>
        </div>
        <div onClick={toggle}>
          <Menu />
        </div>
      </nav>
      <div className={menu ? "" : "hidden"}>
        <MenuNav />
      </div>
    </header>
  );
}
