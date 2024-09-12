/* eslint-disable @next/next/no-img-element */
import { Separator, Title } from "debord-design";
import TextBlock from "@/app/components/design/sections/TextBlock";
import Props from "@/app/components/design/sections/Props";
import data from "@/lib/data/props.json";

const cards = [
  "laksjdflkjasdf ldjfsadf lksjdf  sldkfj asldkfasd ñlkasdj alsdkfj asdflkj asdflkjasdf ",
  "as",
  "adsfasdf asdfasdf asd fasd",
  "sdfsdfsdfa",
  "asdf asdf asd fasd fas df sadf asdf a",
];
export default function TitleComponentPage() {
  return (
    <>
      <TextBlock
        title={"Title Component"}
        texts={[
          "El componente Title es la base para mostrar títulos y encabezados en tu aplicación. Proporciona una manera consistente de estructurar la información jerárquicamente, **mejorando la legibilidad y la accesibilidad de tu contenido**.",
        ]}
      />

      <Separator />
      <div className="flex flex-col gap-3">
        <Title
          level="p"
          variant="h2"
          className="text-neutral-800 dark:text-neutral-50"
        >
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
      <TextBlock
        level="h2"
        title="Estilos por defecto:"
        texts={[
          "Por defecto tanto la apariencia como la semantica son las de un **encabezado de primer nivel (h1)**, como hemos visto en el ejemplo anterior se pueden cambiar.",
          "El **color del texto** dadas la gran variedad de colores que demandan los proyectos hemos decidido que se otorguen por **clases css** y asi dar soporte a todos los publicos.",
        ]}
      />
      <Props data={data.title} />
    </>
  );
}
