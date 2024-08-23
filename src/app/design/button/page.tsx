"use client";
import Hero from "@/app/components/design/sections/Hero";
import Separator from "@/app/components/design/Separator";
import Button from "@/app/components/design/Button";
import Title from "@/app/components/design/Title";
import Text from "@/app/components/design/Text";
import List from "@/app/components/design/List";
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
      <Hero
        title={"Button"}
        subtitle={
          "Descubre cómo nuestro botón interactivo mejora la experiencia de usuario, con opciones personalizables y una integración sencilla en cualquier proyecto. Aprende a implementarlo y configurarlo según tus necesidades, optimizando la funcionalidad y el diseño de tu interfaz de usuario. ¡Explora sus características y maximiza la eficiencia en tu desarrollo web!."
        }
      />
      <Separator />
      <div>
        <Title>Estilos</Title>
        <Text>Cuatro estilos diferentes de botón</Text>
        <List items={variants} />
        <Text>
          Estan diseñados para incluir directamente en cualquier diseño que
          necesites, todas ellas cuentan con version oscura.
        </Text>
        <Separator />

        <div className="flex gap-4">
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
        <Title>Colores:</Title>
        <Text>
          Puedes usar nuestro colores por defecto{" "}
          <strong>
            {"(default, white, primary, secondary, success, error, warning)"}
          </strong>
          , este componente de momento no es personalizable de manera nativa,
          pero puede ser configurado de manera aditiva con clases css.
        </Text>
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
    </>
  );
}
