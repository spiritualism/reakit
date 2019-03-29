import * as React from "react";
import Color from "color";

export function lighten(color: string, ratio: number) {
  return Color(color)
    .lighten(ratio)
    .hex()
    .toString();
}

export function useLighten(color: string, ratio: number) {
  return React.useMemo(() => lighten(color, ratio), [color, ratio]);
}
