function solution(divisor, bound) {
  let testInteger = bound;
  while (testInteger > 0) {
    if (testInteger % divisor === 0) {
      return testInteger;
    }
    --testInteger;
  }
  return null; // In case no such integer is found
}

console.log(solution(3, 29));
