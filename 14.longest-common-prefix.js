/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.69%)
 * Total Accepted:    486.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
/* var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';
    var prefix = strs[0];
    for(var i = 1, length = strs.length; i < length; i++){
        while(!new RegExp('^'+prefix).test(strs[i])) {
          prefix = prefix.slice(0,-1);
          if(prefix === '') return ''
        }
    }
    return prefix
}; */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';
  for(var i = 0; i < strs[0].length; i++){
    var c = strs[0].charAt(i);
    for(var j = 1; j < strs.length; j++){
      if(i === strs[j].length || strs[j].charAt(i) !== c){
        return strs[0].slice(0,i);
      }
    }
  }
  return strs[0];
};

