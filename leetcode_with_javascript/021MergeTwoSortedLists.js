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
var mergeTwoLists = function(l1, l2) {
    var dummy = new ListNode(0);
    var current = dummy;
    while(l1!==null && l2!==null) {
        //console.log(current.val);
        current.next = new ListNode(0);
        if(l1.val<l2.val) {
            current.next.val = l1.val;
            l1 = l1.next;
        } else {
            current.next.val = l2.val;
            l2 = l2.next;
        }
        current = current.next;
    }
    while(l1!==null) { current.next = new ListNode(l1.val);current = current.next;l1=l1.next;}
    while(l2!==null) { current.next = new ListNode(l2.val);current = current.next;l2=l2.next;}
    return dummy.next;
};
