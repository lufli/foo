/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
    this.words = words;
    this.record = {};
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    var index1 = this.getRecord(word1);
    var index2 = this.getRecord(word2);
    var min = Number.MAX_VALUE;
    for(var i=0;i<index1.length;i++) {
        for( var j=0;j<index2.length;j++) {
            if(Math.abs(index1[i]-index2[j])<min) min = Math.abs(index1[i]-index2[j]);
        }
    }
    return min;
};

WordDistance.prototype.getRecord = function(word) {
    if(word in this.record) return this.record[word];
    else {
        var index = [];
        for(var i=0;i<this.words.length;i++) {
            if(this.words[i]===word) index.push(i);
        }
        this.record[word] = index;
        return this.record[word];
    }
}

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = Object.create(WordDistance).createNew(words)
 * var param_1 = obj.shortest(word1,word2)
 */