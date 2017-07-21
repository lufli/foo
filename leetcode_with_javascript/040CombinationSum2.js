/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var ans = [];
    var pre = [];
    candidates.sort(function(a, b){
        return a - b;
    });
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
            // this line is the most diff part from last one
            if(i>start && candidates[i]===candidates[i-1]) continue;
            var new_pre = pre.slice();
            new_pre.push(candidates[i]);
            helper(i+1, candidates, target, new_pre, ans);
        }
    }
    return;
};

var reduce_helper = function(sum, value) {
    return sum+value;
};