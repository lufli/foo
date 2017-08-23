/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var a = dividend<0? -dividend : dividend;
    var b = divisor<0? -divisor : divisor;
    var record = [];
    var current = b;
    var count = 1;
    while(a>=current) {
        record.push([current, count]);
        current += current;
        count += count;
    }
    var ans = 0;
    for(var i=record.length-1;i>=0;i--) {
        if(a>=record[i][0]) {
            ans += record[i][1];
            a -= record[i][0];
        }
    }
    ans = ((dividend<0 && divisor>0) || (dividend>0 && divisor<0)) ? -ans: ans;
    if(ans>2147483647) return 2147483647;
    return ans;
};
