import { ref } from "../utils/ref";

export const palette = {
  white: {
    color: "#ffffff",
    contrast: ref("black")
  },

  black: {
    color: "#212121",
    contrast: ref("white")
  },

  primary: {
    100: { color: "#CCE5FF", contrast: ref("black") },
    200: { color: "#99CAFF", contrast: ref("black") },
    300: { color: "#66B0FF", contrast: ref("black") },
    400: { color: "#3395FF", contrast: ref("white") },
    500: { color: "#007BFF", contrast: ref("white") },
    600: { color: "#0062CC", contrast: ref("white") },
    700: { color: "#004A99", contrast: ref("white") },
    800: { color: "#003166", contrast: ref("white") },
    900: { color: "#001933", contrast: ref("white") }
  },

  secondary: {
    100: { color: "#CED2D5", contrast: ref("black") },
    200: { color: "#B5BBBF", contrast: ref("black") },
    300: { color: "#9CA3AA", contrast: ref("black") },
    400: { color: "#838C94", contrast: ref("black") },
    500: { color: "#6C757D", contrast: ref("white") },
    600: { color: "#565E64", contrast: ref("white") },
    700: { color: "#41464B", contrast: ref("white") },
    800: { color: "#2B2F32", contrast: ref("white") },
    900: { color: "#161719", contrast: ref("white") }
  },

  success: {
    100: { color: "#90E4A3", contrast: ref("black") },
    200: { color: "#6FDC88", contrast: ref("black") },
    300: { color: "#4DD46C", contrast: ref("black") },
    400: { color: "#30C853", contrast: ref("black") },
    500: { color: "#28A745", contrast: ref("white") },
    600: { color: "#208637", contrast: ref("white") },
    700: { color: "#186429", contrast: ref("white") },
    800: { color: "#10431C", contrast: ref("white") },
    900: { color: "#08210E", contrast: ref("white") }
  },

  info: {
    100: { color: "#85E1F0", contrast: ref("black") },
    200: { color: "#60D8EB", contrast: ref("black") },
    300: { color: "#3BCFE7", contrast: ref("black") },
    400: { color: "#1CC2DD", contrast: ref("black") },
    500: { color: "#17A2B8", contrast: ref("black") },
    600: { color: "#128293", contrast: ref("black") },
    700: { color: "#0E616E", contrast: ref("black") },
    800: { color: "#09414A", contrast: ref("black") },
    900: { color: "#052025", contrast: ref("black") }
  },

  warning: {
    100: { color: "#FFF5D9", contrast: ref("black") },
    200: { color: "#FFE8A4", contrast: ref("black") },
    300: { color: "#FFDB70", contrast: ref("black") },
    400: { color: "#FFCE3B", contrast: ref("black") },
    500: { color: "#FFC107", contrast: ref("black") },
    600: { color: "#D29D00", contrast: ref("black") },
    700: { color: "#9D7600", contrast: ref("white") },
    800: { color: "#694F00", contrast: ref("white") },
    900: { color: "#342700", contrast: ref("white") }
  },

  danger: {
    100: { color: "#FCEFF0", contrast: ref("black") },
    200: { color: "#F4C1C6", contrast: ref("black") },
    300: { color: "#EC929B", contrast: ref("black") },
    400: { color: "#E46470", contrast: ref("black") },
    500: { color: "#DC3545", contrast: ref("white") },
    600: { color: "#BA202F", contrast: ref("white") },
    700: { color: "#8C1823", contrast: ref("white") },
    800: { color: "#5D1017", contrast: ref("white") },
    900: { color: "#2F080C", contrast: ref("white") }
  },

  gray: {
    100: { color: "#f8f9fa", contrast: ref("black") },
    200: { color: "#e9ecef", contrast: ref("black") },
    300: { color: "#dee2e6", contrast: ref("black") },
    400: { color: "#ced4da", contrast: ref("black") },
    500: { color: "#adb5bd", contrast: ref("black") },
    600: { color: "#6c757d", contrast: ref("white") },
    700: { color: "#495057", contrast: ref("white") },
    800: { color: "#343a40", contrast: ref("white") },
    900: { color: "#212529", contrast: ref("white") }
  }
};
