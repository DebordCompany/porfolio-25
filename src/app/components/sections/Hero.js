import Link from "next/link";
export default function Hero({ title }) {
  return (
    <>
      <h1 className="text-5xl md:text-6xl font-black">{title}</h1>
      <div className="flex items-center flex-wrap gap-4 pt-4 lg:pt-8">
        <Link
          className=" text-center grow md:grow-0 px-8 py-2 shadow-md text-black bg-amber-400 border-2 border-amber-400 font-semibold"
          href="/cv"
        >
          Curriculum
        </Link>
        <Link
          className=" text-center grow md:grow-0 px-8 py-2 shadow-md border-2 border-white font-semibold"
          href="#contact"
        >
          Contacto
        </Link>
      </div>
    </>
  );
}
