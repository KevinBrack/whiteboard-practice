function balancedBrackets(str) {
  let line = str.split("");
  // we use a stack to keep track of the opening brackets
  const stack = [];
  // we use an object to store the possible
  // opening and closing brackets
  const openers = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  const closers = {
    ")": true,
    "}": true,
    "]": true
  };

  for (let i = 0; i < line.length; i++) {
    if (openers[line[i]]) {
      stack.push(line[i]);
    } else if (closers[line[i]]) {
      // if the closer does not correspond to the most
      // recently seen unclosed opener return false
      if (openers[stack.pop()] !== line[i]) return false;
    }
  }
  return stack.length === 0;
}

// some console log tests
// console.log("{}[]()", balancedBrackets("{}[]()")); // should print true
// console.log("{(([]))}", balancedBrackets("{(([]))}")); // should print true
// console.log("{ [ ] ( ) }", balancedBrackets("{ [ ] ( ) }")); // should print true
// console.log("{ [ ( ] ) }", balancedBrackets("{ [ ( ] ) }")); // should print true
// console.log("(", balancedBrackets("(")); // should print true
// console.log("{[}", balancedBrackets("{[}")); // should print true

module.exports = balancedBrackets;
