/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(var i=digits.length-1;i>=0;i--) {
        digits[i] += 1;
        if(digits[i]===10) {digits[i]=0;}
        else break;
    }
    if(digits[0]===0) digits.unshift(1);
    return digits;
    
    // return Number.prototype.toString.apply(Number(digits.join(""))+1).split("").map(function(x){
    //     return Number(x);
    // });
    // cant handle long
};