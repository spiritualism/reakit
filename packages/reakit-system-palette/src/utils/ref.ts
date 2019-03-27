import { Palette } from "./__types";
import { getPalette } from "./getPalette";

export function ref(name: string, fallback?: string) {
  return (palette: Palette) => getPalette(palette, name, fallback);
}
