/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str = s.replace(/\W/g, '').toLowerCase();
    var left = 0;
    var right = str.length-1;
    while(left<right) {
        if(str.charAt(left)!==str.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
};
