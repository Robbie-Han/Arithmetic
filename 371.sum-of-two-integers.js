/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(a === 0) return b;
    if(b === 0) return a; // b为进位，当进位为0时直接返回a

    const firstArg = a ^ b; // a与b异或为无进位加法
    const lastArg = (a & b) << 1; // a与b想与，左移一位为进位

    return getSum(firstArg, lastArg);
    // 参考链接：https://leetcode-cn.com/problems/sum-of-two-integers/solution/wei-yun-suan-xiang-jie-yi-ji-zai-python-zhong-xu-y/
};
// @lc code=end

