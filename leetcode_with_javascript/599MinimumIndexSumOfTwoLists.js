/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var record = {};
    for(var i=0;i<list1.length;i++) {
        record[list1[i]] = i;
    }
    var common = [];
    var least = Number.MAX_VALUE;
    for(var i=0;i<list2.length;i++) {
        if(list2[i] in record) {
            var sum = record[list2[i]]+i;
            if(sum===least) {
                common.push(list2[i]);
            }
            else if(sum<least) {
                least = sum;
                common = [list2[i]];
            }
        }
    }
    return common;

};
