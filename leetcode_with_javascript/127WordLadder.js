/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var visited = new Set();
    if(!wordList.includes(endWord)) return 0;
    var checkList = new Array();
    checkList.push(beginWord);
    visited.add(beginWord);
    var count = 1;
    while(!visited.has(endWord) && checkList.length>0) {
        var waitList = new Set()
        while(checkList.length>0) {
            var current = checkList.shift();
            var buff = new Set();
            for(var i=0;i<wordList.length;i++) {
                if(helper(current, wordList[i])) buff.add(wordList[i]);
            }
            for(var item of buff) {
                waitList.add(item);
                var index = wordList.indexOf(item);
                wordList.splice(index, 1);
            }
        }
        for(var item of waitList) {
            checkList.push(item);
            visited.add(item);
        }
        count++;
    }
    return visited.has(endWord) ? count : 0;
};

var helper = function(str1, str2) {
    var l = str1.length;
    var count = 0;
    for(var i=0;i<l;i++) {
        if(str1.charAt(i)!==str2.charAt(i)) count++;
        if(count>1) return false;
    }
    return count===1;
}
