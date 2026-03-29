function solution(nCols, nRows, col, row) {
  return (nRows - row) * (nCols - col + 1);
}
console.log(solution(4, 3, 1, 1));
