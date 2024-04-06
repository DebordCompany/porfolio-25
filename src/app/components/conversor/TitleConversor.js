export default function TitleConversor({ title, subtitle }) {
  return (
    <>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="pt-4">{subtitle}</p>
    </>
  );
}
