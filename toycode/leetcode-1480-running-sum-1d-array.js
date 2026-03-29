// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/description/
// Easy
// 20240119
// Given an array nums. We define a running sum of an array
// as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows:
// [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows:
// [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

const runningSum = (nums) => {
  let rs = 0;
  let result = [];
  for (let num of nums) {
    rs += num; // Update running sum
    result.push(rs); // Add running sum to result array
  }
  return result; // Return the array of running sums
};

let nums = [1, 2, 3, 4];
console.log(runningSum(nums)); // Outputs: [1, 3, 6, 10]
