/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.27%)
 * Total Accepted:    277.8K
 * Total Submissions: 860.9K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 * 
 * Example:
 * 
 * 
 * Input: "Hello World"
 * Output: 5
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
// 先去掉前后空格，然后将元素分解取最后一个元素的长
var lengthOfLastWord = function(s) {
    s = s.trim();
    const sArray = s.split(' ');
    return sArray[sArray.length - 1].length;

};

