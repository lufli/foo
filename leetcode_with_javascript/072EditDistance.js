/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var l1 = word1.length;
    var l2 = word2.length;
    var record = new Array(l1+1);
    for(var i=0;i<record.length;i++) {
        record[i] = new Array(l2+1);
    }
    for(var i=0;i<record.length;i++) {
        record[i][0] = i;
    }
    for(var i=0;i<record[0].length;i++) {
        record[0][i] = i;
    }
    
    for(var i=1;i<=l1;i++) {
        for(var j=1;j<=l2;j++) {
            if(word1.charAt(i-1) === word2.charAt(j-1)) {
                record[i][j] = record[i-1][j-1];
            }
            else {
                var cost_insert = record[i][j-1]+1;
                var cost_delete = record[i-1][j]+1;
                var cost_replace = record[i-1][j-1]+1;
                record[i][j] = Math.min(cost_insert, cost_delete, cost_replace);
            }
        }
    }
    return record[l1][l2];
};