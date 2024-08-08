import data from "@/lib/data/data.json";
import HeroCV from "../components/cv/HeroCV";
import { AboutMe } from "../components/sections/AboutMe";
import Experience from "../components/cv/Experience";
import Print from "../components/cv/Print";

export default function Cv() {
  return (
    <>
      <main className="print:text-black print:pt-2">
        <div>
          <HeroCV info={data.basics} />
        </div>
        <hr className="mt-2" />
        <div className="pt-10">
          <AboutMe aboutMe={data.basics.summary} title={"Sobre mi"} />
        </div>
        <div className="pt-10">
          <Experience info={data.work} />
        </div>
        <div>
          <Print />
        </div>
      </main>
    </>
  );
}
