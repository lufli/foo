/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    dict.sort(function(a, b) {
              return a.length-b.length;
              });
    sentence = sentence.split(" ");
    for(var i=0;i<sentence.length;i++) {
        for(var j=0;j<dict.length;j++) {
            if(sentence[i].length<dict[j].length) { break; }
            if(sentence[i].startsWith(dict[j])) { sentence[i] = dict[j]; break; }
        }
    }
    sentence = sentence.join(" ");
    return sentence;
};