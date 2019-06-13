function integerPairs(arr, k) {
  // Use a hash to store key-value pairs of numbers
  const hash = {};
  // Loop throught the arr
  arr.forEach((x, i) => {
    // check to see if the compliment for the
    // current element exists in the hash
    if (hash[k - x]) {
      console.log(x, k - x);
    } else {
      // if it doesn't then we hash this number
      // +1 to get around 0 indexing
      hash[x] = i + 1;
    }
  });
}

// console log tests
integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11); // should print '6 5', '7 4', '8 3', '9 2', '10 1'
console.log();
integerPairs([5, 5, 4], 12); // should not print anything
console.log();
integerPairs([99, 45, 38, 1, 68, 78], 100); // should print '1 99'
