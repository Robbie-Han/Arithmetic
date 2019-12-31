/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 *
 * https://leetcode.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (48.62%)
 * Total Accepted:    302.9K
 * Total Submissions: 618.4K
 * Testcase Example:  '[3,0,1]'
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,0,1]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * 
 * 
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement
 * it using only constant extra space complexity?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 先求出不缺数字时候的所有数字和，然后减去nums的数值和
var missingNumber = function(nums) {
    const length = nums.length;
    const sum = ((1 + length) * length) >> 1;
    return sum - nums.reduce((acc, item) => acc + item);
};
// 先求0-length的异或，再于nums异或
var missingNumber = function(nums) {
  let flag = 0;
  for(let i = 1; i < nums.length +1; i++) {
      flag ^= i;
  }
  return flag ^ nums.reduce((acc, item) => acc ^ item);
};

