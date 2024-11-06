import Pre from "@/app/components/design/Pre";
import InfoWarning from "@/app/components/design/sections/InfoWarning";
import Props from "@/app/components/design/sections/Props";
import TextBlock from "@/app/components/design/sections/TextBlock";
import data from "@/lib/data/props.json";
import { simpleCard } from "@/lib/data/code";
import {
  Separator,
  Card,
  CardContent,
  CardMedia,
  CardSpacing,
  Title,
  Text,
  Button,
} from "debord-design";
export default function CardPage() {
  const cardExample = ["none", "small", "medium", "big", "extra", "vintage"];
  return (
    <>
      <TextBlock
        title="Card"
        texts={[
          "El componente Card es un **contenedor flexible y visualmente atractivo** diseñado para presentar contenido relacionado de manera organizada y destacada.",
          "El componente card se compone de subcomponentes: **CardContent, CardMedia y CardSpacing**. Cada uno tiene su posicion y su función. ",
        ]}
      />
      <Separator />

      <div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card shadow="big">
              <CardContent>
                <CardMedia
                  height={250}
                  src="/img/debord6.webp"
                  alt="imagen de ejemplo para tarjeta"
                />
                <CardSpacing>
                  <Title variant="h3">Título de ejemplo</Title>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, sequi?
                  </Text>
                </CardSpacing>
              </CardContent>
              <CardSpacing>
                <Button variant="fill" rounded="medium" shadow="medium">
                  Action
                </Button>
              </CardSpacing>
            </Card>
            <Card line="big">
              <CardContent>
                <CardMedia
                  height={250}
                  src="/img/debord11.webp"
                  alt="imagen de ejemplo para tarjeta"
                />
                <CardSpacing>
                  <Title variant="h3">Título de ejemplo</Title>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, sequi?
                  </Text>
                </CardSpacing>
              </CardContent>
              <CardSpacing>
                <Button variant="fill" rounded="medium" shadow="medium">
                  Action
                </Button>
              </CardSpacing>
            </Card>
          </div>
          <Separator />
          <Text>
            La etiqueta Card por si sola presenta elevación mediante sombra y
            estilos de caja, pero no comporta padding por ejemplo.
          </Text>
          <Separator height={4} />
          <Text>
            Para el padding tenemos la etiqueta CardSpacing como se ve en el
            ejemplo
          </Text>

          <Separator />
          <Pre>{simpleCard}</Pre>
          <Separator />
          <InfoWarning>
            El componente {"'Card'"} esta configurado para ser{" "}
            {"'flex flex-col justify-between'"}, por tanto la estructura de
            componente debe ser de dos elementos hijos. Un elemento{" "}
            {"'CardContent'"}y un elemento {"'CardSpacing'"} reservado para las
            acciones
          </InfoWarning>
          <Separator />
        </div>
        <TextBlock
          title="Estilos"
          level="h2"
          texts={[
            "El componente card tiene varios estilos, en esta ocasión mediante la prop: shadow",
          ]}
        />
        <Separator />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {cardExample.map((item, index) => {
            return (
              <Card
                shadow={item}
                rounded="small"
                key={index}
                className="w-full"
              >
                <CardContent>
                  <CardSpacing>
                    <Title>Title</Title>
                    <hr />
                    <Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam, ipsum.
                    </Text>
                  </CardSpacing>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Separator />
        <Props data={data.card} />
      </div>
    </>
  );
}
