/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length-1;
    var mid = left + Math.floor((right-left)/2);
    while(left<=right) {
        if(nums[mid]===target) return mid;
        if(nums[mid]>target) right = mid - 1;
        else left = mid + 1;
        mid = left + Math.floor((right-left)/2);
    }
    return mid+1;
};