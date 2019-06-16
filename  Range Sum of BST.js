//Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function(root, L, R) {
  var arr = [],sum=0;
  binaryTree(root,arr);
  
  for(var i=0; i<arr.length; i++) {
      if(arr[i] >= L && arr[i] <= R) {
          sum = sum + arr[i];
      }
  }
  
  return sum;
};
// 遍历二叉树
var binaryTree = function(root,arr){
  if(root === null){
      return;
  };
  binaryTree(root.left,arr);
  arr.push(root.val);
  binaryTree(root.right,arr);
  
  return;
}

//方法二：

var rangeSumBST = function(root, L, R) {
  // base case
  if(root == null) {
      return 0;
  }
  
  if(root.val > R) {
      return rangeSumBST(root.left, L, R);
  } else if(root.val < L) {
      return rangeSumBST(root.right, L, R);
  } else {
      return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
  }
};