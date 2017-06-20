/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    var record = Array.apply(null, Array(s.length+1)).map(Boolean.prototype.valueOf, false);
    record[0] = true;

    for(var i=1;i<=s.length;i++) {
        for(var j=0;j<i;j++) {
            if(wordDict.includes(s.substring(j, i)) && record[j]===true) {
                record[i] = true;
                break;
            }
        }
    }
    return record[s.length];
};
