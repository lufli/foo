/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
    if(word1===word2) {
        var index = [];
        var min = Number.MAX_VALUE;
        for(var i=0;i<words.length;i++) {
            if(words[i]===word1) index.push(i);
        }
        for(var i=0;i<index.length-1;i++) {
            min = Math.min(min, Math.abs(index[i]-index[i+1]));
        }
        return min;
    }
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