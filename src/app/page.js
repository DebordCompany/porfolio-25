import data from "@/lib/data/data.json";
import { AboutMe } from "./components/sections/AboutMe";
export default function Home() {
  return (
    <main className="">
      <h1 className="text-6xl font-black mb-2">{data.home.title}</h1>
      <h2 className="text-sm font-thin">{data.home.subtitle}</h2>
      <section className="my-4">
        <p className="text-xl font-black">¿Quien soy?</p>
        <AboutMe aboutMe={data.home.aboutMe} />
      </section>
    </main>
  );
}
