import { Title } from "../Title";
import Text from "../Text";
export default function Hero({ title, subtitle }) {
  return (
    <section className="flex flex-col gap-6">
      <Title>{title}</Title>
      <Text>{subtitle}</Text>
    </section>
  );
}
