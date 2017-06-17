/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var record = [];
    record.push(0);
    for(var i=1;i<height.length;i++) {
        record.push( Math.max(record[i-1], height[i-1]) );
    }
    record[record.length-1] = 0;
    for(var i=record.length-2;i>=0;i--) {
        record[i] = Math.min(record[i], Math.max(record[i+1], height[i+1]));
    }
    
    record = record.map(function(v, k){
        return height[k]<v? v-height[k] : 0;
    });

    return record.reduce(function(a,b){
        return a+b;
    }, 0);
};