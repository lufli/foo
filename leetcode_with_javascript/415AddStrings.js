/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var l = Math.min(num1.length, num2.length);
    var arr1 = num1.split("").reverse();
    var arr2 = num2.split("").reverse();
    var ans = [];
    var carry = 0;
    var index = 0;
    while(index<l) {
        var sum = Number(arr1[index])+Number(arr2[index])+carry;
        if(sum>=10) carry = 1;
        else carry = 0;
        ans.push(sum%10);
        index++;
    }
    var long_arr = arr1.length-arr2.length>0? arr1 : arr2;
    while(carry===1) {
        long_arr[index] = long_arr[index] || 0;
        var sum = Number(long_arr[index])+carry;
        if(sum>=10) carry = 1;
        else carry = 0;
        ans.push(sum%10);
        index++;
    }
    if(index<long_arr.length) ans = ans.concat(long_arr.slice(index, long_arr.length));
    return ans.reverse().join("");
};
