function solution(n) {
  let digitSum = Math.floor(n / 10);
  digitSum += n % 10;
  return digitSum;
}
console.log(solution(41));
