/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = Number.prototype.toString.apply(x);
    if(str[0]!=='-') {
        var ans = Number(str.split("").reverse().join(""));
        return ans>2147483647 ? 0:ans;
    }
    else {
        var ans = Number('-'+str.split("").slice(1).reverse().join(""));
        return ans<-2147483648 ? 0:ans;
    }
};