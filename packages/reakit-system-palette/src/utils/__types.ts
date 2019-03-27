export type Color =
  | string
  | { color?: Color; contrast?: Color }
  | ((palette: Palette) => Color);

export type ShadesObject = {
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

export type Shades = ShadesObject | ((palette: Palette) => Shades);

export type Palette = {
  [key: string]: Color | Shades;
};
