import { ref } from "../ref";

test("ref", () => {
  expect(ref("a")({ a: "b" })).toEqual({ color: "b" });
});
