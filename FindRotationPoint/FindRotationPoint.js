function findRotationPoint(words) {
  const firstWord = words[0];

  let floorIndex = 1;
  let ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {
    // Guess a point halfway between ceiling and index
    let guessIndex = Math.floor(floorIndex + (ceilingIndex - floorIndex) / 2);

    // If guess comes after first word or is the first word
    if (words[guessIndex] >= firstWord) {
      // Go right
      floorIndex = guessIndex;
    } else {
      // Go left
      ceilingIndex = guessIndex;
    }

    // If floor and ceiling have converged
    if (floorIndex + 1 === ceilingIndex) {
      // Between floor and ceiling is where the rotation point is
      break;
    }
  }

  return ceilingIndex;
}

// console.log(findRotationPoint(smallSet)); // 5
// console.log(findRotationPoint(largeSet)); // 174

module.exports = findRotationPoint;
