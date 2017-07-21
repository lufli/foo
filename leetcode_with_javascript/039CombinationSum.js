/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var ans = [];
    var pre = [];
    helper(0, candidates, target, pre, ans);
    return ans;
    
};

var helper = function(start, candidates, target, pre, ans) {
    var sum = pre.reduce(reduce_helper, 0);
    if(sum === target) {
        ans.push(pre);
        return;
    }
    else if(sum > target) {
        return;
    }
    else {
        for(var i=start;i<candidates.length;i++) {
            var new_pre = pre.slice();
            new_pre.push(candidates[i]);
            helper(i, candidates, target, new_pre, ans);
        }
    }
    return;
};

var reduce_helper = function(sum, value) {
    return sum+value;
};