import Link from "next/link";
export function MenuNav() {
  return (
    <ul className="flex flex-col gap-4 justify-center items-center  shadow-2xl min-h-dvh">
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/cv">Curriculum</Link>
      </li>
      <li>
        <Link href="/#contact">Contacto</Link>
      </li>
      <li>
        <Link href="/conversor">Conversor</Link>
      </li>
    </ul>
  );
}
