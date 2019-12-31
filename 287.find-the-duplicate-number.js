/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 *
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 *
 * algorithms
 * Medium (49.96%)
 * Total Accepted:    208K
 * Total Submissions: 411.6K
 * Testcase Example:  '[1,3,4,2,2]'
 *
 * Given an array nums containing n + 1 integers where each integer is between
 * 1 and n (inclusive), prove that at least one duplicate number must exist.
 * Assume that there is only one duplicate number, find the duplicate one.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,4,2,2]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,1,3,4,2]
 * Output: 3
 * 
 * Note:
 * 
 * 
 * You must not modify the array (assume the array is read only).
 * You must use only constant, O(1) extra space.
 * Your runtime complexity should be less than O(n^2).
 * There is only one duplicate number in the array, but it could be repeated
 * more than once.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const length = nums.length;
  if(length <= 1) return -1;
  let start = 1;
  let end = length - 1;
  while(start <= end) {
    const middle = ((end - start) >> 1) + start;
    const count = countRange(nums, length, start, middle);
    if(start === end) {
      if(count > 1) {
        return start;
      }else {
        break;
      }
    }
    if(count > (middle - start + 1)) {
      end = middle;
    }else {
      start = middle + 1;
    }
  }

};
var countRange = function(nums, length, start, end){
  let count = 0;
  for(let i = 0; i < length; i++) {
    if(nums[i] >= start && nums[i] <= end) {
      ++ count;
    }
  }
  return count;
}

