const {
  recursiveDepthFirstForEach,
  iterativeDepthFirstForEach,
  BinaryTreeNode
} = require("./DepthFirstSearch");

test("Recursive", () => {
  const root = new BinaryTreeNode(6);
  const arr = [];
  root.insertLeft(10);
  root.insertRight(18);
  root.left.insertLeft(9);
  root.right.insertRight(89);

  const cb = x => arr.push(x);
  recursiveDepthFirstForEach(root, cb);
  expect(arr).toStrictEqual([6, 10, 9, 18, 89]);

  root.left.insertRight(15);
  root.right.insertLeft(0);

  recursiveDepthFirstForEach(root, cb);
  expect(arr).toStrictEqual([6, 10, 9, 18, 89, 6, 10, 9, 15, 18, 0, 89]);
});

test("Iterative", () => {
  const root = new BinaryTreeNode(6);
  const arr = [];
  root.insertLeft(10);
  root.insertRight(18);
  root.left.insertLeft(9);
  root.right.insertRight(89);

  const cb = x => arr.push(x);
  iterativeDepthFirstForEach(root, cb);
  expect(arr).toStrictEqual([6, 10, 9, 18, 89]);

  root.left.insertRight(15);
  root.right.insertLeft(0);

  iterativeDepthFirstForEach(root, cb);
  expect(arr).toStrictEqual([6, 10, 9, 18, 89, 6, 10, 9, 15, 18, 0, 89]);
});
