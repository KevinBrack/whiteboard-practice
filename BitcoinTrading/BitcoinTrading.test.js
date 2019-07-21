const findMaxProfit = require("./BitcoinTrading");

test("max profit in [10, 7, 5, 8, 11, 9] should return 6", () => {
  expect(findMaxProfit([10, 7, 5, 8, 11, 9])).toBe(6);
});

test("max profit in [1050, 270, 1540, 3800, 2] should return 3530", () => {
  expect(findMaxProfit([1050, 270, 1540, 3800, 2])).toBe(3530);
});

test("max profit in [100, 90, 80, 50, 20, 10] should be -10", () => {
  expect(findMaxProfit([100, 90, 80, 50, 20, 10])).toBe(-10);
});

test("max profit in [100,55,4,98,10,18,90,95,43,11,47,67,89,42,49,79] should be 94", () => {
  expect(
    findMaxProfit([
      100,
      55,
      4,
      98,
      10,
      18,
      90,
      95,
      43,
      11,
      47,
      67,
      89,
      42,
      49,
      79
    ])
  ).toBe(94);
});
