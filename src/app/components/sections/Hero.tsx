import Link from "next/link";
export default function Hero({ title }) {
  return (
    <>
      <h1 className="text-5xl md:text-6xl font-black">{title}</h1>
      <div className="flex items-center flex-wrap gap-4 pt-4 lg:pt-8">
        <Link
          className=" text-center grow md:grow-0 px-8 py-2 shadow-md text-black bg-amber-400 border-2 border-amber-400 font-semibold hover:bg-transparent hover:border-amber-400 hover:dark:text-neutral-50 hover:scale-105 transition-all"
          href="/cv"
        >
          Curriculum
        </Link>
        <Link
          className=" text-center grow md:grow-0 px-8 py-2 shadow-md border-2 border-neutral-800 dark:border-neutral-50 font-semibold hover:bg-amber-400 hover:border-amber-400 hover:dark:text-neutral-800 hover:scale-105 transition-all"
          href="#contact"
        >
          Contacto
        </Link>
      </div>
    </>
  );
}
