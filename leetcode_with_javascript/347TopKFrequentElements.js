/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var count_record = {};
    for(var i=0;i<nums.length;i++) {
        count_record[nums[i]] = count_record[nums[i]]+1 || 1;
    }
    var frequent_record = Array.apply(null, Array(nums.length+1)).map(function() { return Array.apply(null, Array()); });
    for(var item in count_record) {
        var frequent = count_record[item];
        frequent_record[frequent].push(Number(item));
    }
    var ans = [];
    var index = frequent_record.length-1;
    while(ans.length<k) {
        ans = ans.concat(frequent_record[index]);
        index--;
    }
    return ans
};
