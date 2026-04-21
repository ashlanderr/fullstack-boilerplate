import { add } from "./utils";

test("add", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
