/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var str = "";
    for(var i=s.length-1;i>=0;i--) {
        str += s.charAt(i);
    }
    return str;
}