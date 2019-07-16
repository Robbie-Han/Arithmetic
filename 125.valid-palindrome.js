/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (31.41%)
 * Total Accepted:    375K
 * Total Submissions: 1.2M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "race a car"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// 1、reverse会改变源数组，2、数组元素即使相同也可能不一样，要转成字符串
var isPalindrome = function(s) {
    var newString = s.replace(/\W/g,'').toLocaleLowerCase();
    var strArray = newString.split('');
    var reverseArray = newString.split('').reverse();
    return strArray.join('') === reverseArray.join('');
};

