import { Title, Text } from "debord-design";
import BoldTypography from "../../ui/utils/BoldTypography";

export interface TextBlockType {
  title: string;
  texts: string[];
  level?: string;
}
export default function TextBlock({ title, texts, level }: TextBlockType) {
  return (
    <section className="flex flex-col gap-1">
      <Title className="pb-2" level={level}>
        {title}
      </Title>
      {texts.map((text, index) => {
        return (
          <Text key={index}>
            <BoldTypography text={text} />
          </Text>
        );
      })}
    </section>
  );
}
