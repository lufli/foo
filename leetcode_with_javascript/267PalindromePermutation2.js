/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
    var record = Array.apply(null, Array(128)).map(Number.prototype.valueOf, 0);
    for(var i=0;i<s.length;i++) {
        record[s.charCodeAt(i)]++;
    }
    var odd = countOdd(record);
    if(odd>1) return [];
    var ans = [];
    var len = Math.floor(s.length/2);
    getPermute(record, [], len, ans);
    var oddChar = getOdd(record);
    // console.log(oddChar);
    ans = ans.map(function(str) {
        // console.log(str.join("") + oddChar + str.reverse().join(""));
        return str.join("") + oddChar + str.reverse().join("");
    })
    return ans;
};

var getPermute = function(record, temp, len, ans) {

    if(temp.length===len) {
        var res = temp.slice();
        ans.push(res);
        return;
    }
    for(var i=0;i<record.length;i++) {
        if(record[i]>=2) {
            temp.push(String.fromCharCode(i));
            record[i] -= 2;
            getPermute(record, temp, len, ans);
            temp.splice(temp.length-1, 1);
            record[i] += 2;
        }
    }
    return;
};

var getOdd = function(record) {
    for(var i=0;i<record.length;i++) {
        if(record[i]%2===1) { return String.fromCharCode(i);}
    }
    return "";
};

var countOdd = function(record) {
    var count = 0;
    for(var i=0;i<record.length;i++) {
        if(record[i]%2===1) count++;
    }
    return count;
};