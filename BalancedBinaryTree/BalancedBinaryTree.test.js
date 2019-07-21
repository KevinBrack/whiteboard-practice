const { checkBalanced, BinaryTreeNode } = require("./BalancedBinaryTree");

test("single node is balanced", () => {
  const root = new BinaryTreeNode(5);
  expect(checkBalanced(root)).toBe(true);
});

test("node with only 1 child is unbalanced", () => {
  const root = new BinaryTreeNode(5);
  root.insertLeft(10);
  expect(checkBalanced(root)).toBe(false);
});

test("node with 2 children is balanced", () => {
  const root = new BinaryTreeNode(5);
  root.insertLeft(10);
  root.insertRight(11);
  expect(checkBalanced(root)).toBe(true);
});
