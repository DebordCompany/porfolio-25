import BoldTypography from "../../ui/utils/BoldTypography";
import { Separator } from "../Separator";
import { Title } from "../Title";
import TextBlock from "./TextBlock";
import { Chip } from "../Chip";
import Link from "next/link";

export default function Props({ data }) {
  return (
    <>
      <Separator />
      <TextBlock
        level="h2"
        title="Props"
        texts={[
          `Áqui puedes encontrar las props que tiene el componente **${data.name}**`,
        ]}
      />
      <Separator />

      <hr />
      {data.props.map((item) => {
        return (
          <div key={item}>
            <div className="flex items-center gap-6 py-4">
              <Title variant="h4">{item.name}:</Title>
              <ul className="flex flex-wrap gap-2">
                {item.values.map((value) => {
                  return (
                    <li
                      key={value}
                      className="text-blue-500 dark:text-amber-500"
                    >{`"${value}",`}</li>
                  );
                })}
              </ul>
            </div>
            <hr />
          </div>
        );
      })}
      {data.explain && (
        <div>
          <div className="py-4 flex gap-6">
            <Title variant="h4">Datos adicionales:</Title>
            <BoldTypography text={data.explain} />
          </div>
          <hr />
        </div>
      )}
      <Separator />
      {data.relations.map((relation) => {
        return (
          <Link href={relation.route} key={relation}>
            <Chip colors="secondary" variant="line">
              {relation.name}
            </Chip>
          </Link>
        );
      })}
    </>
  );
}
