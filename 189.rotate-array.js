/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 *
 * https://leetcode.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (30.46%)
 * Total Accepted:    332.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * Given an array, rotate the array to the right by k steps, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-1,-100,3,99] and k = 2
 * Output: [3,99,-1,-100]
 * Explanation: 
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 * 
 * 
 * Note:
 * 
 * 
 * Try to come up as many solutions as you can, there are at least 3 different
 * ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 暴力法： 外层循环K次，内层依次拿第一个、第二个、....和最后一个元素交换
/* var rotate = function(nums, k) {
    for(let i = 0; i < k; i++) {
      let flag = nums[nums.length - 1]
      for(let j = 0; j < nums.length; j++) {
        var t = nums[j];
        nums[j] = flag;
        flag = t; 
      }
    }
    return nums
}; */
// 利用数组将每个元素存在 (i+k)%length的位置。
/* var rotate = function(nums, k) {
  let a = [];
  const length = nums.length 
  for(let i = 0; i < length; i++) {
    a[(i+k)%length] = nums[i];
  }
  for(let j = 0; j < length; j++) {
    nums[j] = a[j]
  }
  return nums;
}; */

var reverse = function(arr, start, end) {
  while(start < end) {
    [arr[start],arr[end]] = [arr[end],arr[start]];
    start++;
    end--;
  }
}
var rotate = function(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k-1);
  reverse(nums, k, nums.length - 1);
  return nums
}


