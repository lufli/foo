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
var swapPairs = function(head) {
    var dummy = new ListNode(0);
    var pre = dummy;
    var current = head;
    var next;
    while(current!==null && current.next!==null) {
        next = current.next;
        pre.next = next;
        var buff = next.next;
        next.next = current;
        pre = current;
        current = buff;
    }
    pre.next = current;
    return dummy.next;
};
