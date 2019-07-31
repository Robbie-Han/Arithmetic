/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (44.00%)
 * Total Accepted:    215.8K
 * Total Submissions: 484.6K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the k^th index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = [];
  for(let i = 0; i <= rowIndex; i++){
      for(let j = i - 1; j > 0; j--){
          result[j] += result[j-1];
      }
      result.push(1);
  }
  return result
};
// 第一个for循环是迭代次数，第二个for是数据操作
//[1,1]->[1,2]->[1,2,1]
//[1,2,1]->[1,2,3]->[1,3,3]->[1,3,3,3]
//在上一轮的迭代结果上，从后向前 前一个数+当前的数 = 当前数。最后再往后面插上一位。
//i = 0 表示第一层，第几层的length就是几


