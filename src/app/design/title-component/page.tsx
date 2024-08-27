/* eslint-disable @next/next/no-img-element */
import { Title } from "@/app/components/design/Title";
import Text from "@/app/components/design/Text";
import { Separator } from "@/app/components/design/Separator";
import TextBlock from "@/app/components/design/sections/TextBlock";
import { Card } from "@/app/components/design/Card";
import { CardContent } from "@/app/components/design/Card/CardContent";
import Button from "@/app/components/design/Button";

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
          variant="h1"
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
        title="Estilos por defecto:"
        texts={[
          "Por defecto tanto la apariencia como la semantica son las de un **encabezado de primer nivel (h1)**, como hemos visto en el ejemplo anterior se pueden cambiar.",
          "El **color del texto** dadas la gran variedad de colores que demandan los proyectos hemos decidido que se otorguen por **clases css** y asi dar soporte a todos los publicos.",
        ]}
      />
      <div className="grid grid-cols-3 pt-12 gap-3">
        <Card shadow="vintage">
          <img
            src="/img/2GoTours.webp"
            alt=""
            className="w-full aspect-video object-cover"
          />
          <CardContent className="flex flex-col justify-between ">
            <Title variant="h3">Huevos rotos con jamon</Title>
            <Text className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              consectetur eligendi labore officia exercitationem neque!
            </Text>
            <Button variant="line">click</Button>
          </CardContent>
        </Card>
        <Card shadow="vintage">
          <img
            src="/img/2GoTours.webp"
            alt=""
            className="w-full aspect-video object-cover"
          />
          <CardContent className="flex flex-col justify-between">
            <div>
              <Title variant="h3">
                Sardina ahumada con reduccion de martini y miel
              </Title>
              <Text className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                consectetur eligendi labore officia exercitationem neque!
              </Text>
            </div>
            <Button variant="line">click</Button>
          </CardContent>
        </Card>
        <Card shadow="vintage">
          <img
            src="/img/2GoTours.webp"
            alt=""
            className="w-full aspect-video object-cover"
          />
          <CardContent className="flex flex-col justify-between h-max">
            <div>
              <Title variant="h3">
                Mollejas de cordero risoladas con su jugo
              </Title>
              <Text className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                consectetur eligendi labore officia exercitationem neque!
              </Text>
            </div>
            <Button variant="line">click</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
