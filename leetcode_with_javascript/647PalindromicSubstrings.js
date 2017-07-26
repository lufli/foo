/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var ans = 0;
    // modifiy the string by inserting "#" between two chars
    s = s.split("").join("#");
    //pick one position in the string 
    for(var i=0;i<s.length;i++) {
        // check if a palindromic
        ans += checkPali(s, i);
    }
    return ans;
};

var checkPali = function(s, index) {
    var count = 0;
    if(s.charAt(index)!=="#") count++;
    var left = index-1;
    var right = index+1;
    while(left>=0 && right<=s.length-1) {
        if(s.charAt(left)===s.charAt(right)) {
            if(s.charAt(left)!=="#") {
                count++;
            }
            left--;
            right++;
        }
        else {
            break;
        }
    }
    return count;
};
