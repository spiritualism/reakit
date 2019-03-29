import * as React from "react";
import { unstable_useToken } from "reakit/system/useToken";
import { Palette } from "../__utils/types";
import { getPalette } from "./getPalette";

export function usePalette(name?: string, fallback?: string) {
  React.useDebugValue(name || "(not set)");
  const palette = unstable_useToken<Palette>("palette");
  return getPalette(palette, name, fallback);
}
