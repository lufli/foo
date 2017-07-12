/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var record = new Set();
    var size = 0;
    var l = Math.min(nums.length, k+1);
    for(var i=0;i<l;i++) {
        record.add(nums[i]);
        if(record.size===size) return true;
        else size = record.size;
    }
    if(nums.length<=k+1) return false;
    for(var i=l, j=0;i<nums.length;i++,j++) {
        record.delete(nums[j]);
        record.add(nums[i]);
        if(record.size!==k+1) return true;
    }
    return false;
};
