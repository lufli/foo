/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    var ans = {};
    var res = [];
    helper(nums, [], 0, ans);
    for(var i in ans) {
        res.push(ans[i]);
    }
    return res;
    
};
// try all possible path recusively
var helper = function(nums, tempList, start, ans) {
    if(start>=nums.length) {
        if(tempList.length>=2 && !(tempList.toString() in ans)) {
            ans[tempList.toString()] = tempList.slice();
        }
        return;
    }
    var newList = tempList.slice();
    helper(nums, newList, start+1, ans);
    if(newList.length===0 || nums[start]>=newList[newList.length-1]) {
        newList.push(nums[start]);
        helper(nums, newList, start+1, ans);
    }
    return;
};
    