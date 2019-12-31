/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 *
 * https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 *
 * algorithms
 * Easy (34.28%)
 * Total Accepted:    333.5K
 * Total Submissions: 947.8K
 * Testcase Example:  '8\n[4,1,8,4,5]\n[5,0,1,8,4,5]\n2\n3'
 *
 * Write a program to find the node at which the intersection of two singly
 * linked lists begins.
 * 
 * For example, the following two linked lists:
 * 
 * 
 * begin to intersect at node c1.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA =
 * 2, skipB = 3
 * Output: Reference of the node with value = 8
 * Input Explanation: The intersected node's value is 8 (note that this must
 * not be 0 if the two lists intersect). From the head of A, it reads as
 * [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2
 * nodes before the intersected node in A; There are 3 nodes before the
 * intersected node in B.
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * 
 * Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3,
 * skipB = 1
 * Output: Reference of the node with value = 2
 * Input Explanation: The intersected node's value is 2 (note that this must
 * not be 0 if the two lists intersect). From the head of A, it reads as
 * [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes
 * before the intersected node in A; There are 1 node before the intersected
 * node in B.
 * 
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * 
 * Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB =
 * 2
 * Output: null
 * Input Explanation: From the head of A, it reads as [2,6,4]. From the head of
 * B, it reads as [1,5]. Since the two lists do not intersect, intersectVal
 * must be 0, while skipA and skipB can be arbitrary values.
 * Explanation: The two lists do not intersect, so return null.
 * 
 * 
 * 
 * 
 * Notes:
 * 
 * 
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function
 * returns.
 * You may assume there are no cycles anywhere in the entire linked
 * structure.
 * Your code should preferably run in O(n) time and use only O(1) memory.
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let alength = 0;
  let blength = 0;
  let p = headA;
  let q = headB;
  // 先得到p, q两个链表的长度，然后长的先走两者之差的步数
  while(headA || headB) {
      if(headA) {headA = headA.next;alength++};
      if(headB) {headB = headB.next;blength++};
  }
    
  if(alength > blength) {
      for(let i = 0; i< alength - blength; i++){
          p = p.next;
      }
  }else if(alength < blength) {
       for(let i = 0; i< blength - alength; i++){
          q = q.next;
      }
  }

  while(p && q) {
      if(p === q) {
          return p
      }
      p = p.next;
      q = q.next;
  }
  return null 
};
/*
// 短的链表会先遍历完，然后指向长链表的表头，当执行两链表之差的时候，长链表的指针指向短链表表头，如有相同会p === q,有可能是个节点，也有可能是null
var getIntersectionNode = function(headA, headB) {
    let p = headA;
    let q = headB;
    while(p !== q) {
        p = !p ? headB : p.next;
        q = !q ? headA : q.next;
    }
    return p
};
*/

