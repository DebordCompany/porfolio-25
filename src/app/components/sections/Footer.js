import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black mt-16 print:hidden">
      <section className="max-w-3xl m-auto px-8 py-6 flex flex-col gap-4 ">
        <h3 className="font-bold">Created with love by Mario Sanz </h3>
        <Link className="underline text-sm" href={"/cv"}>
          Curriculum
        </Link>
        <a
          className="underline text-sm"
          href="https://image-converter-trazos-front.pages.dev/"
        >
          Image conversor
        </a>
      </section>
    </footer>
  );
}
