/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var str = (n>>>0).toString(2).split("");
    while(str.length<32) {str.unshift("0")};
    return parseInt(str.reverse().join(""), 2);
};
