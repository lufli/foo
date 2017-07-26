/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    // sort by the pairs[i][1];
    pairs.sort(function(a, b) {
        return a[1] - b[1];
    });
    if(pairs.length===0) return 0;
    var count = 1;
    var pre = pairs[0][1];
    for(var i=1;i<pairs.length;i++) {
        if(pairs[i][0]>pre) {
            count++;
            pre = pairs[i][1];
        }
    }
    return count;
};