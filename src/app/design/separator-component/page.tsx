import Title from "@/app/components/design/Title";
import Text from "@/app/components/design/Text";
import { Separator } from "@/app/components/design/Separator";

const separators: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function SeparatorPage() {
  return (
    <>
      <Separator />
      <Title>Separator</Title>
      <Text>
        Componente para separar secciones uniformemente, este pensado para
        maquetar rápido y dividir secciones
      </Text>
      <Separator />
      <Title>Modo de uso:</Title>
      <Text>
        La funcion es simple, un contenedor que maneja el espacio mediate
        padding, tiene dos props, <strong>height</strong> preconfigurada en una
        escala del <strong>1 al 10</strong> y una segunda prop{" "}
        <strong>className</strong> que permite añadirle la clase que quieras.
      </Text>
      <Text>A continuación te muestro un ejemplo visual de como funciona</Text>
      <Separator />
      <div className="grid grid-cols-1 gap-4">
        {separators.map((item) => {
          return (
            <div>
              <span>Height: {item}</span>
              <div className="border-2 border-amber-500 rounded-sm">
                <Separator height={item} />
              </div>
            </div>
          );
        })}

        <div>
          <span>className: p-{"[300px]"}</span>
          <div className="border-2 border-amber-500 rounded-sm">
            <Separator className="p-[300px]" />
          </div>
        </div>
      </div>
    </>
  );
}
