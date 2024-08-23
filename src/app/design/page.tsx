import Title from "../components/design/Title";
import Text from "../components/design/Text";
import Pre from "../components/design/Pre";
import List from "../components/design/List";
import Separator from "../components/design/Separator";
import FooterHeader from "../components/design/sections/FooterHeader";
import { codeExampleTitle } from "@/lib/data/code";
const requisites = ["React (16)", "Tailwind", "Node.js"];

export default function Design() {
  return (
    <>
      <main className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <Title level="h1">Debord Company design</Title>
          <Text>
            Bienvenido a la documentación oficial de{" "}
            <strong>Debord Design</strong>. Esta guía te ayudará a configurar y
            utilizar nuestra librería de componentes de React construida con
            Tailwind CSS. Sigue los pasos a continuación para comenzar a usar
            nuestros componentes en tu proyecto.
          </Text>
        </div>
        <div className="flex flex-col gap-6">
          <Title level="h2">Requisitos Previos:</Title>
          <List items={requisites} />
        </div>
        <div className="flex flex-col gap-6">
          <Title level="h2">Instalación:</Title>
          <Text>Puedes instalarlo mediante npm con este comando</Text>
          <Pre>npm install debord-design</Pre>
        </div>
        <div className="flex flex-col gap-6">
          <Title level="h2">uso basico:</Title>
          <Text>
            Después de instalar la librería, puedes empezar a usar los
            componentes en tu aplicación React. Aquí tienes un ejemplo básico de
            como usar el componente Title
          </Text>
          <Pre>{codeExampleTitle}</Pre>
          <div>
            <Title level="p">este es el resultado:</Title>
            <Separator />
            <div className="flex flex-col gap-3">
              <Title level="p" variant="h1" className="text-neutral-800">
                Etiqueta {"p"} con apariencia de h1
              </Title>
              <Title level="h1" variant="h2" className="text-amber-700">
                Etiqueta {"h1"} con apariencia de h3
              </Title>
              <Title level="h4" variant="h3" className="text-amber-500">
                Etiqueta {"h4"} con apariencia de h3
              </Title>
              <Title level="h3" variant="h4" className="text-amber-300">
                Etiqueta {"h3"} con apariencia de h4
              </Title>
              <Title level="h6" variant="h5" className="text-amber-200">
                Etiqueta {"h6"} con apariencia de h5
              </Title>
            </div>
            <Separator />
            <Text>
              Estos ejemplos demuestran la flexibilidad y personalización que
              ofrece Debord Design para adaptarse a las necesidades de tu
              proyecto. Al permitir que diferentes niveles de encabezado adopten
              la apariencia de otros, puedes mantener la semántica del HTML
              mientras ajustas el estilo según tu diseño. Esto te permite crear
              una estructura de documento clara y accesible sin sacrificar la
              coherencia visual.
            </Text>
            <Separator />
            <Text>
              Con <strong>Debord Design</strong>, puedes gestionar la apariencia
              de tus componentes de manera eficiente, manteniendo un estilo
              consistente en toda tu aplicación. Esto es especialmente útil en
              aplicaciones complejas donde la presentación visual y la
              accesibilidad son igualmente importantes. Crear interfaces
              atractivas y funcionales se convierte en una tarea más sencilla y
              eficaz.
            </Text>
          </div>
          <div>
            <FooterHeader />
          </div>
        </div>
      </main>
    </>
  );
}
