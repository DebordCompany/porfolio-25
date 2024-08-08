import Hero from "@/app/components/design/sections/Hero";
import Separator from "@/app/components/design/Separator";
import Button from "@/app/components/design/Button";

export default function ButtonPage() {
  return (
    <>
      <Hero
        title={"Button"}
        subtitle={
          "Descubre cómo nuestro botón interactivo mejora la experiencia de usuario, con opciones personalizables y una integración sencilla en cualquier proyecto. Aprende a implementarlo y configurarlo según tus necesidades, optimizando la funcionalidad y el diseño de tu interfaz de usuario. ¡Explora sus características y maximiza la eficiencia en tu desarrollo web!."
        }
      />
      <Separator />
      <Button outline rounded>
        Soy un boton
      </Button>
    </>
  );
}
