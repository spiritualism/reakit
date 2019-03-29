import * as React from "react";
import Color from "color";

export function fade(color: string, ratio: number) {
  return Color(color)
    .fade(ratio)
    .rgb()
    .toString();
}

export function useFade(color: string, ratio: number) {
  return React.useMemo(() => fade(color, ratio), [color, ratio]);
}
