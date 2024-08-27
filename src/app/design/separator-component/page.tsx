import Props from "@/app/components/design/sections/Props";
import { Separator } from "@/app/components/design/Separator";
import TextBlock from "@/app/components/design/sections/TextBlock";
import data from "@/lib/data/props.json";

const separators: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function SeparatorPage() {
  return (
    <>
      <Separator />
      <TextBlock
        title={"Separator"}
        texts={[
          "Componente para separar secciones uniformemente, este pensado para maquetar rápido y dividir secciones",
        ]}
      />

      <Separator />
      <TextBlock
        title="Modo de uso:"
        texts={[
          "La funcion es simple, un contenedor que maneja el espacio mediate  padding, tiene dos props, **height** preconfigurada en una escala del **1 al 10** y una segunda prop **className** donde puedes añadir las clases css que tú quieras.",
          "A continuación te muestro un ejemplo visual de como funciona:",
        ]}
        level="h2"
      />
      <Separator />
      <div className="grid grid-cols-1 gap-4">
        {separators.map((item, index) => {
          return (
            <div key={index}>
              <span>Height: {item}</span>
              <div className="border-2 border-amber-500 rounded-sm">
                <Separator height={item} />
              </div>
            </div>
          );
        })}

        <div>
          <span>className: pt-{"[300px]"}</span>
          <div className="border-2 border-amber-500 rounded-sm">
            <Separator className="pt-[300px]" />
          </div>
        </div>
      </div>
      <Props data={data.separator} />
    </>
  );
}
