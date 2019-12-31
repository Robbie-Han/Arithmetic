/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (35.94%)
 * Total Accepted:    246K
 * Total Submissions: 677.2K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * 
 * 
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 不能return head，head可能已经被删除了
var removeElements = function(head, val) {
  var headData = new ListNode(0);
  headData.next = head;
  var p = head;
  var q = headData;
  while(p) {
    if(p.val === val) {
      q.next = p.next;
      p = q.next
    }else {
      p = p.next;
      q = q.next;
    }
  }
  return headData.next
};

