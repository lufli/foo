/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var pre = dummy;
    var index = 0;
    while(index<m-1) {
        pre = pre.next;
        index++;
    }
    if(pre === null || pre.next === null) return head;
    var left = pre;
    var tail = pre.next;
    var last_node = null;
    var current_node = pre.next;
    var next_node = pre.next.next;
    // reverse
    while(index<n-1) {
        var buff = next_node.next;
        next_node.next = current_node;
        current_node.next = last_node;
        last_node = current_node;
        current_node = next_node;
        next_node = buff;
        index++;
    }
    // merge
    tail.next = next_node;
    pre.next = current_node;
    return dummy.next;
};