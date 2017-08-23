/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    var record = new Array();
    while(record.push(new Array(s.length))<s.length) {};
    return helper(s, 0, s.length-1, record);
};

var helper = function(str, start, end, record) {
    if(start<0 || end>=str.length) return 0;
    if(record[start][end]) return record[start][end];
    if(start>end) record[start][end] = 0;
    else if(start===end) record[start][end] = 1;
    else if(str.charAt(start)===str.charAt(end)) {
        record[start][end] = helper(str, start+1, end-1, record)+2;
    }
    else {
        record[start][end] = Math.max(helper(str, start+1, end, record), helper(str, start, end-1, record));
    }
    return record[start][end];
}
