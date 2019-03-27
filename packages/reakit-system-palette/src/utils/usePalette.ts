import * as React from "react";
import { useToken } from "reakit/system/useToken";
import { Palette } from "./__types";
import { getPalette } from "./getPalette";

export function usePalette(
  name?: string,
  fallback?: string
): { color?: string; contrast?: string } {
  React.useDebugValue(name || "(not set)");
  const palette = useToken<Palette>("palette");
  return getPalette(palette, name, fallback);
}
