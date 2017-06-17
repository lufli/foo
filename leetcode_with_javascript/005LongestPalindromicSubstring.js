/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var ans = 0;
    var buff = "";
    var str = s.split("").join("#");
    for(var i=0;i<str.length;i++) {
        var count = 0;
        var left = i-1;
        var right = i+1;
        if(str.charAt(i)!=="#") {
            count++;
        }

        while(left>=0 && right<str.length) {
            //console.log(i, left, right);
            if(str.charAt(left)!==str.charAt(right)) {break;}
            else if(str.charAt(left)!=="#") {
                count+=2;
            }
            left--;
            right++;
        }
        if(count>ans) {
            ans = count;
            buff = str.substring(left+1,right).split("#").join("");
        }
        
    }
    return buff;
};