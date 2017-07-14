/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var left = 1;
    while(nums[left]!==nums[left-1] && left<nums.length) left++;
    var right = left+1;
    while(right<nums.length) {
        if(nums[right]!==nums[left-1]) {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    return left;
};
