/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount<=0) return 0;
    var record = Array.apply(null, Array(amount+1)).map(Number.prototype.valueOf, amount+1);
    record[0] = 0;
    for(var i=1;i<amount+1;i++) {
        for(var j=0;j<coins.length;j++) {
            if(i>=coins[j]) {
                record[i] = Math.min(record[i], record[i-coins[j]]+1);
            }
        }
    }
    return record[amount]<amount+1? record[amount]: -1;
};
