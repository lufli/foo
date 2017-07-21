/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort(function(a, b){
              return a-b;
              });
    var ans = [];
    var pre = [];
    createPermute([], nums, ans);
    return ans;
};

var createPermute = function(pre, options, ans) {
    if(options.length===0) {
        var res = pre.slice();
        ans.push(res);
        return;
    }
    for(var i=0;i<options.length;i++) {
        // this is the only differece and need sort first
        if(options[i]===options[i-1]) continue;
        pre.push(options[i]);
        var new_options = options.slice();
        new_options.splice(i, 1);
        createPermute(pre, new_options, ans);
        pre.splice(pre.length-1, 1);
    }
    return;
};