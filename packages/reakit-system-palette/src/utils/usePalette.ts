import * as React from "react";
import { useToken } from "reakit/system/useToken";

// TODO: Function gets paletteSystem as parameter, which avoids calling useContext
type Color = string | { color: Color; contrast?: Color } | (() => Color);

type Shades = {
  50?: Color;
  100?: Color;
  200?: Color;
  300?: Color;
  400?: Color;
  500?: Color;
  600?: Color;
  700?: Color;
  800?: Color;
  900?: Color;
};

type Palette = {
  [key: string]: Color | Shades | (() => Shades);
};

function isShades(shades: Palette[string]): shades is Shades {
  return (
    typeof shades === "object" &&
    shades != null &&
    !("color" in shades) &&
    !("contrast" in shades)
  );
}

function parseColor(
  color?: Color,
  fallback?: string
): { color?: string; contrast?: string } {
  if (color == null) {
    return { color: fallback };
  }
  if (typeof color === "string") {
    return { color };
  }
  if (typeof color === "function") {
    return parseColor(color());
  }
  return {
    color: parseColor(color.color).color,
    contrast: parseColor(color.contrast).color
  };
}

function parseShades(
  shades: Palette[string],
  level: keyof Shades,
  fallback?: string
): { color?: string; contrast?: string } {
  if (typeof shades === "function") {
    return parseShades(shades(), level);
  }
  return parseColor(isShades(shades) ? shades[level] : shades, fallback);
}

export function usePalette(
  palette?: string,
  fallback?: string
): { color?: string; contrast?: string } {
  React.useDebugValue(palette || "(not set)");
  const paletteSystem = useToken<Palette>("palette");

  // TODO: Warn if no fallback is provided and palette doesn't exist in system
  if (!palette || !paletteSystem) return { color: fallback };

  const [paletteName, level = 500] = palette.split(".");

  if (!(paletteName in paletteSystem)) return { color: fallback };

  const intLevel = typeof level === "number" ? level : parseInt(level, 10);
  const shades = paletteSystem[paletteName];

  return parseShades(shades, intLevel as keyof Shades);
}
