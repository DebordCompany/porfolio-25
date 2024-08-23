/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import RightArrow from "@/app/icons/RightArrow";
import { components } from "@/lib/data/componetsHeader";
import LinkIcon from "@/app/icons/LinkIcon";
import data from "@/lib/data/data.json";

export default function SubHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="">
      <div className="flex gap-2 items-center" onClick={() => setOpen(!open)}>
        <p>Menú</p>
        <RightArrow transform={open} />
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed w-full h-dvh flex justify-center items-center z-10 top-0 left-0 bg-opacity-20 bg-neutral-800 "
        >
          <nav className=" rounded-lg shadow-debord dark:shadow-2xl dark:border-2 dark:border-white p-4 max-w-2xl   min-h-96 w-full z-20  bg-white dark:bg-neutral-800 flex flex-col justify-between">
            <ul className="p-2 flex flex-col gap-6">
              <div>
                <p className="font-bold mb-4 underline">Empezamos</p>
                <li className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="shadow-debord p-2 rounded-lg dark:border dark:border-neutral-100">
                    <a
                      href={"/design"}
                      className="flex justify-between items-center"
                    >
                      Instalación
                      <LinkIcon />
                    </a>
                    <hr className="border-t-4 rounded-full" />
                  </div>
                </li>
              </div>
              <div>
                <p className="font-bold mb-4 underline">Componentes</p>
                <li className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {components.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="shadow-debord p-2 rounded-lg dark:border dark:border-neutral-100"
                      >
                        <a
                          href={item.route}
                          className="flex justify-between items-center"
                        >
                          {item.name}
                          <LinkIcon />
                        </a>
                        <hr className="border-t-4 rounded-full" />
                      </div>
                    );
                  })}
                </li>
              </div>
            </ul>
            <footer className="p-2 w-1/2 flex justify-start gap-2 invert-[1] dark:invert-0">
              {data.basics.profiles.map((item) => {
                return (
                  <div key={item.url}>
                    <a href={item.url}>
                      <img
                        src={item.network}
                        alt={item.username}
                        className="w-6"
                      />
                    </a>
                  </div>
                );
              })}
            </footer>
          </nav>
        </div>
      )}
    </header>
  );
}
