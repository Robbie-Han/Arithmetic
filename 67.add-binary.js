/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (39.49%)
 * Total Accepted:    315.2K
 * Total Submissions: 794.8K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var aArray, bArray;
  var result = [];
  var flag = 0;
  if(a.length >= b.length){
    aArray = a.split('').reverse();
    bArray = b.split('').reverse();
  }else {
    aArray = b.split('').reverse();
    bArray = a.split('').reverse();
  }
  for(var i = 0; i < aArray.length; i++){
    var item = 0;
    if(bArray[i] >= 0 ){
      item = +aArray[i] + (+bArray[i]) + flag;
    }else {
      item = +aArray[i] + flag;
    }
    if(item === 1 || item === 0){
      result[i] = item;
      flag = 0;
    }else {
      result[i] = item - 2;
      flag = 1;
    }
  }
  if(flag === 1){
    result[i] = 1
  }
  return result.reverse().join('');
};

