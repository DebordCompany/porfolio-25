export default function Separator({ height = 4, className = "" }) {
  const spaces = [
    { id: 1, value: "pt-1" },
    { id: 2, value: "pt-2" },
    { id: 3, value: "pt-4" },
    { id: 4, value: "pt-6" },
    { id: 5, value: "pt-8" },
    { id: 6, value: "pt-12" },
  ];
  function getHeight() {
    const result = spaces.find((item) => item.id === height);
    return result?.value;
  }
  return <div className={`w-full ${getHeight()} ${className}`}></div>;
}
