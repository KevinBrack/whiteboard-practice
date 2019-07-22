const { callMemo, naiveClimbingStairs } = require("./ClimbingStairs");

test("Naive version with 10 stairs should be 274", () => {
  expect(naiveClimbingStairs(10)).toBe(274);
});

test("Naive version with 30 stairs should be 53798080", () => {
  expect(naiveClimbingStairs(30)).toBe(53798080);
});

test("Memoized version with 30 stairs should be 53798080", () => {
  expect(callMemo(30)).toBe(53798080);
});

test("Memoized version with 50 stairs should be 10562230626642", () => {
  expect(callMemo(50)).toBe(10562230626642);
});
