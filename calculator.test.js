const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe("sum", () => {
  test("can add two small positive numbers", () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test("can add two large positive numbers", () => {
    expected = 105000;
    actual = sum(100, 104900);
    expect(actual).toBe(expected);
  });

  test("can add two negative numbers", () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test("can add zero", () => {
    expected = 5;
    actual = sum(5, 0);
    expect(actual).toBe(expected);
  });
});

describe("subtract", () => {});

describe("multiply", () => {});

describe("divide", () => {});

describe("modulus", () => {});

describe("even", () => {});

describe("odd", () => {});
