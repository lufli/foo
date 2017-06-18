/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2) return n;
    var pre = 1;
    var current = 2;
    for(var i=2;i<n;i++) {
        var buff = current;
        current += pre;
        pre = buff;
    }
    return current;
};