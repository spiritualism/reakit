import { getPalette } from "../getPalette";

test("string color", () => {
  expect(getPalette({ a: "blue" }, "a")).toEqual({ color: "blue" });
});

test("string color fallback", () => {
  expect(getPalette()).toEqual({ color: undefined });
  expect(getPalette(undefined, undefined, "a")).toEqual({ color: "a" });
  expect(getPalette({ a: "blue" }, "b")).toEqual({ color: undefined });
  expect(getPalette({ a: "blue" }, "b", "c")).toEqual({ color: "c" });
});

test("string color with function", () => {
  expect(
    getPalette({ a: palette => palette.b as string, b: "red" }, "a")
  ).toEqual({
    color: "red"
  });
});

test("string color with function with fallback", () => {
  expect(
    getPalette({ a: palette => palette.b as any, b: "red" }, "c", "d")
  ).toEqual({
    color: "d"
  });
});

test("object color", () => {
  expect(getPalette({ a: { color: "blue" } }, "a")).toEqual({
    color: "blue"
  });
});

test("object color with contrast", () => {
  expect(getPalette({ a: { color: "blue", contrast: "red" } }, "a")).toEqual({
    color: "blue",
    contrast: "red"
  });
});

test("object color with function", () => {
  expect(
    getPalette({ a: palette => palette.b as any, b: { color: "blue" } }, "a")
  ).toEqual({
    color: "blue"
  });
});

test("object color with function with contrast", () => {
  expect(
    getPalette(
      { a: palette => palette.b as any, b: { color: "blue", contrast: "red" } },
      "a"
    )
  ).toEqual({
    color: "blue",
    contrast: "red"
  });
});

test("object color with with function inside", () => {
  expect(
    getPalette(
      {
        a: { color: palette => palette.b as any },
        b: { color: "blue", contrast: "red" }
      },
      "a"
    )
  ).toEqual({
    color: "blue",
    contrast: "red"
  });
});

test("object color with with function inside with contrast", () => {
  expect(
    getPalette(
      {
        a: { color: palette => palette.b as any, contrast: "green" },
        b: { color: "blue", contrast: "red" }
      },
      "a"
    )
  ).toEqual({
    color: "blue",
    contrast: "green"
  });
});

test("object color with with contrast function inside", () => {
  expect(
    getPalette(
      {
        a: { color: "red", contrast: palette => palette.b as any },
        b: { color: "blue", contrast: "red" }
      },
      "a"
    )
  ).toEqual({
    color: "red",
    contrast: "blue"
  });
});

test("shades with string", () => {
  expect(getPalette({ a: { 500: "blue" } }, "a")).toEqual({
    color: "blue"
  });
});

test("shades with color", () => {
  expect(getPalette({ a: { 500: { color: "blue" } } }, "a")).toEqual({
    color: "blue"
  });
});

test("shades with color with contrast", () => {
  expect(
    getPalette({ a: { 500: { color: "blue", contrast: "red" } } }, "a")
  ).toEqual({
    color: "blue",
    contrast: "red"
  });
});

test("shades with dot name", () => {
  expect(
    getPalette({ a: { 200: { color: "blue", contrast: "red" } } }, "a.200")
  ).toEqual({
    color: "blue",
    contrast: "red"
  });
});

test("shades with dot name fallback", () => {
  expect(
    getPalette({ a: { 200: { color: "blue", contrast: "red" } } }, "a.300", "b")
  ).toEqual({
    color: "b"
  });
});

test("shades with function", () => {
  expect(
    getPalette(
      { a: { 300: palette => palette.b as any }, b: { 500: "blue" } },
      "a.300"
    )
  ).toEqual({
    color: "blue"
  });
});
