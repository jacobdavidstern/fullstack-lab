function isPalindrome(x) {
  // Convert x to a string
  x = x.toString();

  let left = 0;
  let right = x.length - 1;

  while (left < right) {
    if (x[left] !== x[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// Example Usage
console.log(isPalindrome('amanaplanacanalpanama')); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('world')); // Output: false
