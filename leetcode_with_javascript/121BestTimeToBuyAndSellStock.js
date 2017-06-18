/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var pre = prices[0];
    var ans = 0;
    for(var i=1;i<prices.length;i++) {
        ans = Math.max(ans, prices[i]-pre);
        pre = Math.min(pre, prices[i]);
    }
    return ans;
};