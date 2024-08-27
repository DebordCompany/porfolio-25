export default function BoldTypography({ text }: { text: string }) {
  const bold = text.split("**");
  return (
    <>
      {bold.map((text, index) => {
        return index % 2 === 1 ? (
          <strong key={index}>{text}</strong>
        ) : (
          <span key={index}>{text}</span>
        );
      })}
    </>
  );
}
