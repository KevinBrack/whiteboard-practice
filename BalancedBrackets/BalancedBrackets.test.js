const balancedBrackets = require("./BalancedBrackets");

test('"{}[]()" should return true', () => {
  expect(balancedBrackets("{}[]()")).toBe(true);
});

test('"{(([]))}" should return true', () => {
  expect(balancedBrackets("{(([]))}")).toBe(true);
});

test('"{ [ ] ( ) }" should return true', () => {
  expect(balancedBrackets("{ [ ] ( ) }")).toBe(true);
});

test('"{ [ ( ] ) }" should return false', () => {
  expect(balancedBrackets("{ [ ( ] ) }")).toBe(false);
});

test('"(" should return false', () => {
  expect(balancedBrackets("(")).toBe(false);
});

test('"{[}" should return false', () => {
  expect(balancedBrackets("{[}")).toBe(false);
});
