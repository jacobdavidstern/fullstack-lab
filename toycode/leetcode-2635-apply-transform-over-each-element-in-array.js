// 2635. Apply Transform Over Each Element in Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Easy
// 20250123
// Given an integer array arr and a mapping function fn, return a
// new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Solve without the built-in Array.map method.

// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

// Constraints:
// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109
// fn returns an integer.

// @param {number[]} arr
// @param {Function} fn
// @return {number[]}

const map = (arr, fn) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

let arr = [1, 2, 3];
const fn = (n) => {
  return n + 1;
};
console.table(map(arr, fn));
