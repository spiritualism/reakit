import { Palette } from "./__types";

export function getPalette(
  palette?: Palette,
  name?: string,
  fallback?: string
) {
  if (!name || !palette) return fallback;

  let color = palette[name]; // color type is string or function

  while (typeof color === "function") {
    color = color(palette);
  }

  return color || fallback; // color type is string
}
