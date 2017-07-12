/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var record = [];
    while(n!==1) {
        var sum = 0;
        while(n!==0){
            var digit = n%10;
            sum += digit*digit;
            n = Math.floor(n/10);
        }
        if(sum===1) return true;
        if(record.includes(sum)) return false;
        record.push(sum);
        n = sum;
    }
    return true;
};
