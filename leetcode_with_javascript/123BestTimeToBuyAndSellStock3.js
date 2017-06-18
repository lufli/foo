/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<2) return 0;
    var bestPrice = [prices[0]];
    // best price to buy (first trade)
    for(var i=1;i<prices.length;i++) {
        bestPrice.push(Math.min(bestPrice[i-1], prices[i]));
    }
    // first trade profit if sell on ith day
    var firstProfit = [0];
    for(var i=1;i<prices.length;i++) {
        firstProfit.push(Math.max(firstProfit[i-1],prices[i]-bestPrice[i-1]));
    }
    if(prices.length<4) return firstProfit[prices.length-1];
    var secondBuy = [0,0,firstProfit[1]-prices[2]];
    var secondSell = [0,0,0]
    
    for(var i=3;i<prices.length;i++) {
        secondBuy.push(Math.max(firstProfit[i-1]-prices[i], secondBuy[i-1]));
        secondSell.push(Math.max(secondSell[i-1], secondBuy[i-1]+prices[i]));
    }
    return Math.max(secondSell[prices.length-1], firstProfit[prices.length-1]);
    
    
    
};