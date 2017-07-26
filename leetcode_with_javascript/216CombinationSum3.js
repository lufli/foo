/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var ans = [];
    helper(k, n, [], 1, ans);
    return ans;
};

var helper = function(k, n, list, index, ans) {
    if(list.length>k || n<0) return;
    if(list.length===k && n===0) { res = list.slice(); ans.push(res); }
    for(var i=index;i<=9;i++) {
        list.push(i);
        helper(k, n-i, list, i+1, ans);
        list.splice(list.length-1, 1);
    }
};