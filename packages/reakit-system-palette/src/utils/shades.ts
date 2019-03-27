import createColor from "color";
import { Shades, Color, ShadesObject } from "./__types";
import { ref } from "./ref";
import { isShades } from "./__isShades";

function getContrast(color: ReturnType<typeof createColor>) {
  return color.isLight() ? ref("black") : ref("white");
}

export function shades(reference: Color | Shades): ShadesObject {
  if (typeof reference === "string") {
    const color = createColor(reference);
    const contrast = getContrast(color);
    const object = { 500: { color: reference, contrast } };

    for (let level: keyof typeof object = 500; level >= 100; level -= 100) {
      const newColor = color.lighten((500 - level) / 500);
      object[level] = {
        color: newColor.hex().toString(),
        contrast: getContrast(newColor)
      };
    }

    for (let level: keyof typeof object = 500; level <= 900; level += 100) {
      const newColor = color.darken((level - 500) / 500);
      object[level] = {
        color: newColor.hex().toString(),
        contrast: getContrast(newColor)
      };
    }

    return object;
  }
  if (isShades(reference)) {
    const keys = Object.keys(reference)
      .map(key => parseInt(key, 10))
      .sort() as Array<keyof typeof reference>;
    const value = reference[keys[0]]!;
    if (!isShades(value)) {
      return shades(value);
    }
    const color = createColor(value && "color" in value ? value.color : value);

    for (let level = keys[0] - 100; level >= 100; level -= 100) {
      // const color = createColor(isObject reference[level].)
    }
  }
  return {};
}
