/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var keyboard = [[], [], ['a','b','c'], ['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    var ans = [];
    helper(ans, keyboard, "", digits);
    return ans;
};

var helper = function(ans, keyboard, pre, digits) {
    if(digits.length<1) { if(pre!=="") ans.push(pre); return; }
    var digit = Number(digits.charAt(0));
    var digits_new = "";
    if(digits.length>1) digits_new = digits.substring(1, digits.length);
    for(var item of keyboard[digit]) {
        helper(ans, keyboard, pre+item, digits_new);
    }
};
