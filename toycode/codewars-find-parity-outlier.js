// CodeWars: Find The Parity Outlier
// https://stackoverflow.com/questions/55910154/find-the-parity-outlier-codewars

function findOutlier(integers) {
  // return outlier in arrays of all except one either even or odd numbers
  const evens = integers.filter((n) => {
    return n % 2 === 0;
  });
  const odds = integers.filter((n) => {
    return n % 2 !== 0;
  });
  return odds.length === 1 ? odds[0] : evens[0];
}

console.log(findOutlier([2, 6, 8, 10, 3])); // 3
