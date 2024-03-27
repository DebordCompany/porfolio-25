import Link from "next/link";
export function MenuNav() {
  return (
    <ul className="flex flex-col gap-4 justify-center items-center  shadow-2xl min-h-dvh">
      <li>
        <Link href="/">Curriculum</Link>
      </li>
      <li>
        <Link href="/">Curriculum</Link>
      </li>
      <li>
        <Link href="/">Curriculum</Link>
      </li>
      <li>
        <Link href="/">Curriculum</Link>
      </li>
    </ul>
  );
}
