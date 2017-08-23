/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length===0) return 0;
    var record = new Array(nums.length);
    record[0] = 1;
    for(var i=1;i<nums.length;i++) {
        record[i] = 1;
        for(var j=0;j<i;j++) {
            if(nums[i]>nums[j]) record[i] = Math.max(record[i], record[j]+1);
        }
    }
    return Math.max.apply(null, record);
}; 
