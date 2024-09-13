import Link from "next/link";
import { components } from "@/lib/data/componetsHeader";
export default function FooterHeader() {
  return (
    <nav>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {components.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className="p-3 border-2 border-neutral-800 dark:border-neutral-100 rounded-md flex flex-col h-full"
                href={item.route}
              >
                <p className="font-bold text-xl">{item.name}</p>
                <p className="text-xs">{item.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
