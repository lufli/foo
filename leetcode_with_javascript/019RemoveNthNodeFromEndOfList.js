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
var removeNthFromEnd = function(head, n) {
    if(n<=0) return head;
    var l = 0;
    var current = head;
    while(current!=null) {
        l++;
        current = current.next;
    }
    current = head;
    l = l - n;
    while(l>1) {
        l--;
        current = current.next;
    }
    if(l===0) return head.next;
    else current.next = current.next.next;
    return head;
};
