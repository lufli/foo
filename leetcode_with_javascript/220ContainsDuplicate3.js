/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(nums.length<2) return false;
    if(t<0 || k<=0) return false;
    var record = {};
    for(var i=0;i<nums.length;i++) {
        var bucket = Math.floor(nums[i]/(t+1));
        if(record.hasOwnProperty(bucket)) return true;
        if(record.hasOwnProperty(bucket-1) && Math.abs(nums[i]-record[bucket-1])<=t) return true;
        if(record.hasOwnProperty(bucket+1) && Math.abs(nums[i]-record[bucket+1])<=t) return true;
        record[bucket] = nums[i];
        delete record[Math.floor(nums[i-k]/(t+1))];
    }
    return false;
};
