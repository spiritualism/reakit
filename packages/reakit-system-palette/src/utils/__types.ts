export type Color =
  | string
  | { color?: Color; contrast?: Color }
  | ((palette: Palette) => Color);

export type ShadesObject = Record<string | number, Color>;

export type Shades = ShadesObject | ((palette: Palette) => Shades);

export type Palette = {
  [key: string]: Color | Shades;
};
