/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
    str.reverse();
    var start = 0;
    var end = 1;
    while(end<str.length) {
        while(str[end]!==" " && end<str.length) end++;
        swap(str, start, end-1);
        start = end+1;
        while(str[start]===" ") start++;
        end = start+1;
    }
    if(start<str.length) swap(str, start, end);
};

function swap(str, start, end) {
    while(start<end) {
        var buff = str[start];
        str[start] = str[end];
        str[end] = buff;
        start++;
        end--;
    }
}
