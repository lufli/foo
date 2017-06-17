/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var bits = x^y;
    var ans = 0;
    for(var i=0;i<31;i++) {
        ans += bits&1;
        bits = bits >>> 1;
    }
    return ans;
};