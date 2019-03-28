import Color from "color";
import { ShadesObject } from "./__types";
import { ref } from "./ref";

function getContrast(color: Color) {
  return color.isLight() ? ref("black") : ref("white");
}

export function shades(reference: string): ShadesObject {
  const color = Color(reference);
  const contrast = getContrast(color);
  const object = { 500: { color: reference, contrast } };

  // lighten (500-)
  for (let level: keyof typeof object = 500; level >= 100; level -= 100) {
    const newColor = color.lighten((500 - level) / 500);
    object[level] = {
      color: newColor.hex().toString(),
      contrast: getContrast(newColor)
    };
  }

  // darken (500+)
  for (let level: keyof typeof object = 500; level <= 900; level += 100) {
    const newColor = color.darken((level - 500) / 500);
    object[level] = {
      color: newColor.hex().toString(),
      contrast: getContrast(newColor)
    };
  }

  return object;
}
