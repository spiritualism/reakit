import { Color, Shades, ShadesObject } from "./__types";

export function isShades(shades: Color | Shades): shades is ShadesObject {
  return (
    typeof shades === "object" &&
    shades != null &&
    !("color" in shades) &&
    !("contrast" in shades)
  );
}
