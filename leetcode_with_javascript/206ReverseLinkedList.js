/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var pre = null;
    var current = head;
    while(current!==null) {
        var node = current.next;
        current.next = pre;
        pre = current;
        current = node;
    }
    
    return pre;
};