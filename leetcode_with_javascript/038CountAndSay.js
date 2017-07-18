/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var str = '1';
    for(var i=2;i<=n;i++) {
        var buff = str[0];
        var count = 1;
        var new_str = "";
        for(var j=1;j<str.length;j++) {
            if(str.charAt(j)!==buff) {
                new_str = new_str + count + buff;
                buff = str.charAt(j);
                count = 1;
            }
            else {
                count++;
            }
        }
        str = new_str + count + buff;
    }
    return str;
};
