import { shades } from "../shades";

test("shades", () => {
  expect(shades("red")).toMatchInlineSnapshot(`
Object {
  "100": Object {
    "color": "#FFCCCC",
    "contrast": [Function],
  },
  "200": Object {
    "color": "#FF9999",
    "contrast": [Function],
  },
  "300": Object {
    "color": "#FF6666",
    "contrast": [Function],
  },
  "400": Object {
    "color": "#FF3333",
    "contrast": [Function],
  },
  "500": Object {
    "color": "#FF0000",
    "contrast": [Function],
  },
  "600": Object {
    "color": "#CC0000",
    "contrast": [Function],
  },
  "700": Object {
    "color": "#990000",
    "contrast": [Function],
  },
  "800": Object {
    "color": "#660000",
    "contrast": [Function],
  },
  "900": Object {
    "color": "#330000",
    "contrast": [Function],
  },
}
`);
});
