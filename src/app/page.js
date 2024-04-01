import data from "@/lib/data/data.json";
import Hero from "@/app/components/sections/Hero";
import { AboutMe } from "./components/sections/AboutMe";
import Contact from "./components/sections/Contact";
import { Projects } from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
export default function Home() {
  return (
    <section className="flex flex-col items-stretch gap-4 ">
      <article className="pt-5">
        <Hero title={data.home.title} />
      </article>
      <article className="pt-5">
        <AboutMe aboutMe={data.basics.summary} title={"Quien soy?"} />
      </article>
      <article className="pt-5">
        <Projects projects={data.projects} />
      </article>
      <article className="pt-5">
        <Skills info={data.skills} />
      </article>
      <article className="pt-5" id="contact">
        <Contact data={data.basics} />
      </article>
    </section>
  );
}
