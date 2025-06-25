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

  test("returns the sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
    expect(add("5,5,5")).toBe(15);
  });

  test("handles newlines as valid delimiters along with commas", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4,5\n6")).toBe(15);
  });

  test("supports custom delimiter defined in format //;<newline>", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//#\n4#5#6")).toBe(15);
  });

  test("throws error when negative numbers are included", () => {
    expect(() => add("1,-2")).toThrow("negatives not allowed: -2");
    expect(() => add("2,-4,-9")).toThrow("negatives not allowed: -4,-9");
  });
});
