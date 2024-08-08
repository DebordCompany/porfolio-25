export const colors = [{ name: "primary", color: "#9fa" }];
export function getColor(prop) {
  const { color } = colors.find((item) => item.name === prop);
  const contrastColor = color;
  return color;
}
