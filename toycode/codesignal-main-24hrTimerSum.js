// return sum of 4 digits in 24 hour time with input in minutes
function solution(n) {
  let timeSum = 0;
  let hours = Math.floor(n / 60) % 24; // Use modulo 24 to handle 24-hour cases
  let minutes = n % 60;

  timeSum += Math.floor(hours / 10); // add first hours place
  timeSum += hours % 10; // add last hours place
  timeSum += Math.floor(minutes / 10); // add first minutes place
  timeSum += minutes % 10; // add last minutes place

  return timeSum;
}
console.log(solution(24));

/* 
In 12-hour time, we use 12 to represent both midnight (12:00 AM) and noon (12:00 PM), not 0.
The hours range from 1 to 12, not 0 to 11.
So, for a 12-hour clock, we'd typically do something like this:
javascript
let hours12 = (Math.floor(n / 60) % 12) || 12;

The || 12 part is a crafty use of JavaScript's logical OR operator.
This technique is often called the "logical OR trick" or "default operator."
Here's how it works:
In JavaScript, the logical OR operator (||) doesn't just return true or false. It returns the first "truthy" value it encounters.
In JavaScript, 0 is considered a "falsy" value, while any non-zero number is "truthy".
The || operator first evaluates the expression on its left. If that expression is truthy, it returns that value. If it's falsy, it moves on to evaluate and return the expression on its right.
So, in the context of (Math.floor(n / 60) % 12) || 12:
If (Math.floor(n / 60) % 12) results in any number from 1 to 11, that number is returned because it's truthy.
If (Math.floor(n / 60) % 12) results in 0, the || operator moves on to the right side and returns 12.
Let's look at some examples:
javascript
console.log(1 || 12);  // Output: 1
console.log(2 || 12);  // Output: 2
console.log(11 || 12); // Output: 11
console.log(0 || 12);  // Output: 12

This trick allows us to replace 0 with 12 in a very concise way, without needing an if-statement. It's particularly useful in this 12-hour clock scenario where we want 0 to become 12, but all other values to remain as they are.
It's worth noting that while this is a common and clever JavaScript idiom, it might not be immediately clear to all readers of the code. In some cases, for the sake of clarity, you might choose to write it out more explicitly:
javascript
let hours12 = Math.floor(n / 60) % 12;
if (hours12 === 0) hours12 = 12;

Both approaches achieve the same result, but the || 12 version is more concise and is commonly used by experienced JavaScript developers.
*/
