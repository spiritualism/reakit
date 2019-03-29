export type Palette = {
  [key: string]: string | ((palette: Palette) => Palette[string]);
};
