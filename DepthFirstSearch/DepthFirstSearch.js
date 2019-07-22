// Recursive approach
function recursiveDepthFirstForEach(node, cb) {
  cb(node.value);

  if (node.left) {
    recursiveDepthFirstForEach(node.left, cb);
  }

  if (node.right) {
    recursiveDepthFirstForEach(node.right, cb);
  }
}

// Iterative approach
function iterativeDepthFirstForEach(node, cb) {
  const stack = [];
  stack.push(node);

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }

    cb(current.value);
  }
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }
  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// Some console log tests
// const root = new BinaryTreeNode(6);
// root.insertLeft(10);
// root.insertRight(18);
// root.left.insertLeft(9);
// root.right.insertRight(89);

// const cb = x => console.log(x);

// recursiveDepthFirstForEach(root, cb);
// console.log();
// iterativeDepthFirstForEach(root, cb);
// console.log();

// root.left.insertRight(15);
// root.right.insertLeft(0);

// recursiveDepthFirstForEach(root, cb);
// console.log();
// iterativeDepthFirstForEach(root, cb);
// console.log();

module.exports = {
  recursiveDepthFirstForEach,
  iterativeDepthFirstForEach,
  BinaryTreeNode
};
