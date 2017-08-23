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
var levelOrder = function(root) {
    if(root===null) return [];
    var ans = [];
    var queue = [root];
    ans.push([root.val]);
    while(queue.length!==0) {
        var temp = [];
        while(queue.length!==0) {
            var current = queue.shift();
            if(current.left!==null) temp.push(current.left);
            if(current.right!==null) temp.push(current.right);
        }
        queue = temp.slice();
        if(temp.length!==0) {
            ans.push(temp.map(function(a) {
                return a.val;
            }))
        }
    }
    return ans;
};
