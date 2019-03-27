import { Shades, Palette, Color, ShadesObject } from "./__types";
import { isShades } from "./__isShades";

function parseShade(
  palette: Palette,
  shades: Color | Shades,
  level: keyof ShadesObject = 500,
  fallback?: string
): { color?: string; contrast?: string } {
  if (typeof shades === "function") {
    return parseShade(palette, shades(palette), undefined, fallback);
  }

  const color = isShades(shades) ? shades[level] : shades;

  if (typeof color === "function") {
    return parseShade(palette, color(palette), undefined, fallback);
  }
  if (color == null) {
    return { color: fallback };
  }
  if (typeof color === "string") {
    return { color };
  }

  if (color.color == null) {
    return {};
  }

  const colorObject = parseShade(palette, color.color, level, fallback);
  const contrastObject =
    color.contrast && parseShade(palette, color.contrast, level, fallback);

  return {
    color: colorObject.color,
    contrast: (contrastObject && contrastObject.color) || colorObject.contrast
  };
}

export function getPalette(
  palette?: Palette,
  name?: string,
  fallback?: string
) {
  if (!name || !palette) return { color: fallback };

  const hasDot = name.indexOf(".") !== -1;
  const [actualName, level = 500] = hasDot ? name.split(".") : [name];

  if (!(actualName in palette)) return { color: fallback };

  const intLevel = typeof level === "number" ? level : parseInt(level, 10);
  const shades = palette[actualName];

  return parseShade(palette, shades, intLevel as keyof Shades, fallback);
}
