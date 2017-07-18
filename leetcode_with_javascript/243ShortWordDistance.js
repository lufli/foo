/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var index1 = [];
    var index2 = [];
    var min = Number.MAX_VALUE;
    for(var i=0;i<words.length;i++) {
        if(words[i]===word1) index1.push(i);
        else if(words[i]===word2) index2.push(i);
    }
    for(var i=0;i<index1.length;i++) {
        for( var j=0;j<index2.length;j++) {
            if(Math.abs(index1[i]-index2[j])<min) min = Math.abs(index1[i]-index2[j]);
        }
    }
    return min;
};