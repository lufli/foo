/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(Math.floor(num/10)===0) return num;
    var sum = 0;
    while(Math.floor(num/10)!==0) {
        sum += num%10;
        num = Math.floor(num/10);
    }
    return addDigits(sum+num);
    
};