// 2667. Create Hello World Function
// https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Easy
// 20250120
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:
// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// Example 2:
// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"
// Any arguments could be passed to the function but it should still always return "Hello World".

// Constraints:
// 0 <= args.length <= 10
// @return {Function}

// note: arrow function implicit return
const createHelloWorld = () => () => 'Hello World';

const f = createHelloWorld();
console.log(f()); // Output: "Hello World"
console.log(f({}, null, 42)); // Output: "Hello World"

// // This version uses a default parameter
//
// const createHelloWorld = (param = undefined) => {
//     return (...args) => {
//       if (args.length > 0 && args.length < 10) {
//         // Handle the case where there are 1 to 9 parameters
//         console.log(`Received ${args.length} parameters`);
//       }
//       return "Hello World";
//     };
//   }
//   const f = createHelloWorld();
//   console.log(f(1, 2, 3)); // Logs: "Received 3 parameters" and returns "Hello World"
//   console.log(f()); // Returns "Hello World"

// // This version uses a Rest parameters array using the ... spread operator
// //  rest parameters allow a function to accept an indefinite number of arguments as
// //  an array, which is useful when you don't know how many arguments will be passed
//
// const sum = (...numbers) => {
//   return numbers.reduce((total, number) => total + number, 0);
// };
// console.log(sum(1, 2, 3, 4)); // Output: 10
// console.log(sum(5, 10)); // Output: 15
