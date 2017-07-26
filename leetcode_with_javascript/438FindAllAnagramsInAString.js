/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var ans = [];
    var str_p = helper(p);
    var record = Array.apply(null, Array(26)).map(Number.prototype.valueOf, 0);
    var left = 0;
    var right = 0;
    while(right<p.length) {record[s.charCodeAt(right)-97]++; right++;}
    while(right<=s.length) {
        if(record.join("")===str_p) ans.push(left);
        record[s.charCodeAt(left)-97]--;
        left++;
        record[s.charCodeAt(right)-97]++;
        right++;
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