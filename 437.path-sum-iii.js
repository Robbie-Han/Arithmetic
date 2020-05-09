/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

// 暴力解法，两个递归
// var pathSum = function(root, sum) {
//   if(root === null) return 0;
//   return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
// }

// var helper = function(root, target) {
//   if(root === null) return 0;
//   return (root.val === target ? 1: 0) + helper(root.left, target - root.val) + helper(root.right, target - root.val);
// }

// 通过hashmap回溯
var pathSum = function(root, sum) {
  const hashmap = {};
  return helper(root, 0, sum, hashmap);
};

function helper(root, acc, target, hashmap) {
  if(root === null) return 0;
  let count = 0;
  acc += root.val; // 节点总和
  if(acc === target) count++;
  if(hashmap[acc-target] !== void 0) { // 当hashmap中有存在路径和为acc-target时，此时当前节点到这个路径和直接的节点就是何为target的路径
    count += hashmap[acc-target];
  }
  if(hashmap[acc] === void 0) {
      hashmap[acc] = 1; // 如果路径和在hashmap中不存在，就把其放到hashmap中，对应的值记为1;
  }else {
    hashmap[acc] += 1; // 如果路径和在hashmap中存在，为其值加一
  }

  let res = count + helper(root.left, acc, target, hashmap) + helper(root.right, acc, target, hashmap);// 根节点开始的，加上左右子树的

  hashmap[acc] -= 1; //走到叶子节点时，删掉它的总合，防止影响其它分支
  return res
}
// @lc code=end

