/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    var record = Array.apply(null, Array(target+1)).map(Number.prototype.valueOf, 0);
    nums.sort(function(a,b) {
        return a - b;
    })
    for(var i=0;i<record.length;i++) {
        var sum = 0;
        for(var j=0;j<nums.length;j++) {
            if(nums[j]>i) break;
            if(nums[j]===i) sum+=1;
            else sum += record[i-nums[j]];
        }
        record[i] = sum;
    }
    return record[target];
};