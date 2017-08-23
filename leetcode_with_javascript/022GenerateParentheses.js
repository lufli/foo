/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ans = [];
    helper('(', 1, 0, n, ans);
    return ans;
};

var helper = function(str, open, close, max, ans) {
    //console.log(str);
    if(open<close || open>max || close>max) return;
    if(close===max) { ans.push(str); return; }
    helper(str+'(', open+1, close, max, ans);
    helper(str+')', open, close+1, max, ans);
};
