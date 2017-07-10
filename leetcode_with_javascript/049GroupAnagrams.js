/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var ans = new Array();
    var record = {};
    for(var item of strs) {
        var key = helper(item);
        //console.log(record);
        if(key in record) {
            //console.log(key);
            record[key].push(item);
        }
        else {
            record[key] = [item];
        }
    }
    for(var key in record) {
        ans.push(record[key]);
    }
    return ans;
};

var helper = function(str) {
    var info = Array.apply(null, Array(26)).map(Array.prototype.valueOf, 0);
    for(var i=0;i<str.length;i++) {
        info[str.charCodeAt(i)-97] += 1;
    }
    return info.join('');
};
