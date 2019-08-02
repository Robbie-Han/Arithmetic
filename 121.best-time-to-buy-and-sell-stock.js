/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (47.48%)
 * Total Accepted:    547.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 * 
 * If you were only permitted to complete at most one transaction (i.e., buy
 * one and sell one share of the stock), design an algorithm to find the
 * maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Example 1:
 * 
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    for(let i = 0; i < prices.length - 1; i++){
      let value = 0
      for(let j = i + 1; j < prices.length; j++){
        if(prices[j] - prices[i] > value){
          value = prices[j] - prices[i]
        }
      }
      if(value > result){
        result = value;
      }
    }
    return result
};
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-by-leetcode/
/* var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for(let i = 0; i < prices.length; i++) {
      if(prices[i] < min) {
          min = prices[i];
      }else if(prices[i] - min > max) {
          max = prices[i] - min;
      }
  }
  return max
}; */

