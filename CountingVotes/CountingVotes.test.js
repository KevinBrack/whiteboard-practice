const { countVotes } = require("./CountingVotes");

test(`Should return michael`, () => {
  expect(
    countVotes([
      "veronica",
      "mary",
      "alex",
      "james",
      "mary",
      "michael",
      "alex",
      "michael"
    ])
  ).toBe("michael");
});

test(`Should return johnny`, () => {
  expect(
    countVotes([
      "john",
      "johnny",
      "jackie",
      "johnny",
      "john",
      "jackie",
      "jamie",
      "jamie",
      "john",
      "johnny",
      "jamie",
      "johnny",
      "john"
    ])
  ).toBe("johnny");
});
