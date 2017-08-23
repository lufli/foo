/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(root===null) return [];
    var ans = [];
    var queue = [root];
    ans.push([root.val]);
    var fromLeft = false;
    while(queue.length!==0) {
        var temp = [];
        while(queue.length!==0) {
            var current = queue.shift();
            if(current.left!==null) temp.push(current.left);
            if(current.right!==null) temp.push(current.right);
        }
        queue = temp.slice();
        temp = temp.map(function(a) {return a.val});
        if(temp.length!==0) {
            if(fromLeft) ans.push(temp);
            else ans.push(temp.reverse());
        }
        fromLeft = !fromLeft;
    }
    return ans;
};
