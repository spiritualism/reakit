import * as React from "react";
import { css } from "emotion";

export function useStyle(
  strings: TemplateStringsArray,
  ...interpolations: any[]
) {
  return React.useMemo(() => css(strings, ...interpolations), interpolations);
}
