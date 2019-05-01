function countVotes(arr) {
  let counts = {};
  let maxVotes = 0;
  let winner = "";
  // iterate over array
  arr.forEach(vote => {
    // if name does not exist in counts, add it with a value of 0
    if (!counts[vote]) counts[vote] = 0;
    // increment the count of the name
    counts[vote]++;
    // check if the current name has more votes than the current max
    if (counts[vote] > maxVotes) {
      maxVotes = counts[vote];
      winner = vote;
    } else if (counts[vote] === maxVotes) {
      if (vote > winner) winner = vote;
    }
  });
  return winner;
}

// console log tests
console.log(
  countVotes([
    "veronica",
    "mary",
    "alex",
    "james",
    "mary",
    "michael",
    "alex",
    "michael"
  ])
); // should print 'michael'

console.log(
  countVotes([
    "john",
    "johnny",
    "jackie",
    "johnny",
    "john",
    "jackie",
    "jamie",
    "jamie",
    "john",
    "johnny",
    "jamie",
    "johnny",
    "john"
  ])
); // should print 'johnny'
