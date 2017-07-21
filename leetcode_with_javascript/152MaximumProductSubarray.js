/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var max = Array.apply(null, Array(nums.length)).map(Number.prototype.valueOf, 0);
    var min = Array.apply(null, Array(nums.length)).map(Number.prototype.valueOf, 0);
    max[0] = nums[0];
    min[0] = nums[0];
    for(var i=1;i<nums.length;i++) {
        max[i] = Math.max(nums[i], max[i-1]*nums[i], min[i-1]*nums[i]);
        min[i] = Math.min(nums[i], max[i-1]*nums[i], min[i-1]*nums[i]);
    }
    return Math.max.apply( Math, max );
};