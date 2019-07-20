function isLinkedListPalindrome(listNode) {
  let fast = listNode;
  let slow = listNode;

  const stack = [];

  while (fast && fast.next){
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    const top = stack.pop();

    if (top !== slow.value) {
      return false;
    }

    slow = slow.next;
  }

  return true;
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(2);
const e = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const w = new ListNode(10);
const x = new ListNode(11);
const y = new ListNode(11);
const z = new ListNode(10);

w.next = x;
x.next = y;
y.next = z;

console.log(isLinkedListPalindrome(a));   // should print true
console.log(isLinkedListPalindrome(b));   // should print false since now the 'a' node is not included in the linked list

console.log(isLinkedListPalindrome(w));   // should print true