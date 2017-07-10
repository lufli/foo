/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    var arr_s = Array.apply(null, Array(26)).map(Array.prototype.valueOf, 0);
    var arr_t = Array.apply(null, Array(26)).map(Array.prototype.valueOf, 0);
    for(var i=0;i<s.length;i++) {
        arr_s[s.charCodeAt(i)-97]++;
        arr_t[t.charCodeAt(i)-97]++;
    }
    for(var i=0;i<26;i++) {
        // console.log(arr_s[i], arr_t[i]);
        if(Number(arr_s[i])!==Number(arr_t[i])) return false;
    }
    return true;
};
