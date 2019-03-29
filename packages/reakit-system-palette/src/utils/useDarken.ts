import * as React from "react";
import Color from "color";

export function darken(color: string, ratio: number) {
  return Color(color)
    .darken(ratio)
    .hex()
    .toString();
}

export function useDarken(color: string, ratio: number) {
  return React.useMemo(() => darken(color, ratio), [color, ratio]);
}
