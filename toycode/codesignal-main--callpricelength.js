// return minutes of longest call with first min cents per min, minutes 2-10 cents per minute, and minutes 11+ cents per minute, where all prices are between 1-10 cents and available funds s are 2-500 cents
function solution(min1, min2_10, min11, s) {
  if (s < min1) {
    return 0;
  } else if (s === min1) {
    return 1;
  } else if (s <= min1 + 9 * min2_10) {
    let minutes = 1;
    s -= min1;
    while (s >= min2_10) {
      s -= min2_10;
      minutes++;
    }
    return minutes;
  } else {
    let minutes = 10;
    s -= min1 + 9 * min2_10;
    while (s >= min11) {
      s -= min11;
      minutes++;
    }
    return minutes;
  }
}

console.log(solution(2, 2, 1, 100));
