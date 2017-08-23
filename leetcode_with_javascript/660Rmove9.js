/**
 * @param {number} n
 * @return {number}
 */
var newInteger = function(n) {
    var ans = [];
    while(n>0) {
        var digit = n%9;
        ans.unshift(digit);
        n = Math.floor(n/9);
    }
    return Number(ans.join(""));
};
