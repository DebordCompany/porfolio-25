import Link from "next/link";
const components = [
  {
    id: 1,
    route: "/design/button",
    name: "Button",
    description: "Get a button component",
  },
  {
    id: 2,
    route: "/design/title",
    name: "Title",
    description: "Get a Title component",
  },
];

export default function SubHeader() {
  return (
    <nav>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {components.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className="p-3 border border-neutral-100 rounded-md flex flex-col "
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
