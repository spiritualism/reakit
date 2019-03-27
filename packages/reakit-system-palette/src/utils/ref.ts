import { usePalette } from "./usePalette";

export function ref(palette: string, fallback?: string) {
  return () => usePalette(palette, fallback);
}
