/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle==='') return 0;
    for(var i=0;i<haystack.length-needle.length+1;i++) {
        for(var j=i;j<i+needle.length;j++) {
            if(haystack.charAt(j)!==needle.charAt(j-i)) break;
            if(j-i+1===needle.length) return i;
        }
    }
    return -1;
};
