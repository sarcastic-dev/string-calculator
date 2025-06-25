const { add } = require("../src/stringCalculator");

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself if only one number is provided", () => {
    expect(add("5")).toBe(5);
  });

  test("returns the sum of two comma-separated numbers", () => {
    expect(add("3,7")).toBe(10);
  });
});
