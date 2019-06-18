/* Some console.log tests */
const maxStack = new MaxStack();
console.log(maxStack.getMax()); // should print `null`

maxStack.push(1);
console.log(maxStack.getMax()); // should print 1

maxStack.push(100);
console.log(maxStack.getMax()); // should print 100

maxStack.pop();
console.log(maxStack.getMax()); // should print 1
