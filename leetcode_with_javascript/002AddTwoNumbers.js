/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(0);
    var current = dummy;
    var add = 0;
    while(l1!==null && l2!==null) {
        var sum = l1.val+l2.val+add;
        add = Number(sum>=10);
        current.next = new ListNode(sum%10);
        current = current.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while(l1!==null) {
        var sum = l1.val+add;
        add = Number(sum>=10);
        current.next = new ListNode(sum%10);
        current = current.next;
        l1 = l1.next;
    }
    
    while(l2!==null) {
        var sum = l2.val+add;
        add = Number(sum>=10);
        current.next = new ListNode(sum%10);
        current = current.next;
        l2 = l2.next;
    }
    
    if(add===1) { current.next = new ListNode(1); }
    
    return dummy.next;
    
    
};

