/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs[0]) return '';
    var common = strs[0];
    for(var i=1;i<strs.length;i++) {
        var l = Math.min(common.length, strs[i].length);
        var index = 0;
        while(index<l) {
            if(common.charAt(index)!==strs[i].charAt(index)) {
                console.log(index);
                if(index===0) return "";
                break;
            }
            index++;
        }
        common = common.substring(0, index);
    }
    return common;
};
