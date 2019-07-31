/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (46.50%)
 * Total Accepted:    270.9K
 * Total Submissions: 575.9K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    if(numRows === 0) return result;
    for(let i = 0; i < numRows; i++){
      let arr = [];
      for(let j = 0; j <= i; j++){
        if(j > 0 && j < i) {
          arr.push(result[i-1][j-1] + result[i-1][j]);
        }else {
          arr.push(1);
        }
      }
      result.push(arr);
    }
    return result
};
// 外层循环是迭代次数，内层循化拿result最后一个元素，只要不是第一个数和最后一个数就result[i-1][j-1] + result[i-1][j]
// i可以表示第几层
