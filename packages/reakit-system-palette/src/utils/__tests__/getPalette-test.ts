import { getPalette } from "../getPalette";

test("getPalette", () => {
  expect(getPalette({ a: "blue" }, "a")).toBe("blue");
});

test("getPalette fallback", () => {
  expect(getPalette()).toBeUndefined();
  expect(getPalette(undefined, undefined, "a")).toBe("a");
  expect(getPalette({ a: "blue" }, "b")).toBeUndefined();
  expect(getPalette({ a: "blue" }, "b", "c")).toBe("c");
});
