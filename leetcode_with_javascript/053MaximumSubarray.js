/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length===0) return 0;
    var arr = Array.apply(null, Array(nums.length)).map(Number.prototype.valueOf, 0);
    arr[0] = nums[0];
    for(var i=1;i<nums.length;i++) {
        arr[i] = Math.max(nums[i], nums[i]+arr[i-1]);
    }
    return Math.max.apply(null, arr);
};