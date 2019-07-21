const {
  createMinimalBST,
  isBinarySearchTree,
  maxDepth
} = require("./BSTFromArray");

test("Expect bst to be true", () => {
  let sortedArray = [1, 2, 3, 4, 5, 6, 7];
  let bst = createMinimalBST(sortedArray);
  expect(isBinarySearchTree(bst)).toBe(true);
});

test("Expect bst max depth to be 3", () => {
  let sortedArray = [1, 2, 3, 4, 5, 6, 7];
  let bst = createMinimalBST(sortedArray);
  expect(maxDepth(bst)).toBe(3);
});

test("Expect second bst to be true", () => {
  let sortedArray = [
    4,
    10,
    11,
    18,
    42,
    43,
    47,
    49,
    55,
    67,
    79,
    89,
    90,
    95,
    98,
    100
  ];
  let bst = createMinimalBST(sortedArray);
  expect(isBinarySearchTree(bst)).toBe(true);
});

test("Expect second bst max depth to be 5", () => {
  let sortedArray = [
    4,
    10,
    11,
    18,
    42,
    43,
    47,
    49,
    55,
    67,
    79,
    89,
    90,
    95,
    98,
    100
  ];
  let bst = createMinimalBST(sortedArray);
  expect(maxDepth(bst)).toBe(5);
});
