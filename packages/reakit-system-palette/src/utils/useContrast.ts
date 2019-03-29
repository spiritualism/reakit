import * as React from "react";
import Color from "color";
import { unstable_useToken } from "reakit/system/useToken";
import { Palette } from "../__utils/types";
import { getPalette } from "./getPalette";

export function useContrast(color?: string, fallback?: string) {
  const palette = unstable_useToken<Palette>("palette");
  const isLight = React.useMemo(() => Color(color).isLight(), [color]);
  if (!color) {
    return undefined;
  }
  if (isLight) {
    return getPalette(palette, "black", fallback);
  }
  return getPalette(palette, "white", fallback);
}
