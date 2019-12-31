/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (42.06%)
 * Total Accepted:    240.4K
 * Total Submissions: 569.6K
 * Testcase Example:  '1'
 *
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: true 
 * Explanation: 2^0 = 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 16
 * Output: true
 * Explanation: 2^4 = 16
 * 
 * Example 3:
 * 
 * 
 * Input: 218
 * Output: false
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */
/* var isPowerOfTwo = function(n) {
  if(n === 0) return false
  while(n >> 1 === n/2) {
      n = n >> 1
  }
  return n === 1 ? true : false;
}; */

var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0
}


