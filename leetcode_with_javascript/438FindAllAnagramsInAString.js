/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var ans = [];
    var str_p = helper(p);
    for(var i=0;i<=s.length-p.length;i++) {
        if(helper(s.substring(i,i+p.length))===str_p) ans.push(i);
    }
    return ans;
};

var helper = function(str) {
    var record = Array.apply(null, Array(26)).map(Number.prototype.valueOf, 0);
    for(var i=0;i<str.length;i++) {
        record[str.charCodeAt(i)-97]++;
    }
    return record.join("");
};
