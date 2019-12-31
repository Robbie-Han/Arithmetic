/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (53.00%)
 * Total Accepted:    413.7K
 * Total Submissions: 772.7K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let item;
    let max = 0;
    let count = 1;
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 1; i++) {
      if(nums[i + 1] === nums[i]) {
        count += 1;
      } else {
        if(max < count) {
          max = count;
          item = nums[i];
        }
        count = 1;
      }
    }
    if(max < count) item = nums.pop()
    return item
};

