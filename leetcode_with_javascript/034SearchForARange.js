/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var left = 0;
    var right = nums.length-1;
    while(left<right) {
        var mid = left+(~~((right-left)/2));
        if(nums[mid]===target) {
            left = mid;
            right = mid;
            while(left-1>=0 && nums[left-1]===target) {left--;}
            while(right+1<nums.length && nums[right+1]===target) {right++;}
            break;
        }
        else if(nums[mid]<target) {
            left = mid+1;
        }
        else {
            right = mid-1;
        }
    }
    if(left>=right && nums[left]!==target) return [-1,-1];
    return [left, right];
};
