//https://www.nowcoder.com/questionTerminal/529d3ae5a407492994ad2a246518148a

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
//思路：用两个指针指向head节点，p指针向前移动k-1步后，第二个指针开始动，当第一指针到达最后的时候，返回第二个指针所指位置
// 注意： k必须是大于0的，head不可为空，当k大于列表长度要返回null
function FindKthToTail(head, k)
{
    // write code here
    if(k <= 0 || !head) return null;
    let count = 0;
    let p = head;
    let q = head;
    
    while(p.next !== null) { // 遍历到最后一个元素截止
        p = p.next;
        if(count < k-1){
            count++;
        }else {
            q = q.next
        }
    }
  
    return count < k-1 ? null : q // 当k大于列表长度要返回null
}