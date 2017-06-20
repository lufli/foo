/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    var record = Array.apply(null, Array(128)).map(Boolean.prototype.valueOf, false);
    for(var i=0;i<s.length;i++) {
        var index = s.charCodeAt(i);
        record[index] = record[index]? false: true;
    }
    return record.reduce((a, b)=>{
        return Number(a)+Number(b);
    })<2;
};
