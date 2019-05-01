// naive recurrsive solution
function naiveClimbingStairs(n) {
  if (n < 0) return 0;
  else if (n == 0) return 1;
  else {
    return (
      naiveClimbingStairs(n - 1) +
      naiveClimbingStairs(n - 2) +
      naiveClimbingStairs(n - 3)
    );
  }
}

// recirsive solution with memoization
function memoizeClimbStairs(n, cache) {
  if (n < 0) return 0;
  else if (n == 0) return 1;
  else if (cache[n] > 1) return cache[n];
  else {
    cache[n] =
      memoizeClimbStairs(n - 1, cache) +
      memoizeClimbStairs(n - 2, cache) +
      memoizeClimbStairs(n - 3, cache);
    return cache[n];
  }
}

const callMemo = n => memoizeClimbStairs(n, Array(n));

// some console log tests
console.log(naiveClimbingStairs(10)); // should print 274
console.log(naiveClimbingStairs(30)); // should print 35798080

console.log(callMemo(30)); // should print 35798080
console.log(callMemo(50)); // should print 10562230626642
