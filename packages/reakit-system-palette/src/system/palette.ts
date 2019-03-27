import { ref } from "../utils/ref";

export const palette = {
  white: {
    color: "#ffffff",
    contrast: ref("black")
  },

  whiteText: ref("black"),

  black: "#212121",
  blackText: ref("white"),

  // https://coolors.co/2196f3-42a5f5-64b5f6-90caf9-bbdefb
  primary: ["#2196f3", "#42a5f5", "#64b5f6", "#90caf9", "#bbdefb"],
  primaryText: [
    ref("white"),
    ref("white"),
    ref("black"),
    ref("black"),
    ref("black")
  ],

  // https://coolors.co/e91e63-ec407a-f06292-f48fb1-f8bbd0
  secondary: ["#e91e63", "#ec407a", "#f06292", "#f48fb1", "#f8bbd0"],
  secondaryText: [
    ref("white"),
    ref("white"),
    ref("black"),
    ref("black"),
    ref("black")
  ],

  // https://coolors.co/f44336-ef5350-e57373-ef9a9a-ffcdd2
  danger: ["#f44336", "#ef5350", "#e57373", "#ef9a9a", "#ffcdd2"],
  dangerText: [
    ref("white"),
    ref("white"),
    ref("black"),
    ref("black"),
    ref("black")
  ],

  // https://coolors.co/ffc107-ffca28-ffd54f-ffe082-ffecb3
  alert: ["#ffc107", "#ffca28", "#ffd54f", "#ffe082", "#ffecb3"],
  alertText: [
    ref("black"),
    ref("black"),
    ref("black"),
    ref("black"),
    ref("black")
  ],

  // https://coolors.co/4caf50-66bb6a-81c784-a5d6a7-c8e6c9
  success: ["#4caf50", "#66bb6a", "#81c784", "#a5d6a7", "#c8e6c9"],
  successText: [
    ref("white"),
    ref("white"),
    ref("white"),
    ref("black"),
    ref("black")
  ],

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
  },

  grayscaleText: [
    ref("white"),
    ref("white"),
    ref("white"),
    ref("black"),
    ref("black"),
    ref("black"),
    ref("black"),
    ref("black")
  ],

  background: [
    ref("grayscale.-4"),
    ref("grayscale.-3"),
    ref("grayscale.-2"),
    ref("grayscale.-1")
  ],
  backgroundText: ref("black"),

  shadow: [
    "rgba(0, 0, 0, 0.9)",
    "rgba(0, 0, 0, 0.7)",
    "rgba(0, 0, 0, 0.5)",
    "rgba(0, 0, 0, 0.3)",
    "rgba(0, 0, 0, 0.15)",
    "rgba(0, 0, 0, 0.075)"
  ],
  shadowText: [
    ref("white"),
    ref("white"),
    ref("white"),
    ref("black"),
    ref("black"),
    ref("black")
  ],

  transparent: "transparent",
  transparentText: ref("black"),

  border: ref("shadow.-2")
};
