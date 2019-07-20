// Merging Two Packages
// Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// Analyze the time and space complexities of your solution.

// Example:

// JavaScript:

// input: arr = [4, 6, 10, 15, 16]
//        limit = 21
// output: [3, 1]   // since these are the indices of 
//                  // weights 6 and 15 whose sum equals 21

function getIndicesOfItemWeights(arr, limit) {
  // use an object to store item weights
  // along with their 'compliment'
  const o = {};

  for (let i = 0; i < arr.length; i++) {
    const weight = arr[i];
    // check the object to see if we have the
    // compliment of the current weight
    const complimentIndex = o[limit - weight];
    // if we do then we are done
    if (complimentIndex !== undefined) {
      return [i, complimentIndex];
    } else {
      // otherwise store the weight with its index
      o[weight] = i;
    }
  }
  return [];
}

/* Some simple console.log tests */
console.log(getIndicesOfItemWeights(
  [4, 6, 10, 15, 16],
  21
));   // should print [3, 1]

console.log(getIndicesOfItemWeights(
  [4, 4],
  8
));   // should print [1, 0]

console.log(getIndicesOfItemWeights(
  [12, 6, 7, 14, 19, 3, 0, 25, 40],
  7
));   // should print [6, 2]

console.log(getIndicesOfItemWeights(
  [9],
  9
));   // should print []