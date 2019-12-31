/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (34.34%)
 * Total Accepted:    435.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
// 删除倒数第n个节点，需要定位到倒数n+1的节点位置。定义两个指针，快指针走n+1步，慢指针再走
var removeNthFromEnd = function(head, n) {
  if(n <= 0 || !head) return null;
    
  let dummy = new ListNode(0);
  dummy.next = head;

  let count = 0;
  let p = dummy;
  let q = dummy;

  while(count <= n) {
      if(p) {
        p = p.next; 
        count++;
      }
  }
  while(p !== null) {
    p = p.next;
    q = q.next;
  }
  q.next = q.next.next;
  return  dummy.next
};

