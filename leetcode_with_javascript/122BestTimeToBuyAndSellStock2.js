/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var buy = -prices[0];
    var sell = 0;
    for(var i=1;i<prices.length;i++) {
        buy = Math.max(buy, sell-prices[i]);
        sell = Math.max(sell, buy+prices[i]);
    }
    return sell;
    
};