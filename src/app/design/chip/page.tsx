import InfoWarning from "@/app/components/design/sections/InfoWarning";
import Props from "@/app/components/design/sections/Props";
import TextBlock from "@/app/components/design/sections/TextBlock";
import { Separator, Chip } from "debord-design";
import props from "@/lib/data/props.json";

export default function ChipPage() {
  const chipColors = [
    "default",
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
  ];
  return (
    <>
      <TextBlock
        title="Chip"
        texts={[
          "El componente Chip es un elemento versátil y compacto diseñado para mostrar información concisa de manera clara y visualmente atractiva. **Los chips se utilizan comúnmente para representar etiquetas, categorías, opciones seleccionables o para filtrar contenido**. Su diseño flexible permite una fácil integración en diversos contextos de tu aplicación.",
        ]}
      />
      <Separator />
      <div>
        <TextBlock
          level="h2"
          title="Estilos"
          texts={[
            "El componente chip se puede personalizar de varias maneras, desde el radio del borde, la sombra estilo vintage, los colores o sí es relleno o solo linea exterior.",
            "La opción por defecto es line con color default y radio del borde como una pildora.",
          ]}
        />
        <Separator />
        <div className="flex flex-wrap gap-4">
          <Chip>Chip</Chip>
          <Chip rounded="none">Chip</Chip>
          <Chip shadow="vintage" rounded="small">
            Chip
          </Chip>
        </div>
        <Separator />
        <InfoWarning>
          <strong>¡Importante!</strong> La variante {"fill"}{" "}
          <strong>no soporta</strong> la opción {"shadow='vintage'"}, en estas
          primeras versiones. Estamos trabajando para arreglar este problema.
        </InfoWarning>
        <Separator />
        <TextBlock
          title="Colores"
          texts={[
            "Los colores son personalizables a nivel de tema o por clases css, aquí te mostramos los colores que incluimos en nuestro tema.",
          ]}
        />
        <Separator />
        <div className="flex flex-wrap gap-2">
          {chipColors.map((item, index) => {
            return (
              <Chip key={index} variant="fill" colors={item}>
                {item}
              </Chip>
            );
          })}
        </div>
      </div>
      <Separator />
      <Props data={props.chip} />
    </>
  );
}
