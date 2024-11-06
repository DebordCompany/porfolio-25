import { Separator, Text } from "debord-design";
import TextBlock from "@/app/components/design/sections/TextBlock";
import Props from "@/app/components/design/sections/Props";
import data from "@/lib/data/props.json";
export default function TextPage() {
  return (
    <>
      <TextBlock
        title="Text Component"
        texts={["Componente texto preformateado para poder poner parrafos"]}
      />
      <Separator />
      <div>
        <Text>Soy un texto de ejemplo</Text>
      </div>
      <Separator />
      <div>
        <Text>
          Este componente es muy simple pero a su vez efectivo, olvídate de los
          párrafos, solo pon tu texto aquí y la magia surge
        </Text>
      </div>
      <Separator />
      <Props data={data.text} />
    </>
  );
}
