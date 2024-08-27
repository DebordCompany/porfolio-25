"use client";
import TextBlock from "@/app/components/design/sections/TextBlock";
import { Separator } from "@/app/components/design/Separator";
import Button from "@/app/components/design/Button";
import { Title } from "@/app/components/design/Title";
import Text from "@/app/components/design/Text";
import List from "@/app/components/design/List";
import Props from "@/app/components/design/sections/Props";
import data from "@/lib/data/props.json";

type ButtonVariant = "line" | "basic" | "fill" | "vintage";
type ButtonColor =
  | "default"
  | "white"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning";
type ButtonRounded = "small" | "pill" | "extra" | "medium" | "big";

// Definir la interfaz para un solo botón
interface ButtonType {
  text?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  rounded?: ButtonRounded;
}
const buttons: ButtonType[] = [
  { text: "default", variant: "line", color: "default" },
  { text: "white", variant: "basic", color: "white" },
  { text: "primary", variant: "fill", color: "primary", rounded: "small" },
  {
    text: "secondary",
    variant: "vintage",
    color: "secondary",
    rounded: "pill",
  },
  { text: "success", variant: "fill", color: "success", rounded: "extra" },
  { text: "error", variant: "vintage", color: "error", rounded: "medium" },
  { text: "warning", variant: "line", color: "warning", rounded: "big" },
];
const variants: ButtonVariant[] = ["line", "basic", "fill", "vintage"];
const colors: ButtonColor[] = [
  "default",
  "white",
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
];
export default function ButtonPage() {
  function handlerClick(item) {
    console.log(item);
  }
  return (
    <>
      <TextBlock
        title={"Button"}
        texts={[
          "Descubre cómo nuestro botón interactivo mejora la experiencia de usuario, con opciones personalizables y una integración sencilla en cualquier proyecto. Aprende a implementarlo y configurarlo según tus necesidades, optimizando la funcionalidad y el diseño de tu interfaz de usuario. ¡Explora sus características y maximiza la eficiencia en tu desarrollo web!.",
        ]}
      />
      <Separator />
      <div>
        <TextBlock
          title="Estilos"
          texts={["Cuatro estilos diferentes de botón"]}
          level="h2"
        />
        <div className="py-3">
          <List items={variants} />
        </div>
        <Text>
          Estan diseñados para incluir directamente en cualquier diseño que
          necesites, todas ellas cuentan con version oscura.
        </Text>
        <Separator />

        <div className="flex flex-wrap gap-4">
          {variants.map((item, index) => {
            return (
              <Button key={index} variant={item}>
                {item}
              </Button>
            );
          })}
        </div>
      </div>
      <Separator />
      <div>
        <TextBlock
          title="Colores:"
          texts={[
            "Puedes usar nuestro colores por defecto **(default, white, primary, secondary, success, error, warning)** , este componente de momento no es personalizable de manera nativa, pero puede ser configurado de manera aditiva con clases css.",
          ]}
          level="h2"
        />

        <Separator />
        <div className="flex gap-4 flex-wrap">
          {colors.map((item, index) => {
            return (
              <Button key={index} colors={item} variant="fill">
                {item}
              </Button>
            );
          })}
        </div>
      </div>
      <Props data={data.button} />
    </>
  );
}
